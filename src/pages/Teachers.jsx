import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase/firebase";
import Header from "../components/Header";
import Filter from "../components/Filter";
import TeacherCard from "../components/TeacherCard";
import "../styles/Teachers.css";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTeachers = async () => {
    try {
      console.log("🔍 Fetching teachers from Firebase...");
      console.log("📍 Database URL:", db.app.options.databaseURL);
      
      // Önce 'teachers' key'i altından dene
      let teachersRef = ref(db, "teachers");
      let snapshot = await get(teachersRef);

      if (snapshot.exists()) {
        console.log("✅ Data found at /teachers");
        const data = snapshot.val();
        console.log("📦 Firebase data received:", data);
        console.log("🔢 Data type:", Array.isArray(data) ? "Array" : typeof data);
        
        let teachersArray = processTeachersData(data);
        console.log("👥 Teachers array:", teachersArray);
        setTeachers(teachersArray);
        setFilteredTeachers(teachersArray);
      } else {
        // Eğer /teachers'da veri yoksa, root'u dene
        console.log("⚠️ No data at /teachers, checking root...");
        const rootRef = ref(db, "/");
        const rootSnapshot = await get(rootRef);
        
        if (rootSnapshot.exists()) {
          const rootData = rootSnapshot.val();
          console.log("📦 Root data:", rootData);
          
          // Root'ta teachers key'i var mı kontrol et
          if (rootData.teachers) {
            console.log("✅ Found teachers in root data");
            let teachersArray = processTeachersData(rootData.teachers);
            setTeachers(teachersArray);
            setFilteredTeachers(teachersArray);
          } else {
            // Root'ta direkt array/object olarak veri var mı
            console.log("📋 Processing root data directly");
            let teachersArray = processTeachersData(rootData);
            
            // Sadece öğretmen objelerini filtrele
            teachersArray = teachersArray.filter(item => 
              item.name && item.surname && item.languages
            );
            
            console.log("👥 Filtered teachers:", teachersArray);
            setTeachers(teachersArray);
            setFilteredTeachers(teachersArray);
          }
        } else {
          console.log("❌ No data found in Firebase at all!");
        }
      }
    } catch (error) {
      console.error("❌ Error fetching teachers:", error);
      console.error("Error details:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const processTeachersData = (data) => {
    let teachersArray;
    
    // Eğer data zaten array ise
    if (Array.isArray(data)) {
      console.log("📋 Processing as Array");
      teachersArray = data
        .filter(teacher => teacher !== null && teacher !== undefined)
        .map((teacher, index) => ({
          id: teacher.id || `teacher-${index}`,
          ...teacher,
        }));
    } 
    // Eğer data object ise
    else if (typeof data === "object" && data !== null) {
      console.log("📋 Processing as Object");
      teachersArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
    } else {
      teachersArray = [];
    }
    
    return teachersArray;
  };

  const handleFilterChange = (newFilters) => {
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let filtered = [...teachers];

    if (currentFilters.language) {
      filtered = filtered.filter((teacher) =>
        teacher.languages.includes(currentFilters.language)
      );
    }

    if (currentFilters.level) {
      filtered = filtered.filter((teacher) =>
        teacher.levels.includes(currentFilters.level)
      );
    }

    if (currentFilters.price) {
      const [min, max] = currentFilters.price.split("-");
      filtered = filtered.filter((teacher) => {
        const price = teacher.price_per_hour;
        if (max) {
          return price >= parseInt(min) && price <= parseInt(max);
        } else {
          return price >= parseInt(min);
        }
      });
    }

    setFilteredTeachers(filtered);
    setDisplayCount(4);
  };

  const loadMore = () => {
    setDisplayCount((prev) => prev + 4);
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="teachers-page">
          <div className="container">
            <div className="loading">Yükleniyor...</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="teachers-page">
        <div className="container">
          <Filter onFilterChange={handleFilterChange} />

          {teachers.length === 0 && (
            <div className="no-results">
              <p>Firebase'de öğretmen verisi bulunamadı!</p>
              <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
                Lütfen Firebase Console'da "teachers" yolunda veri olduğundan emin olun.
              </p>
            </div>
          )}

          {filteredTeachers.length === 0 && teachers.length > 0 ? (
            <div className="no-results">
              <p>Filtrelere uygun öğretmen bulunamadı.</p>
            </div>
          ) : (
            <>
              <div className="teachers-list">
                {filteredTeachers.slice(0, displayCount).map((teacher) => (
                  <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
              </div>

              {displayCount < filteredTeachers.length && (
                <div className="load-more-container">
                  <button className="btn-load-more" onClick={loadMore}>
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

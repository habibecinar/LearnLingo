import Header from "../components/Header";
import TeacherCard from "../components/TeacherCard";
import { useFavorites } from "../context/FavoritesContext";
import "../styles/Favorites.css";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <>
      <Header />
      <div className="favorites-page">
        <div className="container">
          <h1>My Favorite Teachers</h1>

          {favorites.length === 0 ? (
            <div className="no-favorites">
              <p>Henüz favori öğretmen eklemediniz.</p>
              <p>Teachers sayfasından favorilerinize öğretmen ekleyebilirsiniz.</p>
            </div>
          ) : (
            <div className="teachers-list">
              {favorites.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

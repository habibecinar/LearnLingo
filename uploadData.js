import { ref, set } from "firebase/database";
import { db } from "./src/firebase/firebase.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const teachersData = JSON.parse(
  readFileSync(join(__dirname, "teachers.json"), "utf-8")
);

async function uploadTeachers() {
  try {
    console.log("📤 Uploading teachers data to Firebase...");
    console.log("📊 Total teachers:", Array.isArray(teachersData) ? teachersData.length : Object.keys(teachersData).length);
    
    const teachersRef = ref(db, "teachers");
    await set(teachersRef, teachersData);
    
    console.log("✅ Öğretmen verileri başarıyla Firebase'e yüklendi!");
    console.log("🔗 Database URL:", db.app.options.databaseURL);
    console.log("📍 Data location: /teachers");
  } catch (error) {
    console.error("❌ Hata oluştu:", error);
    console.error("Error message:", error.message);
  }
}

uploadTeachers();

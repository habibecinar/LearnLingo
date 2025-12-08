# 🔍 Firebase Öğretmen Verisi Kontrol Rehberi

## Sorun: Öğretmenler Gelmiyor

### ✅ Kontrol Adımları:

#### 1. Firebase Console'u Kontrol Edin
1. [Firebase Console](https://console.firebase.google.com/) açın
2. `learnlingo-47403` projenizi seçin
3. Sol menüden **Realtime Database** tıklayın
4. Veri yapısını kontrol edin:

```
learnlingo-47403-default-rtdb
  └── teachers
       ├── teacher1
       │    ├── name: "John"
       │    ├── surname: "Doe"
       │    ├── languages: ["English", "Spanish"]
       │    ├── levels: ["A1 Beginner", "B2 Upper-Intermediate"]
       │    ├── rating: 4.8
       │    ├── price_per_hour: 25
       │    ├── lessons_done: 150
       │    ├── avatar_url: "https://..."
       │    ├── lesson_info: "..."
       │    ├── conditions: ["...", "..."]
       │    ├── experience: "..."
       │    └── reviews: [...]
       └── teacher2
            └── ...
```

#### 2. Database Rules Kontrol
Realtime Database → **Rules** sekmesine gidin:

```json
{
  "rules": {
    "teachers": {
      ".read": true,
      ".write": false
    }
  }
}
```

**Önemli:** `.read: true` olmalı!

#### 3. Tarayıcı Konsolunu Kontrol
1. Chrome DevTools açın (F12)
2. **Console** sekmesine gidin
3. Şu mesajları arayın:
   - "Fetching teachers from Firebase..."
   - "Firebase data received:"
   - "Teachers array:"
   - Veya hata mesajları

#### 4. Network Sekmesini Kontrol
1. DevTools → **Network** sekmesi
2. Sayfayı yenileyin (F5)
3. Firebase isteklerini kontrol edin:
   - `learnlingo-47403-default-rtdb` URL'leri
   - Status: 200 OK olmalı
   - Response'da data olmalı

### 🔧 Olası Çözümler:

#### A) Veri Yoksa:
Firebase Console'da manuel veri ekleyin:

1. Realtime Database → **Data** sekmesi
2. "+" butonuna tıklayın
3. Name: `teachers`
4. Aşağıdaki JSON'u ekleyin:

```json
{
  "teacher1": {
    "name": "Emma",
    "surname": "Johnson",
    "languages": ["English"],
    "levels": ["A1 Beginner", "A2 Elementary", "B1 Intermediate"],
    "rating": 4.9,
    "reviews": [
      {
        "reviewer_name": "John Smith",
        "reviewer_rating": 5,
        "comment": "Great teacher!"
      }
    ],
    "price_per_hour": 30,
    "lessons_done": 245,
    "avatar_url": "https://i.pravatar.cc/150?img=1",
    "lesson_info": "Speaks English. Lesson Info: Certified English teacher with 5 years of experience.",
    "conditions": ["#1 lesson free", "Teaches students of all ages"],
    "experience": "I have been teaching English for 5 years and love helping students achieve their language goals."
  }
}
```

#### B) Rules Hatası:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Yayınla** butonuna tıklayın!

#### C) Network Hatası:
Firebase URL'ini kontrol edin:
```
https://learnlingo-47403-default-rtdb.europe-west1.firebasedatabase.app
```

### 🐛 Debug Komutları

Tarayıcı konsolunda şunu çalıştırın:

```javascript
// Firebase bağlantısını test et
import { ref, get } from 'firebase/database';
import { db } from './src/firebase/firebase';

const teachersRef = ref(db, 'teachers');
get(teachersRef).then(snapshot => {
  console.log('Snapshot exists:', snapshot.exists());
  console.log('Data:', snapshot.val());
});
```

### 📝 Şu Anda Yapılması Gerekenler:

1. ✅ Tarayıcı konsolunu açın (F12)
2. ✅ Teachers sayfasına gidin
3. ✅ Konsol mesajlarını kontrol edin
4. ✅ Firebase Console'da data olup olmadığını kontrol edin
5. ✅ Database rules'u kontrol edin

### 🆘 Hala Çalışmıyorsa:

1. Konsol çıktısını kontrol edin
2. Network sekmesindeki Firebase isteklerini kontrol edin
3. Firebase Console'da manuel veri ekleyin
4. Rules'u güncelleyin ve yayınlayın
5. Sayfayı yenileyin (Ctrl+Shift+R / Cmd+Shift+R)

---

**Not:** Kod güncellemesi yapıldı ve artık detaylı log'lar görünecek!

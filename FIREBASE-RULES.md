# 🔥 Firebase Database Rules Güncelleme

## ⚠️ ÖNEMLİ: Write Permission Eklenmeli

Verileri yükleyebilmek için Firebase Database Rules'u güncellemelisiniz:

### Adım 1: Firebase Console
1. [Firebase Console](https://console.firebase.google.com/) → `learnlingo-47403`
2. Sol menü → **Realtime Database**
3. **Rules** sekmesi

### Adım 2: Rules'u Güncelle

Mevcut:
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

Yeni (GEÇİCİ - sadece veri yüklemek için):
```json
{
  "rules": {
    "teachers": {
      ".read": true,
      ".write": true
    }
  }
}
```

### Adım 3: Publish
- **Publish** butonuna tıklayın
- Uyarıyı kabul edin

### Adım 4: Veri Yükleme
1. Uygulamaya gidin: http://localhost:5174/teachers
2. "📤 Örnek Verileri Yükle" butonuna tıklayın
3. Onaylayın
4. Sayfayı yenileyin

### Adım 5: Rules'u Geri Alın (GÜVENLİK İÇİN)

Veriler yüklendikten sonra:
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

**Publish** yapın!

---

## 🎯 HIZLI YÖNTEM

Şu anda yapmanız gerekenler:

1. ✅ Firebase Console → Realtime Database → Rules
2. ✅ `.write: true` yapın
3. ✅ Publish
4. ✅ Uygulamada "Örnek Verileri Yükle" butonuna tıklayın
5. ✅ Veriler yüklendikten sonra `.write: false` yapın

VEYA

Firebase Console'dan manuel olarak `teachers-sample-data.json` dosyasını import edin!

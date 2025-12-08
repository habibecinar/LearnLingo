# 🖼️ LearnLingo Resim Dosyaları Rehberi

## 📁 Resim Klasör Yapısı

Tüm resimleri `public/images/` klasörüne koyun:

```
public/
  images/
    hero-img.png          # Ana sayfa hero görseli (sarı arka planlı kadın)
    logo.svg              # LearnLingo logosu
    ukraine-flag.svg      # Ukrayna bayrağı ikonu (isteğe bağlı)
```

## 🎨 Figma'dan Resim İndirme

1. **Figma'da:**
   - Görseli seçin
   - Sağ tıklayın
   - "Export" seçin
   - Format: PNG veya SVG
   - Boyut: 2x (retina için)
   - Download

2. **Resimleri public/images/ klasörüne kopyalayın**

## 📝 Gerekli Görseller

### 1. Hero Image (Ana Sayfa)
- **Dosya adı:** `hero-img.png`
- **Boyut:** 568x530px (yaklaşık)
- **Açıklama:** Sarı/turuncu arka planlı, kulaklıklı kadın görseli
- **Alternatif:** Placeholder olarak Unsplash kullanılıyor

### 2. Logo (İsteğe bağlı)
- **Dosya adı:** `logo.svg` veya `logo.png`
- **Boyut:** 48x48px
- **Açıklama:** LearnLingo logosu
- **Alternatif:** Emoji kullanılıyor: 🎓

### 3. Öğretmen Avatar'ları
- **Konum:** Firebase Database'de URL olarak
- **Format:** avatar_url field'ı
- **Örnek:** "https://example.com/avatar.jpg"

## 💡 Resim Kullanımı

### React'te resim kullanımı:

```javascript
// Public klasöründen:
<img src="/images/hero-img.png" alt="Hero" />

// Veya import ile:
import heroImg from '/images/hero-img.png'
<img src={heroImg} alt="Hero" />
```

## 🎨 Placeholder Çözümler

Eğer henüz resimleriniz yoksa:

1. **Unsplash** (ücretsiz, kullanılabilir):
   ```
   https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600
   ```

2. **UI Avatars** (avatar için):
   ```
   https://ui-avatars.com/api/?name=John+Doe&size=120
   ```

3. **Placeholder.com**:
   ```
   https://via.placeholder.com/568x530/FFD166/000000?text=Hero+Image
   ```

## ✅ Yapılacaklar

- [ ] Figma'dan hero image'i indir
- [ ] `public/images/hero-img.png` olarak kaydet
- [ ] Logo'yu indir (opsiyonel)
- [ ] Öğretmen avatar URL'lerini Firebase'e ekle
- [ ] Home.jsx'de resim yolunu güncelle

## 📌 Not

Şu anda kod placeholder Unsplash URL'leri kullanıyor. Figma'dan indirdiğiniz resimleri ekledikten sonra kod otomatik olarak güncellenecek.

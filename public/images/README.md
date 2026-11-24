# Panduan Manajemen Gambar Portofolio THROUGH.ADYS

Struktur folder ini dirancang agar Anda dapat mengelola gambar portofolio secara lokal dengan rapi dan mudah.

---

## 1. Struktur Folder

```text
public/
  images/
    categories/       <-- Simpan gambar cover untuk kartu kategori di sini
      brand-strategy.jpg
      photography.jpg
      filmmaking.jpg
      digital-projects.jpg
      ...
    projects/         <-- Simpan gambar proyek dan hasil karya di sini
      project-01/
        cover.jpg
        detail-01.jpg
        detail-02.jpg
      batibri-ya/
        cover.jpg
        bottles.jpg
        unboxing.jpg
      ...
```

---

## 2. Cara Menggunakan Gambar di `src/data/portfolioData.ts`

Setiap file di dalam folder `public/` dapat langsung dipanggil dengan path diawali garis miring `/`:

### A. Untuk Kategori:
```typescript
{
  id: 'filmmaking',
  title: 'FILMMAKING',
  tagline: 'Cinematography, commercial direction, and visual motion.',
  description: 'Directing cinematic short-films and commercial advertisements...',
  coverImage: '/images/categories/filmmaking.jpg', // <-- Cukup tulis path lokal ini
  accentColor: '#F59E0B',
}
```

### B. Untuk Proyek:
```typescript
{
  id: 'batibri-ya-campaign',
  title: 'Batibri-ya Campaign',
  category: 'brand-strategy', // <-- ID kategori induk
  coverImage: '/images/projects/batibri-ya/cover.jpg', // <-- Cover utama
  galleryImages: [
    {
      url: '/images/projects/batibri-ya/bottles.jpg',
      caption: 'Packaging Glass Bottle & Debossing Detail',
      aspectRatio: 'landscape' // 'square' | 'portrait' | 'landscape'
    },
    {
      url: '/images/projects/batibri-ya/unboxing.jpg',
      caption: 'Eco-friendly Unboxing Experience',
      aspectRatio: 'portrait'
    }
  ],
  ...
}
```

### C. Menggunakan URL Eksternal (Cloudinary, Unsplash, Google Drive, dll.):
Anda juga tetap bisa menggunakan URL online lengkap:
```typescript
coverImage: 'https://images.unsplash.com/photo-1234567890...'
```

---

## 3. Format dan Rekomendasi Ukuran

- **Format yang didukung**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.avif`.
- **Rekomendasi rasio gambar**:
  - **Cover Polaroid Kategori**: Rasio 4:3 atau 1:1 (resolusi min. 800 x 600 px).
  - **Cover Proyek**: Rasio 16:10 atau 4:3 (resolusi min. 1000 x 650 px).
  - **Galeri Detail**: Bebas (landscape, portrait, atau square didukung penuh).
- Jika gambar belum tersedia atau gagal dimuat, sistem akan otomatis menampilkan placeholder Polaroid yang rapi tanpa merusak tata letak.

# Portofolio Karima Ulya Hermawan

Vite + React + TypeScript. Semua isi (teks, project, pengalaman) ada di folder `src/data`, jadi kamu cukup mengubah teks dan menaruh gambar.

## Menjalankan

```bash
npm install
npm run dev        # buka http://localhost:5173
npm run build      # hasil jadi ada di folder dist
```

Butuh Node.js 18 atau lebih baru.

## Yang perlu kamu ubah

| Mau mengubah | Buka file |
| --- | --- |
| Nama, email, link, teks kiri dan kanan di hero, kata "PORTFOLIO" | `src/data/profile.ts` |
| Pengalaman (timeline) dan kata-kata di pita berjalan | `src/data/profile.ts` |
| Daftar project (judul, peran, deskripsi, tech, link) | `src/data/projects.ts` |
| Daftar skill dan grupnya | `src/data/profile.ts` (`skillGroups`) |
| Tata letak bagian Skills | `src/components/Services.tsx` |
| Warna dan ukuran | bagian atas `src/styles.css` (variabel `--navy`, `--cream`, `--purple`, `--blue`) |

## Menambah gambar (tanpa mengubah kode)

- **Foto hero:** simpan PNG transparan dengan nama `hero.png` (atau `hero.webp`) di `src/assets/`. Sebelum itu, yang tampil adalah placeholder.
- **Cover project:** simpan di `src/assets/projects/` dengan nama sesuai `slug` project. Contoh: `solarcast.png`.
- **Screenshot tambahan di halaman detail:** `solarcast-1.png`, `solarcast-2.png`, dan seterusnya.
- **Foto achievement, experience, atau bootcamp:** simpan di `public/experience/`, lalu tambahkan properti `image` pada item terkait di `src/data/profile.ts`. Preview tampil saat item di-hover atau difokuskan dengan keyboard.

  Contoh:

  ```ts
  {
    title: 'Cohort AI Engineer',
    period: '2026',
    program: 'Pijak x IBM Skillsbuild',
    description: 'Learning to perform data analysis with Python.',
    image: '/experience/ai-engineer.jpg',
  }
  ```

- Format yang didukung: png, jpg, jpeg, webp, avif, svg. Tanpa cover, kartu menampilkan gradien warna.

## Ikon skill

Simpan ikon di `public/tech/` dengan nama dasar huruf kecil berikut. Format `.svg`, `.webp`, dan `.png` didukung; aplikasi mencarinya dalam urutan tersebut. Kalau ikon belum tersedia, placeholder akan tetap ditampilkan.

Nama dasar: `figma`, `canva`, `html`, `css`, `javascript`, `typescript`, `react`, `next-js`, `vite`, `node-js`, `express`, `flask`, `mysql`, `postgresql`, `supabase`, `adobe-illustrator`, `python`, `pandas`, `scikit-learn`, `tensorflow`, `pytorch`, `kotlin`, `java`, `android-studio`, `docker`.

Contoh: `public/tech/figma.webp`. Ikon yang sudah ada sebelumnya sudah diberi ekstensi sesuai format aslinya.

## Menambah project

Buka `src/data/projects.ts`, salin salah satu blok di `rawProjects`, ganti isinya, dan beri `slug` yang unik. Halaman home, `/projects`, dan `/projects/<slug>` ikut terbarui sendiri.

## Mengaktifkan form kontak

Form kontak mengirim pesan lewat Formspree. Buat form di [formspree.io](https://formspree.io/), verifikasi alamat penerima, lalu atur endpoint form sebagai environment variable:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Untuk lokal, simpan variabel tersebut di `.env.local` di root project. Untuk production, tambahkan variabel yang sama pada pengaturan environment hosting lalu deploy ulang. Tanpa endpoint, form akan menampilkan pesan bahwa pengiriman belum dikonfigurasi; email langsung tetap tersedia di bagian Contact.

## Daftar TODO

- Cek tahun (`year`) setiap project di `projects.ts`. Beberapa masih tebakan.
- Tambah paragraf `details` di tiap project (masalah, proses, hasil). Sekarang isinya singkat.
- Treasure Temaram: aktifkan baris `repoUrl` kalau repo `au-temaram` memang project ini.
- Popatpic: aktifkan baris `liveUrl` setelah demo dideploy ulang.
- Web Kesling: link demo membuka halaman login petugas. Pertimbangkan screenshot saja, dan pastikan Puskesmas mengizinkan project ditampilkan.
- Peran di "AI Nutrition App" masih umum ("Team member"). Ganti dengan perananmu.
- Teks UI memakai bahasa Inggris, sama seperti desainmu. Kalau mau bahasa Indonesia, ubah teksnya di `src/data` dan komponen.

## Deploy

Hasil build adalah situs statis. Pilih salah satu:

- **Cloudflare Pages / Netlify:** hubungkan repo GitHub, build command `npm run build`, output `dist`. File `public/_redirects` sudah menangani rute `/projects/...`.
- **Vercel:** impor repo. File `vercel.json` sudah menangani rute.
- **GitHub Pages:** unggah isi `dist`. Skrip build sudah menyalin `index.html` ke `404.html` supaya rute tetap berjalan.

## Animasi

- Elemen muncul dari bawah saat di-scroll (`src/components/Reveal.tsx`, atur `delay` dan `y`).
- Kata "PORTFOLIO" bergeser pelan, foto membesar sedikit saat di-hover, kartu layanan dan project bereaksi saat di-hover, dan pita di bawah project berjalan terus.
- Semua animasi dimatikan untuk pengguna yang mengaktifkan "reduce motion".

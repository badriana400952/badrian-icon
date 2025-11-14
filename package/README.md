
#  badrian-icon

**badrian-icon** adalah kumpulan ikon modern yang dibuat khusus untuk kebutuhan proyek React / Next.js.
Library ini ringan, mudah digunakan, dan terinspirasi dari gaya minimalis yang konsisten untuk keperluan aplikasi web.

---

##  Instalasi

Gunakan salah satu package manager favorit kamu:

```bash
# npm
npm install badrian-icon

# yarn
yarn add badrian-icon

# pnpm
pnpm add badrian-icon
```

---

##  Penggunaan

Import ikon yang kamu butuhkan langsung ke dalam komponen React:

```tsx
import { Calendar  } from "badrian-icon";

export default function Example() {
  return (
    <button className="flex items-center gap-2">
      <Calendar className="w-8 h-8 " />
      <span>Open Redmine</span>
    </button>
  );
}
```

Kamu juga bisa menyesuaikan ukuran dan warna:

```tsx
 <CalendarAddDuotoneLine className="w-8 h-8 text-red-500" />
 <Calendar className="w-8 h-8 text-red-500" />
```

---

##  Ikon yang Tersedia

| Ikon | Komponen React |
|------|----------------|
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225080/icons/Date_range_fill_orgwic.svg" width="32" /> | `DateRangeFill` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225080/icons/Date_range_tz4qox.svg" width="32" /> | `DateRange` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225079/icons/Date_range_light_gyap9q.svg" width="32" /> | `DateRangeLight` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225079/icons/Date_range_duotone_tsxvkd.svg" width="32" /> | `DateRangeDuotone` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225079/icons/Date_range_duotone_line_et8plj.svg" width="32" /> | `DateRangeDuotoneLine` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225079/icons/Date_fill_gipync.svg" width="32" /> | `DateFill` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225079/icons/Date_today_tgddcn.svg" width="32" /> | `DateToday` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225078/icons/Date_today_duotone_sd80od.svg" width="32" /> | `DateTodayDuotone` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225077/icons/Calendar_nn1uby.svg" width="32" /> | `Calendar` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225077/icons/Calendar_fill_b4hkm4.svg" width="32" /> | `CalendarFill` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225077/icons/Date_today_light_rnzlos.svg" width="32" /> | `DateTodayLight` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225077/icons/Date_today_duotone_line_r5znjs.svg" width="32" /> | `DateTodayDuotoneLine` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225077/icons/Calendar_light_qtowqa.svg" width="32" /> | `CalendarLight` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225077/icons/Calendar_duotone_pz9bh2.svg" width="32" /> | `CalendarDuotone` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225076/icons/Calendar_add_fill_hnnncn.svg" width="32" /> | `CalendarAddFill` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225076/icons/Calendar_add_fill_hnnncn.svg" width="32" /> | `CalendarAddDuotoneLine` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225076/icons/Calendar_add_duotone_pmtxai.svg" width="32" /> | `CalendarAddDuotone` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225076/icons/Calendar_add_gev4qt.svg" width="32" /> | `CalendarAdd` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225076/icons/Calendar_duotone_line_oferax.svg" width="32" /> | `CalendarDuotoneLine` |
| <img src="https://res.cloudinary.com/doykilt63/image/upload/v1762225076/icons/Calendar_add_light_uv6whr.svg" width="32" /> | `CalendarAddLight` |
> 💡 Daftar ikon akan bertambah seiring waktu! Kamu bisa ikut berkontribusi untuk menambah ikon baru.

---

##  Props

| Prop        | Tipe     | Default        | Deskripsi                         |
| ----------- | -------- | -------------- | --------------------------------- |
| `className` | `string` | `undefined`    | Menambahkan class Tailwind/custom |

---

##  Kontribusi

1. Fork repository ini
2. Jalankan perintah berikut:

   ```bash
   pnpm install
   pnpm dev
   ```
3. Tambahkan ikon baru di folder `src/icons`
4. Kirim pull request dengan deskripsi ikon kamu

---

## 📄 Lisensi

MIT License © 2025 — [Badriana](https://github.com/badriana)

---

## 🌐 Tautan

*  **NPM:** [https://www.npmjs.com/package/badrian-icon](https://www.npmjs.com/package/badrian-icon)
*  **GitHub:** [https://github.com/badriana400952/badrian-icon](https://github.com/badriana400952/badrian-icon)
*  **HomePage:** [https://portfolio-badriana.vercel.app/badrian-icons](https://portfolio-badriana.vercel.app/badrian-icons)

# badrian-icon

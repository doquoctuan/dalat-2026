import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/dalat-hero.jpg";
import homestayImg from "@/assets/dalat-homestay.jpg";
import cloudsImg from "@/assets/dalat-clouds.jpg";
import marketImg from "@/assets/dalat-market.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Đà Lạt Trip 2N2Đ · Nhà Lá · 14–16/08/2026" },
      {
        name: "description",
        content:
          "Lịch trình Đà Lạt 2 ngày 2 đêm của nhóm Nhà Lá, 14–16/08/2026, 8 thành viên, chi phí ~2 triệu/người. Xe giường nằm khởi hành 22:25 từ TP.HCM.",
      },
      { property: "og:title", content: "Đà Lạt Trip 2N2Đ · Nhà Lá" },
      {
        property: "og:description",
        content:
          "Lịch trình chi tiết, bảng chi phí và checklist cho chuyến Đà Lạt 14–16/08/2026 của nhóm Nhà Lá.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

type Item = {
  time: string;
  title: string;
  desc?: string;
  place?: string;
  highlight?: boolean;
};

const days: { key: string; label: string; date: string; items: Item[] }[] = [
  {
    key: "d0",
    label: "Đêm khởi hành · Thứ Sáu",
    date: "14/08/2026",
    items: [
      {
        time: "21:45",
        title: "Tập trung tại bến xe TP.HCM",
        desc: "Cả nhóm có mặt trước 30 phút. Kiểm tra: áo ấm, sạc dự phòng, thuốc say xe.",
        place: "Bến xe Miền Đông mới, TP. Thủ Đức",
      },
      {
        time: "22:25",
        title: "Xe giường nằm khởi hành đi Đà Lạt",
        desc: "Chặng ~7 tiếng, nghỉ giữa đường tại Bảo Lộc. Ngủ trên xe để sáng hôm sau đủ sức.",
        highlight: true,
      },
    ],
  },
  {
    key: "d1",
    label: "Ngày 1 · Thứ Bảy",
    date: "15/08/2026",
    items: [
      {
        time: "05:30",
        title: "Tới Đà Lạt · săn mây Cầu Đất",
        desc: "Xuống xe, đi xe trung chuyển lên đồi chè Cầu Đất đón bình minh và biển mây.",
        place: "Cầu Đất Farm, Xuân Trường, Đà Lạt",
        highlight: true,
      },
      {
        time: "08:00",
        title: "Ăn sáng bánh căn / bánh ướt lòng gà",
        desc: "Kèm ly sữa đậu nành nóng cho ấm bụng.",
        place: "Bánh ướt lòng gà Trang, 15F Tăng Bạt Hổ, Đà Lạt",
      },
      {
        time: "09:30",
        title: "Nhận phòng homestay & nghỉ ngơi",
        desc: "Homestay nguyên căn cho 8 người, thuê thêm xe máy (4 xe) ngay tại chỗ.",
        place: "Homestay khu Trần Hưng Đạo, Đà Lạt",
      },
      {
        time: "11:30",
        title: "Ăn trưa lẩu gà lá é",
        place: "Lẩu gà lá é Tao Ngộ, 5 Hoàng Diệu, Đà Lạt",
      },
      {
        time: "13:30",
        title: "Thác Datanla · Alpine Coaster",
        desc: "Máng trượt xuyên rừng thông – hoạt động ăn ảnh nhất chuyến đi.",
        place: "Thác Datanla, đèo Prenn, Đà Lạt",
        highlight: true,
      },
      {
        time: "16:30",
        title: "Cà phê săn hoàng hôn",
        desc: "Chụp ảnh nhóm, chill nhạc acoustic.",
        place: "Panorama Cafe Đà Lạt",
      },
      {
        time: "18:30",
        title: "Ăn tối nướng ngói / lẩu bò",
        place: "Nướng ngói Lê Thánh Tôn, Đà Lạt",
      },
      {
        time: "20:30",
        title: "Chợ đêm Đà Lạt & đi bộ Hồ Xuân Hương",
        desc: "Bánh tráng nướng, sữa đậu nành, mua đồ len.",
        place: "Chợ Đà Lạt, 10 Phan Bội Châu",
      },
      {
        time: "22:00",
        title: "Về homestay · đốt lửa trại + boardgame",
        desc: "Chuẩn bị trước: loa bluetooth, than, đồ nướng nhẹ.",
      },
    ],
  },
  {
    key: "d2",
    label: "Ngày 2 · Chủ Nhật",
    date: "16/08/2026",
    items: [
      {
        time: "07:00",
        title: "Ăn sáng bún bò thố đá",
        place: "Bún bò thố đá Sông Hương, Đà Lạt",
      },
      {
        time: "08:30",
        title: "Làng Cù Lần hoặc ZooDoo",
        desc: "Chốt 1 trong 2 trước chuyến đi. ZooDoo hợp chụp ảnh với cừu, alpaca; Cù Lần hợp đi bộ rừng.",
        place: "ZooDoo Đà Lạt, Đạ Nhim, Lạc Dương",
        highlight: true,
      },
      {
        time: "12:00",
        title: "Ăn trưa cơm lam gà nướng",
        place: "Cơm lam gà nướng Đà Lạt",
      },
      {
        time: "14:00",
        title: "Trả phòng · cà phê view thông",
        desc: "Gửi hành lý tại homestay, đi cà phê nhẹ nhàng buổi chiều.",
        place: "Mê Linh Coffee Garden, Đà Lạt",
      },
      {
        time: "16:30",
        title: "Chợ Đà Lạt mua đặc sản",
        desc: "Mứt, dâu tây, atiso, trà làm quà.",
        place: "Chợ Đà Lạt, 10 Phan Bội Châu",
      },
      {
        time: "18:30",
        title: "Ăn tối nhẹ trước giờ xe chạy",
      },
      {
        time: "21:30",
        title: "Xe khởi hành về TP.HCM",
        desc: "Về tới TP.HCM rạng sáng thứ Hai (~04:30). Kết thúc chuyến đi 🎉",
        highlight: true,
      },
    ],
  },
];

const costs: { item: string; unit: string; qty: string; total: number }[] = [
  { item: "Xe giường nằm khứ hồi TP.HCM – Đà Lạt", unit: "300.000", qty: "2 lượt", total: 600000 },
  { item: "Homestay 2 đêm (chia 8 người)", unit: "175.000", qty: "2 đêm", total: 350000 },
  { item: "Ăn uống (3 bữa chính + ăn vặt)", unit: "~200.000", qty: "3 ngày", total: 600000 },
  { item: "Vé tham quan & Alpine Coaster", unit: "—", qty: "trọn gói", total: 250000 },
  { item: "Thuê xe máy + xăng (2 người/xe)", unit: "75.000", qty: "2 ngày", total: 150000 },
  { item: "Quỹ dự phòng nhóm", unit: "—", qty: "—", total: 50000 },
];

const totalCost = costs.reduce((s, c) => s + c.total, 0);
const vnd = (n: number) => n.toLocaleString("vi-VN");

const checklist = [
  "Áo khoác dày, khăn len (đêm Đà Lạt 13–16°C)",
  "Giày thể thao đi bộ, dép cho homestay",
  "CCCD + bằng lái xe máy (bắt buộc khi thuê xe)",
  "Sạc dự phòng, thuốc say xe, thuốc cảm",
  "Tiền mặt ~500k cho chợ đêm và quán nhỏ",
  "Loa bluetooth + bộ bài / boardgame cho tối lửa trại",
];

const gallery = [
  { src: cloudsImg, cap: "Săn mây Cầu Đất – sáng thứ Bảy" },
  { src: homestayImg, cap: "Homestay nguyên căn cho 8 người" },
  { src: marketImg, cap: "Chợ đêm Đà Lạt" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Rừng thông Đà Lạt trong sương sớm"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/85" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 py-24 text-primary-foreground">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-primary-foreground/80">
            Nhóm Nhà Lá · 8 thành viên
          </p>
          <h1 className="mt-6 text-5xl leading-[0.95] text-balance-pretty sm:text-7xl md:text-8xl">
            Đà Lạt
            <span className="block text-accent">2 ngày 2 đêm</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Tối thứ Sáu 14/08 lên xe, sáng thứ Bảy đã đứng giữa biển mây Cầu Đất. Chủ Nhật
            21:30 về lại Sài Gòn.
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary-foreground/20 bg-primary-foreground/15 backdrop-blur-sm sm:grid-cols-4">
            {[
              ["Ngày đi", "14 → 16/08/2026"],
              ["Khởi hành", "22:25 · TP.HCM"],
              ["Thành viên", "8 người"],
              ["Chi phí", "~2.000.000đ/người"],
            ].map(([k, v]) => (
              <div key={k} className="bg-primary/45 px-5 py-4">
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/70">
                  {k}
                </dt>
                <dd className="mt-1 font-display text-lg">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#lich-trinh"
              className="rounded-full bg-dawn px-7 py-3 font-display text-sm font-semibold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Xem lịch trình
            </a>
            <a
              href="#chi-phi"
              className="rounded-full border border-primary-foreground/40 px-7 py-3 font-display text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Bảng chi phí
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="lich-trinh" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <h2 className="text-4xl sm:text-5xl">Lịch trình</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Khung giờ tham khảo – nhóm có thể co giãn, nhưng giờ xe và giờ nhận/trả phòng thì
            cố định.
          </p>

          <div className="mt-14 space-y-16">
            {days.map((day) => (
              <div key={day.key}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border pb-4">
                  <h3 className="text-2xl sm:text-3xl">{day.label}</h3>
                  <span className="font-display text-sm uppercase tracking-[0.25em] text-accent">
                    {day.date}
                  </span>
                </div>
                <ol className="mt-8 space-y-3">
                  {day.items.map((it) => (
                    <li
                      key={it.time + it.title}
                      className={`group grid gap-4 rounded-2xl border p-5 transition-all sm:grid-cols-[6rem_1fr] ${
                        it.highlight
                          ? "border-accent/40 bg-accent/10 shadow-soft"
                          : "border-border bg-card hover:border-primary/30 hover:shadow-soft"
                      }`}
                    >
                      <span className="font-display text-lg font-semibold text-primary">
                        {it.time}
                      </span>
                      <div>
                        <p className="font-display text-lg font-semibold">{it.title}</p>
                        {it.desc && (
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {it.desc}
                          </p>
                        )}
                        {it.place && (
                          <a
                            href={maps(it.place)}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            📍 {it.place}
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary/60 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-4xl sm:text-5xl">Điểm nhấn</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {gallery.map((g) => (
                <figure
                  key={g.cap}
                  className="overflow-hidden rounded-3xl bg-card shadow-soft"
                >
                  <img
                    src={g.src}
                    alt={g.cap}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <figcaption className="px-5 py-4 text-sm text-muted-foreground">
                    {g.cap}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="chi-phi" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <h2 className="text-4xl sm:text-5xl">Chi phí dự kiến</h2>
          <p className="mt-3 text-muted-foreground">
            Tính cho <strong>1 người</strong>, dựa trên nhóm 8 thành viên chia đều homestay và
            xe máy.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <table className="w-full text-left text-sm">
              <thead className="bg-pine text-primary-foreground">
                <tr>
                  <th className="px-5 py-4 font-display font-semibold">Hạng mục</th>
                  <th className="px-5 py-4 font-display font-semibold">Đơn giá</th>
                  <th className="px-5 py-4 font-display font-semibold">Số lượng</th>
                  <th className="px-5 py-4 text-right font-display font-semibold">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((c) => (
                  <tr key={c.item} className="border-t border-border">
                    <td className="px-5 py-4">{c.item}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.unit}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.qty}</td>
                    <td className="px-5 py-4 text-right font-medium">{vnd(c.total)}đ</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-primary/30 bg-accent/10">
                  <td className="px-5 py-5 font-display text-base font-semibold" colSpan={3}>
                    Tổng cộng / người
                  </td>
                  <td className="px-5 py-5 text-right font-display text-xl font-bold text-primary">
                    {vnd(totalCost)}đ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Tổng quỹ cả nhóm
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-primary">
                {vnd(totalCost * 8)}đ
              </p>
              <p className="mt-1 text-sm text-muted-foreground">8 thành viên × {vnd(totalCost)}đ</p>
            </div>
            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6">
              <p className="font-display text-lg font-semibold">Cách gom quỹ</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Mỗi người chuyển trước 1.200.000đ cho thủ quỹ để đặt xe + homestay, phần còn
                lại thanh toán trực tiếp trong chuyến đi.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-pine py-20 text-primary-foreground sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-4xl sm:text-5xl">Checklist mang theo</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {checklist.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-5 py-4"
                >
                  <span className="mt-0.5 text-accent">✦</span>
                  <span className="text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-14 text-center text-sm text-muted-foreground">
        <p className="font-display text-base text-foreground">Nhà Lá đi Đà Lạt · 14–16/08/2026</p>
        <p className="mt-2">Lịch trình có thể thay đổi tuỳ thời tiết và sức khoẻ cả nhóm.</p>
      </footer>
    </div>
  );
}

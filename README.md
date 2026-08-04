# Đà Lạt 2026 · Nhà Lá

Trang web kế hoạch chuyến đi Đà Lạt 2 ngày 2 đêm của nhóm Nhà Lá, **14–16/08/2026**, 8 thành viên.

---

## Đóng góp vào kế hoạch

### Không cần code — mở Issue

Nếu bạn muốn đề xuất thay đổi mà không quen lập trình, hãy mở một **GitHub Issue** và mô tả thay đổi. Ví dụ:

- «Mình muốn thêm điểm dừng ở Vườn hoa thành phố»
- «Giá xe giường nằm đã thay đổi, cần cập nhật»
- «Nên thêm nhắc nhở mang đèn pin vào checklist»

Người quản lý repo sẽ cập nhật thay mặt bạn.

---

### Tự chỉnh — Pull Request

#### 1. Cài đặt môi trường

Yêu cầu: [Node.js ≥ 20](https://nodejs.org) và [pnpm](https://pnpm.io/installation).

```sh
git clone <this-repository-url>
cd dalat-2026
pnpm install
pnpm dev
```

Mở `http://localhost:3000` để xem. Trang tự reload khi lưu file.

#### 2. File quan trọng

| File | Nội dung |
| --- | --- |
| `src/routes/index.tsx` | **Toàn bộ dữ liệu** — lịch trình, chi phí, checklist, ảnh |
| `src/routes/__root.tsx` | Layout tổng (head, font, màu sắc) |
| `src/assets/` | Ảnh hero, homestay, chợ, mây |
| `routeTree.gen.ts` | Auto-generated — **không chỉnh tay** |

#### 3. Cách sửa nội dung trong `src/routes/index.tsx`

**Thêm / sửa hoạt động** — tìm mảng `days`, mỗi ngày có mảng `items`:

```ts
{
  time: "14:00",
  title: "Tên hoạt động",
  desc: "Mô tả ngắn",        // tuỳ chọn
  place: "Địa điểm, địa chỉ", // tuỳ chọn — tự tạo link Google Maps
  highlight: true,            // tuỳ chọn — nổi bật hơn
}
```

**Cập nhật chi phí** — tìm mảng `costs`:

```ts
{ item: "Tên khoản chi", unit: "300.000", qty: "2 lượt", total: 600000 }
//                                                         ^ số nguyên VND để tính tổng
```

**Checklist** — tìm mảng `checklist`, thêm/xoá chuỗi văn bản.

**Thêm ảnh vào gallery** — đặt ảnh vào `src/assets/`, import vào đầu file, rồi thêm vào mảng `gallery`:

```ts
import newImg from "@/assets/ten-anh.jpg";
// ...
{ src: newImg, cap: "Mô tả ảnh" }
```

#### 4. Quy trình PR

```sh
git checkout -b ten-ban/mo-ta-thay-doi
# ... sửa file ...
pnpm lint                          # kiểm tra trước khi commit
git add src/routes/index.tsx
git commit -m "feat: thêm ZooDoo vào ngày 2"
git push origin ten-ban/mo-ta-thay-doi
```

Prefix commit: `feat:` thêm mới · `fix:` sửa sai · `style:` chỉnh giao diện.

Không push trực tiếp vào `main` — mọi thay đổi cần ít nhất 1 người review và approve.

#### 5. Thay đổi nào cần thảo luận nhóm?

| Loại thay đổi | Cần thảo luận? |
| --- | --- |
| Sửa lỗi chính tả, địa chỉ, giờ giấc | Không — merge luôn |
| Cập nhật giá (ghi rõ nguồn trong PR) | Không |
| Thêm / xoá hoạt động trong ngày | Nên hỏi nhóm qua comment PR |
| Đổi điểm đến chính (Cù Lần ↔ ZooDoo…) | Cần vote nhóm trước |
| Thay đổi ngày đi hoặc số đêm | Họp nhóm |

---

## Development

```sh
pnpm dev      # dev server tại localhost:3000
pnpm build    # production build
pnpm lint     # kiểm tra lỗi ESLint
pnpm format   # format code với Prettier
```

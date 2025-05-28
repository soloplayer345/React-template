## ⚙️ Hướng dẫn cài đặt & chạy dự án

### 1. Cài đặt dependency

Nếu bạn dùng **Bun**:

```bash
bun install
```

Hoặc nếu bạn muốn dùng **npm** (nếu project tương thích):

```bash
npm install
```

### 2. Chạy dự án

```bash
bun run dev
```

Sau đó mở trình duyệt và truy cập:

```
http://localhost:5173
```

> ✅ Lưu ý: Dự án này sử dụng `bun` và `vite`. Đảm bảo bạn đã cài [Bun](https://bun.sh/) trước khi chạy.

---

## 🗂️ Cấu trúc thư mục

```
src/
├── assets/        # Tệp hình ảnh, logo, v.v.
├── components/    # Tất cả các component UI
│   ├── layouts/   # Các layout lớn (Navbar, Footer, ... )
│   └── ui/        # Các phần tử nhỏ như button, card, form
├── config/        # Cấu hình hệ thống (URL API, hằng số)
├── pages/         # Các trang chính ứng với các route
├── routes/        # Định nghĩa các đường dẫn (Route)
├── services/      # Logic gọi API (auth, course,...)
├── store/         # Quản lý trạng thái toàn cục (Jotai)
├── styles/        # SCSS riêng từng component & toàn cục
├── types/         # Các kiểu dữ liệu dùng chung 
└── utils/         # Hàm tiện ích như xử lý ngày giờ, định dạng...
```

---

## 💡 Mô tả chi tiết từng thư mục

### `assets/`

- Chứa hình ảnh, logo, font, v.v.
- Ví dụ: `logo.png`, `banner.jpg`

---

### `components/`

- `layouts/`:  
  Bố cục chính của trang như `UserLayout.jsx` (Navbar + Footer + Outlet).

- `ui/`:  
  Component giao diện nhỏ như:
  - `Navbar/`, `Footer/`
  - `AuthContainer.jsx`, `SignInForm.jsx`, `RegisterDialog.jsx`
  - `CourseCard`, `Dialog`, `Spinner`,...

---

### `config/`

- Cấu hình ứng dụng như:
  - `apiBaseURL.js`
  - `authConfig.js`
  - Biến môi trường nếu có

---

### `pages/`

- Mỗi file tương ứng với một trang:
  - `Home.jsx`, `Courses.jsx`, `Login.jsx`, `Register.jsx`, `CourseDetail.jsx`,...

---

### `routes/`

- Định nghĩa toàn bộ đường dẫn bằng React Router v6.
- Sử dụng `Outlet` để render layout con.

---

### `services/`

- Logic giao tiếp với API (gửi request, nhận dữ liệu)
- Ví dụ:
  - `authService.js`: đăng nhập/đăng xuất
  - `courseService.js`: lấy danh sách khóa học

---

### `store/`

- Trạng thái toàn cục với Jotai.
- Ví dụ:
  - `authAtom.js`: lưu token, user
  - `dialogAtom.js`: điều khiển mở/đóng popup

---

### `styles/`

- SCSS chia theo từng thành phần hoặc toàn bộ ứng dụng.
- Ví dụ:
  - `Navbar.scss`, `RegisterDialog.scss`
  - `App.scss`, `index.scss`

---

### `types/`

- Các kiểu dữ liệu tái sử dụng.
- Ví dụ:
  - `UserType.js`, `CourseType.js`

---

### `utils/`

- Hàm tiện ích thường dùng như:
  - `formatDate.js`, `checkAuth.js`, `validateEmail.js`

---

## 🧪 Ghi chú kỹ thuật

- UI sử dụng SCSS và MUI/Ant Design tùy thành phần.
- State management đơn giản với Jotai.
- Ưu tiên sử dụng `function` thay cho `const = () =>` khi không cần closure.
- Không dùng Redux để giảm độ phức tạp.

---

## 💬 Góp ý hoặc báo lỗi

Nếu bạn có đề xuất cải tiến hoặc phát hiện lỗi, vui lòng tạo issue hoặc pull request tại repo chính thức ❤️

---

## 🧑‍💻 Tác giả

Trần Lạc Hồng
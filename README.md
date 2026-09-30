# K20 Day 35 - React Hooks Practice

Bài tập thực hành React Hooks gồm 3 phần:

## Bài 1 - Quản lý giỏ hàng và tìm kiếm

- `useReducer` quản lý products, cart, category và keyword.
- `ShopContext` + custom hook `useShop` chia sẻ state và dispatch.
- Hỗ trợ tìm theo tên, lọc theo danh mục và kết hợp cả hai điều kiện.
- Thêm/xóa sản phẩm, tăng/giảm/nhập số lượng và không cho số lượng nhỏ hơn 1.
- Hiển thị tổng số lượng và tổng tiền.

## Bài 2 - Audio Player Custom và Stopwatch

- Audio Player dùng `useRef` để điều khiển trực tiếp thẻ `<audio>`.
- Có Play, Pause, Mute/Unmute, tăng/giảm âm lượng.
- Stopwatch dùng `useRef` để lưu interval id và có Bắt đầu/Tạm dừng/Đặt lại.

## Bài 3 - Custom Modal

- Modal tự quản lý state đóng/mở.
- Dùng `useImperativeHandle` expose `open()` và `close()`.
- Component cha chỉ dùng `modalRef.current.open()` để mở modal.

## Chạy project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

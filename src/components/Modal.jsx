import { forwardRef, useImperativeHandle, useState } from 'react'

const Modal = forwardRef(function Modal(_, ref) {
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true)
    },
    close() {
      setIsOpen(false)
    },
  }))

  if (!isOpen) return null

  const close = () => setIsOpen(false)

  return (
    <div className="modal-backdrop" onMouseDown={close}>
      <div
        className="modal-panel terms-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Điều khoản sử dụng"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Điều khoản sử dụng</h2>
          <button type="button" className="icon-button" onClick={close}>×</button>
        </div>
        <p>
          Khi tiếp tục, bạn xác nhận đã đọc và đồng ý tuân thủ các quy định sử
          dụng của ứng dụng demo này.
        </p>
        <div className="modal-actions">
          <button type="button" onClick={close}>Đồng ý</button>
          <button type="button" className="secondary" onClick={close}>Đóng</button>
        </div>
      </div>
    </div>
  )
})

export default Modal

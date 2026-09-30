import { useShop } from '../context/ShopContext'

const formatMoney = (value) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value)

export default function CartModal({ isOpen, onClose }) {
  const { cart, dispatch } = useShop()

  if (!isOpen) return null

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="modal-panel cart-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Giỏ hàng"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h2>Giỏ hàng</h2>
            <p>{totalQuantity} sản phẩm</p>
          </div>
          <button type="button" className="icon-button" onClick={onClose}>
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-state">Giỏ hàng đang trống.</p>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item__icon">{item.thumbnail}</div>
                  <div className="cart-item__info">
                    <strong>{item.name}</strong>
                    <span>{formatMoney(item.price)}</span>
                  </div>

                  <div className="quantity-control">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: item.quantity - 1 },
                        })
                      }
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      aria-label={`Số lượng ${item.name}`}
                      onChange={(event) =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: event.target.value },
                        })
                      }
                    />
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: item.quantity + 1 },
                        })
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="danger-link"
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                    }
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <span>Tổng số lượng: <strong>{totalQuantity}</strong></span>
              <span>Tổng tiền: <strong>{formatMoney(totalPrice)}</strong></span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

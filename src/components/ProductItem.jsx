import { useShop } from '../context/ShopContext'

const formatMoney = (value) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value)

export default function ProductItem({ product }) {
  const { dispatch } = useShop()

  return (
    <article className="product-card">
      <div className="product-thumb" aria-hidden="true">
        {product.thumbnail}
      </div>
      <span className="product-category">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-card__footer">
        <strong>{formatMoney(product.price)}</strong>
        <button
          type="button"
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        >
          Thêm vào giỏ
        </button>
      </div>
    </article>
  )
}

import { useShop } from '../context/ShopContext'
import ProductItem from './ProductItem'

export default function ProductList() {
  const { products, keyword, category } = useShop()
  const normalizedKeyword = keyword.trim().toLowerCase()

  const filteredProducts = products.filter((product) => {
    const matchKeyword = product.name.toLowerCase().includes(normalizedKeyword)
    const matchCategory = category === 'Tất cả' || product.category === category
    return matchKeyword && matchCategory
  })

  if (!filteredProducts.length) {
    return <p className="empty-state">Không tìm thấy sản phẩm phù hợp.</p>
  }

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

import { useShop } from '../context/ShopContext'

export default function SearchBar() {
  const { products, keyword, category, dispatch } = useShop()
  const categories = ['Tất cả', ...new Set(products.map((product) => product.category))]

  return (
    <div className="search-bar">
      <input
        type="search"
        value={keyword}
        placeholder="Tìm sản phẩm theo tên..."
        onChange={(event) =>
          dispatch({
            type: 'SET_FILTER',
            payload: { keyword: event.target.value },
          })
        }
      />

      <select
        value={category}
        onChange={(event) =>
          dispatch({
            type: 'SET_FILTER',
            payload: { category: event.target.value },
          })
        }
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

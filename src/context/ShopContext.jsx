import { createContext, useContext, useReducer } from 'react'
import { products } from '../data/products'

const ShopContext = createContext(null)

const initialState = {
  products,
  cart: [],
  category: 'Tất cả',
  keyword: '',
}

function shopReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = action.payload
      const existingItem = state.cart.find((item) => item.id === product.id)

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }

      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      const safeQuantity = Math.max(1, Number(quantity) || 1)

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity: safeQuantity } : item,
        ),
      }
    }

    case 'SET_FILTER':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState)

  return (
    <ShopContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const context = useContext(ShopContext)

  if (!context) {
    throw new Error('useShop phải được sử dụng bên trong ShopProvider')
  }

  return context
}

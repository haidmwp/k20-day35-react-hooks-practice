import { useRef, useState } from 'react'
import './App.css'
import AudioPlayer from './components/AudioPlayer'
import CartModal from './components/CartModal'
import Modal from './components/Modal'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import Stopwatch from './components/Stopwatch'
import { ShopProvider, useShop } from './context/ShopContext'

function ShopSection() {
  const { cart } = useShop()
  const [cartOpen, setCartOpen] = useState(false)
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <section className="assignment-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Bài 1 · useReducer + useContext</span>
          <h2>Quản lý giỏ hàng và tìm kiếm</h2>
        </div>
        <button type="button" className="cart-button" onClick={() => setCartOpen(true)}>
          🛒 Giỏ hàng <span>{totalQuantity}</span>
        </button>
      </div>
      <SearchBar />
      <ProductList />
      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </section>
  )
}

function App() {
  const modalRef = useRef(null)

  return (
    <ShopProvider>
      <main className="app-shell">
        <header className="page-header">
          <span className="eyebrow">K20 · Day 35</span>
          <h1>React Hooks Practice</h1>
          <p>useReducer · useContext · useRef · useImperativeHandle</p>
        </header>

        <ShopSection />

        <section className="assignment-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Bài 2 · useRef</span>
              <h2>Audio Player Custom và Stopwatch</h2>
            </div>
          </div>
          <div className="demo-grid">
            <AudioPlayer />
            <Stopwatch />
          </div>
        </section>

        <section className="assignment-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Bài 3 · useImperativeHandle</span>
              <h2>Custom Modal</h2>
              <p className="muted">
                Component cha chỉ giữ ref và gọi <code>modalRef.current.open()</code>.
              </p>
            </div>
          </div>
          <button type="button" onClick={() => modalRef.current?.open()}>
            Mở bảng điều khoản
          </button>
          <Modal ref={modalRef} />
        </section>
      </main>
    </ShopProvider>
  )
}

export default App

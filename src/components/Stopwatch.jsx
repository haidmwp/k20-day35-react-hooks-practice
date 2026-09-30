import { useEffect, useRef, useState } from 'react'

export default function Stopwatch() {
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef(null)

  const start = () => {
    if (intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setElapsed((current) => current + 10)
    }, 10)
  }

  const pause = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const reset = () => {
    pause()
    setElapsed(0)
  }

  useEffect(() => () => clearInterval(intervalRef.current), [])

  const minutes = String(Math.floor(elapsed / 60000)).padStart(2, '0')
  const seconds = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, '0')
  const centiseconds = String(Math.floor((elapsed % 1000) / 10)).padStart(2, '0')

  return (
    <div className="demo-card">
      <div className="demo-icon">⏱️</div>
      <h3>Stopwatch</h3>
      <div className="stopwatch-time">{minutes}:{seconds}.{centiseconds}</div>
      <div className="button-row">
        <button type="button" onClick={start}>Bắt đầu</button>
        <button type="button" onClick={pause}>Tạm dừng</button>
        <button type="button" onClick={reset}>Đặt lại</button>
      </div>
    </div>
  )
}

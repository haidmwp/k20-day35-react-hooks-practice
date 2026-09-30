import { useRef, useState } from 'react'

const AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [status, setStatus] = useState('Đã tạm dừng')
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(1)

  const playAudio = async () => {
    try {
      await audioRef.current?.play()
      setStatus('Đang phát')
    } catch {
      setStatus('Không thể phát audio')
    }
  }

  const pauseAudio = () => {
    audioRef.current?.pause()
    setStatus('Đã tạm dừng')
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !audioRef.current.muted
    setMuted(audioRef.current.muted)
  }

  const changeVolume = (step) => {
    if (!audioRef.current) return
    const nextVolume = Math.min(1, Math.max(0, audioRef.current.volume + step))
    audioRef.current.volume = nextVolume
    setVolume(nextVolume)
  }

  return (
    <div className="demo-card">
      <div className="demo-icon">🎵</div>
      <h3>Audio Player Custom</h3>
      <p className="muted">SoundHelix Song 1 · {status}</p>

      <audio
        ref={audioRef}
        src={AUDIO_URL}
        onEnded={() => setStatus('Đã phát xong')}
      />

      <div className="button-row">
        <button type="button" onClick={playAudio}>▶ Play</button>
        <button type="button" onClick={pauseAudio}>⏸ Pause</button>
        <button type="button" onClick={toggleMute}>
          {muted ? '🔊 Unmute' : '🔇 Mute'}
        </button>
      </div>

      <div className="volume-row">
        <button type="button" onClick={() => changeVolume(-0.1)}>−</button>
        <span>Âm lượng: {Math.round(volume * 100)}%</span>
        <button type="button" onClick={() => changeVolume(0.1)}>+</button>
      </div>
    </div>
  )
}

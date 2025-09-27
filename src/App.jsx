import { useMemo, useState } from 'react'
import ElegantSwirl from '@/components/elegant-swirl'
import PixelCard from '@/components/ui/pixel-card'
import PixelCardBack from '@/components/ui/pixel-card-back'
import PixelCardFront from '@/components/ui/pixel-card-front'

export default function App() {
  const [isFlipped, setIsFlipped] = useState(false)

  const recipient = useMemo(() => {
    if (typeof window === 'undefined') return 'The Family'
    const params = new URLSearchParams(window.location.search)
    const raw = params.get('to')
    if (!raw) return 'The Family'
    const normalized = raw.replace(/\+/g, ' ').trim()
    if (!normalized) return 'The Family'
    return normalized
  }, [])

  const showBack = () => setIsFlipped(true)
  const showFront = () => setIsFlipped(false)

  return (
    <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 z-0">
        <ElegantSwirl />
      </div>

      <div className="relative z-[2] flex h-full w-full justify-center [perspective:1600px]">
        <div className="relative h-full w-full">
          <div
            className={`relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
          >
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <PixelCard className="h-full w-full rounded-none border-white/20 bg-white/10 shadow-[0_60px_100px_-40px_rgba(15,23,42,0.75)] ring-1 ring-white/20 backdrop-blur-2xl">
                <PixelCardFront onConfirm={showBack} recipient={recipient} />
              </PixelCard>
            </div>

            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <PixelCard className="h-full w-full rounded-none border-white/20 bg-white/10 shadow-[0_60px_100px_-40px_rgba(15,23,42,0.75)] ring-1 ring-white/20 backdrop-blur-2xl">
                <PixelCardBack onBack={showFront} />
              </PixelCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

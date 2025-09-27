import { Button } from '@/components/ui/button'

export default function PixelCardFront({
  className = '',
  greeting = 'Om Swastyastu 🙏',
  subtitle = 'Syukuran Otonan &',
  title = 'Ulang Tahun ke-23',
  description = 'Dengan penuh rasa syukur, saya mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara syukuran Otonan sekaligus ulang tahun ke-23 saya.',
  gratitude = 'Merupakan suatu kehormatan apabila Bapak/Ibu/Saudara/i berkenan hadir untuk turut mendoakan dan memberikan restu.',
  recipient = 'Ekajaya Family',
  blessing = 'Om Shanti Shanti Shanti Om 🙏',
  onConfirm = () => { },
  confirmLabel = 'Saya Akan Hadir',
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-5 p-6 text-center sm:gap-6 sm:px-10 sm:py-12 md:gap-8 md:px-14 md:py-14 lg:gap-8 ${className}`}
    >
      <p className="font-name text-2xl text-accent sm:text-3xl lg:text-[44px]">{greeting}</p>
      <p className="font-title text-xl font-semibold leading-tight text-[color:var(--text-primary)] sm:text-4xl lg:text-[48px]">
        {subtitle}
        <br className="hidden sm:block" />
        {title}
      </p>
      <div className="flex w-11/12 max-w-md flex-col items-center gap-2 rounded-2xl border border-white/20 bg-white/12 px-4 py-4 text-center shadow-[0_20px_40px_-30px_rgba(15,23,42,0.55)] sm:w-3/4 sm:px-8">
        <span className="font-body text-xs uppercase tracking-[0.35em] text-accent">
          Untuk Bapak/Ibu/Saudara/i
        </span>
        <p className="font-name text-lg text-[color:var(--text-primary)] sm:text-2xl lg:text-[30px]">
          {recipient}
        </p>
      </div>
      <div className="font-body max-w-2xl space-y-4 text-sm leading-relaxed text-muted sm:text-lg lg:text-[19px]">
        <p>{description}</p>
        <p>{gratitude}</p>
      </div>
      <div className="space-y-3">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-accent sm:text-sm">Mohon doa restu</p>
        <Button onClick={onConfirm} size="lg" className="font-title sm:px-8">
          {confirmLabel}
        </Button>
      </div>
      <p className="font-body text-base text-muted sm:text-lg lg:text-[19px]">{blessing}</p>
    </div>
  )
}

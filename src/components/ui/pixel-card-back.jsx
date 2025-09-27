import { Button } from '@/components/ui/button'

export default function PixelCardBack({
  className = '',
  details = [
    { icon: '🗓️', label: 'Tanggal', value: 'Selasa, 30 September 2025' },
    {
      icon: '📍',
      label: 'Tempat',
      value: 'Br Kebilbil Pacung, Desa Belalang, Kec. Kediri, Kab. Tabanan',
    },
    { icon: '⏰', label: 'Waktu', value: '19:00 WITA' },
  ],
  gratitude = 'Kehadiran dan doa restu Bapak/Ibu/Saudara/i menjadi anugerah terindah dalam perayaan ini.',
  blessing = 'Om Shanti Shanti Shanti Om 🙏',
  mapsUrl = 'https://maps.app.goo.gl/9hiXaEd8oEqX7DoX9',
  onBack = () => { },
  backLabel = 'Kembali ke Undangan',
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-6 p-6 text-center sm:gap-6 sm:px-10 sm:py-12 md:gap-8 md:px-14 md:py-14 lg:gap-8 ${className}`}
    >
      <h2 className="font-title text-xl text-[color:var(--text-primary)] sm:text-3xl lg:text-[42px]">
        Rincian Acara
      </h2>
      <div className="font-body w-full max-w-xl space-y-3 text-sm text-muted sm:text-lg lg:text-[19px]">
        {details.map(({ icon, label, value }) => (
          <p key={label}>
            <span className="font-title text-lg text-[color:var(--text-primary)]">
              {icon} {label}
            </span>
            <br />
            {value}
          </p>
        ))}
      </div>
      <div className="font-body mt-2 max-w-xl space-y-3 text-sm text-muted sm:text-lg lg:text-[19px]">
        <p>{gratitude}</p>
        <p className="text-accent">{blessing}</p>
      </div>
      <Button asChild size="lg" className="font-title sm:px-8">
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          <span className="flex items-center gap-2">
            <span aria-hidden>📍</span>
            Buka Lokasi di Maps
          </span>
        </a>
      </Button>
      <Button
        onClick={onBack}
        variant="outline"
        size="lg"
        className="font-title sm:px-8"
      >
        {backLabel}
      </Button>
    </div>
  )
}

import type { MenuItem } from '../../types/menu'
import { useI18n } from '../../i18n/i18n-context'
import { t } from '../../i18n/localized'
import { formatVnd } from '../../utils/money'

type Props = {
  item: MenuItem
  onOpen: () => void
}

export function MenuItemCard({ item, onOpen }: Props) {
  const { language } = useI18n()
  const name = t(item.name, language)
  const coverImageSrc = item.imageSources?.[0] ?? item.imageSrc

  return (
    <button
      type="button"
      className="group block w-full overflow-hidden rounded-(--zi-radius) border border-[rgba(var(--zi-line)/0.85)] bg-[rgba(var(--zi-surface)/0.72)] text-left shadow-[0_18px_55px_rgba(0,0,0,0.24)] transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--zi-accent))]"
      onClick={onOpen}
      aria-label={name}
    >
      <div className="overflow-hidden rounded-[calc(var(--zi-radius)-1px)] border-b border-[rgba(var(--zi-line)/0.75)] bg-[rgba(var(--zi-bg)/0.45)]">
        {coverImageSrc ? (
          <img
            src={coverImageSrc}
            alt={name}
            className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        ) : (
          <div className="aspect-16/10 w-full bg-[radial-gradient(700px_240px_at_15%_25%,rgba(var(--zi-accent)/0.22),transparent_55%),radial-gradient(700px_240px_at_85%_65%,rgba(var(--zi-line)/0.16),transparent_55%)]" />
        )}
      </div>

      <div className="px-5 pb-5 pt-4 md:px-6 md:pb-6">
        <div className="zi-serif truncate text-lg tracking-tight text-[rgb(var(--zi-text))]">{name}</div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="h-px flex-1 bg-[rgba(var(--zi-line)/0.85)]" />
          <div className="shrink-0 font-semibold tracking-wide text-[rgb(var(--zi-accent))]">
            {formatVnd(item.priceVnd)}
          </div>
        </div>
      </div>
    </button>
  )
}


import { useMemo, useState } from 'react'
import type { MenuCategory } from '../../types/menu'
import { useI18n } from '../../i18n/i18n-context'
import { t } from '../../i18n/localized'
import { MenuItemCard } from './menu-item-card'
import { MenuItemModal } from './menu-item-modal'

type Props = {
  category: MenuCategory
  showHeading?: boolean
}

export function MenuCategoryView({ category, showHeading = true }: Props) {
  const { language } = useI18n()
  const [activeItemId, setActiveItemId] = useState<string | null>(null)

  const activeItem = useMemo(() => {
    if (!activeItemId) return null
    for (const section of category.sections) {
      const found = section.items.find((item) => item.id === activeItemId)
      if (found) return found
    }
    return null
  }, [activeItemId, category.sections])

  return (
    <section>
      {showHeading ? (
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center rounded-[calc(var(--zi-radius)+999px)] border border-[rgb(var(--zi-line))] bg-[rgb(var(--zi-accent))] px-5 py-2 text-xs font-semibold tracking-[0.38em] text-[rgb(var(--zi-bg))] uppercase shadow-[0_18px_45px_rgba(0,0,0,0.22)] md:px-6">
            {t(category.heading, language)}
          </div>
          <div className="mt-6 h-px w-full bg-[rgb(var(--zi-line))]" />
        </div>
      ) : null}

      <div className={showHeading ? 'mt-10 space-y-10 md:space-y-12' : 'space-y-10 md:space-y-12'}>
        {category.sections.map((section) => (
          <section key={section.id} className="scroll-mt-24">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--zi-line))] bg-[rgba(var(--zi-accent)/0.18)] px-4 py-2 text-xs font-semibold tracking-[0.34em] text-[rgb(var(--zi-text))] uppercase">
                {t(section.title, language)}
              </div>
              <div className="h-px flex-1 bg-[rgba(var(--zi-line)/0.85)]" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {section.items.map((item) => (
                <MenuItemCard key={item.id} item={item} onOpen={() => setActiveItemId(item.id)} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {activeItem ? <MenuItemModal item={activeItem} onClose={() => setActiveItemId(null)} /> : null}
    </section>
  )
}


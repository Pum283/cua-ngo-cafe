import { UI_TEXT } from '../../constants/ui-text'
import { t } from '../../i18n/localized'
import { useI18n } from '../../i18n/i18n-context'

export function LanguageSwitch() {
  const { language, setLanguage } = useI18n()

  const base =
    'rounded-full border px-3 py-2 text-xs font-semibold tracking-[0.18em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--zi-accent))]'
  const idle =
    'border-[rgba(var(--zi-line)/0.85)] bg-[rgba(var(--zi-surface)/0.55)] text-[rgb(var(--zi-text))] hover:bg-[rgba(var(--zi-surface)/0.70)] active:bg-[rgba(var(--zi-surface)/0.80)]'
  const selected =
    'border-[rgb(var(--zi-accent))] bg-[rgb(var(--zi-accent))] text-[rgb(var(--zi-bg))] hover:bg-[rgba(var(--zi-accent)/0.92)] active:bg-[rgba(var(--zi-accent)/0.86)]'

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className={`${base} ${language === 'vi' ? selected : idle}`}
        onClick={() => setLanguage('vi')}
        aria-label={t(UI_TEXT.languageVi, language)}
      >
        {t(UI_TEXT.languageVi, language)}
      </button>
      <button
        type="button"
        className={`${base} ${language === 'en' ? selected : idle}`}
        onClick={() => setLanguage('en')}
        aria-label={t(UI_TEXT.languageEn, language)}
      >
        {t(UI_TEXT.languageEn, language)}
      </button>
    </div>
  )
}


import type { LocalizedString } from './i18n'

export type MenuCategoryKey =
  | 'ca-phe-truyen-thong'
  | 'ca-phe-hien-dai'
  | 'sua-chua'
  | 'mon-yeu-thich'
  | 'thuc-uong-nong'
  | 'da-xay'
  | 'hot-trend-tra-trai-cay'
  | 'nuoc-ep'
  | 'tra-sua'

export type MenuItem = {
  id: string
  name: LocalizedString
  description: LocalizedString
  priceVnd: number
  imageSrc?: string
  imageSources?: string[]
}

export type MenuSection = {
  id: string
  title: LocalizedString
  items: MenuItem[]
}

export type MenuCategory = {
  key: MenuCategoryKey
  label: LocalizedString
  heading: LocalizedString
  sections: MenuSection[]
}


import type { MenuCategory, MenuCategoryKey } from '../types/menu'

export const MENU_ORDER: MenuCategoryKey[] = [
  'ca-phe-truyen-thong',
  'ca-phe-hien-dai',
  'sua-chua',
  'mon-yeu-thich',
  'thuc-uong-nong',
  'da-xay',
  'hot-trend-tra-trai-cay',
  'nuoc-ep',
  'tra-sua',
]

export const MENU_CATEGORIES: Record<MenuCategoryKey, Pick<MenuCategory, 'key' | 'label'>> = {
  'ca-phe-truyen-thong': { key: 'ca-phe-truyen-thong', label: { vi: 'Cà phê truyền thống', en: 'Traditional Coffee' } },
  'ca-phe-hien-dai': { key: 'ca-phe-hien-dai', label: { vi: 'Cà phê hiện đại', en: 'Modern Coffee' } },
  'sua-chua': { key: 'sua-chua', label: { vi: 'Sữa chua', en: 'Yogurt' } },
  'mon-yeu-thich': { key: 'mon-yeu-thich', label: { vi: 'Món yêu thích', en: 'Signature' } },
  'thuc-uong-nong': { key: 'thuc-uong-nong', label: { vi: 'Thức uống nóng', en: 'Hot Drinks' } },
  'da-xay': { key: 'da-xay', label: { vi: 'Đá xay', en: 'Ice Blend' } },
  'hot-trend-tra-trai-cay': { key: 'hot-trend-tra-trai-cay', label: { vi: 'Hot trend / Trà trái cây', en: 'Fruit Tea' } },
  'nuoc-ep': { key: 'nuoc-ep', label: { vi: 'Nước ép', en: 'Juices' } },
  'tra-sua': { key: 'tra-sua', label: { vi: 'Trà sữa', en: 'Milk Tea' } },
} as const

export const MENU_DATA: Record<MenuCategoryKey, MenuCategory> = {
  'ca-phe-truyen-thong': {
    key: 'ca-phe-truyen-thong',
    label: MENU_CATEGORIES['ca-phe-truyen-thong'].label,
    heading: { vi: 'CÀ PHÊ TRUYỀN THỐNG', en: 'TRADITIONAL COFFEE' },
    sections: [
      {
        id: 'ca-phe-truyen-thong',
        title: { vi: 'Cà phê truyền thống', en: 'Traditional coffee' },
        items: [
          { id: 'ca-phe-den-xay', name: { vi: 'Cà phê đen xay', en: 'Black coffee (machine)' }, description: { vi: 'Nóng / Đá', en: 'Hot / Iced' }, priceVnd: 31_000 },
          { id: 'ca-phe-sua-xay', name: { vi: 'Cà phê sữa xay', en: 'Milk coffee (machine)' }, description: { vi: 'Nóng / Đá', en: 'Hot / Iced' }, priceVnd: 31_000 },
          { id: 'ca-phe-den-phin', name: { vi: 'Cà phê đen phin', en: 'Black coffee (filter)' }, description: { vi: 'Nóng / Đá', en: 'Hot / Iced' }, priceVnd: 33_000 },
          { id: 'ca-phe-sua-phin', name: { vi: 'Cà phê sữa phin', en: 'Milk coffee (filter)' }, description: { vi: 'Nóng / Đá', en: 'Hot / Iced' }, priceVnd: 33_000 },
          { id: 'ca-phe-den-sai-gon', name: { vi: 'Cà phê đen Sài Gòn', en: 'Saigon black coffee' }, description: { vi: '', en: '' }, priceVnd: 36_000 },
          { id: 'ca-phe-sua-sai-gon', name: { vi: 'Cà phê sữa Sài Gòn', en: 'Saigon milk coffee' }, description: { vi: '', en: '' }, priceVnd: 39_000 },
        ],
      },
    ],
  },
  'ca-phe-hien-dai': {
    key: 'ca-phe-hien-dai',
    label: MENU_CATEGORIES['ca-phe-hien-dai'].label,
    heading: { vi: 'CÀ PHÊ HIỆN ĐẠI', en: 'MODERN COFFEE' },
    sections: [
      {
        id: 'ca-phe-hien-dai',
        title: { vi: 'Cà phê hiện đại', en: 'Modern coffee' },
        items: [
          { id: 'ca-phe-kem-trung', name: { vi: 'Cà phê kem trứng', en: 'Egg cream coffee' }, description: { vi: '', en: '' }, priceVnd: 43_000 },
          { id: 'ca-phe-kem-muoi', name: { vi: 'Cà phê kem muối', en: 'Salt cream coffee' }, description: { vi: '', en: '' }, priceVnd: 43_000 },
          { id: 'ca-phe-dua', name: { vi: 'Cà phê dừa', en: 'Coconut coffee' }, description: { vi: '', en: '' }, priceVnd: 47_000 },
          { id: 'bac-xiu', name: { vi: 'Bạc xỉu', en: 'White coffee' }, description: { vi: 'Nóng / Đá', en: 'Hot / Iced' }, priceVnd: 45_000 },
          { id: 'cacao-kem-trung-dua-nuong', name: { vi: 'Cacao kem trứng dừa nướng', en: 'Cocoa egg cream coconut baked' }, description: { vi: '', en: '' }, priceVnd: 45_000 },
          { id: 'latte', name: { vi: 'Latte', en: 'Latte' }, description: { vi: 'Nóng / Đá', en: 'Hot / Iced' }, priceVnd: 47_000 },
          { id: 'americano', name: { vi: 'Americano', en: 'Americano' }, description: { vi: 'Nóng / Đá', en: 'Hot / Iced' }, priceVnd: 47_000 },
          { id: 'cappuchino', name: { vi: 'Cappuchino', en: 'Cappuccino' }, description: { vi: 'Nóng / Đá', en: 'Hot / Iced' }, priceVnd: 47_000 },
        ],
      },
    ],
  },
  'sua-chua': {
    key: 'sua-chua',
    label: MENU_CATEGORIES['sua-chua'].label,
    heading: { vi: 'SỮA CHUA', en: 'YOGURT' },
    sections: [
      {
        id: 'sua-chua',
        title: { vi: 'Sữa chua', en: 'Yogurt' },
        items: [
          { id: 'sua-chua-trai-cay', name: { vi: 'Sữa chua trái cây', en: 'Fruit yogurt' }, description: { vi: '', en: '' }, priceVnd: 47_000 },
        ],
      },
    ],
  },
  'mon-yeu-thich': {
    key: 'mon-yeu-thich',
    label: MENU_CATEGORIES['mon-yeu-thich'].label,
    heading: { vi: 'MÓN YÊU THÍCH', en: 'SIGNATURE' },
    sections: [
      {
        id: 'mon-yeu-thich',
        title: { vi: 'Signature', en: 'Signature' },
        items: [
          { id: 'sig-ca-phe-kem-muoi', name: { vi: 'Cà phê kem muối', en: 'Salt cream coffee' }, description: { vi: '', en: '' }, priceVnd: 43_000 },
          { id: 'sig-ca-phe-kem-trung', name: { vi: 'Cà phê kem trứng', en: 'Egg cream coffee' }, description: { vi: '', en: '' }, priceVnd: 43_000 },
          { id: 'sig-ca-phe-dua', name: { vi: 'Cà phê dừa', en: 'Coconut coffee' }, description: { vi: '', en: '' }, priceVnd: 47_000 },
          { id: 'sig-sinh-to-xoai', name: { vi: 'Sinh tố xoài', en: 'Mango smoothie' }, description: { vi: '', en: '' }, priceVnd: 47_000 },
        ],
      },
    ],
  },
  'thuc-uong-nong': {
    key: 'thuc-uong-nong',
    label: MENU_CATEGORIES['thuc-uong-nong'].label,
    heading: { vi: 'THỨC UỐNG NÓNG', en: 'HOT DRINKS' },
    sections: [
      {
        id: 'thuc-uong-nong',
        title: { vi: 'Thức uống nóng', en: 'Hot drinks' },
        items: [
          { id: 'cacao-nong', name: { vi: 'Cacao nóng', en: 'Hot cocoa' }, description: { vi: '', en: '' }, priceVnd: 45_000 },
          { id: 'tra-gung-nha-noi', name: { vi: 'Trà gừng Nhà Nội', en: "Grandma's ginger tea" }, description: { vi: '', en: '' }, priceVnd: 45_000 },
        ],
      },
    ],
  },
  'da-xay': {
    key: 'da-xay',
    label: MENU_CATEGORIES['da-xay'].label,
    heading: { vi: 'ĐÁ XAY', en: 'ICE BLEND' },
    sections: [
      {
        id: 'da-xay',
        title: { vi: 'Đá xay', en: 'Ice blend' },
        items: [
          { id: 'sinh-to-xoai', name: { vi: 'Sinh tố xoài', en: 'Mango smoothie' }, description: { vi: '', en: '' }, priceVnd: 47_000 },
          { id: 'sinh-to-dau-tam', name: { vi: 'Sinh tố dâu tằm', en: 'Mulberry smoothie' }, description: { vi: '', en: '' }, priceVnd: 47_000 },
          { id: 'sinh-to-phuc-bon-tu', name: { vi: 'Sinh tố phúc bồn tử', en: 'Raspberry smoothie' }, description: { vi: '', en: '' }, priceVnd: 47_000 },
        ],
      },
      {
        id: 'topping',
        title: { vi: 'Topping', en: 'Topping' },
        items: [
          { id: 'topping-hat-dua', name: { vi: 'Hạt dừa', en: 'Coconut jelly' }, description: { vi: '', en: '' }, priceVnd: 7_000 },
          { id: 'topping-huong-duong', name: { vi: 'Hướng dương', en: 'Sunflower seeds' }, description: { vi: '', en: '' }, priceVnd: 15_000 },
        ],
      },
    ],
  },
  'hot-trend-tra-trai-cay': {
    key: 'hot-trend-tra-trai-cay',
    label: MENU_CATEGORIES['hot-trend-tra-trai-cay'].label,
    heading: { vi: 'HOT TREND / TRÀ TRÁI CÂY', en: 'FRUIT TEA' },
    sections: [
      {
        id: 'hot-trend-tra-trai-cay',
        title: { vi: 'Trà trái cây', en: 'Fruit tea' },
        items: [
          { id: 'tra-dau-tam-nha-noi', name: { vi: 'Trà dâu tằm Nhà Nội', en: "Grandma's mulberry tea" }, description: { vi: '', en: '' }, priceVnd: 45_000 },
          { id: 'tra-phuc-bon-tu-nha-noi', name: { vi: 'Trà phúc bồn tử Nhà Nội', en: "Grandma's raspberry tea" }, description: { vi: '', en: '' }, priceVnd: 45_000 },
          { id: 'tra-thanh-long-buoi-vang', name: { vi: 'Trà thanh long bưởi vàng', en: 'Green grapefruit yellow tea' }, description: { vi: '', en: '' }, priceVnd: 45_000 },
          { id: 'tra-nho-viet-quat', name: { vi: 'Trà nho việt quất', en: 'Blueberry grape tea' }, description: { vi: '', en: '' }, priceVnd: 45_000 },
        ],
      },
    ],
  },
  'nuoc-ep': {
    key: 'nuoc-ep',
    label: MENU_CATEGORIES['nuoc-ep'].label,
    heading: { vi: 'NƯỚC ÉP', en: 'JUICES' },
    sections: [
      {
        id: 'nuoc-ep',
        title: { vi: 'Nước ép', en: 'Juices' },
        items: [
          { id: 'cam-ep', name: { vi: 'Cam ép', en: 'Orange juice' }, description: { vi: '', en: '' }, priceVnd: 45_000 },
          { id: 'thom-ep', name: { vi: 'Thơm ép', en: 'Pineapple juice' }, description: { vi: '', en: '' }, priceVnd: 45_000 },
          { id: 'dua-trai', name: { vi: 'Dừa trái', en: 'Coconut water' }, description: { vi: '', en: '' }, priceVnd: 45_000 },
        ],
      },
    ],
  },
  'tra-sua': {
    key: 'tra-sua',
    label: MENU_CATEGORIES['tra-sua'].label,
    heading: { vi: 'TRÀ SỮA', en: 'MILK TEA' },
    sections: [
      {
        id: 'tra-sua',
        title: { vi: 'Trà sữa', en: 'Milk tea' },
        items: [],
      },
    ],
  },
} as const


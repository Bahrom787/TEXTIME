const catalogCopy = {
  ru: {
    featuredTitle: 'Избранная коллекция',
    featuredSubtitle: 'Лучшие товары из нашего каталога',
    fullCatalog: 'Полный каталог',
    catalogTitle: 'Каталог товаров',
    category: 'Категория:',
    allCategories: 'Все категории',
    productType: 'Тип товара:',
    allTypes: 'Все типы',
    search: 'Поиск:',
    searchPlaceholder: 'Искать товар...',
    found: 'Найдено товаров:',
    notFound: 'Товары не найдены. Попробуйте изменить фильтры.',
    details: 'Подробнее',
    sizes: 'Размеры:',
    color: 'Цвет:',
    colors: 'Расцветки:',
    price: 'Узнать цену',
    close: 'Закрыть',
    colorLabel: index => `Цвет ${index + 1}`,
    fallbackProduct: id => `Товар ${id}`,
  },
  en: {
    featuredTitle: 'Featured Collection',
    featuredSubtitle: 'Selected products from our catalog',
    fullCatalog: 'Full catalog',
    catalogTitle: 'Product Catalog',
    category: 'Category:',
    allCategories: 'All categories',
    productType: 'Product type:',
    allTypes: 'All types',
    search: 'Search:',
    searchPlaceholder: 'Search product...',
    found: 'Products found:',
    notFound: 'No products found. Try changing the filters.',
    details: 'Details',
    sizes: 'Sizes:',
    color: 'Color:',
    colors: 'Colorways:',
    price: 'Check price',
    close: 'Close',
    colorLabel: index => `Color ${index + 1}`,
    fallbackProduct: id => `Product ${id}`,
  },
  uz: {
    featuredTitle: 'Tanlangan kolleksiya',
    featuredSubtitle: 'Katalogimizdagi eng yaxshi mahsulotlar',
    fullCatalog: 'To‘liq katalog',
    catalogTitle: 'Mahsulotlar katalogi',
    category: 'Kategoriya:',
    allCategories: 'Barcha kategoriyalar',
    productType: 'Mahsulot turi:',
    allTypes: 'Barcha turlar',
    search: 'Qidiruv:',
    searchPlaceholder: 'Mahsulot qidirish...',
    found: 'Topilgan mahsulotlar:',
    notFound: 'Mahsulotlar topilmadi. Filtrlarni o‘zgartirib ko‘ring.',
    details: 'Batafsil',
    sizes: 'O‘lchamlar:',
    color: 'Rang:',
    colors: 'Ranglar:',
    price: 'Narxni bilish',
    close: 'Yopish',
    colorLabel: index => `Rang ${index + 1}`,
    fallbackProduct: id => `Mahsulot ${id}`,
  },
  zh: {
    featuredTitle: '精选系列',
    featuredSubtitle: '来自我们目录的精选产品',
    fullCatalog: '完整目录',
    catalogTitle: '产品目录',
    category: '类别：',
    allCategories: '所有类别',
    productType: '产品类型：',
    allTypes: '所有类型',
    search: '搜索：',
    searchPlaceholder: '搜索产品...',
    found: '找到产品：',
    notFound: '未找到产品。请尝试更改筛选条件。',
    details: '详情',
    sizes: '尺码：',
    color: '颜色：',
    colors: '配色：',
    price: '询问价格',
    close: '关闭',
    colorLabel: index => `颜色 ${index + 1}`,
    fallbackProduct: id => `产品 ${id}`,
  },
  tr: {
    featuredTitle: 'Öne Çıkan Koleksiyon',
    featuredSubtitle: 'Kataloğumuzdan seçilen ürünler',
    fullCatalog: 'Tam katalog',
    catalogTitle: 'Ürün Kataloğu',
    category: 'Kategori:',
    allCategories: 'Tüm kategoriler',
    productType: 'Ürün tipi:',
    allTypes: 'Tüm tipler',
    search: 'Arama:',
    searchPlaceholder: 'Ürün ara...',
    found: 'Bulunan ürün:',
    notFound: 'Ürün bulunamadı. Filtreleri değiştirmeyi deneyin.',
    details: 'Detaylar',
    sizes: 'Bedenler:',
    color: 'Renk:',
    colors: 'Renk seçenekleri:',
    price: 'Fiyat sor',
    close: 'Kapat',
    colorLabel: index => `Renk ${index + 1}`,
    fallbackProduct: id => `Ürün ${id}`,
  },
}

const typeTranslations = {
  'Футболки': { en: 'T-shirts', uz: 'Futbolkalar', zh: 'T恤', tr: 'Tişörtler' },
  'Платья': { en: 'Dresses', uz: 'Ko‘ylaklar', zh: '连衣裙', tr: 'Elbiseler' },
  'Платье': { en: 'Dress', uz: 'Ko‘ylak', zh: '连衣裙', tr: 'Elbise' },
  'Трусы': { en: 'Underwear', uz: 'Ichki kiyim', zh: '内衣', tr: 'İç giyim' },
  'Велосипедки': { en: 'Biker shorts', uz: 'Veloshortilar', zh: '骑行短裤', tr: 'Bisiklet şortu' },
  'Лосины': { en: 'Leggings', uz: 'Legginslar', zh: '打底裤', tr: 'Taytlar' },
  'Шорты': { en: 'Shorts', uz: 'Shortilar', zh: '短裤', tr: 'Şortlar' },
  'Юбки': { en: 'Skirts', uz: 'Yubkalar', zh: '半身裙', tr: 'Etekler' },
  'Комбинезон': { en: 'Jumpsuit', uz: 'Kombinezon', zh: '连体衣', tr: 'Tulum' },
  'Комбинезоны': { en: 'Jumpsuits', uz: 'Kombinezonlar', zh: '连体衣', tr: 'Tulumlar' },
}

const genderTranslations = {
  'Женские': { en: 'Women', uz: 'Ayollar', zh: '女装', tr: 'Kadın' },
  'Мужские': { en: 'Men', uz: 'Erkaklar', zh: '男装', tr: 'Erkek' },
  'Детские': { en: 'Kids', uz: 'Bolalar', zh: '童装', tr: 'Çocuk' },
}

const productNameTranslations = {
  1: {
    ru: 'Трикотажное платье',
    en: 'Knitted dress',
    uz: 'Trikotaj ko‘ylak',
    zh: '针织连衣裙',
    tr: 'Triko elbise',
  },
  8: {
    ru: 'Трикотажное платье',
    en: 'Knitted dress',
    uz: 'Trikotaj ko‘ylak',
    zh: '针织连衣裙',
    tr: 'Triko elbise',
  },
  9: {
    ru: 'Короткие легинсы',
    en: 'Short leggings',
    uz: 'Qisqa legginslar',
    zh: '短款打底裤',
    tr: 'Kısa tayt',
  },
  10: {
    ru: 'Повседневные шорты',
    en: 'Casual shorts',
    uz: 'Kundalik shortilar',
    zh: '日常短裤',
    tr: 'Günlük şort',
  },
  16: {
    ru: 'Майка с подплечниками',
    en: 'Padded shoulder top',
    uz: 'Yelkali mayka',
    zh: '垫肩背心',
    tr: 'Vatkalı üst',
  },
  18: {
    ru: 'Базовые легинсы',
    en: 'Basic leggings',
    uz: 'Bazaviy legginslar',
    zh: '基础打底裤',
    tr: 'Basic tayt',
  },
}

export const getCatalogCopy = language => catalogCopy[language] || catalogCopy.ru

export const translateType = (type, language) => {
  if (language === 'ru') return type
  return typeTranslations[type]?.[language] || type
}

export const translateGender = (gender, language) => {
  if (language === 'ru') return gender
  return genderTranslations[gender]?.[language] || gender
}

export const translateProductName = (product, language) => {
  const translatedName = productNameTranslations[product.id]?.[language]
  if (translatedName) return translatedName

  if (language === 'ru') return product.name
  return getCatalogCopy(language).fallbackProduct(product.id)
}

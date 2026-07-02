import { products } from './products'

const variantGroups = [
  [1, 2, 3, 4, 5, 6, 7],
  [10, 11, 12, 13, 14, 15],
  [16, 17],
  [18, 19, 20, 21],
  [22, 23],
  [24, 25],
  [26, 27],
  [29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
  [39, 40, 41],
  [46, 47, 48],
  [49, 50, 51],
  [52, 53],
  [54, 55],
  [56, 57, 58],
  [60, 61, 62, 63],
  [66, 71, 72, 73],
]

const productById = new Map(products.map(product => [product.id, product]))
const groupedIds = new Set(variantGroups.flat())

const uniqueValues = values => Array.from(new Set(values.filter(Boolean)))

const createVariant = (product, index) => ({
  id: product.id,
  label: `Цвет ${index + 1}`,
  name: product.name,
  image: product.image,
  gender: product.gender,
  type: product.type,
})

const getProductsByIds = ids => ids.map(id => productById.get(id)).filter(Boolean)

const mergeProducts = ids => {
  const groupProducts = getProductsByIds(ids)
  const variants = groupProducts.map(createVariant)
  const base = groupProducts[0]

  if (!base) return null

  return {
    ...base,
    variantIds: ids,
    variants,
    images: variants.map(variant => variant.image),
    colors: variants.map(variant => variant.label),
    genderOptions: uniqueValues(groupProducts.map(product => product.gender)),
    typeOptions: uniqueValues(groupProducts.map(product => product.type)),
    sizes: uniqueValues(groupProducts.flatMap(product => product.sizes || [])),
  }
}

export const catalogProducts = [
  ...variantGroups.map(mergeProducts).filter(Boolean),
  ...products
    .filter(product => !groupedIds.has(product.id))
    .map(product => ({
      ...product,
      variants: [],
      images: product.image ? [product.image] : [],
      genderOptions: product.gender ? [product.gender] : [],
      typeOptions: product.type ? [product.type] : [],
    })),
].sort((a, b) => a.id - b.id)

export const getCatalogProducts = () => catalogProducts

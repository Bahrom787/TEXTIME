import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { getCatalogProducts } from '../../data/productGroups'
import {
  getCatalogCopy,
  translateGender,
  translateProductName,
  translateType,
} from '../../data/catalogTranslations'

const Products = ({ language = 'ru' }) => {
  const [selectedGender, setSelectedGender] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const catalogCopy = getCatalogCopy(language)
  const groupedProducts = useMemo(() => getCatalogProducts(), [])
  const genders = useMemo(
    () =>
      Array.from(
        new Set(groupedProducts.flatMap(product => product.genderOptions || [product.gender])),
      ).filter(Boolean),
    [groupedProducts],
  )
  const types = useMemo(
    () =>
      Array.from(
        new Set(groupedProducts.flatMap(product => product.typeOptions || [product.type])),
      ).filter(Boolean),
    [groupedProducts],
  )

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return groupedProducts.filter(product => {
      const productGenders = product.genderOptions || [product.gender]
      const productTypes = product.typeOptions || [product.type]
      const translatedName = translateProductName(product, language).toLowerCase()
      const translatedTypes = productTypes.map(type => translateType(type, language).toLowerCase())
      const genderMatch = selectedGender === 'all' || productGenders.includes(selectedGender)
      const typeMatch = selectedType === 'all' || productTypes.includes(selectedType)
      const searchMatch =
        !normalizedSearch ||
        translatedName.includes(normalizedSearch) ||
        translatedTypes.some(type => type.includes(normalizedSearch))

      return genderMatch && typeMatch && searchMatch
    })
  }, [groupedProducts, language, selectedGender, selectedType, searchTerm])

  return (
    <section className="products-section">
      <div className="container">
        <h2>{catalogCopy.catalogTitle}</h2>

        <div className="products-filters">
          <div className="filter-group">
            <label>{catalogCopy.category}</label>
            <select
              value={selectedGender}
              onChange={event => setSelectedGender(event.target.value)}
            >
              <option value="all">{catalogCopy.allCategories}</option>
              {genders.map(gender => (
                <option key={gender} value={gender}>
                  {translateGender(gender, language)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>{catalogCopy.productType}</label>
            <select
              value={selectedType}
              onChange={event => setSelectedType(event.target.value)}
            >
              <option value="all">{catalogCopy.allTypes}</option>
              {types.map(type => (
                <option key={type} value={type}>
                  {translateType(type, language)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>{catalogCopy.search}</label>
            <input
              type="text"
              placeholder={catalogCopy.searchPlaceholder}
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
            />
          </div>
        </div>

        <div className="products-count">
          {catalogCopy.found} {filteredProducts.length}
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                selectedType={selectedType}
                language={language}
              />
            ))
          ) : (
            <div className="no-products">
              <p>{catalogCopy.notFound}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Products

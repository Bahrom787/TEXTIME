import { useState } from 'react'
import ProductCard from './ProductCard'
import Products from './Products'
import { getCatalogProducts } from '../../data/productGroups'
import { getCatalogCopy } from '../../data/catalogTranslations'

const Collection = ({ language = 'ru' }) => {
  const [showFullCatalog, setShowFullCatalog] = useState(false)
  const collectionProducts = getCatalogProducts().slice(0, 6)
  const catalogCopy = getCatalogCopy(language)

  return (
    <>
      <section className="collection-section" id="collection">
        <div className="container">
          <div className="collection-header">
            <h2>{catalogCopy.featuredTitle}</h2>
            <p className="collection-subtitle">{catalogCopy.featuredSubtitle}</p>
          </div>

          <div className="collection-grid">
            {collectionProducts.map(product => (
              <ProductCard key={product.id} product={product} language={language} />
            ))}
          </div>

          <div className="catalog-footer">
            <button
              className="catalog-button"
              onClick={() => setShowFullCatalog(true)}
            >
              <span>{catalogCopy.fullCatalog}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 9l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {showFullCatalog && (
        <div className="modal-overlay" onClick={() => setShowFullCatalog(false)}>
          <div className="modal-content" onClick={event => event.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowFullCatalog(false)}
              aria-label={catalogCopy.close}
            >
              ×
            </button>
            <Products language={language} />
          </div>
        </div>
      )}
    </>
  )
}

export default Collection

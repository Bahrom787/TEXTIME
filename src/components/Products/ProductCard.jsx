import { useEffect, useState } from 'react'
import ProductModal from './ProductModal'
import {
  getCatalogCopy,
  translateProductName,
  translateType,
} from '../../data/catalogTranslations'

const ProductCard = ({ product, selectedType = 'all', language = 'ru' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)

  const catalogCopy = getCatalogCopy(language)
  const hasVariants = product.variants && product.variants.length > 1
  const selectedVariant = hasVariants ? product.variants[selectedVariantIndex] : null
  const displayImage = selectedVariant ? selectedVariant.image : product.image
  const displayType = selectedVariant ? selectedVariant.type : product.type
  const displayName = translateProductName(product, language)

  useEffect(() => {
    if (!hasVariants || selectedType === 'all') return

    const matchingVariantIndex = product.variants.findIndex(variant => variant.type === selectedType)

    if (matchingVariantIndex >= 0) {
      setSelectedVariantIndex(matchingVariantIndex)
    }
  }, [hasVariants, product.variants, selectedType])

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img src={displayImage} alt={displayName} />
        </div>

        <div className="product-info">
          <h3>{displayName}</h3>
          <p className="category">{translateType(displayType, language)}</p>

          {hasVariants && (
            <div className="product-color-options" aria-label={catalogCopy.color}>
              {product.variants.map((variant, index) => {
                const colorLabel = catalogCopy.colorLabel(index)

                return (
                  <button
                    key={variant.id}
                    type="button"
                    className={`color-option ${index === selectedVariantIndex ? 'active' : ''}`}
                    onClick={() => setSelectedVariantIndex(index)}
                    aria-label={colorLabel}
                    title={colorLabel}
                  >
                    <img src={variant.image} alt="" />
                  </button>
                )
              })}
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <p className="sizes">
              <strong>{catalogCopy.sizes}</strong> {product.sizes.join(', ')}
            </p>
          )}

          {hasVariants && (
            <p className="colors">
              <strong>{catalogCopy.colors}</strong> {product.variants.length}
            </p>
          )}

          <button
            className="price-button"
            onClick={() => setIsModalOpen(true)}
          >
            {catalogCopy.details}
          </button>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialVariantIndex={selectedVariantIndex}
        language={language}
      />
    </>
  )
}

export default ProductCard

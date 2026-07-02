import { useEffect, useState } from 'react'
import {
  getCatalogCopy,
  translateProductName,
  translateType,
} from '../../data/catalogTranslations'

const ProductModal = ({ product, isOpen, onClose, initialVariantIndex = 0, language = 'ru' }) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(initialVariantIndex)

  const catalogCopy = getCatalogCopy(language)
  const hasVariants = product && product.variants && product.variants.length > 1
  const selectedVariant = hasVariants ? product.variants[selectedVariantIndex] : null
  const displayImage = selectedVariant ? selectedVariant.image : product?.image
  const displayType = selectedVariant ? selectedVariant.type : product?.type
  const displayName = product ? translateProductName(product, language) : ''
  const telegramUrl = 'https://t.me/mbbrand2026'

  useEffect(() => {
    setSelectedVariantIndex(initialVariantIndex)
  }, [initialVariantIndex, product?.id])

  if (!isOpen || !product) return null

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal-content" onClick={event => event.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label={catalogCopy.close}>×</button>

        <div className="product-modal-body">
          <div className="product-modal-image">
            <img src={displayImage} alt={displayName} />
          </div>

          <div className="product-modal-info">
            <h2>{displayName}</h2>

            <p className="product-modal-category">{translateType(displayType, language)}</p>

            {hasVariants && (
              <div className="product-modal-section">
                <strong>{catalogCopy.color}</strong>
                <p>{catalogCopy.colorLabel(selectedVariantIndex)}</p>
                <div className="modal-color-options" aria-label={catalogCopy.color}>
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
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="product-modal-section">
                <strong>{catalogCopy.sizes}</strong>
                <p>{product.sizes.join(', ')}</p>
              </div>
            )}

            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-price-button"
            >
              {catalogCopy.price}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal

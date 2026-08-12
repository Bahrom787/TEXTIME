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

  useEffect(() => {
    if (!isOpen) return

    document.body.classList.add('no-scroll')

    return () => {
      if (!document.querySelector('.modal-overlay')) {
        document.body.classList.remove('no-scroll')
      }
    }
  }, [isOpen])

  const goToVariant = direction => {
    if (!hasVariants) return
    const total = product.variants.length
    setSelectedVariantIndex(prev => (prev + direction + total) % total)
  }

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = event => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goToVariant(-1)
      if (event.key === 'ArrowRight') goToVariant(1)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, hasVariants, product])

  if (!isOpen || !product) return null

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal-content" onClick={event => event.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label={catalogCopy.close}>×</button>

        <div className="product-modal-body">
          <div className="product-modal-image">
            {hasVariants && (
              <button
                type="button"
                className="modal-nav prev"
                onClick={() => goToVariant(-1)}
                aria-label={catalogCopy.color}
              >
                ‹
              </button>
            )}
            <img src={displayImage} alt={displayName} loading="lazy" decoding="async" />
            {hasVariants && (
              <button
                type="button"
                className="modal-nav next"
                onClick={() => goToVariant(1)}
                aria-label={catalogCopy.color}
              >
                ›
              </button>
            )}
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
                        <img src={variant.image} alt="" loading="lazy" decoding="async" />
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

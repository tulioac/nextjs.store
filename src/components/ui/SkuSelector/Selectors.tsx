import { useRouter } from 'next/router'
import type { ChangeEvent } from 'react'

import SkuSelector from './SkuSelector'
import { navigateToSku } from './skuVariants'
import type { SkuVariantsByName } from './skuVariants'

interface Props {
  slugsMap: Record<string, string>
  availableVariations: SkuVariantsByName
  activeVariations: Record<string, string>
}

/**
 * Name of the property that's considered **dominant**. Which means that all
 * other varying properties will be filtered according to the current value
 * of this property.
 *
 * Ex: If `Red` is the current value for the 'Color' variation, we'll only
 * render possible values for 'Size' that are available in `Red`.
 */
const DOMINANT_SKU_SELECTOR_PROPERTY = 'Color'

function Selectors({ slugsMap, availableVariations, activeVariations }: Props) {
  const router = useRouter()

  // 'Color' variants are singled-out here because they will always be rendered
  // as 'image' variants. And they're also the 'dominant' variants in our store.
  const { Color: colorOptions, ...otherSkuVariants } = availableVariations

  function handleOnChange(
    e: ChangeEvent<HTMLInputElement>,
    updatedVariationName: string
  ) {
    const newVariationValue = e.currentTarget.value

    navigateToSku({
      router,
      slugsMap,
      updatedVariationName,
      selectorsState: activeVariations,
      updatedVariationValue: newVariationValue,
      dominantSku: DOMINANT_SKU_SELECTOR_PROPERTY,
    })
  }

  return (
    <section>
      {colorOptions && (
        <SkuSelector
          label="Color"
          variant="image"
          options={colorOptions}
          activeValue={activeVariations.Color}
          onChange={(e) => handleOnChange(e, 'Color')}
        />
      )}
      {otherSkuVariants &&
        Object.keys(otherSkuVariants).map((skuVariant) => (
          <SkuSelector
            variant="label"
            key={skuVariant}
            label={skuVariant}
            options={otherSkuVariants[skuVariant]}
            activeValue={activeVariations[skuVariant]}
            onChange={(e) => handleOnChange(e, skuVariant)}
          />
        ))}
    </section>
  )
}

export default Selectors

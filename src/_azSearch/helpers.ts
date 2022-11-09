import { AzureSearchFacetDefinition } from './azsearch.type'

/**
 * Generate string array of facet definition
 *
 * @param values
 * @returns
 */
export const generateFacets = (values: AzureSearchFacetDefinition[]): string[] => {
  let isValid = true
  values.forEach((item) => {
    isValid = isValid && Boolean(item.propertyName)
  })

  if (!isValid) {
    throw new Error('PropertyName is required.')
  }

  return values.map((item) => {
    let result = `${item.propertyName}`
    if (typeof item.count === 'number') {
      result = `${result},count:${item.count}`
    }

    if (typeof item.sort === 'string') {
      result = `${result},count:${item.count},sort:${item.sort}`
    }

    if (typeof item.values === 'string') {
      result = `${result},values: ${item.values}`
    }

    if (typeof item.interval === 'string') {
      result = `${result},interval:${item.interval}`
    }

    if (typeof item.timeoffset === 'string') {
      result = `${result},timeoffset:${item.timeoffset}`
    }

    return result
  })
}

// export const findFacetDefinition = (
//   values: AzureSearchFacetDefinition[],
//   propertyName: string
// ): AzureSearchFacetDefinition | undefined => {
//   return values.find((x) => x.propertyName === propertyName)
// }

/**
 * Replace ' (single quote) to '' (two single quote)
 *
 * @param value
 * @returns
 */
export const normalizeFilterValue = (value: string): string => {
  return value.replace(/'/, `''`)
}

/**
 * Generate string array of facet definition
 *
 * @param values
 * @returns
 */
export var generateFacets = function (values) {
    var isValid = true;
    values.forEach(function (item) {
        isValid = isValid && Boolean(item.propertyName);
    });
    if (!isValid) {
        throw new Error('PropertyName is required.');
    }
    return values.map(function (item) {
        var result = "".concat(item.propertyName);
        if (typeof item.count === 'number') {
            result = "".concat(result, ",count:").concat(item.count);
        }
        if (typeof item.sort === 'string') {
            result = "".concat(result, ",count:").concat(item.count, ",sort:").concat(item.sort);
        }
        if (typeof item.values === 'string') {
            result = "".concat(result, ",values: ").concat(item.values);
        }
        if (typeof item.interval === 'string') {
            result = "".concat(result, ",interval:").concat(item.interval);
        }
        if (typeof item.timeoffset === 'string') {
            result = "".concat(result, ",timeoffset:").concat(item.timeoffset);
        }
        return result;
    });
};
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
export var normalizeFilterValue = function (value) {
    return value.replace(/'/, "''");
};

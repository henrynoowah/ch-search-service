import { AzureSearchFacetDefinition } from './azsearch.type';
/**
 * Generate string array of facet definition
 *
 * @param values
 * @returns
 */
export declare const generateFacets: (values: AzureSearchFacetDefinition[]) => string[];
/**
 * Replace ' (single quote) to '' (two single quote)
 *
 * @param value
 * @returns
 */
export declare const normalizeFilterValue: (value: string) => string;

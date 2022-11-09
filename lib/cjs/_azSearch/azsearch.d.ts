import { SearchResults, SearchServiceConfig } from "./azsearch.type";
export declare const azsearch: ({ options, idx, facetDefinition, stage, az_search_endpoint, az_search_key, }: SearchServiceConfig) => Promise<{
    results: SearchResults;
    totalCount: number;
}>;

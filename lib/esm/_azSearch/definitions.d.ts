import { AzureSearchFacetDefinition } from './azsearch.type';
/**
 * Hospital index facet definitions
 */
declare const facetDefinitions_hospital: AzureSearchFacetDefinition[];
/**
 * Doctor index facet definitions
 */
declare const facetDefinitions_doctors: AzureSearchFacetDefinition[];
/**
 * Deals index facet definitions
 */
declare const facetDefinitions_deals: AzureSearchFacetDefinition[];
/**
 * Specialties index facet definitions
 */
declare const facetDefinitions_specialties: AzureSearchFacetDefinition[];
/**
 * HospitalSpecialties index facet definitions
 */
declare const facetDefinitions_hospitalSpecialties: AzureSearchFacetDefinition[];
/**
 * SpecialtyTypes index facet definitions
 */
declare const facetDefinitions_departments: AzureSearchFacetDefinition[];
/**
 * articles index facet definitions
 */
declare const facetDefinitions_articles: AzureSearchFacetDefinition[];
/**
 * articles index facet definitions
 */
declare const facetDefinitions_services: AzureSearchFacetDefinition[];
/**
 * contributors index facet definitions
 */
declare const facetDefinitions_contributers: AzureSearchFacetDefinition[];
/**
 * countries index facet definitions
 */
declare const facetDefinitions_countries: AzureSearchFacetDefinition[];
/**
 * faqs index facet definitions
 */
declare const facetDefinitions_faqs: AzureSearchFacetDefinition[];
/**
 * faqs index facet definitions
 */
declare const facetDefinitions_faqCateogries: AzureSearchFacetDefinition[];
declare const facetDefinitions: {
    facetDefinitions_hospital: AzureSearchFacetDefinition[];
    facetDefinitions_doctors: AzureSearchFacetDefinition[];
    facetDefinitions_deals: AzureSearchFacetDefinition[];
    facetDefinitions_specialties: AzureSearchFacetDefinition[];
    facetDefinitions_hospitalSpecialties: AzureSearchFacetDefinition[];
    facetDefinitions_departments: AzureSearchFacetDefinition[];
    facetDefinitions_articles: AzureSearchFacetDefinition[];
    facetDefinitions_services: AzureSearchFacetDefinition[];
    facetDefinitions_contributers: AzureSearchFacetDefinition[];
    facetDefinitions_countries: AzureSearchFacetDefinition[];
    facetDefinitions_faqs: AzureSearchFacetDefinition[];
    facetDefinitions_faqCateogries: AzureSearchFacetDefinition[];
};
export declare type FacetDefinitions = typeof facetDefinitions_hospital | typeof facetDefinitions_doctors | typeof facetDefinitions_deals | typeof facetDefinitions_specialties | typeof facetDefinitions_hospitalSpecialties | typeof facetDefinitions_departments | typeof facetDefinitions_articles | typeof facetDefinitions_services | typeof facetDefinitions_contributers | typeof facetDefinitions_countries | typeof facetDefinitions_faqs | typeof facetDefinitions_faqCateogries;
export default facetDefinitions;

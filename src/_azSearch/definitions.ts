import { AzureSearchFacetDefinition } from './azsearch.type'
/**
 * Hospital index facet definitions
 */
const facetDefinitions_hospital: AzureSearchFacetDefinition[] = [
  { propertyName: 'BedsCount', count: 5, sort: 'count' },
  { propertyName: 'OperationsPerYear', count: 5, sort: 'count' },
  { propertyName: 'FoundationYear', count: 5, sort: 'count' },
  { propertyName: 'MedicalStaffCount', count: 5, sort: 'count' },
  { propertyName: 'DoctorCount', count: 5, sort: 'count' },
  { propertyName: 'ConsultationEnabled', count: 5, sort: 'count' },
  { propertyName: 'ConsultationFee', count: 5, sort: 'count' },
  { propertyName: 'TimeZone', count: 5, sort: 'count' },
  { propertyName: 'PaymentEnabled' },
  { propertyName: 'MarketingType', count: 5, sort: 'count' },
  { propertyName: 'Location/Country', count: 5 },
  { propertyName: 'Location/State', count: 5 },
  { propertyName: 'Location/County', count: 5 },
  { propertyName: 'Location/City', count: 5 },
  { propertyName: 'Location/ZipCode', count: 5 },
  { propertyName: 'Country/Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Country/Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Country/Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Accreditations/Name', count: 5, sort: 'count' },
  { propertyName: 'HospitalSpecialties/Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'HospitalSpecialties/Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'HospitalSpecialties/Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * Doctor index facet definitions
 */
const facetDefinitions_doctors: AzureSearchFacetDefinition[] = [
  { propertyName: 'ConsultationEnabled', count: 5, sort: 'count' },
  { propertyName: 'ConsultationFee', count: 5, sort: 'count' },
  { propertyName: 'TimeZone', count: 5, sort: 'count' },
  { propertyName: 'Locations/Country', count: 5 },
  { propertyName: 'Locations/State', count: 5, sort: 'count' },
  { propertyName: 'Locations/County', count: 5, sort: 'count' },
  { propertyName: 'Locations/City', count: 5, sort: 'count' },
  { propertyName: 'Locations/ZipCode', count: 5, sort: 'count' },
  { propertyName: 'Locations/LocationType', count: 5, sort: 'count' },
  { propertyName: 'Hospital/MarketingType', count: 5, sort: 'count' },
  { propertyName: 'Hospital/Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Hospital/Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Hospital/Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Specialties/Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Specialties/Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Specialties/Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'DoctorCertificates/Certificate', count: 5, sort: 'count' },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]
/**
 * Deals index facet definitions
 */
const facetDefinitions_deals: AzureSearchFacetDefinition[] = [
  { propertyName: 'MarketingType', count: 5, sort: 'count' },
  { propertyName: 'Hospital/MarketingType', count: 5 },
  { propertyName: 'Hospital/Translations/LanguageCode', count: 5 },
  { propertyName: 'Hospital/Translations/Name', count: 5 },
  { propertyName: 'Hospital/Translations/Slug', count: 5 },
  { propertyName: 'Location/Country', count: 5 },
  { propertyName: 'Location/State', count: 5 },
  { propertyName: 'Location/County', count: 5 },
  { propertyName: 'Location/City', count: 5 },
  { propertyName: 'Location/ZipCode', count: 5 },
  { propertyName: 'Packages/RefundPolicy', count: 5 },
  { propertyName: 'Packages/Bonus', count: 5 },
  { propertyName: 'Packages/Price', count: 5 },
  { propertyName: 'Services/Translations/LanguageCode', count: 5 },
  { propertyName: 'Services/Translations/Name', count: 5 },
  { propertyName: 'Services/Translations/Slug', count: 5 },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * Specialties index facet definitions
 */
const facetDefinitions_specialties: AzureSearchFacetDefinition[] = [
  { propertyName: 'Department/Translations/LanguageCode', count: 5 },
  { propertyName: 'Department/Translations/Name', count: 5 },
  { propertyName: 'Department/Translations/Slug', count: 5 },
  { propertyName: 'Department/MarketingType', count: 5 },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * HospitalSpecialties index facet definitions
 */
const facetDefinitions_hospitalSpecialties: AzureSearchFacetDefinition[] = [
  { propertyName: 'Hospital/MarketingType', count: 5, sort: 'count' },
  { propertyName: 'Hospital/Translations/LanguageCode', count: 5 },
  { propertyName: 'Hospital/Translations/Name', count: 5 },
  { propertyName: 'Hospital/Translations/Slug', count: 5 },
  { propertyName: 'Specialty/Translations/LanguageCode', count: 5 },
  { propertyName: 'Specialty/Translations/Name', count: 5 },
  { propertyName: 'Specialty/Translations/Slug', count: 5 },
  { propertyName: 'Services/Translations/LanguageCode', count: 5 },
  { propertyName: 'Services/Translations/Name', count: 5 },
  { propertyName: 'Services/Translations/Slug', count: 5 },
  { propertyName: 'Translations/LanguageCode', count: 5 },
  { propertyName: 'Translations/Name', count: 5 },
  { propertyName: 'Translations/Slug', count: 5 },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * SpecialtyTypes index facet definitions
 */
const facetDefinitions_departments: AzureSearchFacetDefinition[] = [
  { propertyName: 'MarketingType', count: 5, sort: 'count' },
  { propertyName: 'Specialties/Translations/LanguageCode', count: 5 },
  { propertyName: 'Specialties/Translations/Name', count: 5 },
  { propertyName: 'Specialties/Translations/Slug', count: 5 },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * articles index facet definitions
 */
const facetDefinitions_articles: AzureSearchFacetDefinition[] = [
  { propertyName: 'Hospital/MarketingType', count: 5, sort: 'count' },
  { propertyName: 'Hospital/Translations/LanguageCode', count: 5 },
  { propertyName: 'Hospital/Translations/Name', count: 5 },
  { propertyName: 'Hospital/Translations/Slug', count: 5 },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * articles index facet definitions
 */
const facetDefinitions_services: AzureSearchFacetDefinition[] = [
  { propertyName: 'Hospital/MarketingType', count: 5, sort: 'count' },
  { propertyName: 'Hospital/Translations/LanguageCode', count: 5 },
  { propertyName: 'Hospital/Translations/Name', count: 5 },
  { propertyName: 'Hospital/Translations/Slug', count: 5 },
  { propertyName: 'HospitalSpecialty/Translations/LanguageCode', count: 5 },
  { propertyName: 'HospitalSpecialty/Translations/Name', count: 5 },
  { propertyName: 'HospitalSpecialty/Translations/Slug', count: 5 },
  { propertyName: 'Procedure', count: 5 },
  { propertyName: 'MinPrice', count: 5 },
  { propertyName: 'MaxPrice', count: 5 },
  { propertyName: 'PriceRequest', count: 5 },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * contributors index facet definitions
 */
const facetDefinitions_contributers: AzureSearchFacetDefinition[] = [
  { propertyName: 'Hospital/MarketingType', count: 5, sort: 'count' },
  { propertyName: 'SnsHandles/SnsType', count: 5, sort: 'count' },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * countries index facet definitions
 */
const facetDefinitions_countries: AzureSearchFacetDefinition[] = [
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * faqs index facet definitions
 */
const facetDefinitions_faqs: AzureSearchFacetDefinition[] = [
  { propertyName: 'FaqCategory/Translations/LanguageCode', count: 5 },
  { propertyName: 'FaqCategory/Translations/Name', count: 5 },
  { propertyName: 'FaqCategory/Translations/Slug', count: 5 },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

/**
 * faqs index facet definitions
 */
const facetDefinitions_faqCateogries: AzureSearchFacetDefinition[] = [
  { propertyName: 'Hospital/MarketingType', count: 5, sort: 'count' },
  { propertyName: 'Hospital/Translations/LanguageCode', count: 5 },
  { propertyName: 'Hospital/Translations/Name', count: 5 },
  { propertyName: 'Hospital/Translations/Slug', count: 5 },
  { propertyName: 'Translations/LanguageCode', count: 5, sort: 'count' },
  { propertyName: 'Translations/Name', count: 5, sort: 'count' },
  { propertyName: 'Translations/Slug', count: 5, sort: 'count' },
  { propertyName: 'Translations/IsConfirmed', count: 5, sort: 'count' }
]

const facetDefinitions = {
  facetDefinitions_hospital,
  facetDefinitions_doctors,
  facetDefinitions_deals,
  facetDefinitions_specialties,
  facetDefinitions_hospitalSpecialties,
  facetDefinitions_departments,
  facetDefinitions_articles,
  facetDefinitions_services,
  facetDefinitions_contributers,
  facetDefinitions_countries,
  facetDefinitions_faqs,
  facetDefinitions_faqCateogries
}

export type FacetDefinitions =
  | typeof facetDefinitions_hospital
  | typeof facetDefinitions_doctors
  | typeof facetDefinitions_deals
  | typeof facetDefinitions_specialties
  | typeof facetDefinitions_hospitalSpecialties
  | typeof facetDefinitions_departments
  | typeof facetDefinitions_articles
  | typeof facetDefinitions_services
  | typeof facetDefinitions_contributers
  | typeof facetDefinitions_countries
  | typeof facetDefinitions_faqs
  | typeof facetDefinitions_faqCateogries

export default facetDefinitions

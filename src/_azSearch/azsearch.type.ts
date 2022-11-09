import {
  FacetResult,
  GeographyPoint,
  QueryType,
  SearchMode,
} from "@azure/search-documents";
import { FacetDefinitions } from "./definitions";

export interface SearchServiceConfig {
  options: SearchOption;
  az_search_endpoint: string;
  az_search_key: string;
  idx: Idx;
  facetDefinition?: FacetDefinitions;
  stage: "int" | "prd";
}

export enum MarketingType {
  Both = "Both",
  GeneralHealth = "GeneralHealth",
  Beauty = "Beauty",
}

export enum SnsType {
  Twitter = "Twitter",
  Facebook = "Facebook",
  Instagram = "Instagram",
  LinkedIn = "LinkedIn",
  Youtube = "Youtube",
  KakaoTalk = "KakaoTalk",
}

export interface SnsHandle {
  id?: string;
  snsType?: SnsType;
  handle?: string | null;
}

export type AzureSearchFacetModel = {
  [propertyName: string]: FacetResult[];
};

type FacetSort = "count" | "-count" | "value" | "-value";

export interface AzureSearchFacetDefinition {
  propertyName: string;
  /**
   * maximum number of facet terms
   */
  count?: number;
  /**
   * "count", "-count", "value", "-value".
   */
  sort?: FacetSort;
  /**
   * pipe-delimited numeric or Edm.DateTimeOffset values specifying a dynamic set of facet entry values
   *
   * "facet=baseRate,values:10 | 20" produces three buckets: one for base rate 0 up to but not including 10, one for 10 up to but not including 20, and one for 20 and higher)
   */
  values?: string;
  /**
   * an integer interval greater than 0 for numbers, or minute, hour, day, week, month, quarter, year for date time values.
   *
   * For example, "facet=baseRate,interval:100" produces buckets based on base rate ranges of size 100. If base rates are all between $60 and $600, there will be buckets for 0-100, 100-200, 200-300, 300-400, 400-500, and 500-600. The string "facet=lastRenovationDate,interval:year" produces one bucket for each year when hotels were renovated
   */
  interval?: number;
  /**
   *  [+-]hh:mm, [+-]hhmm, or [+-]hh
   */
  timeoffset?: string;
}

export interface AzureSearchInfo {
  endpoint: string;
  indexName: string;
  key: string;
}

export interface MediaDocument {
  MediaType?: string;
  Url?: string;
  ThumbnailUrl?: string;
  Description?: string;
  Height?: number;
  Width?: number;
  Order?: number;
}

export interface CertificateDoucment {
  Id?: string;
  Certificate?: string;
  ActiveFrom?: Date;
  ActiveTo?: Date;
}

export interface SnsHandleDocument {
  SnsType?: string;
  Handle?: string;
}

/**
 * Translation Document
 */

export interface TranslationDocument_item {
  LanguageCode?: string;
  Name?: string;
  Slug?: string;
}
export interface TranslationDocument extends TranslationDocument_item {
  Overview?: string;
  Description?: string;
  Content?: string;
  IsConfirmed?: boolean;
}

/**
 * Simple Document
 */

export interface HospitalDocument_item {
  Id: string;
  CountryId?: string;
  MarketingType?: string;
  Translations?: TranslationDocument_item[];
}

export interface DoctorDocument_item {
  Id: string;
  Translations?: TranslationDocument_item[];
}

export interface CountryDocument_item {
  Id: string;
  Translations?: TranslationDocument_item[];
}

export interface AccreditationDocument_item {
  Country?: string;
  Logo?: string;
  Name?: string;
}

export interface SpecialtyDocument_item {
  Id: string;
  Translations?: TranslationDocument_item[];
}

export interface ServiceDocument_item {
  Id: string;
  Translations?: TranslationDocument_item[];
}

export interface DepartmentDocument_item {
  Id: string;
  MarketingType: MarketingType;
  Translations?: TranslationDocument_item[];
}

export interface HospitalSpecialtyDocument_item {
  Id: string;
  Translations?: TranslationDocument_item[];
}

export interface ContributorDocument_item {
  Id: string;
  Translations?: TranslationDocument_item[];
}

export interface FaqCategoryDocument_item {
  Id: string;
  Translations?: TranslationDocument_item[];
}

export interface ArticleContributorDocument_item {
  Type?: string;
  Filter?: string;
}

export interface PackageDocument_item {
  Id: string;
  RefundPolicy?: string;
  Bodus?: string;
  Price?: number;
}

/**
 * Document
 */

export interface LocationDocument {
  Country?: string;
  State?: string;
  County?: string;
  City?: string;
  ZipCode?: string;
  Address?: string;
  Point?: Pick<GeographyPoint, "latitude" | "longitude">;
  LocationType?: string;
}

/**
 * Mapping to Doctor index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface DoctorDocument {
  Id: string;
  DoctorId: string;
  StartPracticeDate?: Date;
  ConsultationEnabled?: Date;
  ConsultationFee?: string;
  Photo?: string;
  PhotoThumbnail?: string;
  Timezone?: string;
  Medias?: MediaDocument[];
  Locations?: LocationDocument[];
  Hospital?: HospitalDocument_item;
  Specialties?: SpecialtyDocument_item[];
  DoctorCertificates?: CertificateDoucment[];
  Translations?: TranslationDocument[];
}

/**
 * Mapping to Hospital index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface HospitalDocument {
  Id: string;
  Logo?: string;
  BedsCount?: number;
  OperationsPerYear?: number;
  FoundationYear?: number;
  MedicalStaffCount?: number;
  DoctorCount?: number;
  ConsultationEnabled?: boolean;
  ConsultationFee: number;
  TimeZone?: string;
  WebsiteUrl?: string;
  PaymentEnabled?: boolean;
  MarketingType?: MarketingType;
  Location?: LocationDocument;
  Country: CountryDocument_item;
  Accreditations?: AccreditationDocument_item[];
  Medias?: MediaDocument[];
  HospitalSpecialties?: HospitalSpecialtyDocument_item[];
  Doctors: DoctorDocument_item[];
  Translations?: TranslationDocument[];
}

/**
 * Mapping to Deals index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface DealDocument {
  Id: string;
  Description?: string;
  Name?: string;
  MarketingType?: MarketingType;
  Hospital?: HospitalDocument_item;
  Location?: LocationDocument;
  Packages?: PackageDocument_item[];
  Photo?: string;
  PhotoThumbnail?: string;
  ServiceDuration?: number;
  Services?: ServiceDocument_item[];
  Translations?: TranslationDocument[];
}

/**
 * Mapping to Specialties index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface SpecialtyDocument {
  Id: string;
  Department: DepartmentDocument_item;
  Photo?: string;
  PhotoThumbnail?: string;
  Background?: string;
  BackgroundThumbnail?: string;
  Medias?: MediaDocument[];
  SpecicaltyTypes?: DepartmentDocument_item[];
  Translations?: TranslationDocument[];
}
/**
 * Mapping to Specialties index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface HospitalSpecialtyDocument {
  Id: string;
  Specialty?: SpecialtyDocument_item[];
  Photo?: string;
  PhotoThumbnail?: string;
  Background?: string;
  BackgroundThumbnail?: string;
  CustomStyle?: string;
  Medials?: MediaDocument[];
  Services?: ServiceDocument_item[];
  Translations?: TranslationDocument[];
}
/**
 * Mapping to SpecialtyTypesDocument index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface DepartmentDocument {
  Id: string;
  MarketingType?: MarketingType;
  Photo?: string;
  PhotoThumbnail?: string;
  Background?: string;
  BackgroundThumbnail?: string;
  Medias?: MediaDocument[];
  Specialties?: SpecialtyDocument_item[];
  Translations?: TranslationDocument[];
}

/**
 * Mapping to ArticleDocument index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface ArticleDocument {
  Id: string;
  Hospital?: HospitalDocument_item;
  Tags?: string[];
  ArticleContributors?: ArticleContributorDocument_item[];
  Translations?: TranslationDocument[];
}

/**
 * Mapping to ArticleDocument index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface ServiceDocument {
  Id: string;
  Hospital?: HospitalDocument_item;
  HospitalSpecialty?: HospitalSpecialtyDocument_item;
  Procedure?: string;
  MinPrice?: number;
  MaxPrice?: number;
  PriceRequest?: boolean;
  Photo?: String;
  PhotoThumbnail?: String;
  Translations?: TranslationDocument[];
}

/**
 * Mapping to ContributorDocument index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface ContributorDocument {
  Id: string;
  Website?: string;
  Hospital?: HospitalDocument_item;
  SnsHandles?: SnsHandle[];
  Translations?: TranslationDocument[];
}

/**
 * Mapping to CountryDocument index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface CountryDocument {
  Id: string;
  Logo?: string;
  Medias?: MediaDocument[];
  Translations?: TranslationDocument[];
}

/**
 * Mapping to FaqCategoryDocument index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface FaqCategoryDocument {
  Id: string;
  ParentId?: string;
  Hospital?: HospitalDocument_item;
  Translations?: TranslationDocument[];
}

/**
 * Mapping to FaqDocument index
 *
 * Cautions:
 * - Property name is Pascal case (It has to be same of index property name case sensitive.)
 */

export interface FaqDocument {
  Id: string;
  FaqCategory?: FaqCategoryDocument_item;
  Tags?: string;
  Translations?: TranslationDocument[];
}

/**
 * Azure Search Client types
 */

export interface SearchFilterOption {
  [propertyName: string]: string[];
}

export type SearchSelectOption = string;

export interface SearchOption {
  searchTerm?: string;
  filters?: SearchFilterOption;
  page?: number;
  limit?: number;
  select?: string[];
  queryType?: QueryType;
  searchFields?: string[];
  searchMode?: SearchMode;
}

export type SearchResults = (
  | HospitalDocument
  | DoctorDocument
  | DealDocument
  | SpecialtyDocument
  | DepartmentDocument
  | HospitalSpecialtyDocument
  | ArticleDocument
  | ServiceDocument
  | ContributorDocument
  | CountryDocument
  | FaqDocument
  | FaqCategoryDocument
)[];

export enum Idx {
  hospitals = "hospitals",
  departments = "departments",
  hospitalSpecialties = "hospitalspecialties",
  specialties = "specialties",
  deals = "deals",
  doctors = "doctors",
  articles = "articles",
  services = "services",
  contributors = "contributors",
  countries = "countries",
  // faqs = 'faqs',
  // faqCategories = 'faqcategories'
}

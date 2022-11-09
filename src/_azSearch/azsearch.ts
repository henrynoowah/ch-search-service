import { AzureKeyCredential, SearchClient } from "@azure/search-documents";
import {
  ArticleDocument,
  ContributorDocument,
  CountryDocument,
  DealDocument,
  DepartmentDocument,
  DoctorDocument,
  HospitalDocument,
  HospitalSpecialtyDocument,
  Idx,
  SearchFilterOption,
  SearchResults,
  SearchServiceConfig,
  ServiceDocument,
  SpecialtyDocument,
} from "./azsearch.type";
import { generateFacets, normalizeFilterValue } from "./helpers";

export const azsearch = async ({
  options,
  idx,
  facetDefinition,
  stage,
  az_search_endpoint,
  az_search_key,
}: SearchServiceConfig) => {
  const searchClient = new SearchClient(
    az_search_endpoint,
    `idx-${idx}-${stage}`,
    new AzureKeyCredential(az_search_key)
  );

  let filter = getFilterString(options.filters, idx as string);
  const facets = facetDefinition && generateFacets(facetDefinition);

  const fetchedData = await searchClient.search(
    options.searchTerm ? `${options.searchTerm?.trim()}` : "",
    {
      // pagination
      skip: (options.limit ?? 20) * ((options.page ?? 1) - 1),
      // pagination
      top: options.limit,
      // apply selected facet
      filter: filter,
      // get facets data related to search fetchedDatas
      facets: facets,
      // includes the total number of search (similar to metadata.totalItemCount)
      includeTotalCount: true,
      // select speficit query fields
      select: options.select as never[],
      // set it to 'full' for Lucene query syntax
      queryType: options.queryType ?? "simple",
      // The comma-separated list of field names to which to scope the full-text search
      searchFields: options.searchFields
        ? (options.searchFields as never[])
        : undefined,
      // searchMode
      searchMode: options.searchMode ?? "any",
    }
  );
  const results: SearchResults = [];

  const totalCount = fetchedData.count ?? 0;
  for await (const item of fetchedData.results) {
    switch (idx) {
      case Idx.hospitals:
        results.push(item.document as HospitalDocument);
        break;
      case Idx.doctors:
        results.push(item.document as DoctorDocument);
        break;
      case Idx.deals:
        results.push(item.document as DealDocument);
        break;
      case Idx.specialties:
        results.push(item.document as SpecialtyDocument);
        break;
      case Idx.hospitalSpecialties:
        results.push(item.document as HospitalSpecialtyDocument);
        break;
      case Idx.departments:
        results.push(item.document as DepartmentDocument);
        break;
      case Idx.articles:
        results.push(item.document as ArticleDocument);
        break;
      case Idx.services:
        results.push(item.document as ServiceDocument);
        break;
      case Idx.contributors:
        results.push(item.document as ContributorDocument);
        break;
      case Idx.countries:
        results.push(item.document as CountryDocument);
        break;
      // case Idx.faqs:
      //   results.push(item.document as FaqDocument)
      //   break
      // case Idx.faqCategories:
      //   results.push(item.document as FaqCategoryDocument)
      //   break
    }
  }

  return { results, totalCount };
};

const getFilterString = (
  filters: SearchFilterOption | undefined,
  idx: string
): string | undefined => {
  let filterString = "";
  if (filters) {
    switch (idx) {
      case Idx.hospitals:
        Object.keys(filters).forEach((propertyName) => {
          const values = filters[propertyName];
          let filterItem = "(";
          switch (propertyName) {
            case "Id":
              values.forEach((value) => {
                filterItem = `${filterItem} Id eq '${normalizeFilterValue(
                  value
                )}'`;
              });
              break;
            case "ConsultationFee":
              values.forEach((value, index) => {
                filterItem = `${filterItem} ${
                  index > 0 ? "or" : ""
                } ConsultationFee ${
                  value === "0" ? "eq" : "lt"
                } ${normalizeFilterValue(value)}`;
              });
              break;
            case "ConsultationEnabled":
              values.forEach((value) => {
                filterItem = `${filterItem} ConsultationEnabled eq ${normalizeFilterValue(
                  value
                )}`;
              });
              break;
            case "MarketingType":
              values.forEach((value) => {
                filterItem = `${filterItem} MarketingType eq '${normalizeFilterValue(
                  value
                )}'`;
              });
              break;
            case "Location/Point":
              // $filter=(geo.distance(Location/Point, geography'POINT(127.0279892 37.4944746)') le 10)
              values.forEach((value) => {
                const data = value.split(" ");
                filterItem = `${filterItem} geo.distance(Location/Point, geography'POINT(${data[0]} ${data[1]})') le ${data[2]}`;
              });
              break;
            case "Country/Id":
              values.forEach((value) => {
                filterItem = `${filterItem} Country/Id eq '${normalizeFilterValue(
                  value
                )}'`;
              });
              break;
            case "Translations/LanguageCode":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/LanguageCode eq '${normalizeFilterValue(
                  value
                )}')`;
              });
              break;
            case "Translations/IsConfirmed":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/IsConfirmed eq ${normalizeFilterValue(
                  value
                )})`;
              });
              break;
            default:
              filterItem = "";
          }
          if (filterItem !== "") {
            filterItem = `${filterItem})`;
            filterString = `${filterString} ${
              filterString ? "and" : ""
            } ${filterItem}`;
          }
        });
        break;
      case Idx.doctors:
        Object.keys(filters).forEach((propertyName) => {
          const values = filters[propertyName];
          if (values.length > 0) {
            let filterItem = "(";
            switch (propertyName) {
              case "Hospital/Id":
                values.forEach((value, index) => {
                  filterItem = `${filterItem} ${
                    index > 0 ? "or" : ""
                  } Hospital/Id eq '${normalizeFilterValue(value)}'`;
                });
                break;
              case "ConsultationFee":
                values.forEach((value, index) => {
                  filterItem = `${filterItem} ${
                    index > 0 ? "or" : ""
                  } ConsultationFee ${
                    value === "0" ? "eq" : "lt"
                  } ${normalizeFilterValue(value)}`;
                });
                break;
              case "ConsultationEnabled":
                values.forEach((value) => {
                  filterItem = `${filterItem} ConsultationEnabled eq ${normalizeFilterValue(
                    value
                  )}`;
                });
                break;
              case "Hospital/MarketingType":
                values.forEach((value) => {
                  filterItem = `${filterItem} Hospital/MarketingType eq '${normalizeFilterValue(
                    value
                  )}'`;
                });
                break;
              case "Hospital/CountryId":
                values.forEach((value) => {
                  filterItem = `${filterItem} Hospital/CountryId eq '${normalizeFilterValue(
                    value
                  )}'`;
                });
                break;
              case "Translations/LanguageCode":
                filterItem = `${filterItem} Translations/any(translation:`;
                values.forEach((value) => {
                  filterItem = `${filterItem} translation/LanguageCode eq '${normalizeFilterValue(
                    value
                  )}')`;
                });
                break;
              case "Translations/IsConfirmed":
                filterItem = `${filterItem} Translations/any(translation:`;
                values.forEach((value) => {
                  filterItem = `${filterItem} translation/IsConfirmed eq ${normalizeFilterValue(
                    value
                  )})`;
                });
                break;
              default:
                filterItem = "";
            }
            if (filterItem !== "") {
              filterItem = `${filterItem})`;
              filterString = `${filterString} ${
                filterString ? "and" : ""
              } ${filterItem}`;
            }
          }
        });
        break;
      case Idx.deals:
        // filterString for deals
        Object.keys(filters).forEach((propertyName) => {
          const values = filters[propertyName];
          let filterItem = "(";
          switch (propertyName) {
            case "Hospital/Id":
              values.forEach((value, index) => {
                filterItem = `${filterItem} ${
                  index > 0 ? "or" : ""
                } Hospital/Id eq '${normalizeFilterValue(value)}'`;
              });
              break;
            case "MarketingType":
              values.forEach((value) => {
                filterItem = `${filterItem} MarketingType eq '${normalizeFilterValue(
                  value
                )}'`;
              });
              break;
            case "Hospital/CountryId":
              values.forEach((value) => {
                filterItem = `${filterItem} Hospital/CountryId eq '${normalizeFilterValue(
                  value
                )}'`;
              });
              break;
            case "Translations/LanguageCode":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/LanguageCode eq '${normalizeFilterValue(
                  value
                )}')`;
              });
              break;
            case "Translations/IsConfirmed":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/IsConfirmed eq ${normalizeFilterValue(
                  value
                )})`;
              });
              break;
            default:
              filterItem = "";
          }
          if (filterItem !== "") {
            filterItem = `${filterItem})`;
            filterString = `${filterString} ${
              filterString ? "and" : ""
            } ${filterItem}`;
          }
        });
        break;

      case Idx.departments:
        // filterString for Departments
        Object.keys(filters).forEach((propertyName) => {
          const values = filters[propertyName];
          let filterItem = "(";
          switch (propertyName) {
            case "MarketingType":
              values.forEach((value) => {
                filterItem = `${filterItem} MarketingType eq '${normalizeFilterValue(
                  value
                )}'`;
              });
              break;
            case "Translations/LanguageCode":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/LanguageCode eq '${normalizeFilterValue(
                  value
                )}')`;
              });
              break;
            case "Translations/IsConfirmed":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/IsConfirmed eq ${normalizeFilterValue(
                  value
                )})`;
              });
              break;
            case "Translations/Name":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/Name eq '${normalizeFilterValue(
                  value
                )}')`;
              });
              break;
            case "Translations/IsConfirmed":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/IsConfirmed eq ${normalizeFilterValue(
                  value
                )})`;
              });
              break;
            default:
              filterItem = "";
          }
          if (filterItem !== "") {
            filterItem = `${filterItem})`;
            filterString = `${filterString} ${
              filterString ? "and" : ""
            } ${filterItem}`;
          }
        });
        break;
      case Idx.specialties:
        // filterString for specialties
        Object.keys(filters).forEach((propertyName) => {
          const values = filters[propertyName];
          let filterItem = "(";
          switch (propertyName) {
            case "Hospitals/Id":
              filterItem = `${filterItem} Hospitals/any(hospital:`;
              values.forEach((value) => {
                filterItem = `${filterItem} hospital/Id eq '${normalizeFilterValue(
                  value
                )}')`;
              });
              break;
            case "Translations/LanguageCode":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/LanguageCode eq '${normalizeFilterValue(
                  value
                )}')`;
              });
              break;
            case "Department/MarketingType":
              values.forEach((value) => {
                filterItem = `${filterItem} Department/MarketingType eq '${normalizeFilterValue(
                  value
                )}'`;
              });
              break;
            case "Translations/LanguageCode":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/LanguageCode eq '${normalizeFilterValue(
                  value
                )}')`;
              });
              break;
            case "Translations/IsConfirmed":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/IsConfirmed eq ${normalizeFilterValue(
                  value
                )})`;
              });
              break;
            default:
              filterItem = "";
          }
          if (filterItem !== "") {
            filterItem = `${filterItem})`;
            filterString = `${filterString} ${
              filterString ? "and" : ""
            } ${filterItem}`;
          }
        });
        break;
      case Idx.hospitalSpecialties:
        // filterString for hospitalspecialties
        Object.keys(filters).forEach((propertyName) => {
          const values = filters[propertyName];
          let filterItem = "(";
          switch (propertyName) {
            case "Hospital/Id":
              values.forEach((value, index) => {
                filterItem = `${filterItem} ${
                  index > 0 ? "or" : ""
                } Hospital/Id eq '${normalizeFilterValue(value)}'`;
              });
              break;
            case "Translations/LanguageCode":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/LanguageCode eq '${normalizeFilterValue(
                  value
                )}')`;
              });
              break;
            case "Hospital/CountryId":
              values.forEach((value) => {
                filterItem = `${filterItem} Hospital/CountryId eq '${normalizeFilterValue(
                  value
                )}'`;
              });
              break;
            case "Translations/LanguageCode":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/LanguageCode eq '${normalizeFilterValue(
                  value
                )}')`;
              });
              break;
            case "Translations/IsConfirmed":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/IsConfirmed eq ${normalizeFilterValue(
                  value
                )})`;
              });
              break;
            default:
              filterItem = "";
          }
          if (filterItem !== "") {
            filterItem = `${filterItem})`;
            filterString = `${filterString} ${
              filterString ? "and" : ""
            } ${filterItem}`;
          }
        });
        break;
      case Idx.articles:
        // filterString for hospitalspecialties
        Object.keys(filters).forEach((propertyName) => {
          const values = filters[propertyName];
          let filterItem = "(";
          switch (propertyName) {
            case "Translations/IsConfirmed":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/IsConfirmed eq ${normalizeFilterValue(
                  value
                )})`;
              });
              break;
            case "Translations/IsConfirmed":
              filterItem = `${filterItem} Translations/any(translation:`;
              values.forEach((value) => {
                filterItem = `${filterItem} translation/IsConfirmed eq ${normalizeFilterValue(
                  value
                )})`;
              });
              break;
            default:
              filterItem = "";
          }
          if (filterItem !== "") {
            filterItem = `${filterItem})`;
            filterString = `${filterString} ${
              filterString ? "and" : ""
            } ${filterItem}`;
          }
        });
        break;
      default:
        break;
    }
  }

  return filterString.trim() !== "()" ? filterString : "";
};

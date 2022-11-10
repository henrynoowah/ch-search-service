# ch-search-service SDK

## Getting started

❗️User must have access to `ch-search-sevice` to work with this SDK flexibly due to following reasons

- ✅ check index fiends
- ✅ CORS information
- ✅ private service values such as `key` and `endpoint`

#### Installation

```
npm install @noowah/ch-search-service
yarn add @noowah/ch-search-service
```

<br>

## User guide

<br>

#### azsearch(SearchServiceConfig)

```ts
const azsearch: Promise<{ results: SearchResults; totalCount: number }>;
```

````

returned value:

- results : `SearchReuslts`

```ts
type SearchResults = (
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
````

- totalCount : `number`

`SearchServiceConfig`

| **Param**          | **Type**          | **Desctiption**                                       |
| ------------------ | ----------------- | ----------------------------------------------------- |
| idx                | string (required) | use enum `Idx` ( "hospitals" \| "doctors" \| "deals") |
| stage              | string (required) | "dev" \| "int" \| "prd"                               |
| az_search_key      | string (required) | Azure search service key (contact CH team)            |
| az_search_endpoint | string (optional) | Azure search service endpoint                         |
| options            | Object(required)  | use interface `SearchOption`                          |

<br>

`SearchOption`

| **Param**    | **Type**                        | **Desctiption**                      |
| ------------ | ------------------------------- | ------------------------------------ |
| searchTerm   | string (required)               | search keyword                       |
| filters      | `SearchFilterOption` (optional) | `{[propertyName: string]: string[]}` |
| page         | number (optional)               | default :1                           |
| limit        | number (optional)               | default :null                        |
| select       | `Array<string>` (optional)      | select specific `retrievable` fields |
| queryType    | `QueryType` (optional)          | "simple" (default) \| "full"         |
| searchFields | `Array<string>`(optional)       | selecct specific`searchable` fields  |
| searchMode   | string (optional)               | "any"(default) \| "all"              |

example:

```ts
const searchOption: SearchOption = {
  searchTerm: `${searchTerm}~`,
  limit: 20,
};

const fetchData = async () => {
  const config: SearchServiceConfig = {
    idx: Idx.hospitals,
    stage: "int",
    az_search_endpoint: NEXT_PUBLIC_AZ_SEARCH_ENDPOINT,
    az_search_key: NEXT_PUBLIC_AZ_SEARCH_KEY,
    options: searchOption,
  };
  const { results, totalCount } = await azsearch(config);

  const castedResult = results as HospitalDocument;
};
```

<br>

`SearchFilterOption`

```ts
interface SearchFilterOption {
  [propertyName: string]: string[];
}
```

- Set `filterable` fields as keys
  > ❗️ Refer to the `indexes` on `ch-search-service` (only accessible by CH dev team)

example:

```ts
   'Translations/IsConfirmed': ['true']
```

<br>

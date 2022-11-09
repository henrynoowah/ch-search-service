"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.azsearch = void 0;
var search_documents_1 = require("@azure/search-documents");
var azsearch_type_1 = require("./azsearch.type");
var helpers_1 = require("./helpers");
var azsearch = function (_a) {
    var options = _a.options, idx = _a.idx, facetDefinition = _a.facetDefinition, stage = _a.stage, az_search_endpoint = _a.az_search_endpoint, az_search_key = _a.az_search_key;
    return __awaiter(void 0, void 0, void 0, function () {
        var searchClient, filter, facets, fetchedData, results, totalCount, _b, _c, item, e_1_1;
        var e_1, _d;
        var _e, _f, _g, _h, _j, _k;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    searchClient = new search_documents_1.SearchClient(az_search_endpoint, "idx-".concat(idx, "-").concat(stage), new search_documents_1.AzureKeyCredential(az_search_key));
                    filter = getFilterString(options.filters, idx);
                    facets = facetDefinition && (0, helpers_1.generateFacets)(facetDefinition);
                    return [4 /*yield*/, searchClient.search(options.searchTerm ? "".concat((_e = options.searchTerm) === null || _e === void 0 ? void 0 : _e.trim()) : "", {
                            // pagination
                            skip: ((_f = options.limit) !== null && _f !== void 0 ? _f : 20) * (((_g = options.page) !== null && _g !== void 0 ? _g : 1) - 1),
                            // pagination
                            top: options.limit,
                            // apply selected facet
                            filter: filter,
                            // get facets data related to search fetchedDatas
                            facets: facets,
                            // includes the total number of search (similar to metadata.totalItemCount)
                            includeTotalCount: true,
                            // select speficit query fields
                            select: options.select,
                            // set it to 'full' for Lucene query syntax
                            queryType: (_h = options.queryType) !== null && _h !== void 0 ? _h : "simple",
                            // The comma-separated list of field names to which to scope the full-text search
                            searchFields: options.searchFields
                                ? options.searchFields
                                : undefined,
                            // searchMode
                            searchMode: (_j = options.searchMode) !== null && _j !== void 0 ? _j : "any",
                        })];
                case 1:
                    fetchedData = _l.sent();
                    results = [];
                    totalCount = (_k = fetchedData.count) !== null && _k !== void 0 ? _k : 0;
                    _l.label = 2;
                case 2:
                    _l.trys.push([2, 7, 8, 13]);
                    _b = __asyncValues(fetchedData.results);
                    _l.label = 3;
                case 3: return [4 /*yield*/, _b.next()];
                case 4:
                    if (!(_c = _l.sent(), !_c.done)) return [3 /*break*/, 6];
                    item = _c.value;
                    switch (idx) {
                        case azsearch_type_1.Idx.hospitals:
                            results.push(item.document);
                            break;
                        case azsearch_type_1.Idx.doctors:
                            results.push(item.document);
                            break;
                        case azsearch_type_1.Idx.deals:
                            results.push(item.document);
                            break;
                        case azsearch_type_1.Idx.specialties:
                            results.push(item.document);
                            break;
                        case azsearch_type_1.Idx.hospitalSpecialties:
                            results.push(item.document);
                            break;
                        case azsearch_type_1.Idx.departments:
                            results.push(item.document);
                            break;
                        case azsearch_type_1.Idx.articles:
                            results.push(item.document);
                            break;
                        case azsearch_type_1.Idx.services:
                            results.push(item.document);
                            break;
                        case azsearch_type_1.Idx.contributors:
                            results.push(item.document);
                            break;
                        case azsearch_type_1.Idx.countries:
                            results.push(item.document);
                            break;
                        // case Idx.faqs:
                        //   results.push(item.document as FaqDocument)
                        //   break
                        // case Idx.faqCategories:
                        //   results.push(item.document as FaqCategoryDocument)
                        //   break
                    }
                    _l.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _l.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _l.trys.push([8, , 11, 12]);
                    if (!(_c && !_c.done && (_d = _b.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _d.call(_b)];
                case 9:
                    _l.sent();
                    _l.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [2 /*return*/, { results: results, totalCount: totalCount }];
            }
        });
    });
};
exports.azsearch = azsearch;
var getFilterString = function (filters, idx) {
    var filterString = "";
    if (filters) {
        switch (idx) {
            case azsearch_type_1.Idx.hospitals:
                Object.keys(filters).forEach(function (propertyName) {
                    var values = filters[propertyName];
                    var filterItem = "(";
                    switch (propertyName) {
                        case "Id":
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " Id eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "ConsultationFee":
                            values.forEach(function (value, index) {
                                filterItem = "".concat(filterItem, " ").concat(index > 0 ? "or" : "", " ConsultationFee ").concat(value === "0" ? "eq" : "lt", " ").concat((0, helpers_1.normalizeFilterValue)(value));
                            });
                            break;
                        case "ConsultationEnabled":
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " ConsultationEnabled eq ").concat((0, helpers_1.normalizeFilterValue)(value));
                            });
                            break;
                        case "MarketingType":
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " MarketingType eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "Location/Point":
                            // $filter=(geo.distance(Location/Point, geography'POINT(127.0279892 37.4944746)') le 10)
                            values.forEach(function (value) {
                                var data = value.split(" ");
                                filterItem = "".concat(filterItem, " geo.distance(Location/Point, geography'POINT(").concat(data[0], " ").concat(data[1], ")') le ").concat(data[2]);
                            });
                            break;
                        case "Country/Id":
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " Country/Id eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "Translations/LanguageCode":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/LanguageCode eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                            });
                            break;
                        case "Translations/IsConfirmed":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/IsConfirmed eq ").concat((0, helpers_1.normalizeFilterValue)(value), ")");
                            });
                            break;
                        default:
                            filterItem = "";
                    }
                    if (filterItem !== "") {
                        filterItem = "".concat(filterItem, ")");
                        filterString = "".concat(filterString, " ").concat(filterString ? "and" : "", " ").concat(filterItem);
                    }
                });
                break;
            case azsearch_type_1.Idx.doctors:
                Object.keys(filters).forEach(function (propertyName) {
                    var values = filters[propertyName];
                    if (values.length > 0) {
                        var filterItem_1 = "(";
                        switch (propertyName) {
                            case "Hospital/Id":
                                values.forEach(function (value, index) {
                                    filterItem_1 = "".concat(filterItem_1, " ").concat(index > 0 ? "or" : "", " Hospital/Id eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                                });
                                break;
                            case "ConsultationFee":
                                values.forEach(function (value, index) {
                                    filterItem_1 = "".concat(filterItem_1, " ").concat(index > 0 ? "or" : "", " ConsultationFee ").concat(value === "0" ? "eq" : "lt", " ").concat((0, helpers_1.normalizeFilterValue)(value));
                                });
                                break;
                            case "ConsultationEnabled":
                                values.forEach(function (value) {
                                    filterItem_1 = "".concat(filterItem_1, " ConsultationEnabled eq ").concat((0, helpers_1.normalizeFilterValue)(value));
                                });
                                break;
                            case "Hospital/MarketingType":
                                values.forEach(function (value) {
                                    filterItem_1 = "".concat(filterItem_1, " Hospital/MarketingType eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                                });
                                break;
                            case "Hospital/CountryId":
                                values.forEach(function (value) {
                                    filterItem_1 = "".concat(filterItem_1, " Hospital/CountryId eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                                });
                                break;
                            case "Translations/LanguageCode":
                                filterItem_1 = "".concat(filterItem_1, " Translations/any(translation:");
                                values.forEach(function (value) {
                                    filterItem_1 = "".concat(filterItem_1, " translation/LanguageCode eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                                });
                                break;
                            case "Translations/IsConfirmed":
                                filterItem_1 = "".concat(filterItem_1, " Translations/any(translation:");
                                values.forEach(function (value) {
                                    filterItem_1 = "".concat(filterItem_1, " translation/IsConfirmed eq ").concat((0, helpers_1.normalizeFilterValue)(value), ")");
                                });
                                break;
                            default:
                                filterItem_1 = "";
                        }
                        if (filterItem_1 !== "") {
                            filterItem_1 = "".concat(filterItem_1, ")");
                            filterString = "".concat(filterString, " ").concat(filterString ? "and" : "", " ").concat(filterItem_1);
                        }
                    }
                });
                break;
            case azsearch_type_1.Idx.deals:
                // filterString for deals
                Object.keys(filters).forEach(function (propertyName) {
                    var values = filters[propertyName];
                    var filterItem = "(";
                    switch (propertyName) {
                        case "Hospital/Id":
                            values.forEach(function (value, index) {
                                filterItem = "".concat(filterItem, " ").concat(index > 0 ? "or" : "", " Hospital/Id eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "MarketingType":
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " MarketingType eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "Hospital/CountryId":
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " Hospital/CountryId eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "Translations/LanguageCode":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/LanguageCode eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                            });
                            break;
                        case "Translations/IsConfirmed":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/IsConfirmed eq ").concat((0, helpers_1.normalizeFilterValue)(value), ")");
                            });
                            break;
                        default:
                            filterItem = "";
                    }
                    if (filterItem !== "") {
                        filterItem = "".concat(filterItem, ")");
                        filterString = "".concat(filterString, " ").concat(filterString ? "and" : "", " ").concat(filterItem);
                    }
                });
                break;
            case azsearch_type_1.Idx.departments:
                // filterString for Departments
                Object.keys(filters).forEach(function (propertyName) {
                    var values = filters[propertyName];
                    var filterItem = "(";
                    switch (propertyName) {
                        case "MarketingType":
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " MarketingType eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "Translations/LanguageCode":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/LanguageCode eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                            });
                            break;
                        case "Translations/IsConfirmed":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/IsConfirmed eq ").concat((0, helpers_1.normalizeFilterValue)(value), ")");
                            });
                            break;
                        case "Translations/Name":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/Name eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                            });
                            break;
                        case "Translations/IsConfirmed":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/IsConfirmed eq ").concat((0, helpers_1.normalizeFilterValue)(value), ")");
                            });
                            break;
                        default:
                            filterItem = "";
                    }
                    if (filterItem !== "") {
                        filterItem = "".concat(filterItem, ")");
                        filterString = "".concat(filterString, " ").concat(filterString ? "and" : "", " ").concat(filterItem);
                    }
                });
                break;
            case azsearch_type_1.Idx.specialties:
                // filterString for specialties
                Object.keys(filters).forEach(function (propertyName) {
                    var values = filters[propertyName];
                    var filterItem = "(";
                    switch (propertyName) {
                        case "Hospitals/Id":
                            filterItem = "".concat(filterItem, " Hospitals/any(hospital:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " hospital/Id eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                            });
                            break;
                        case "Translations/LanguageCode":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/LanguageCode eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                            });
                            break;
                        case "Department/MarketingType":
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " Department/MarketingType eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "Translations/LanguageCode":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/LanguageCode eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                            });
                            break;
                        case "Translations/IsConfirmed":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/IsConfirmed eq ").concat((0, helpers_1.normalizeFilterValue)(value), ")");
                            });
                            break;
                        default:
                            filterItem = "";
                    }
                    if (filterItem !== "") {
                        filterItem = "".concat(filterItem, ")");
                        filterString = "".concat(filterString, " ").concat(filterString ? "and" : "", " ").concat(filterItem);
                    }
                });
                break;
            case azsearch_type_1.Idx.hospitalSpecialties:
                // filterString for hospitalspecialties
                Object.keys(filters).forEach(function (propertyName) {
                    var values = filters[propertyName];
                    var filterItem = "(";
                    switch (propertyName) {
                        case "Hospital/Id":
                            values.forEach(function (value, index) {
                                filterItem = "".concat(filterItem, " ").concat(index > 0 ? "or" : "", " Hospital/Id eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "Translations/LanguageCode":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/LanguageCode eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                            });
                            break;
                        case "Hospital/CountryId":
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " Hospital/CountryId eq '").concat((0, helpers_1.normalizeFilterValue)(value), "'");
                            });
                            break;
                        case "Translations/LanguageCode":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/LanguageCode eq '").concat((0, helpers_1.normalizeFilterValue)(value), "')");
                            });
                            break;
                        case "Translations/IsConfirmed":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/IsConfirmed eq ").concat((0, helpers_1.normalizeFilterValue)(value), ")");
                            });
                            break;
                        default:
                            filterItem = "";
                    }
                    if (filterItem !== "") {
                        filterItem = "".concat(filterItem, ")");
                        filterString = "".concat(filterString, " ").concat(filterString ? "and" : "", " ").concat(filterItem);
                    }
                });
                break;
            case azsearch_type_1.Idx.articles:
                // filterString for hospitalspecialties
                Object.keys(filters).forEach(function (propertyName) {
                    var values = filters[propertyName];
                    var filterItem = "(";
                    switch (propertyName) {
                        case "Translations/IsConfirmed":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/IsConfirmed eq ").concat((0, helpers_1.normalizeFilterValue)(value), ")");
                            });
                            break;
                        case "Translations/IsConfirmed":
                            filterItem = "".concat(filterItem, " Translations/any(translation:");
                            values.forEach(function (value) {
                                filterItem = "".concat(filterItem, " translation/IsConfirmed eq ").concat((0, helpers_1.normalizeFilterValue)(value), ")");
                            });
                            break;
                        default:
                            filterItem = "";
                    }
                    if (filterItem !== "") {
                        filterItem = "".concat(filterItem, ")");
                        filterString = "".concat(filterString, " ").concat(filterString ? "and" : "", " ").concat(filterItem);
                    }
                });
                break;
            default:
                break;
        }
    }
    return filterString.trim() !== "()" ? filterString : "";
};

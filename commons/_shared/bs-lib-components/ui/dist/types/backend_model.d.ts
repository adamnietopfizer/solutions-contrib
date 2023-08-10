export interface DSSColumnSchema {
    name: string;
    type: string;
}
export interface DSSColumnData extends Record<`${number}`, any> {
}
export interface DSSDatasetSchema {
    columns: DSSColumnSchema[];
    userModified: boolean;
}
export interface SortCol {
    colId: string;
    sort: 'asc' | 'desc';
}
export interface DSSDatasetGenericData {
    schema: DSSDatasetSchema;
    columnsCount: number;
}
export declare enum FilterType {
    Equals = "equals",
    NotEqual = "notEqual",
    Contains = "contains",
    NotContains = "notContains",
    StartsWith = "startsWith",
    EndsWith = "endsWith",
    Blank = "blank",
    NotBlank = "notBlank",
    LessThan = "lessThan",
    LessThanOrEqual = "lessThanOrEqual",
    GreaterThan = "greaterThan",
    GreaterThanOrEqual = "greaterThanOrEqual",
    InRange = "inRange"
}
export interface CustomFilter {
    filterType: FilterType;
    value: string;
    toValue?: string;
    operator?: 'and' | 'or';
}
export interface MultiCustomFilter {
    type: 'MultiCustomFilter';
    filters: CustomFilter[];
}
export interface DSSDatasetData extends Record<string, DSSColumnData> {
}
export interface RangeFilter {
    from: string;
    to: string;
    type: 'string' | 'number';
}

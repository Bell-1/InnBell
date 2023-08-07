import type * as Table from './types/table';
export * from './types/table';
/** 增 */
export declare function createTableDataApi(data: Table.CreateTableRequestData): Promise<import("axios").AxiosResponse<any, any>>;
/** 删 */
export declare function deleteTableDataApi(id: string): Promise<import("axios").AxiosResponse<any, any>>;
/** 改 */
export declare function updateTableDataApi(data: Table.UpdateTableRequestData): Promise<import("axios").AxiosResponse<any, any>>;
/** 查 */
export declare function getTableDataApi(params: Table.GetTableRequestData): Promise<import("axios").AxiosResponse<Table.GetTableResponseData, any>>;

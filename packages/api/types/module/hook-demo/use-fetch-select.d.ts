/** 模拟接口响应数据 */
export declare const SELECT_RESPONSE_DATA: {
    code: number;
    data: ({
        label: string;
        value: number;
        disabled?: undefined;
    } | {
        label: string;
        value: number;
        disabled: boolean;
    })[];
    message: string;
};
/** 模拟接口 */
export declare function getSelectDataApi(): Promise<{
    code: number;
    data: ({
        label: string;
        value: number;
        disabled?: undefined;
    } | {
        label: string;
        value: number;
        disabled: boolean;
    })[];
    message: string;
}>;

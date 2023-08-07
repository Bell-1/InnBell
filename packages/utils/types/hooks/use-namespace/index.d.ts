export declare function useNamespace(block: string, namespace?: string): {
    b: () => string;
    e: (element: string) => string;
    m: (modifier: string) => string;
    is: (condition: string, isBool: boolean) => string;
};

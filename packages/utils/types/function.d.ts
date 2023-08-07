export declare function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): () => void;
export declare function throttle<T extends (...args: any[]) => void>(fn: T, delay: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): {
    (this: any, ...args: Parameters<T>): void;
    cancel(): void;
};

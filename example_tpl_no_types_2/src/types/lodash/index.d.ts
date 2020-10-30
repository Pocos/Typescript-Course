declare module 'lodash' {
    /**
     * Gets the first element of array.
     *
     * @alias _.first
     *
     * @param array The array to query.
     * @return Returns the first element of array.
     */
    export function head<T>(array: List<T> | null | undefined): T | undefined;
}
/** get all listener functions for identifier `key`
 *
 */
export declare function getListeners(key: string): ((options: {
    [key: string]: any;
}) => Promise<void>)[];
/**
 * Add a listener for event `key`
 * @param key Identifier for event to fire
 * @param f Function to run on trigger
 * @returns function to remove the listener
 */
export declare function addListener(key: string, f: (options: {
    [key: string]: any;
}) => Promise<void>): () => void;
/**
 * Trigger the event `key`
 * @param key identifier for event to trigger
 * @param options map of options to pass to the listener functions
 */
export declare function trigger(key: string, options: {
    [key: string]: any;
}): Promise<void>;
/**
 * Remove all event listeners for identifier `key`
 * @param key identifier to clear
 */
export declare function clear(key: string): void;
/**
 * Remove one event listener
 * Note that using the return value of `addTrigger` is easier API
 * @param key Identifier for event
 * @param f Pointer to function to remove
 */
export declare function remove(key: string, f: (options: {
    [key: string]: any;
}) => Promise<void>): void;

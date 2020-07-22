const listeners = {};
/** get all listener functions for identifier `key`
 *
 */
export function getListeners(key) {
    return listeners[key];
}
/**
 * Add a listener for event `key`
 * @param key Identifier for event to fire
 * @param f Function to run on trigger
 * @returns function to remove the listener
 */
export function addListener(key, f) {
    if (typeof listeners[key] === "undefined")
        listeners[key] = [];
    listeners[key].push(f);
    return () => {
        remove(key, f);
    };
}
/**
 * Trigger the event `key`
 * @param key identifier for event to trigger
 * @param options map of options to pass to the listener functions
 */
export async function trigger(key, options) {
    const listeners = getListeners(key);
    await Promise.all(listeners.map((listener) => listener(options)));
}
/**
 * Remove all event listeners for identifier `key`
 * @param key identifier to clear
 */
export function clear(key) {
    delete listeners[key];
}
/**
 * Remove one event listener
 * Note that using the return value of `addTrigger` is easier API
 * @param key Identifier for event
 * @param f Pointer to function to remove
 */
export function remove(key, f) {
    listeners[key] = listeners[key].filter((func) => func !== f);
}
//# sourceMappingURL=index.js.map
const listeners: {
  [key: string]: ((options: { [key: string]: any }) => Promise<void>)[];
} = {};
/** get all listener functions for identifier `key`
 *
 */
export function getListeners(
  key: string
): ((options: { [key: string]: any }) => Promise<void>)[] {
  return listeners[key];
}
/**
 * Add a listener for event `key`
 * @param key Identifier for event to fire
 * @param f Function to run on trigger
 * @returns function to remove the listener
 */
export function addListener(
  key: string,
  f: (options: { [key: string]: any }) => Promise<void>
): () => void {
  if (typeof listeners[key] === "undefined") listeners[key] = [];
  listeners[key].push(f);
  return () => {
    remove(key, f);
  };
}
/**
 * Trigger the event `key`. Note that if an trigger handler throws, it will stop the show.
 * @param key identifier for event to trigger
 * @param options map of options to pass to the listener functions
 */
export async function trigger(key: string, options: { [key: string]: any }) {
  const listeners = getListeners(key);
  try {
    await Promise.all(listeners.map((listener) => listener(options)));
  } catch (e) {
    if (error) {
      error(e);
    } else {
      throw e;
    }
  }
}
/**
 * Remove all event listeners for identifier `key`
 * @param key identifier to clear
 */
export function clear(key: string) {
  delete listeners[key];
}
/**
 * Remove one event listener
 * Note that using the return value of `addTrigger` is easier API
 * @param key Identifier for event
 * @param f Pointer to function to remove
 */
export function remove(
  key: string,
  f: (options: { [key: string]: any }) => Promise<void>
) {
  listeners[key] = listeners[key].filter((func) => func !== f);
}
let error: (e: Error) => void | undefined;
/**
 * Set the error handler for trigger (default is just to permit the throw)
 * @param newHandler
 */
export function setError(newHandler: (e: Error) => void) {
  error = newHandler;
}

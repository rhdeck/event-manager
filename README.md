
# @raydeck/event-manager - v1.0.2

A very simple event broadcaster/receiver system

## Index

### Variables

* [listeners](README.md#const-listeners)

### Functions

* [addListener](README.md#addlistener)
* [clear](README.md#clear)
* [error](README.md#let-error)
* [getListeners](README.md#getlisteners)
* [remove](README.md#remove)
* [setError](README.md#seterror)
* [trigger](README.md#trigger)

## Variables

### `Const` listeners

• **listeners**: *object*

*Defined in [index.ts:1](https://github.com/rhdeck/event-manager/blob/4f62c86/src/index.ts#L1)*

#### Type declaration:

* \[ **key**: *string*\]: function[]

## Functions

###  addListener

▸ **addListener**(`key`: string, `f`: function): *function*

*Defined in [index.ts:18](https://github.com/rhdeck/event-manager/blob/4f62c86/src/index.ts#L18)*

Add a listener for event `key`

**Parameters:**

▪ **key**: *string*

Identifier for event to fire

▪ **f**: *function*

Function to run on trigger

▸ (`options`: object): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | object |

**Returns:** *function*

function to remove the listener

▸ (): *void*

___

###  clear

▸ **clear**(`key`: string): *void*

*Defined in [index.ts:45](https://github.com/rhdeck/event-manager/blob/4f62c86/src/index.ts#L45)*

Remove all event listeners for identifier `key`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | identifier to clear  |

**Returns:** *void*

___

### `Let` error

▸ **error**(`e`: Error): *void*

*Defined in [index.ts:60](https://github.com/rhdeck/event-manager/blob/4f62c86/src/index.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | Error |

**Returns:** *void*

___

###  getListeners

▸ **getListeners**(`key`: string): *function[]*

*Defined in [index.ts:7](https://github.com/rhdeck/event-manager/blob/4f62c86/src/index.ts#L7)*

get all listener functions for identifier `key`

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *function[]*

___

###  remove

▸ **remove**(`key`: string, `f`: function): *void*

*Defined in [index.ts:54](https://github.com/rhdeck/event-manager/blob/4f62c86/src/index.ts#L54)*

Remove one event listener
Note that using the return value of `addTrigger` is easier API

**Parameters:**

▪ **key**: *string*

Identifier for event

▪ **f**: *function*

Pointer to function to remove

▸ (`options`: object): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | object |

**Returns:** *void*

___

###  setError

▸ **setError**(`newHandler`: function): *void*

*Defined in [index.ts:67](https://github.com/rhdeck/event-manager/blob/4f62c86/src/index.ts#L67)*

Set the error handler for trigger (default is just a no-op to squelch the throw)

**Parameters:**

▪ **newHandler**: *function*

▸ (`e`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | Error |

**Returns:** *void*

___

###  trigger

▸ **trigger**(`key`: string, `options`: object): *Promise‹void›*

*Defined in [index.ts:33](https://github.com/rhdeck/event-manager/blob/4f62c86/src/index.ts#L33)*

Trigger the event `key`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | identifier for event to trigger |
`options` | object | map of options to pass to the listener functions  |

**Returns:** *Promise‹void›*

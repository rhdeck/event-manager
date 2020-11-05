
<a name="readmemd"></a>


# @raydeck/event-manager - v1.2.1

## Index

### Variables

* [error](#let-error)
* [listeners](#const-listeners)

### Functions

* [addListener](#addlistener)
* [clear](#clear)
* [getListeners](#getlisteners)
* [remove](#remove)
* [setError](#seterror)
* [trigger](#trigger)

## Variables

### `Let` error

• **error**: *function*

*Defined in [index.ts:65](https://github.com/rhdeck/event-manager/blob/6fd1256/src/index.ts#L65)*

#### Type declaration:

▸ (`e`: Error): *void | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`e` | Error |

___

### `Const` listeners

• **listeners**: *object*

*Defined in [index.ts:1](https://github.com/rhdeck/event-manager/blob/6fd1256/src/index.ts#L1)*

#### Type declaration:

* \[ **key**: *string*\]: function[]

## Functions

###  addListener

▸ **addListener**(`key`: string, `f`: function): *function*

*Defined in [index.ts:18](https://github.com/rhdeck/event-manager/blob/6fd1256/src/index.ts#L18)*

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

*Defined in [index.ts:50](https://github.com/rhdeck/event-manager/blob/6fd1256/src/index.ts#L50)*

Remove all event listeners for identifier `key`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | identifier to clear  |

**Returns:** *void*

___

###  getListeners

▸ **getListeners**(`key`: string): *function[]*

*Defined in [index.ts:7](https://github.com/rhdeck/event-manager/blob/6fd1256/src/index.ts#L7)*

get all listener functions for identifier `key`

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *function[]*

___

###  remove

▸ **remove**(`key`: string, `f`: function): *void*

*Defined in [index.ts:59](https://github.com/rhdeck/event-manager/blob/6fd1256/src/index.ts#L59)*

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

*Defined in [index.ts:70](https://github.com/rhdeck/event-manager/blob/6fd1256/src/index.ts#L70)*

Set the error handler for trigger (default is just to permit the throw)

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

*Defined in [index.ts:33](https://github.com/rhdeck/event-manager/blob/6fd1256/src/index.ts#L33)*

Trigger the event `key`. Note that if an trigger handler throws, it will stop the show.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | identifier for event to trigger |
`options` | object | map of options to pass to the listener functions  |

**Returns:** *Promise‹void›*

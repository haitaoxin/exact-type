'use strict'

let ExactType = {
  checkType: function(value) {

    if (arguments.length !== 1) {
      throw new Error('This function needs exactly one input parameter');
    };

    if (typeof value === 'string') {return 'string'};
    if (typeof value === 'number') {return 'number'};
    if (typeof value === 'boolean') {return 'boolean'};
    if (typeof value === 'undefined') {return 'undefined'};
    if (typeof value === 'function') {return 'function'};

    if (typeof value === 'object') {
      if (value === null) {return 'null'};

      if (Array.isArray(value)) {return 'Array'};
      if (value.constructor === Date) {return 'Date'};
      if (value.constructor === String) {return 'String'};
      if (value.constructor === Number) {return 'Number'};
      if (value.constructor === Boolean) {return 'Boolean'};
      if (value.constructor === Set) {return 'Set'};
      if (value.constructor === Map) {return 'Map'};
      if (value.constructor === WeakSet) {return 'WeakSet'};
      if (value.constructor === WeakMap) {return 'WeakMap'};
      if (value.constructor === Promise) {return 'Promise'};
      if (value.constructor === Date) {return 'Date'};
      if (value.constructor === Date) {return 'Date'};

      return 'object';      // if not anything else that can be identified
    }
  }
}

module.exports = ExactType;

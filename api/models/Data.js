/**
 * Data.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    temperature: {
      type: 'INTEGER',
      required: true,
      columnName: 'temperature(°C)'
    },
    waterlevel: {
      type: 'INTEGER',
      required: true,
      columnName: 'waterlevel(cm)'
    },
    ph: {
      type: 'INTEGER',
      required: true,
      columnName: 'ph'
    },
    date: {
      type: 'DATETIME',
      required: true,
      columnName: 'date'
    }
  }
};


define(function(require) {
    'use strict'

    const d3Format = require('d3-format');

    /**
     * Checks if a number is an integer of has decimal values
     * @param  {Number}  value Value to check
     * @return {Boolean}       If it is an iteger
     */
    function isInteger(value) {
        return value % 1 === 0;
    }

    /**
     * Calculates percentage of value from total
     * @param  {Number}  value    Value to check
     * @param  {Number}  total    Sum of values
     * @param  {Number}  decimals Number of decimals in Percentage https://github.com/d3/d3-format
     * @return {Number}           Percentage
     */
    function calculatePercent(value, total, decimals) {
        return d3Format.format(decimals)(value / total * 100)
    }

    return {
        isInteger,
        calculatePercent
    };
});

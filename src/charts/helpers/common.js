define(function(require) {
    'use strict'

    const d3Format = require('d3-format');

    /**
     * Calculates percentage of value from total
     * @param  {Number}  value    Value to check
     * @param  {Number}  total    Sum of values
     * @return {Number}           Percentage
     */
    function calculatePercent(value, total) {
        return (value / total * 100);
    }

    /**
     * Formats number of decimal places
     * @param  {Number}  value    Value to format
     * @param  {String}  decimals Specifies number of decimals https://github.com/d3/d3-format
     * @return {String}           Number with formatted decimals
     */
    function formatNumber(value, decimals) {
        return d3Format.format(decimals)(value);
    }

    /**
     * Checks if a number is an integer of has decimal values
     * @param  {Number}  value Value to check
     * @return {Boolean}       If it is an iteger
     */
    function isInteger(value) {
        return value % 1 === 0;
    }

    return {
        calculatePercent,
        formatNumber,
        isInteger
    };

});

/**
 * Filters an array of objects based on matching properties.
 * @param {Array} data - The array of objects to filter.
 * @param {Object} criteria - An object with properties to match against the data.
 * @returns {Array} - The filtered array of objects.
 */
function filterData(data, criteria) {
    return data.filter(item =>
        Object.keys(criteria).every(
            key => item.hasOwnProperty(key) && item[key] === criteria[key]
        )
    );
}

/**
 * Aggregates data by summing up a specified property, grouped by a key.
 * @param {Array} data - The array of objects to aggregate.
 * @param {String} groupByKey - The property to group the data by.
 * @param {String} sumProperty - The property of which the sum is calculated.
 * @returns {Array} - An array of objects with the group key and summed value.
 */
function aggregateData(data, groupByKey, sumProperty) {
    return data.reduce((acc, curr) => {
        const key = curr[groupByKey];
        const found = acc.find(item => item.key === key);
        if (found) {
            found.sum += curr[sumProperty];
        } else {
            acc.push({ key, sum: curr[sumProperty] });
        }
        return acc;
    }, []);
}

module.exports = {
    filterData,
    aggregateData
};

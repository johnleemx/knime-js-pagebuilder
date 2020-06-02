/**
 * Utility function to retrieve the value of a property when passed
 * a string representation of it's key.
 *
 * ex:
 *      obj = {
 *          a : {
 *              b: {
 *                  c: 1
 *              }
 *          }
 *      };
 *      key = 'a.b.c';
 *
 *      getProp(obj, key);   // 1
 *
 * This is useful when using the kind of deep accessors/properties
 * often found in the knime nodeConfig objects.
 *
 * @param  {Object} obj the object with the deep/nested property
 * @param  {String} key the string key with '.' delimited properties
 * @returns {Object} the value targeted by the key path
 */
export const getProp = (obj, key) => {
    if (typeof key === 'string') {
        key = key.split('.');
    }
    if (key.length > 1) {
        let newKey = key.shift();
        return typeof obj[newKey] === 'undefined' ? null : getProp(obj[newKey], key);
    } else {
        return obj[key[0]];
    }
};

/**
 * Utility function to set the value of a property when passed
 * a string representation of it's key and the new value.
 *
 * ex:
 *      obj = {
 *          a : {
 *              b: {
 *                  c: 1
 *              }
 *          }
 *      };
 *      key = 'a.b.c';
 *      val = 2;
 *
 *      getProp(obj, key);          // 1
 *      setProp(obj, key, val);     // null
 *      getProp(obj, key);          // 2
 *
 * This is useful when using the kind of deep accessors/properties
 * often found in the knime nodeConfig objects.
 *
 * @param  {Object} obj the object with the deep/nested property
 * @param  {String} key the string key with '.' delimited properties
 *      - can also have '$<insert number>' groups to access objects in
 *        nested arrays; where the number following the '$' is the index
 *        of the object you want to update.
 * @param  {Object} val the value to set as the new value
 * @returns {undefined}
 * @throws error if the provided key does not exist in the obj
 */
export const setProp = (obj, key, val) => {
    if (typeof key === 'string') {
        key = key.split('.');
    }
    if (key.length > 1) {
        let newKey = key.shift();
        let index;
        if (newKey.includes('$')) {
            newKey = newKey.split('$');
            index = parseInt(newKey[1], 10);
            if (isNaN(index)) {
                newKey = newKey.join('$');
            } else {
                newKey = newKey[0];
            }
        }
        let nestedTarget = typeof obj[newKey] === 'object' ? obj[newKey] : {};
        if (index || index === 0) {
            nestedTarget = obj[newKey][index];
        }
        setProp(nestedTarget, key, val);
    } else {
        if (typeof obj[key[0]] === 'undefined') {
            throw Error('Provided key does not exist!');
        }
        obj[key[0]] = val;
    }
};

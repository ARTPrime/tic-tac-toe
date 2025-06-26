/**
 * Updates and item insisde an array depending on the property name provide. Defualt property name is 'id'
 * @param {*} array 
 * @param {*} updatedItem 
 * @param {*} propertyName 
 * @returns A new array with item updated
 */
export function updateArrayItemByPropertyName(array, updatedItem, propertyName = 'id') {
    const newArray = [...array];

    newArray.splice(
        array.findIndex(item => item[propertyName] === updatedItem[propertyName]),
        1,
        updatedItem
    )

    return newArray;
}
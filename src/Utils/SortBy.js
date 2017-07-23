/**
 * Sorts an array and allows multiple sorting criteria.
 *
 * It applies the Schwartzian transform:
 * https://en.wikipedia.org/wiki/Schwartzian_transform
 *
 * Author: David Rivera
 * Github: https://github.com/jherax
 *
 * You can fork this project on github:
 * https://github.com/jherax/array-sort-by.git
 */
const SortBy = (function() {

  const accent = 'ÂâÀàÁáÄäÃãÅåÊêÈèÉéËëÎîÌìÍíÏïÔôÒòÓóÖöÕõÛûÙùÚúÜüÑñÝýÿ';
  const normal = 'AaAaAaAaAaAaEeEeEeEeIiIiIiIiOoOoOoOoOoUuUuUuUuNnYyy';
  const DESC = /^desc:\s*/i;

  // Converts the accented characters to its equivalent with no accent
  function ignoreAccent(text) {
    const length = accent.length;
    for (let i = 0; i < length; i += 1) {
      text = text.replace(accent.charAt(i), normal.charAt(i));
    }
    // ignores case sensitive
    return text.toUpperCase();
  }

  // Compares each element and defines the sorting order
  function comparer(prev, next) {
    let asc = 1;
    if (typeof prev === 'string') {
      if (DESC.test(prev)) asc = -1;
      prev = ignoreAccent(prev);
      next = ignoreAccent(next);
    }
    if (prev === next) return 0;
    return (prev > next ? 1 : -1) * asc;
  }

  // Compares each decorated element
  function sortItems(aprev, anext) {
    let i, ordered;
    for (i in aprev) { // eslint-disable-line
      ordered = comparer(aprev[i], anext[i]);
      if (ordered) return ordered;
    }
    return 0;
  }

  // Defines the default sort order (ASC)
  function defaultSort(prev, next) {
    if (typeof prev === 'string') {
      prev = ignoreAccent(prev);
      next = ignoreAccent(next);
    }
    if (prev === next) return 0;
    return (prev > next ? 1 : -1);
  }

  /**
   * Sorts an array and allows multiple sorting criteria.
   *
   * @param  {Array} array: the collection to sort
   * @param  {Function} parser: transforms each item and specifies the sorting order
   * @return {Array}
   */
  return function SortBy(array, parser) {
    let i, item;
    const arrLength = array.length;
    if (typeof parser === 'undefined') {
      return array.sort(defaultSort);
    }
    // Schwartzian transform (decorate-sort-undecorate)
    for (i = arrLength; i;) {
      item = array[i -= 1];
      // decorate the array
      array[i] = [].concat(parser.call(null, item, i), item);
      // console.log('decorated: ', array[i]);
    }
    // sort the array
    array.sort(sortItems);
    // undecorate the array
    for (i = arrLength; i;) {
      item = array[i -= 1];
      array[i] = item[item.length - 1];
    }
    return array;
  }
}());

export default SortBy
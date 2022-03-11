/**
 * Search knows how to filter collection based on given keyword.
 * @param {Array<{title: string}>} arr collections.
 * @param {string} keyword is a search keyword.
 */
export function search(arr, keyword) {
  return arr.filter((item) => {
    const title = item.title.toLowerCase();
    const target = keyword.toLowerCase();
    return title.includes(target);
  });
}

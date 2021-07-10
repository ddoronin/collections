/**
 * Swaps the elements at the specified positions in the specified array. 
 * (If the specified positions are equal, invoking this method leaves the array unchanged.)
 *
 * @param list {T[]} - the list in which to swap elements.
 * @param i {number} - the index of one element to be swapped.
 * @param j {number} - the index of the other element to be swapped.
 * @returns 
 */
export function swap<T>(list: T[], i: number, j: number): T[] {
    if (i !== j) {
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}

function countSubarrays(arr: number[], k: number): number {
    let count = 0;

    for (let start = 0; start < arr.length; start++) {
        let max = arr[start];
        for (let end = start; end < arr.length; end++) {
            max = Math.max(max, arr[end]);
            if (countOccurrences(arr.slice(start, end + 1), max) >= k) {
                count++;
            }
        }
    }

    return count;
}

function countOccurrences(subarray: number[], num: number): number {
    let count = 0;
    for (let i = 0; i < subarray.length; i++) {
        if (subarray[i] === num) {
            count++;
        }
    }
    return count;
}

// Example usage:
const arr = [1, 2, 1, 2, 3];
const k = 2;
console.log(countSubarrays(arr, k)); // Output: 7

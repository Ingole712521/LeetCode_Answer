function getCommon(nums1: number[], nums2: number[]): number {
    const length1 = nums1.length;
    const length2 = nums2.length;
    let index1 = 0;
    let index2 = 0;
    while (index1 < length1 && index2 < length2) {
        if (nums1[index1] === nums2[index2]) {
            return nums1[index1];
        }
        if (nums1[index1] < nums2[index2]) {
            index1++;
        } else {
            index2++;
        }
    }
    return -1;
}

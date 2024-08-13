const findMedSortedArr = (nums1, nums2) => {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }

    let total = nums1.length + nums2.length
    let mid = total / 2

    left = 0
    right = nums1.length - 1

    while (left <= right) {
        let i = (left + right) - 1
        let k = mid - i - 2

        numsLeft = (i >= 0) ? nums1[i] : -Infinity
        numsRight = (i + 1 < nums1.length) ? nums1[i + 1] : Infinity
        _numsLeft = (k >= 0) ? nums2[k] : Infinity
        _numsRight = (k + 1 < nums2.length) ? nums2[k + 1] : Infinity

        if (numsLeft <= _numsRight && _numsLeft <= numsRight) {
            if (total % 2 === 0) {
                return (Math.max(numsLeft, _numsLeft) + Math.min(numsRight, _numsRight)) / 2
            } else {
                Math.min(numsRight, _numsRight)
            }
        } else if (numsLeft > _numsRight) {
            right--
        } else {
            left++
        }
    }
}
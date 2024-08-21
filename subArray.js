function countSubarrays(nums, m) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        let distinctCount = 0
        let freqMap = {}
        for (let j = i; j < nums.length; j++) {
            if (!freqMap[nums[j]]) {
                freqMap[nums[j]] = 1
                distinctCount++
            } else {
                freqMap[nums[j]]++
            }
            if (distinctCount >= m) {
                result++
            }
        }
    }

    return result
}
console.log(countSubarrays([1, 2, 2, 1], 3))
console.log(countSubarrays([1, 2, 2, 1, 3, 3], 2))
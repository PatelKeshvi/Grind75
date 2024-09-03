let twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (map.has(target - n)) {
            return [map.get(target - n), i];
        } else {
            map.set(n, i);
        }
    }
    return [];
};
// Find indexes of elements, sum of which is the target number

const nums = [2, 7, 11, 15];
const nums1 = [3, 2, 4];
const nums2 = [3, 3];

//option 1
const TwoSum = function (nums, target) {
  const diff = {};
  for (let i = 0; i < nums.length; i++) {
    if (diff[nums[i]] >= 0) {
      return [diff[nums[i]], i];
    }
    diff[target - nums[i]] = i;
  }
};

// option 2
function TwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (target == arr[i] + arr[j]) {
        return [i, j];
      }
    }
  }
}
console.log(TwoSum(nums, 9));
console.log(TwoSum(nums1, 6));
console.log(TwoSum(nums2, 6));

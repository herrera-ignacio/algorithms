from typing import List

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        res = nums.copy()
        left = 0
        i = right = len(nums) - 1
        while i >= 0:
            if abs(nums[right]) >= abs(nums[left]):
                res[i] = nums[right] ** 2
                right -= 1
            else:
                res[i] = nums[left] ** 2
                left += 1
            i -= 1
        return res




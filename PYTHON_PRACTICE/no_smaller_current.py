class Solution(object):
    def smallerNumbersThanCurrent(self, nums):
        array = []
        for i in range(len(nums)):
            Count = 0
            for j in range(len(nums)):
                if nums[j] < nums[i]:
                    Count += 1
            array.append(Count)
        return array
    

obj = Solution()

print_array =  obj.smallerNumbersThanCurrent([8,2,2,1,5])

print(print_array)
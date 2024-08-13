#### problem statement
---

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

#### pseudo code
---


```pseudo
FUNCTION twoSum(nums, target)
  CREATE an empty hash table `numToIndex`

  FOR i FROM 0 TO length(nums) - 1
    complement = target - nums[i]
    IF complement IS IN numToIndex
      RETURN [numToIndex[complement], i]
    END IF
    ADD nums[i] TO numToIndex WITH INDEX i
  END FOR

  RETURN empty array (no solution found)
END FUNCTION
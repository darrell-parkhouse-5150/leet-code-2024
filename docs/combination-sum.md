```pseudocode
FUNCTION combinationSum2(candidates, target)
  SORT candidates in ascending order

  RESULT = empty list

  FUNCTION backtrack(remain, currentCombination, start)
    IF remain == 0
      ADD currentCombination to RESULT
    ELSE IF remain < 0
      RETURN
    ELSE
      FOR i FROM start TO length(candidates) - 1
        IF i > start AND candidates[i] == candidates[i - 1]
          SKIP this iteration (avoid duplicates)
        END IF

        currentCombination.ADD(candidates[i])
        backtrack(remain - candidates[i], currentCombination, i + 1)
        currentCombination.REMOVE last element
      END FOR
    END IF
  END FUNCTION

  backtrack(target, empty list, 0)
  RETURN RESULT
END FUNCTION
```
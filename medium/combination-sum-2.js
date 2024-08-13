/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    const result = []

    backtrack = (remain, currentCombinations, start) => {
        if (remain === 0) {
            result.push([...currentCombinations])
        } else if (remain < 0) {
            return
        } else {
            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue
                }

                currentCombinations.push(candidates[i])
                backtrack(remain - candidates[i], currentCombinations, i + 1)
                currentCombinations.pop()
            }
        }
    }

    backtrack(target, [], 0)
    return result
};

//? best solution

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var _combinationSum2 = function(candidates, target) {
    result = [];
    candidates.sort((a,b) => a - b);

    const backTrack = (start, path, get) => {

        if(get === 0) {
            result.push([...path]);
            return;
        }

        if(get < 0) {
            return;
        }

        for(let i = start; i < candidates.length; i++) {
            if(i > start && candidates[i] === candidates[i-1]) {
                continue;
            }

            if(candidates[i] > get) {
                break;
            } 

            path.push(candidates[i]);
            backTrack(i+1, path, get - candidates[i]);
            path.pop();
        }

    }
}
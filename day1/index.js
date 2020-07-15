  // 两数之和并返回下标
  // 难点在于如何降低时间复杂度
  // 双层循环时间复杂度O(n^2)
  // 利用对象键值对
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  // var twoSum = function (nums, target) {
  //   const arr = [];
  //   for(let i = 0; i < nums.length; i ++){
  //     for(let j = i + 1; j < nums.length; j ++){
  //       if(nums[i] + nums[j] == target){
  //         arr.push(i);
  //         arr.push(j);
  //         return arr;
  //       }
  //     }
  //   }
  //   return arr;
  // };

  // var twoSum = function (nums, target) {
  //   const lib = {};
  //   for(let i = 0; i < nums.length; i ++){
  //     let cur = target - nums[i];
  //     if(lib[cur] !== undefined){
  //       return [lib[cur], i];
  //     }
  //     lib[nums[i]] = i;
  //   }
  //   return [];
  // };

  // var twoSum = function (nums, target) {
  //   const lib = new Map();
  //   for(let i = 0; i < nums.length; i ++){
  //     let cur = target - nums[i];
  //     if(lib.has(cur)){
  //       return [lib.get(cur), i]
  //     }
  //     lib.set(nums[i], i);
  //   }
  //   return [];
  // };

  function twoSum(nums, target, i = 0, map = {}){
    if(map[target - nums[i]] !== undefined){
      return [map[target - nums[i]], i];
    }
    if(i < nums.length){
      map[nums[i]] = i;
      i ++;
      return twoSum(nums, target, i, map);
    }else{
      return [];
    }
  }

  console.log(twoSum([2, 11, 7, 15], 9));
  console.log(twoSum([2, 4, 3], 6));
  console.log(twoSum([3, 3], 6));
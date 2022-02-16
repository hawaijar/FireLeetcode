#include <vector>

#ifndef FIRELEETCODE_CPP_TWOSUM_H
#define FIRELEETCODE_CPP_TWOSUM_H

using namespace std;

class TwoSumSolution {
public:
    vector<int> solution1(vector<int> &nums, int target);
};

#endif //FIRELEETCODE_CPP_TWOSUM_H

#include <map>
#include "TwoSum.h"

vector<int> TwoSumSolution::solution1(vector<int> &nums, int target) {
   if(nums.size() < 2) {
       return vector<int>{-1, -1};
   }
   map<int, int> hash;
   vector<int> result = vector<int>{-1,-1};

   for(int i = 0; i < nums.size(); i++) {
       int a = nums[i];
       int diff = target - a;

        //if(hash.contains(diff) ) --> C++ 20 supports contains()

        if(hash.find(diff) != hash.end()) {
           result[0] = i;
           result[1] = hash[diff];
           break;
       }
       else {
           hash[a] = i;
       }
   }
    return result;
}

#include <vector>

#ifndef FIRELEETCODE_CPP_TWOSUM_H
#define FIRELEETCODE_CPP_TWOSUM_H

using namespace std;

class TwoSumSolution {
public:
    vector<int> solution1(vector<int> &nums, int target);
    vector<int> solution2(vector<int> &nums, int target);
};

#endif //FIRELEETCODE_CPP_TWOSUM_H

#include <map>

// hash/map based solution
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

// Two/pointers solution
struct Data {
    int data;
    int index;
};
bool valueCmp(const struct Data& one, const struct Data& two) {
    return one.data < two.data;
}
vector<int> TwoSumSolution::solution2(vector<int> &nums, int target) {
    if(nums.size() < 2) {
        return vector<int>{-1, -1};
    }
    vector<Data> list;
    for(int i = 0; i < nums.size(); i++) {
        list.push_back({nums[i], i});
    }
    // sort the list (of structures)
    sort(list.begin(), list.end(), valueCmp);
    int i = 0, j = nums.size() - 1;
    while(i < j) {
        int sum = list[i].data + list[j].data;
        if(sum == target) {
            return vector<int>{list[i].index, list[j].index};
        }
        else if(sum < target) {
            i += 1;
        }
        else {
            j -= 1;
        }
    }
    return vector<int>{-1, -1};
}

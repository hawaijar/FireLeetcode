import java.util.ArrayList;
import java.util.List;

class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        // base case
        if(gas.length == 1) {
            if(gas[0] >= cost[0]) {
                return 0;
            }
            else {
                return -1;
            }
        }
        
        List stations = new ArrayList<Integer>();
        // filter out all the indices where gas[i] < cost[i]
        for(int index = 0; index < gas.length; index++) {
           if(gas[index] > cost[index]) {
               stations.add(index);
           }
        }
        if(stations.size() == 0) {
            return -1;
        }
    
        // try from each valid station
        for(int i = 0; i < stations.size(); i++) {
            int stationIndex = (int)stations.get(i); 
            int current = stationIndex;
            int capacity = gas[current];
            int next = current + 1;
            if(next == gas.length) {
                next = 0;
            }
            while(true) {
                capacity = capacity - cost[current] + gas[next];
                if(capacity < cost[next]) {
                    break;
                }
                current = next;
                if(current == stationIndex) {
                    return current;
                }
                next += 1;
                if(next == gas.length) {
                    next = 0;
                }
            }

        }
        return -1;
    }
}

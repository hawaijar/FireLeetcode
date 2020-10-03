class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        #base case
        if(len(gas) == 1):
            if(gas[0] >= cost[0]):
                return 0;
            else:
                return -1;
    
        #filter out all the indices where gas[i] < cost[i]
        stations = []
        for i in range(len(gas)):
            if(gas[i] > cost[i]):
                stations.append(i)
    
        if(len(stations) == 0):
            return -1;
    
        #try from each valid station
    
        for stationIndex in stations:
            current = stationIndex;
            capacity = gas[current];
            next = current + 1;
            if(next == len(gas)):
                next = 0;
            while(True):
                capacity = capacity - cost[current] + gas[next];
                if(capacity < cost[next]):
                    break;
                current = next;
                if(current == stationIndex):
                    return current;
                next += 1;
                if(next == len(gas)):
                    next = 0;
        return -1;

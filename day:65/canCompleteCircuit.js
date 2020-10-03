/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // base case
    if(gas.length === 1) {
        if(gas[0] >= cost[0]) {
            return 0;
        }
        else {
            return -1;
        }
    }
    
    // filter out all the indices where gas[i] < cost[i]
    const stations = gas.reduce((acc, el, index) => {
        if(gas[index] > cost[index]) {
            acc.push(index);
        }
        return acc;
    }, []);
    
    if(stations.length === 0) {
        return -1;
    }
    
    // try from each valid station
    
    for(let stationIndex of stations) {
        let current = stationIndex;
        let capacity = gas[current];
        let next = current + 1;
        if(next === gas.length) {
            next = 0;
        }
        while(true) {
            capacity = capacity - cost[current] + gas[next];
            if(capacity < cost[next]) {
                break;
            }
            current = next;
            if(current === stationIndex) {
                return current;
            }
            next += 1;
            if(next === gas.length) {
                next = 0;
            }
        }
        if(next === current) {
            return current;
        }
    }
    return -1;
};

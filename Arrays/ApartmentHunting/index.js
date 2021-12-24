class Program {
  calculateBruteSum(blocks, reqs, i) {
    let block = blocks[i];
    let distances = [];

    for (let facility of reqs) {
      // calculate to facility (distance)
      if (!block[facility]) {
        let leftDistance = Infinity;
        let rightDistance = Infinity;
        let count = 0;
        let found = false;
        // check the first block on the left that has the facility
        if (i > 0) {
          for (let j = i - 1; j >= 0; j--) {
            count += 1;
            if (blocks[j][facility]) {
              leftDistance = count;
              found = true;
              break;
            }
          }
        }
        if (!found) {
          leftDistance = blocks.length;
        }
        // check the first block on the right that has the facility
        count = 0;
        found = false;
        for (let j = i + 1; j < blocks.length; j++) {
          count += 1;
          if (blocks[j][facility]) {
            rightDistance = count;
            found = true;
            break;
          }
        }
        if (!found) {
          rightDistance = blocks.length;
        }
        distances.push(Math.min(leftDistance, rightDistance));
      }
    }

    return distances;
  }
  // brute force
  solution(blocks, reqs) {
    //base case
    if (blocks.length === 0 || reqs.length === 0) return -1;
    if (blocks.length === 1) return 0;

    let maxDistance = Infinity;
    let result = 0; // initialised to block0
    for (let i = 0; i < blocks.length; i++) {
      const distance = Math.max(...this.calculateBruteSum(blocks, reqs, i));
      if (distance < maxDistance) {
        maxDistance = distance;
        result = i;
      }
    }
    return result;
  }
  // 2-way scanning approach
  solution2(blocks, reqs) {
    //base cases
    if (blocks.length === 0 || reqs.length === 0) return -1;
    if (blocks.length === 1) return 0;

    // scan left to right
    for (let i = 0; i < blocks.length; i++) {
      for (let facility in blocks[i]) {
        if (i === 0) {
          if (blocks[i][facility]) {
            blocks[i][facility] = 0;
          } else {
            blocks[i][facility] = Infinity;
          }
        } else {
          if (blocks[i][facility]) {
            blocks[i][facility] = 0;
          } else {
            blocks[i][facility] = blocks[i - 1][facility] + 1;
          }
        }
      }
    }

    // scan right to left
    for (let i = blocks.length - 1; i >= 0; i--) {
      for (let facility in blocks[i]) {
        if (i === 0) {
          if (blocks[i + 1][facility] < blocks[i][facility]) {
            blocks[i][facility] = blocks[i + 1][facility] + 1;
          }
        } else if (i === blocks.length - 1) {
          if (blocks[i - 1][facility] < blocks[i][facility]) {
            blocks[i][facility] = blocks[i - 1][facility] + 1;
          }
        } else {
          if (blocks[i][facility] > 0) {
            blocks[i][facility] =
              Math.min(blocks[i - 1][facility], blocks[i + 1][facility]) + 1;
          }
        }
      }
    }
    // filter out Infinities (and any unrequested facility), if any, and find the max distance, D in each block
    // and choose the block that's the minimum (D)
    // also, consider only requested facilities
    let minimum = Infinity;
    let result = 0;
    for (let i = 0; i < blocks.length; i++) {
      let block = Object.keys(blocks[i]).reduce((acc, facility) => {
        if (reqs.includes(facility)) {
          acc[facility] = blocks[i][facility];
        }
        return acc;
      }, {});
      const values = Object.values(block).filter((x) => x !== Infinity);
      const max = Math.max(...values);
      if (max < minimum) {
        minimum = max;
        result = i;
      }
    }
    return result;
  }
}

// let p = new Program();
// // console.log(p.solution(blocks, reqs));
// console.log(p.solution2(blocks, reqs));

export default Program;

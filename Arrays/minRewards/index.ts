class Solution {
	private readonly scores: number[];
	constructor(scores: number[] = []) {
		this.scores = scores;
	}
	SolutionBruteForce():number {
		// base case
		if(this.scores.length === 0) {
			return 0;
		}
		const rewards = new Array(this.scores.length).fill(0);
		// scan the array from left
		rewards[0] = 1;
		for(let i = 1; i < this.scores.length; i++) {
			if(this.scores[i] > this.scores[i-1]) {
				rewards[i] = rewards[i-1] + 1;
				continue;
			}
			rewards[i] = 1;
			// scan backward
			for(let j = i - 1; j >= 0; j--) {
				if(this.scores[j] > this.scores[j+1]) {
					// check the max condition
					const current = rewards[j];
					const evaluatedCurrent = rewards[j + 1] + 1;
					if(current < evaluatedCurrent) {
						rewards[j] = evaluatedCurrent;
						continue;
					}
				}
					break;
			}
		}
		// console.log(rewards);
		return rewards.reduce((a,b) => a + b, 0);
	}

	SolutionElegant():number {
		const rewards = new Array(this.scores.length).fill(0);
		rewards[0] = 1;
		// scan left to right
		for(let i = 1; i < this.scores.length; i++) {
			if(this.scores[i] > this.scores[i-1]) {
				rewards[i] = rewards[i-1] + 1;
			}
			else {
				rewards[i] = 1;
			}
		}
		// scan right to left
		for(let j = this.scores.length - 2; j >= 0; j--) {
			if(this.scores[j] > this.scores[j+1]) {
				const currentReward = rewards[j];
				const evaluatedReward = rewards[j+1] + 1;
				if(currentReward < evaluatedReward) {
					rewards[j] = rewards[j+1] + 1;
				}
			}
		}

		return rewards.reduce((a,b) => a + b, 0);
	}

}

// --- Testing -------------
// const o = new Solution([8, 4, 2, 1, 3, 6, 7, 9, 5]);
// const minReward = o.SolutionBruteForce();
// console.log(minReward);

const o = new Solution([8, 4, 2, 1, 3, 6, 7, 9, 5]);
const minReward = o.SolutionElegant();
console.log(minReward);
// -------------------------

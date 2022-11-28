// https://leetcode.com/problems/find-players-with-zero-or-one-losses/

/**
 * 
 * @param {number[][]} matches
 * @return {number[][]}
 */
function findWinners(matches) {
  let winners = new Map();
  let losers = new Map();

  matches.forEach(m => {
    const winner = m[0];
    const loser = m[1];
    
    if (!winners.has(winner) && !losers.has(winner)) {
      winners.set(winner, true);
    }

    if (winners.has(loser)) {
      winners.delete(loser);
    }

    if (!losers.has(loser)) {
      losers.set(loser, 1);
    } else {
      losers.set(loser, losers.get(loser) + 1);
    }
  });

  winners = Array.from(winners.keys()).sort((a,b) => a - b);
  losers = Array.from(losers.entries()).filter(e => e[1] === 1).map(e => e[0]).sort((a,b) => a - b);

  return [winners, losers];
}

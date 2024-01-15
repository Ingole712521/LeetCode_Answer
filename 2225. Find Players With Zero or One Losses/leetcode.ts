type MatchResult = [number, number];
function processMatch(lossCount: Map<number, number>, winner: number, loser: number): void {
  if (!lossCount.has(winner)) {
    lossCount.set(winner, 0);
  }
  const currentLossCount = lossCount.get(loser) || 0;
  lossCount.set(loser, currentLossCount + 1);
}
function findWinners(matches: MatchResult[]): number[][] {
  const lossCount: Map<number, number> = new Map(); 
  for (const match of matches) {
    const [winner, loser] = match;
    processMatch(lossCount, winner, loser);
  }
  const winners: number[] = [];
  const oneMatchLosers: number[] = [];
  for (const [player, losses] of lossCount) {
    if (losses === 0) {
      winners.push(player);
    } else if (losses === 1) {
      oneMatchLosers.push(player);
    }
  }
  winners.sort((a, b) => a - b);
  oneMatchLosers.sort((a, b) => a - b);
  return [winners, oneMatchLosers];
}
const matchResults: MatchResult[] = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7]
];
const results = findWinners(matchResults);
console.log(`Winners: ${results[0]}, One-Match Losers: ${results[1]}`);

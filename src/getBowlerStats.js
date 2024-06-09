export default function getBowlerStats(ballsBowled) {
  const numBalls = ballsBowled.length;
  const completedOvers = Math.floor(numBalls / 6);
  const oddBalls = numBalls % 6;
  const overs = `${completedOvers}.${oddBalls}`;
  let maidens = 0;
  for (let i = 0; i <= numBalls - 6; i += 6) {
    let isMaiden = true;
    for (let j = i; j < i + 6; j++) {
      if (ballsBowled[j] !== 0) {
        isMaiden = false;
        break;
      }
    }
    if (isMaiden) {
      maidens++;
    }
  }
  const runs = ballsBowled.reduce((totalRuns, ball) => totalRuns + ball, 0);
  let economyRate = 0;
  if (numBalls > 0) {
    economyRate = (runs * 6) / numBalls;
  }
  return { overs, maidens, runs, economyRate };
}

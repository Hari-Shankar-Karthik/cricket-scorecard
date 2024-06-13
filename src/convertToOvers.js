export default function convertToOvers(balls) {
  const completedOvers = Math.floor(balls / 6);
  const oddBalls = balls % 6;
  return `${completedOvers}.${oddBalls}`;
}

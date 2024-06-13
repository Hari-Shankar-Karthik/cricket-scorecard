export default function getStats(ballRecord) {
  // battingStats: {team: {runs, balls}, batters: [{runs, balls, fours, sixes}]}
  // bowlingStats: [{balls, maidens, wickets, runs}] // ideally
  // bowlingStats: {balls, maidens, runs} // for now
  // return: {battingStats, bowlingStats}
  const team = { runs: 0, balls: 0 };
  const batters = Array.from({ length: 11 }, () => ({
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
  }));
  const bowlingStats = { balls: 0, maidens: 0, runs: 0 };
  for (const ballBowled of ballRecord) {
    // const { batter, bowler, runs } = ballBowled; // ideally
    const { batter, runs } = ballBowled; // for now
    batters[batter].runs += runs;
    batters[batter].balls++;
    if (runs === 4) {
      batters[batter].fours++;
    } else if (runs === 6) {
      batters[batter].sixes++;
    }
    bowlingStats.balls++;
    bowlingStats.runs += runs;
  }
  for (let i = 0; i <= ballRecord.length - 6; i += 6) {
    if (
      ballRecord.slice(i, i + 6).reduce((acc, curr) => acc + curr.runs, 0) === 0
    ) {
      bowlingStats.maidens++;
    }
  }
  return { battingStats: { team, batters }, bowlingStats };
}

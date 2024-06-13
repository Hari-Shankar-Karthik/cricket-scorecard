export default function getStats(ballRecord) {
  // battingStats: {team: {runs, balls}, batters: [{runs, balls, fours, sixes}]}
  // bowlingStats: [{balls, maidens, wickets, runs}] // ideally
  // bowlingStats: [{balls, maidens, runs}] // for now
  // return: {battingStats, bowlingStats}
  const team = { runs: 0, balls: 0 };
  const batters = Array.from({ length: 11 }, () => ({
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
  }));
  const bowlingStats = Array.from({ length: 11 }, () => ({
    balls: 0,
    maidens: 0,
    runs: 0,
  }));
  for (const ballBowled of ballRecord) {
    const { batter, bowler, runs } = ballBowled;
    team.runs += runs;
    team.balls++;
    batters[batter].runs += runs;
    batters[batter].balls++;
    if (runs === 4) {
      batters[batter].fours++;
    } else if (runs === 6) {
      batters[batter].sixes++;
    }
    bowlingStats[bowler].balls++;
    bowlingStats[bowler].runs += runs;
  }
  for (let i = 0; i <= ballRecord.length - 6; i += 6) {
    if (
      ballRecord.slice(i, i + 6).reduce((acc, curr) => acc + curr.runs, 0) === 0
    ) {
      // ASSUMING EACH BOWLER BOWLS EXACTLY 6 BALLS
      // NOTE: NO BABY OVERS, BOWLER RETIRING AND SHIT
      const { bowler } = ballRecord[i];
      bowlingStats[bowler].maidens++;
    }
  }
  return { battingStats: { team, batters }, bowlingStats };
}

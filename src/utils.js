function convertToOvers(numBalls) {
  const completedOvers = Math.floor(numBalls / 6);
  const oddBalls = numBalls % 6;
  return { completedOvers, oddBalls };
}

function getBatterStats(ballsFaced) {
  let runs = 0;
  let balls = 0;
  let fours = 0;
  let sixes = 0;
  for (const ball of ballsFaced) {
    runs += ball;
    balls++;
    if (ball === 4) {
      fours++;
    } else if (ball === 6) {
      sixes++;
    }
  }
  let strikeRate = 0;
  if (balls > 0) {
    strikeRate = (runs * 100) / balls;
  }
  return { runs, balls, fours, sixes, strikeRate };
}

function getBowlerStats(ballsBowled) {
  const numBalls = ballsBowled.length;
  const { completedOvers, oddBalls } = convertToOvers(numBalls);
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

function getBattingTeamStats(ballsFaced) {
  const battingTeamStats = { teamRuns: 0, teamBalls: 0 };
  for (const playerBallsFaced of ballsFaced) {
    if (playerBallsFaced === null) {
      continue;
    }
    const { runs, balls } = getBatterStats(playerBallsFaced);
    battingTeamStats.teamRuns += runs;
    battingTeamStats.teamBalls += balls;
  }
  return battingTeamStats;
}

export { convertToOvers, getBatterStats, getBowlerStats, getBattingTeamStats };

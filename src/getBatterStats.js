export default function get(ballsFaced) {
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

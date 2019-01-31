// https://www.codewars.com/kata/coding-3min-hacker-and-change
const change = (name,items,payment) => {
  const fair = +(payment - items.reduce((a, c) => a + c)).toFixed(2)
  if (name === "John") {
    if (fair > 0) {
      return +Math.abs(Math.floor(fair) - fair).toFixed(2) * 2 + Math.floor(fair)
    } else {
      return 0
    }
  } else {
    return fair
  }
}
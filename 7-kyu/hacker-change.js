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

// What I learned:
// That in this case you can use payment as accumulator and the item's value as current: [1, 2, 3].reduce((a, c) => a - c, 10)
// [items].reduce((a, c) => a - c, payment)
// 1st iteration: 10 - 1 = 9
// 2nd iteration 9 - 2 = 7
// 3rd iteration 7 - 3 = 4
// That's the change, "4"
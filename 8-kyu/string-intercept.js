const cutIt = arr => {
    let minValue = arr.map(str => str.length).reduce((a, b) => Math.min(a, b))
    let result = arr.map(item => {
      if (item.length > minValue) {
        return item.slice(0, minValue)
      } else {
        return item
      }
    })
    return result
  }
// I feel so verbose
// hard to do concise things 
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

  // Don't need all that hairy logic 
  // This was better // 
  const cutIt = arr => {
    let minValue = arr.map(str => str.length).reduce((a, b) => Math.min(a, b))
    return arr.map(item => item.slice(0, minValue))
}

// I feel so verbose
// hard to do concise things 

// Another example that is more tight 
function cutIt(arr){
    const minLength = Math.min(...arr.map(x => x.length));
    return arr.map(x => x.slice(0, minLength));
  }



const remove = (s,n) => {
  
  let cleanString = [...s].filter(char => !(char === '!')).join``
  let exclamationMarkNumber = [...s].filter(char => char === '!').length
  const magicString = (exclamationMarkNumber, s, n) => {

  				let parsed = 0;
  				let result = []; 

  		[...s].forEach((string) => {
  				if (string !== '!') {
  					return result.push(string)
  				} else if (string === '!') {
  					if (parsed < n) {
  						return ++parsed
  					} else {
  						return result.push(string)
  					}
  				}
  		})

  		return result.join``
  } 

  return (
  	!exclamationMarkNumber ? s : 
  	exclamationMarkNumber < n ? cleanString : 
  	magicString(exclamationMarkNumber, s, n)   
  )


}
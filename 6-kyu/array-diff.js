// https://www.codewars.com/kata/array-dot-diff/train/javascript
const array_diff = (a, b) => a.filter(x => !b.filter(y => y === x).length)

// another solution after some time...
// so actually after 2 years of coding I have a solution which is more lines than my 1 liner 2 years ago!?!?
// wtf
function arrayDiff(a, b) {
	
	const res=[];
	
	if(a.length === 0)
		return a;
	
	for(let i = 0; i < a.length; i++)
	{
		if(b.indexOf(a[i]) > -1)
			continue;
		else
			res.push(a[i]);
	}

	return res;
}
// https://www.codewars.com/kata/5263c6999e0f40dee200059d
function getPINs(observed) {
  let subresult = [];
  let target = String(observed).split('');

  target.forEach( item => {
      let result = [];
      let row = Math.ceil( item/3);
      result.push( String(item) );

      let last = item - 1, 
          next = +item + 1, 
          before = item - 3,
          after = +item + 3;

      if( last > 0 && Math.ceil(last / 3) == row ) result.push(String(last));
      if( Math.ceil(next/3) == row ) result.push(String(next));
      if( before > 0 && Math.ceil(before/3) == (row - 1) ) result.push(String(before));
      if( item == '8' ) result.push(String('0'));
      else if( item == '0') result.push(String('8'));
      else if( after < 10 && Math.ceil(after/3) == (row + 1) ) result.push(String(after));

      subresult.push(result)
  });

  let result = subresult[0];
  for (let k = 1; k < subresult.length; k++) {
      let endArr = [];
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < subresult[k].length; j++) {
          endArr.push(result[i] + subresult[k][j])
        }
      }
      result = [...endArr]
  }
  return result;
}
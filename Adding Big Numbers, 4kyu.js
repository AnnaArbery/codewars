// https://www.codewars.com/kata/525f4206b73515bffb000b21
function add(a, b) {
  let ff = Array.from(a, Number);
  let tt = Array.from(b, Number);
  let max = Math.max(ff.length, tt.length);
  let remain  = 0;
  let result = [];
  while(max--) {
    remain += (ff.pop() || 0 ) + (tt.pop() || 0);
    result.unshift(remain % 10);
    remain = Math.floor(remain / 10);
  }
  if(remain !== 0) {
    result.unshift(remain)
  }
  return result.join('');
}
// https://www.codewars.com/kata/52b7ed099cdc285c300001cd
function sumIntervals(intervals) {
  let sum = 0, max = -Infinity;
  intervals
      .sort(([a, a1], [b ,b1]) => (a == b) ? a1 - b1 : a - b)
      .forEach(([start, stop]) => {
        if (max < start)
          max = start;
        if (max < stop) 
          [max, sum] = [stop, sum + stop - max];
      });
  return sum;
}
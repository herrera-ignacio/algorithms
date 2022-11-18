// https://leetcode.com/problems/rectangle-area/

function computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  // right - left
  let xOverlap = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  // top - bottom
  let yOverlap = Math.min(ay2, by2) - Math.max(ay1, by1);

  let areaOfOverlap = 0;

  if (xOverlap > 0 && yOverlap > 0) {
    areaOfOverlap = xOverlap * yOverlap;
  }

  return (ay2 - ay1) * (ax2 - ax1) + (by2 - by1) * (bx2 - bx1) - areaOfOverlap;
}

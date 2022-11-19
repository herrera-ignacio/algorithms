// https://leetcode.com/problems/erect-the-fence/description/

/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
function outerTrees(trees) {

    if (trees.length <= 1) return trees;

    /**
     * Pick the point with the lowest y-coordinate to start the hull with.
     * In case of a tie, pick the left-most one.
     */
    const start = bottomLeft(trees);


    /**
     * Sort set of points based on their polar angles.
     * This give us a rough idea of the way in which we should
     * consider the points to be included in the hull while
     * considering the boundary in counter-clockwise order.
     * The points with a lower polar angle relative to the vertical line
     * come first in the sorted array.
     * If the orientation of two points happens to be the same, they are
     * sorted based on their distance from the beginning point.
     */
    const points = trees.sort((p, q) => {
        // pick the one with a lower relative polar angle
        const diff = orientation(start, p, q) - orientation(start, q, p);
        
        // pick the closer one
        if (diff === 0) return distance(start, p) - distance(start, q);

        return diff > 0 ? 1 : -1;
    });


    /**
    * We scan over all the points r, and find out the point q
    * which is the most counterclockwise relative to p
    * and add it to the convex hull.
    */
    let i = points.length - 1;

    while (i >= 0 && orientation(start, points[points.length - 1], points[i]) === 0) i--;

    for (let l = i + 1, h = points.length - 1; l < h; l++, h--) {
        let temp = [...points[l]];
        points[l] = [...points[h]]
        points[h] = temp;
    }

    let stack = [];
    stack.push(points[0]);
    stack.push(points[1]);

    for (let j = 2; j < points.length; j++) {
        let top = stack.pop();
        while (orientation(stack[stack.length - 1], top, points[j]) > 0) {
            top = stack.pop();
        }
        stack.push(top);
        stack.push(points[j]);
    }

    return stack;
}

/**
 *  For points p, q, r to be traversed in clounterclockwise direction,
 *  the cross product of the vectors pq and qr
 *  should be in a direction out of the plane of the screen
 *  (i.e., it should be positive)
 *  @param {number[]} p
 *  @param {number[]} q
 *  @param {number[]} r
 *  @return {number}
 */
function orientation(p, q, r) {
    return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
}

/**
 *  @param {number[]} p
 *  @param {number[]} q
 *  @return {number} distance between two points
 */
function distance(p, q) {
    return (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
}

/**
 *  @param {number[][]) points
 *  @return {number[]} left-most point
 */
function bottomLeft(points) {
    let bottomLeft = points[0]

    for (let p of points) {
        if (p[1] < bottomLeft[1]) {
            bottomLeft = p;
        }
    }
    
    return bottomLeft;
}


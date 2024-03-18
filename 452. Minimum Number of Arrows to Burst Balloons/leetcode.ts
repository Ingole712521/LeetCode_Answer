function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1]);
    let arrowsNeeded = 0;
    let lastArrowPosition = -Infinity;
    for (const [start, end] of points) {
        if (lastArrowPosition < start) {
            arrowsNeeded++;
            lastArrowPosition = end;
        }
    }
    return arrowsNeeded;
}

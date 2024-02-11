function cherryPickup(grid: number[][]): number {
    const rowCount = grid.length; 
    const colCount = grid[0].length;   
    let dp1: number[][] = new Array(colCount).fill(0).map(() => new Array(colCount).fill(-1)); 
    let dp2: number[][] = new Array(colCount).fill(0).map(() => new Array(colCount).fill(-1)); 
    dp1[0][colCount - 1] = grid[0][0] + grid[0][colCount - 1]; 
    for (let row = 1; row < rowCount; ++row) { 
        for (let col1 = 0; col1 < colCount; ++col1) {
            for (let col2 = 0; col2 < colCount; ++col2) { 
                const cherryCount = grid[row][col1] + (col1 === col2 ? 0 : grid[row][col2]); 
                for (let prevCol1 = col1 - 1; prevCol1 <= col1 + 1; ++prevCol1) {
                    for (let prevCol2 = col2 - 1; prevCol2 <= col2 + 1; ++prevCol2) { 
                        if (prevCol1 >= 0 && prevCol1 < colCount &&
                            prevCol2 >= 0 && prevCol2 < colCount &&
                            dp1[prevCol1][prevCol2] !== -1) { 
                            dp2[col1][col2] = Math.max(dp2[col1][col2], dp1[prevCol1][prevCol2] + cherryCount);
                        }
                    }
                }
            }
        } 
        [dp1, dp2] = [dp2, dp1];
    }
  
    let maxCherries = 0;  
    for (let col1 = 0; col1 < colCount; ++col1) {
        for (let col2 = 0; col2 < colCount; ++col2) {
            maxCherries = Math.max(maxCherries, dp1[col1][col2]);
        }
    }
    return maxCherries; 
}

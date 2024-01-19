class Solution {
  public int minFallingPathSum(int[][] matrix) {
      int n = matrix.length; 
      int[] dpCurrentRow = new int[n]; 
      for (int j = 0; j < n; ++j) {
          dpCurrentRow[j] = matrix[0][j];
      }
      for (int rowIdx = 1; rowIdx < n; ++rowIdx) {
          int[] dpNextRow = dpCurrentRow.clone();          
          for (int colIdx = 0; colIdx < n; ++colIdx) {
              int minSumAbove = dpCurrentRow[colIdx];
              if (colIdx > 0) {
                  minSumAbove = Math.min(minSumAbove, dpCurrentRow[colIdx - 1]);
              }
              if (colIdx + 1 < n) {
                  minSumAbove = Math.min(minSumAbove, dpCurrentRow[colIdx + 1]);
              }
              dpNextRow[colIdx] = minSumAbove + matrix[rowIdx][colIdx];
          }
          dpCurrentRow = dpNextRow;
      }
      int minFallingPathSum = Integer.MAX_VALUE;
      for (int x : dpCurrentRow) {
          minFallingPathSum = Math.min(minFallingPathSum, x);
      }
    
      return minFallingPathSum;
  }

}
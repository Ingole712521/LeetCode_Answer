class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;
  TreeNode() {}
  TreeNode(int val) {
      this.val = val;
  }
  TreeNode(int val, TreeNode left, TreeNode right) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}
class Solution {
  private int maxDifference;
  public int maxAncestorDiff(TreeNode root) {
      if (root == null) {
          return 0;
      }
      depthFirstSearch(root, root.val, root.val);
      return maxDifference;
  }
  private void depthFirstSearch(TreeNode node, int minVal, int maxVal) {
      if (node == null) {
          return;
      }
      int currentMaxDifference = Math.max(Math.abs(minVal - node.val), Math.abs(maxVal - node.val));
      maxDifference = Math.max(maxDifference, currentMaxDifference);
      minVal = Math.min(minVal, node.val);
      maxVal = Math.max(maxVal, node.val);
      depthFirstSearch(node.left, minVal, maxVal);
      depthFirstSearch(node.right, minVal, maxVal);
  }
}

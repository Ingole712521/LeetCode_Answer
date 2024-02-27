class Solution {
    int diameter = 0; 
    public int diameterOfBinaryTree(TreeNode root) {  
        maxDepth(root);
        return diameter;
    }
    public int maxDepth(TreeNode root) {
        if (root == null)
            return 0;
        int left = maxDepth(root.left);
        int right = maxDepth(root.right);
        if ((left + right) > diameter)
            diameter = left + right;
        return 1 + Math.max(left, right);
    }
}

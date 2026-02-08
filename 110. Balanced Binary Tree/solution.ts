
function isBalanced(root: TreeNode | null): boolean {

    const calculateHeight = (node : TreeNode | null ): number => {
        if(node === null){
            return 0;
        }

        const leftHeight : number = calculateHeight(node.left);
        const rightHeight : number = calculateHeight(node.right);

         if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    };

    return calculateHeight(root) !== -1
    
};

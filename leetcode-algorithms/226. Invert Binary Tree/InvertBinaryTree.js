/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 解題概念: tree, 遞迴
 */
var invertTree = function(root) {
    if(!root){
        return root;
    }
    let tmp = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = tmp;

    return root
};
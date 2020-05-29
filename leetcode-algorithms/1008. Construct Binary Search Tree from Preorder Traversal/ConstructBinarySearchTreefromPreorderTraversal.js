/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let result = null;

    for(let i in preorder){
        result = help(result, preorder[i])
    }

    return result;
};

function help(root, num){
    if(root==null){
        let node = new TreeNode()
        node.val = num;
        return node;
    }

    if(root.val>num){
        root.left = help(root.left, num)
    }else{
        root.right = help(root.right, num)
    }

    return root
}
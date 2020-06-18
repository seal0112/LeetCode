/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 解題: 被X圍住的O要變成X, 但是如果O或是相鄰的O有碰到邊上, 就不用變
 *      只要檢查四個邊上的O, 然後用BFS或DFS找出跟邊上的O相鄰的O做上註記
 *      然後循環一次整個array, 把沒做註記的O變成X, 有做註記的O變回原本的O就好
 */
var solve = function(board) {
    if(!board || board.length===0 || board[0].length===0){
       return
    }
    const verticallen = board.length
    const horizonlen = board[0].length
    for(let i=0; i<verticallen; i++){
        if(i===0 || i===verticallen-1){
            for(let j=0; j<horizonlen; j++){
                dyeing(board, i, j);
            }
        }else{
            for(let j=0; j<horizonlen; j+=horizonlen-1){
                dyeing(board, i, j);
            }
        }
    }
    for(let i=0; i<verticallen; i++){
        for(let j=0; j<horizonlen; j++){
            if(board[i][j]==='Y'){
                board[i][j]='O'
            }else if(board[i][j]==='O'){
                board[i][j]='X'
            }

        }
    }

    function dyeing(board, i, j){
        if(i<0 || i>verticallen-1 || j<0 || j>horizonlen-1 || !board[i][j] || board[i][j]==='X'){
            return;
        }
        if(board[i][j]==='O'){
            board[i][j] = 'Y'
            dyeing(board, i, j-1);
            dyeing(board, i, j+1);
            dyeing(board, i-1, j);
            dyeing(board, i+1, j);
        }
    }

};
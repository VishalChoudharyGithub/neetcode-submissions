class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        if(grid[0][0] === 1) return -1;
        const queue = [[0,0]];
        const visited = new Set();
        visited.add(`0,0`);
        let res = 1;
        while(queue.length){
            let totalElements = queue.length;
            for( let i = 0 ; i< totalElements;i++){
                const [r,c] = queue.shift();
                if(r === grid.length-1 && c === grid[0].length-1) return res;

                const directions = [[0,1],[0,-1],[1,0],[-1,0],[-1,-1],[-1,1],[1,-1],[1,1]];
                for(let [dr,dc] of directions){
                    const newR = r+dr;
                    const newC = c+ dc;
                    if(newR < 0 || newR >= grid.length || newC < 0 || newC >= grid[0].length || visited.has(`${newR},${newC}`) || grid[newR][newC] === 1){
                        continue;
                    }
                    queue.push([newR,newC]);
                    visited.add(`${newR},${newC}`);
                }
            }
            res += 1;

        }

        return -1;
    }
}
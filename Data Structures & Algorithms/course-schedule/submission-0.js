class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const cache = {};
        for(let [after,before] of prerequisites){
            if (!cache[before]) cache[before] = [];
            cache[before].push(after);
        }

        const visited = new Set();
        function dfs(course){
            if(visited.has(course)) return false;

            visited.add(course);
            for(let nextCourse of (cache[course] || [])){
                if(!dfs(nextCourse)) return false;
            }
            visited.delete(course);
            return true;
        }


        for(let course of Object.keys(cache)){
            if(!dfs(Number(course))) return false;
        }

        return true;
    }
}
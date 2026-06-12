class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const splittedPath = path.split("/");
        const stack = [];
        for(let part of splittedPath){
            if(part === "" || part === ".") continue;
            if(part === ".."){
                if(stack.length)  stack.pop();
            }
            else{
                stack.push(`/${part}`);
            }
        }
        if(!stack.length) return "/";
        return stack.join("");
    }
}

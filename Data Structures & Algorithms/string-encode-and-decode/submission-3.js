class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr ="";
        for(let str of strs){
            encodedStr += `${str.length}#${str}`;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        // 5#Hello5#World
        let res = [];
        let start = 0;
        for(let i = 0; i< str.length;i++){
            if(str[i]==='#'){
                const len = Number(str.slice(start,i));
                console.log(len);
                start = i+1;
                const end = start+len;
                res.push(str.slice(start,end));

                start=end;
                i= end;
            }
        }

        return res;


    }
}

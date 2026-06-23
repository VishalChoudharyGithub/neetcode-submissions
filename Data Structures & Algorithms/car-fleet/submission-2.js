class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const data = [];
        for (let i = 0; i < position.length; i++) {
            data.push([position[i], speed[i]]);
        }
        data.sort((data1,data2)=> data2[0] - data1[0]);
        let currentFleetTime = -Infinity;
        let res = 0;
        for(let i = 0 ;i < data.length;i++){
            const [postition,speed] = data[i];
            const time = (target-postition)/speed;
            if(time > currentFleetTime){
                res += 1;
                currentFleetTime = time;
            }
        }
        return res;
    }
}

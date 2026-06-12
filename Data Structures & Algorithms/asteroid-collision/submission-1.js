class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let asteroid of asteroids) {
            let isDestroyed = false;

            while (
                stack.length > 0 &&
                stack[stack.length - 1] > 0 && // right-moving
                asteroid < 0                  // current is left-moving
            ) {
                const last = stack[stack.length - 1];

                if (Math.abs(last) < Math.abs(asteroid)) {
                    stack.pop(); 
                    continue;
                } else if (Math.abs(last) === Math.abs(asteroid)) {
                    stack.pop(); 
                    isDestroyed = true;
                    break;
                } else {
                    isDestroyed = true;
                    break;
                }
            }

            if (!isDestroyed) {
                stack.push(asteroid);
            }
        }

        return stack;
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        // Hmm... I need to repeatedly find the largest stone.
        // A Max Heap is exactly the right data structure.
        const maxHeap = new MaxPriorityQueue();

        // Let me add every stone into the heap.
        for (const stone of stones) {
            maxHeap.enqueue(stone);
        }

        // As long as I have at least two stones,
        // I can smash the two heaviest.
        while (maxHeap.size() > 1) {

            // Let me remove the heaviest stone.
            const first = maxHeap.dequeue();

            // Now the second heaviest.
            const second = maxHeap.dequeue();

            // If both stones have the same weight,
            // they destroy each other.
            if (first === second) {
                continue;
            }

            // Otherwise one stone survives.
            // I'll put the remaining weight back.
            maxHeap.enqueue(first - second);
        }

        // If no stones remain,
        // the answer is 0.
        if (maxHeap.size() === 0) {
            return 0;
        }

        // Otherwise the last remaining stone
        // is the answer.
        return maxHeap.dequeue();
    }
}
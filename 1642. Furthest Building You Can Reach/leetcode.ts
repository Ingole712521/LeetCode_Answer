function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    let minHeap: number[] = [];   
    const buildingCount = heights.length;
    function pushHeap(value: number) {
        minHeap.push(value);
        minHeap.sort((a, b) => a - b); 
    }
    function popHeap() {
        minHeap.shift();
    }
    for (let i = 0; i < buildingCount - 1; ++i) {
        const currentHeight = heights[i];      
        const nextHeight = heights[i + 1];      
        const heightDifference = nextHeight - currentHeight; 
        if (heightDifference > 0) { 
            pushHeap(heightDifference); 
            if (minHeap.length > ladders) { 
                bricks -= minHeap[0]; 
                popHeap(); 
                if (bricks < 0) { 
                    return i; 
                }
            }
        }
    }
    return buildingCount - 1;
}

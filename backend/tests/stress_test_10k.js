/**
 * INDIA-SCALE SIMULATION: 10,000 Concurrent Alerts (Memory Safe)
 */
async function runAcidTest() {
    console.log("STARTING HARDENED 10K STRESS TEST...");
    const startTime = Date.now();
    const totalRequests = 10000;
    const chunkSize = 50; // Only 50 simultaneous operations

    for (let i = 0; i < totalRequests; i += chunkSize) {
        const batch = [];
        for (let j = 0; j < chunkSize && (i + j) < totalRequests; j++) {
            // Priority 4 for most, Priority 1 for every 100th
            const priority = (i + j) % 100 === 0 ? 'SAFETY' : 'GROWTH';
            batch.push(dispatcher.send(..., { priorityLevel: priority }));
        }
        
        // Wait for this chunk of 50 to finish enqueuing before starting next 50
        await Promise.all(batch);
        
        if (i % 1000 === 0) console.log(`Progress: ${i}/${totalRequests}...`);
    }

    const duration = Date.now() - startTime;
    console.log(`STRESS TEST COMPLETE: 10k messages enqueued in ${duration}ms`);
}
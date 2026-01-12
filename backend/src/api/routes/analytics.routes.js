const { executeInContext } = require('../../core/utils/execution.engine');

/**
 * SRS 21.6: Regional Benchmarking (Tenant-Isolated)
 */
const getRegionalBenchmarking = async (req, db) => {
    const report = await db('v_safe_topic_performance')
        .select('topic_id', 'is_minor', 'avg_score', 'sample_size')
        .orderBy('avg_score', 'desc');

    return {
        timestamp: new Date(),
        scope: "TENANT_LEVEL_BENCHMARK",
        metrics: report
    };
};

module.exports = { getRegionalBenchmarking };
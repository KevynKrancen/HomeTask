import aggregatedData from '../utils/aggregatedData.js';

test('should aggregate data correctly', () => {
    const resources = "arn:aws:lambda:us-east-1:1234567890:function:dev-batch-governor-stats-aggregator";
    const findings = [
        { Status: 'FAIL', ResourceId: 'arn:aws:lambda:us-east-1:1234567890:function:dev-batch-governor-stats-aggregator', CheckTitle: 'Test CheckTitle' }
    ];

    const result = aggregatedData(resources, findings);
    expect(result).toHaveLength(1);
    expect(result[0].resource).toBe(resources);
    console.log(result);
});

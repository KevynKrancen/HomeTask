import { createObjectCsvWriter } from 'csv-writer';

function aggregatedData(resources, findings) {
    let resourceLines = resources.split('\n');
    let results = [];
    // Making sure there are no duplicate results using Set()
    let seen = new Set();

    for (let finding of findings) {
        if (finding.Status === 'FAIL') {
            let resourceId = finding.ResourceId;
            let checkTitle = finding.CheckTitle;

            for (let resourceLine of resourceLines) {
                if (resourceLine.includes(resourceId)) {
                    let key = resourceLine + "|" + checkTitle;
                    if (!seen.has(key)) {
                        seen.add(key);
                        results.push({
                            resource: resourceLine,
                            checkTitle: checkTitle
                        });
                    }
                    break;
                }
            }
        }
    }

    // Define the CSV writer and write the results to a CSV file
    const csvWriter = createObjectCsvWriter({
        path: 'results.csv',
        header: [
            { id: 'resource', title: 'Resource' },
            { id: 'checkTitle', title: 'Check Title' }
        ]
    });

    csvWriter.writeRecords(results)
        .then(() => console.log('CSV file written successfully'))
        .catch(error => console.error('Error writing CSV file', error));

    return results;
}

export default aggregatedData;

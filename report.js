const newman = require('newman');
require('dotenv').config();
newman.run({
   collection: `https://api.postman.com/collections/47470180-959e24f6-86ae-4cb6-8c1a-c9df0c4491e3?access_key=${process.env.PMAT_KEY }`,

    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});

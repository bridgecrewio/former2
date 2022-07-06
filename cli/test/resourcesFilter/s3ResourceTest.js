const mocha = require('mocha');
const assert = require('chai').assert;

const { it, describe } = mocha;

const { s3Data, s3Result } = require('./data/s3_data.json');
const { filterDataByArnIds } = require('../../../js/datatables')

describe('S3 Resource', async () => {
    it('Should return 10 from 10 resources - running without physicalIdsToFilterBy', function () {
        let s3DataForTest = JSON.parse(JSON.stringify(s3Data))  // For deep copy
        assert.deepEqual(filterDataByArnIds({}, s3Data, 'S3', 'listBuckets', []), s3DataForTest)
    })
    it('Should return 10 from 10 resources - running with params', function () {
        let s3DataForTest = JSON.parse(JSON.stringify(s3Data))  // For deep copy
        assert.deepEqual(filterDataByArnIds({"a": "b"}, s3Data, 'S3', 'listBuckets', ['cshayner']), s3DataForTest)
    })
    it('Should return 2 from 10 resources', function () {
        assert.deepEqual(filterDataByArnIds({}, s3Data, 'S3', 'listBuckets', ['cshayner']), s3Result)
    })
})
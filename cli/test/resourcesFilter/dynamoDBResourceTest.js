const mocha = require('mocha');
const assert = require('chai').assert;

const { it, describe } = mocha;

const { dynamoData, dynamoResult } = require('./data/dynamo_data.json');
const { filterDataByArnIds } = require('../../../js/datatables')

describe('DynamoDB Resource', async () => {
    it('Should return 10 from 10 resources - running without physicalIdsToFilterBy', function () {
        let dynamoDataForTest = JSON.parse(JSON.stringify(dynamoData))  // For deep copy
        assert.deepEqual(filterDataByArnIds({}, dynamoData, 'DynamoDB', 'listTables', []), dynamoDataForTest)
    })
    it('Should return 10 from 10 resources - running with params', function () {
        let dynamoDataForTest = JSON.parse(JSON.stringify(dynamoData))  // For deep copy
        assert.deepEqual(filterDataByArnIds({"a": "b"}, dynamoData, 'DynamoDB', 'listTables', ['cshayner']), dynamoDataForTest)
    })
    it('Should return 2 from 10 resources', function () {
        assert.deepEqual(filterDataByArnIds({}, dynamoData, 'DynamoDB', 'listTables', ['cshayner']), dynamoResult)
    })
})
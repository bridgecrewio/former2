const mocha = require('mocha');
const assert = require('chai').assert;

const { it, describe } = mocha;

const { eksData, eksResults } = require('./data/eks_data.json');

const { filterDataByArnIds } = require('../../../js/datatables')

describe('EKS Resource', async () => {
    it('Should return 10 from 10 resources - running without physicalIdsToFilterBy', function () {
        let eksDataForTest = JSON.parse(JSON.stringify(eksData))  // For deep copy
        assert.deepEqual(filterDataByArnIds({}, eksData, 'EKS', 'listClusters', []), eksDataForTest)
    })
    it('Should return 10 from 10 resources - running with params', function () {
        let eksDataForTest = JSON.parse(JSON.stringify(eksData))  // For deep copy
        assert.deepEqual(filterDataByArnIds({"a": 'b'}, eksData, 'EKS', 'listClusters', ['cshayner']), eksDataForTest)
    })
    it('Should return 2 from 10 resources', function () {
        assert.deepEqual(filterDataByArnIds({}, eksData, 'EKS', 'listClusters', ['cshayner']), eksResults)
    })
})
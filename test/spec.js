const expect = require('chai').expect;
const mergeSort = require('../mergeSort');

describe("mergeSort", function () {
    it ("exists", function () {
        expect(mergeSort([])).to.be.ok;
    });
});

describe("mergeSort working?", function () {
    it('actually sorts', function () {
        expect(mergeSort([2,5,1,3,8,0])).to.eql([0,1,2,3,5,8])
    });
});
import { expect } from 'chai';
import { singleNumber } from './single-number';

describe('singleNumber', () => {
    it('should return 1', () => {
        expect(singleNumber([2, 2, 1])).equal(1);
    });

    it('should return 3', () => {
        expect(singleNumber([2, 2, 1, 1, 3])).equal(3);
    });
});
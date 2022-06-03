import { expect } from 'chai';
import { hammingWeight } from './number-of-1-bits';

describe('hammingWeight', () => {
    it('should return 1 when passed 0001', () => {
        // expect(hammingWeight()).equal(1);
    });

    it('should return 2 when passed 0011', () => {
        // expect(hammingWeight()).equal(1);
    });

    it('should return 5 when passed 010011011', () => {
        // expect(hammingWeight()).equal(1);
    });

    it('should return 8 when passed 10011011001011', () => {
        // expect(hammingWeight()).equal(1);
    });

    it('should return 12 when passed 1110100011101101011', () => {
        // expect(hammingWeight()).equal(1);
    });

    it('should return 13 when passed 1101110110110101011', () => {
        // expect(hammingWeight()).equal(1);
    });
});

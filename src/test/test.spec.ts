import { expect } from 'chai';
import { test } from './test';

describe('test', () => {
    it('should return 1', () => {
        expect(test()).equal(1);
    });
});

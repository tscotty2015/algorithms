import { expect } from 'chai';
import { isPrime } from './is-prime';

describe('isPrime', () => {
    it('should return true for 2', () => {
        expect(isPrime(2)).equal(true);
    });

    it('should return true for 3', () => {
        expect(isPrime(3)).equal(true);
    });

    it('should return false for 4', () => {
        expect(isPrime(4)).equal(false);
    });

    it('should return true for 5', () => {
        expect(isPrime(5)).equal(true);
    });

    it('should return false for 6', () => {
        expect(isPrime(6)).equal(false);
    });

    it('should return true for 7', () => {
        expect(isPrime(7)).equal(true);
    });
});

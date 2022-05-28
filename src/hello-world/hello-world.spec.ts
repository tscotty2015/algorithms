import { expect } from 'chai';
import { helloWorld } from './hello-world';

describe('helloWorld', () => {
  it('should return Hello world when no name argument is passed', () => {
    expect(helloWorld()).equal('Hello world!');
  });

  it('should return Hello Shawn when a name argument is passed', () => {
    expect(helloWorld('Shawn')).equal('Hello Shawn!');
  });
});
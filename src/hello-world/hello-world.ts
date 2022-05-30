// Algo to give a greeting when called, if no name is given it says hello world

export const helloWorld = (name = 'world'): string => {
  return `Hello ${name}!`
}
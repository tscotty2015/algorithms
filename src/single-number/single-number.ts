export const singleNumber = (nums: number[]): number => {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];

        if (set.has(currentValue)) {
            // Get rid of cuttent value
            set.delete(currentValue);
        } else {
            // store current value
            set.add(currentValue);
        }
    }

    let result: number;
    set.forEach((n: number) => { result = n });

    return result;
};
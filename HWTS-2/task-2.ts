function map<T>(arr: T[], callback: (el: T, i: number) => T): T[] {
    const result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i));
    }
    return result;
  }
  
  const callback = (el: number, i: number): number => el * i;
  
  console.log(map([1, 2, 3, 4, 5], callback)); // [0, 2, 6, 12, 20]
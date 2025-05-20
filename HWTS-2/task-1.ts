interface IEmployee {
    name: string,
    salary: number,
    isManager: boolean
}

const QA: IEmployee = {
    name: 'Alexey',
    salary: 50000,
    isManager: true
  };//1

  type EmployeeKeys = keyof IEmployee;//2
  type QaKeys = keyof typeof QA;//3
  type UserType = typeof QA;// 4
  type IEOptional = Partial<IEmployee>;//5
  type NameAndSalary = Pick<IEmployee, 'name' | 'salary'>;//6
  type ignoreManager = Omit<IEmployee, 'isManager'>;//7
  type ReadOnly = Readonly<IEmployee>;//8  

const RecordQA: Record<string, keyof typeof QA> = {
    name: 'name',
    salary: 'salary',
    isManager: 'isManager'
  };//9

  function wrapInArray<T>(value: T): T[] {
    return [value];
  }

  const numberArray = wrapInArray(5); // [5]
  const stringArray = wrapInArray('Hello'); // ['Hello']
  console.log(numberArray, stringArray);//10

  function getLastItem<T>(array: T[]): T {
    return array[array.length - 1];
  }//11

  console.log(getLastItem([1, 2, 3, 4])); // 4
  console.log(getLastItem(['a', 'b', 'c'])); // 'c'
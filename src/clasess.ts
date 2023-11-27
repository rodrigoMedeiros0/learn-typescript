interface Iperson {
    id: number;
    sayMyName(): string;
}

class Person implements Iperson{
  readonly id: number;
  protected name: string; //acessada apenas na sua classe ou subclasse
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName():string {
    return this.name;
  }
}

class PersonRefact {
  constructor( readonly id: number, protected name: string, private age: number) {}
}


class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }
}

const rodrigo = new Person(1, 'Rodrigo', 29)
rodrigo.sayMyName;


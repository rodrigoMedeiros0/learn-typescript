interface Iperson {
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
}

class Person implements Iperson{
  readonly id: number;
  protected name: string; //acessada apenas na sua classe ou subclasse
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName() {
    return this.name;
  }
}

const person1 = new Person(1, 'Rodrigo', 29)
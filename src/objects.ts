//Type
type Order = {
  productID: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  //? -> deixa a propriedade como opicional
  password?: string; //obs: a propriedade vira string ou undefined, isso pode atraplhar em passar ela como paramentro de uma função
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "Rodrigo",
  age: 29,
  email: "rodrigo@teste.com",
  orders: [
    { productID: "1", price: 56 },
    { productID: "2", price: 42.5 },
  ],
  register() {
    return "b";
  },
};

const printLog = (message: string) => {};

printLog(user.password!); // ! => retira o undefined

//Unions
type Auther = {
  books: string[];
};

const author: Auther & User = {
  age: 2,
  books: ["1"],
  email: "teste@teste.com",
  firstName: "Kyle",
  orders: [
    { productID: "1", price: 56 },
    { productID: "2", price: 42.5 },
  ],
  password: "123",
  register() {
    return "a";
  },
};

//Interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
  login():string;
}

const emailUser: UserInterface = {
  email: "rodrigo@gmail.com",
  firstName: "Rodrigo",
  login() {
    return 'logado'
  }
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "rodrigo@gmail.com",
  firstName: "Rodrigo",
  books: [],
  login() {
    return 'logado'
  }
};

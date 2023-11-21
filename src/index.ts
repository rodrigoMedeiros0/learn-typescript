//digitar tsc no console para usar o typescript compiler 
//tsc --init para configurar o typescript.json

//tipos básicos
const firstName: string = 'Rodrigo';
let idade: number = 5;
let isValid: boolean = true;
let idk: any =  5; //esse any faz com que não tenha nenhuma tipagem

const ids: number[] = [1,2,3,4,5];
let listNames: string[] = ['Vinicius', 'Maria', 'Nilza'];

//Tupla - lista em determinada ordem
const person: [number, string] = [1, 'hello world!!'];

//Lista de Tuplas
const people: [number, string][] = [
    [1, 'Jane'],
    [2, 'David'],
    [3, 'Lisa']
]

//Intersections - a variavel pode ter um tipo ou outro
const productId: string | number | boolean = '2';

//Enum  - https://www.typescriptlang.org/docs/handbook/enums.html
enum Direction {
    Up = 1,
    Down = 2
}
const direction = Direction.Up;

//Type Assertions - mudar o tipo de uma variavel
const productName: any = 'Hat';
// let itemID = productName as string - jeito 1 menos usual
let itemID = <string>productName;


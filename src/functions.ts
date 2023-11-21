interface MathFunc {
    (x: number, y:number) :number;
}

function sum (x: number, y:number):number {
    return x + y;
}
sum(5,3)

const sub:MathFunc = (x: number, y:number) => {
    return x - y;
}

//void - função que não retorna nada
const log = (message: string):void => {
    console.log(message)
}



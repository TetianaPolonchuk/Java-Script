// - створити функцію яка обчислює та повертає площу прямокутника висотою
function calculator (a, b){
    let res = (a*b);
    return res
}
let s1= calculator(10,20)
console.log(s1);

// - створити функцію яка обчислює та повертає площу кола
function calculator2 (a,b){
    let res = (a*(b*b));
    return res
}
let s2= calculator2( Math.PI , 5)
console.log(s2);

// - створити функцію яка обчислює та повертає площу циліндру

function calculator3 (a,p,r,h ){
    let res = (a*p*r*(h+r));
    return res
}
let s3= calculator3( 2,Math.PI ,5, 10)
console.log(s3);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function calculator4 () {

    let min = arguments[0]
    let max = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i]>max) max = arguments[i]
        if (arguments[i]<min) min = arguments[i]

    }
    console.log(max)
return min
}
console.log(calculator4(1,2,3,4,5))

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
// function info (text){
//     document.write(
//         `<div>
//            <p>${text}</p>
//         </div>`
//     )
// }
//
// info(`Hello Okten`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list (text){
//     document.write(
//         `<ul>
//           <li>${text}</li>
//           <li>${text}</li>
//           <li>${text}</li>
//         </ul>`
//     )
// }
// list(`Hi world!`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list (text,number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>Text ${i} </li>`)
//     }
//     document.write(`</ul>`);
// }
// list('gvkjlv',3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function 

//

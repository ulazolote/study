"use strict";
/*
комментарий
*/
// alert('3 страниц');
// let num;    // объявим переменную
// num =- 100;    // присвоим ей значение
// alert(num); // выведем значение переменной на экран
// let a, b; //объявляем 2 переменные
// a=10;
// b=5;
// alert(a+b);
// alert(a-b);
// alert(a*b);
// alert(a/b);
// let c, d, result;
// c=(a-b);
// d=7;
// result=(c+d);
// alert(result);
// alert(a+b+c);
// let i, f;
// i = "сергей";
// f = "золотенков";
// alert(i=f);
// let r,k;
// r=13;
// k=5;
// alert(r % k);//13/5=2,6 13минус5 умножено на 2
// let str='Сергей Золотенков'
// alert(str +' '+ 'java')
// let str='длина нашей строки'
// alert(str.length
// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt = `aaa ${str1} bbb ${str2} ccc`;
// alert(txt);
// let a;
// alert(a);
// let a=null;
// alert(a);// вывел нулл (ничего)
// let b=true;
// alert(b);// истина
// let a=false;
// alert(a);// ложь
// let str1='eee';
// let str2='fff';
// alert(str1 * str2);// выведет NaN
// alert(10/0);// бесконечность
// alert(-10/0);// минус бесконечность
// console.log(123);
// let  num=666;
// console.log(num);
// let num1 = 123;
// let num2 = 456;
// let num3 = 555;
// console.log(num1, num2, num3);
// let  a=null;
// let  a1;
// let  b=true;
// let  c=false;
// let  e=NaN;
// let  str = "hello";
// let  f = 123456;
// let d= Infinity;
// console.log(a, a1, b, c, e, str, f, d);
// // const PI = 3.14;
// // let radius = 5;
// console.log(2*PI*radius);
// let a=Number('10');
// let b=Number('20');
// alert(a+b);
// let a = '2';
// let b = '3';
// alert(+a + +b); // выведет 5
// let a=1;
// let b=4;
// alert(String(a)+String(b));// выведет 14
// let a=123;
// let b=321;
// alert(+String(a).length + +String(b).length);// выведет 6
// let str = 'abcde';
// alert(str[0]);
// alert(str[2]);
// alert(str[4]);
// let str='abcde';
// alert(str [4,  3,  2,  1, 0]);
// let str='abcde';
// let num = 2;
// alert(str[num]);
// let a='12345';
// alert(Number(a[0]) + Number(a[2]) + Number(a[3]) + Number(a[4]));..
// let a='12345';
// alert(Number(a[0])+Number(a[1])+Number(a[2])+Number(a[3])+Number(a[4]));
// let str ='abcde';
// let invertedString = str[4]+str[3]+str[2]+str[1]+str[0];
// alert(invertedString);
// let a=String(12345);
// alert(a[0] *a[1]* a[2] *a [3] * a[4]);
// );let a=String(12345);
// alert(a[4]+a[3]+a[2]+a[1]+a[0]
// let num = 47;
// num +=  7;
// num -= 18;
// num *= 10;
// num /=15;
// alert(num);
// let num = 10;
// num++;
// num++;
// num--;
// alert(num);
// неточные вычесления задачи 1и2
// alert(0.1 * 0.2);
// alert(0.3 - 0.1);
// функция prompt задача 1
// prompt('Ваше имя?');
// let name = prompt('Ваше имя?');
// alert('Ваше имя: ' + name);
// alert('Ваш возраст: ' + prompt('Ваш возвраст?'));

// проблема с типами задача 2,
// let num1=1;
// let num2=2;
// alert(num1+num2);
// задача 3 площадь квадрата
// let a=prompt('сторона квадрата');
// let s=a**2;
// alert(s);

//задача 4 периметр прямоугольника
let a=prompt('сторона прямоугольника');
let b=prompt('другая сторона');
let p=(a+b)*2;
alert(p);
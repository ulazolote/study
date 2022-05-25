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

// //задача 4 периметр прямоугольника
// let a=prompt('сторона прямоугольника');
// let b=prompt('другая сторона');
// let p=(a+b)*2;
// alert(p);

// вывод текста вдокумент
// document.write('<b>text</b>');
// let str = 'text';
// document.write(str);
// let str = 'text';
// document.write('<b>' + str + '</b>');

// //задача 1 и 2
// let str='изучение JS';
// document.write(str);

// //задача 3
// let str='JS';
// document.write('<b>'+str+'</b>');

// //задача 4
// document.write('1<br>');
// document.write('2<br>');
// document.write('3<br>');
// document.write('4<br>');
// document.write('5<br>');

// поиск ошибок задача 1
// let num1 = 1;
// let num2 = 2;
// console.log('сумма: ' + num1 +
//     num2);// сумма строки

//задача 1
// let num1 = 1;
// let num2 = 2;
// console.log( num1 +
//     num2);

//2
// let a = 1;
// let b = 2;
// console.log(a + b);

//3
// let num = '123';
// let sum =( num+'1'+'2'
// );
// console.log(num);

// //задача 4
// let num =  '123';
// console.log(num[0]);// взял 123 в ковычки
//
// //задача 5
// let a = 0;
// console.log(++a);// перенес а после плюсов

// //задача 6
// let num = 123;
// console.log(String(num).length);// добавил String и()

//задача 7
// let a = 24 / 60 / 60;
// console.log(a);//правда

//задача 8
// let num = 123;
// let str = String(num);
// console.log(String(num).length);// добавил String и ()

//задача 9
// let num = 123;
// let str = String(num);
// console.log(str[str.length -1]);//вместо num str и вконце -1

//задача 10
// let num = 123;
// let str = String(num);
// console.log(String(num).length);//вместо str String ()

//задача 11
// let num = 123;
// let str = String(num);
// console.log(str[str.length -1]);// добавил -1

//задача 12
// let a = '123';
// let b = '456';
// let s = Number(a) + Number(b);
// console.log(s);// вместо String  Number

//задача 13
// let aaa = 1;
// let bbb = 2;
// let ccc = 3;
// console.log(aaa + bbb + ccc);//верно

//ПРАКТИКА на операции
//задача 1 Найдите количество секунд в сутках.
// let day=60*60*24;
// alert(day);

//задача 2 Найдите количество секунд в 30 сутках .
// let secondsToDay=60*60*24;
// alert(secondsToDay*30);

//задача 3 Найдите количество секунд в году.
// let secondsToDay=60*60*24;
// let secondToYear=secondsToDay*365;
// alert(secondToYear);

//задача 4 Найдите количество минут в сутках.
// let minutesToDay=60*24;
// alert(minutesToDay);

//задача 5 Найдите количество минут в году.
// let minutesToDay=60*24;
// let minutesToYear=minutesToDay*365;
// alert(minutesToYear);

//задача 6 Найдите количество байт в мегабайте.
// let kb=1024;
// let mb=kb**2;
// alert(mb);

//задача 7 Найдите количество байт в гигабайте.
// let kb=1024;
// let gb=kb**3;
// alert(gb);

//задача 8 Найдите количество байт в 10 гигабайтах.
// let kb=1024;
// let gb=kb**3;
// alert(10*gb);

//задача 9 Найдите количество байт в терабайте.
// let kb=1024;
// let tb=kb**4;
// alert(tb);

//задача 10 Найдите количество килобайт в терабайте.
// let kb=1024;
// let tb=kb**4;
// alert(tb/kb);

//ПРАКТИКА на формулы
//задача 1 площадь круга
// let r=15;
// let s=3.1415*r**2;
// alert(s);

//задача 2 площадь квадрата
// let a=15;
// let s=a**2;
// alert(s);

//задача 3 площадь прямоугольника
// let a=15;
// let b=12;
// let s=a*b;
// alert(s);

//задача 4 периметр прямоугольника
// let a=15;
// let b=12;
// let s=(a+b)*2;
// alert(s);

//задача 5 перевести градусы Цельсия в градусы Фаренгейта
// let tc=20;
// let tf=tc*9/5+32;
// alert(tf);

//задача 6 перевести из Фаренгейта в Цельсия
// let tf=85;
// let tc=tf-32*9/5;
// alert(tc);

// Массивы в JS
//задача 1 создание массивов вывод на экран и консоль
// let arr = ['a', 'b', 'c'];
// alert(arr);
// console.log(arr);

//задача 2 вывод на экран каждого массива
// let arr = ['a', 'b', 'c'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

//задача 3 вывод на экран измененой строки
// let arr = ['a','b','c','d'];
// console.log(arr[0] + ' + ' + arr[1] + ' + ' + arr[2] + ' + ' + arr[3]);

//задача 4 вывод на экран сумму элементов
// let arr = [1,2,3];
// console.log(arr[0] + arr[1] + arr[2]);

//задача 5 умножение+сложение+ result+ вывод на экран
// let arr = [2,5,3,9];
// let result = arr[0]*arr[1] + arr[2]*arr[3];
// console.log(result);

//задача 6 длина массива (length)
// let arr=[23,45,34,2,8,867,1,243];
// console.log(arr.length);

//задача 7 последний элемент массива (length-1)
// let arr=[23,45,34,2,8,867,1,243];
// console.log(arr[arr.length-1]);

//задача 8 изменение массива
// let arr = ['a','b','c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);

//задача 9 прибавил 3
// let arr = [1,2,3];
// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;
// console.log(arr);

//задача 10 через ++ увеличил на 1
// let arr=[1,2,3];
// arr[0]++;
// arr[1]++;
// arr[2]++;
// console.log(arr);

//задача 11 заполнение массива
// let arr=[];
// arr[0]=1;
// arr[1]=2;
// arr[2]=3;
// console.log(arr);

//задача 12 4и5 в конце
// let arr=[1,2,3];
// arr[3]=4;
// arr[4]=5;
// console.log(arr);

//задача 13 длина массива (length)
// let arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);// выведет 9

//задача 1 объект с ключами
// let obj={1:'a', 2:'b', 3:'c'};
// console.log(obj);

//задача 2 сумма елементов
// let obj={a:1, b:2, c:3};
// console.log(obj['a']+obj['b']+obj['c']);

//задача 3 сумма елементов
// let obj={'1a':1,'2b':2,'c-c':3};
// console.log(obj['1a']+obj['2b']+obj['c-c']);

//задача 4
// let obj = {'1a': 1, 'b2': 2, 'c-c': 3, 'd4': 4};
// //обязательны для '1a','c-c',необязательны для b2,d4

//задача 5 альтернативный способ
// let obj = {key1: 1, key2: 2, key3: 3};
// console.log(obj.key3+obj.key2+obj.key1);

//задача 6
// let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
//допустимо обращение к b2, d4

//задача 7 создание объекта
// let user={name:'сергей',surname:'золотенков',patronymic:'вячеславович'};
// console.log(user.surname+' ' +user.name+' ' +user.patronymic);

//задача 8 создание объекта
// let date={year:'2022',month:'05',day:'22'};
// console.log(date.year+'-'+date.month+'-'+date.day);

//задача 9 создание объекта
// let obj={};
// obj.a='1';
// obj.b='2';
// obj.c='3';
// console.log(obj);

//ключи из переменных
//задача 1 ключ в key
// let arr = ['a', 'b', 'c'];
// let key = 2;
// console.log(arr[key]);

//задача 2 сумма
// let arr=[1,2,3,4,5];
// let key1=1;
// let key2=2;
// console.log(arr[key1]+arr[key2]);

//задача 3
// let obj = {'a': 1, 'b': 2, 'c': 3};
// let key='a';
// console.log(obj[key]);

//задача 1
//JavaScript шесть примитивных типов данных: string, number, boolean, null, undefined, symbol.

//задача 2
// console.log( typeof {a: 1, b: 2, c: 3} );
//задача 3
// console.log( typeof [1, 2, 3] );
//задача 4
// let arr = [1, 2, 3];
// console.log( typeof arr );
//задача 5
// let arr = [1, 2, 3];
// console.log( typeof arr[0] );
// задача 6
// let arr = ['1', '2', '3'];
// console.log( typeof arr[0] );
//задача 7
// // console.log( Array.isArray([1, 2, 3]) );
// //задача 8
// console.log( Array.isArray({a: 1, b: 2, c: 3}) );

//константы с массивами или объектами
// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr);

//подход программирования через константы
//задача 1
// const arr = [1, 2, 3, 4, 5];
// const res = arr[1] + arr[2];
// console.log(res);

//Поиск ошибок в коде с массивами и объектами
//Задача 1
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length-1]);

//Задача 2
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0] + arr[1] + arr[2]
//     + arr[3] + arr[4]);

//Задача 3
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

//Задача 4
// let obj = {a: 1, b: 2, c: 3};
// // console.log(obj['a']);

//Задача 5
// let obj = {a: 1, b: 2, c: 3};
// let key ='a';
// console.log(obj[key]);

//Задача 6
// let obj = {a: 1, b: 2, c: 3};
// let sum = obj['a'] + obj['b'] + obj['c'];
// console.log(sum);

//Задача 7
// let obj = {a: 1, b: 2, c: 3};
// console.log(obj);

//Конструкция if-else в JS
//Операторы больше и меньше
//Задача 1
let test=5
 if (test>10){
    alert( 'Верно' );
}
else {alert ( 'Неверно' );}
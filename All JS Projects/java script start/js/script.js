// let Full_name , Contact , Address , Hobby

// Full_name="Yahya Ali Akbar"
// Contact="1234567890"
// Address="Al-Muslim society"
// Hobby="Playing Cricket"

// document.write('<h1><marquee>Data</marquee></h1>')
// document.write("============")
// document.write( "<br>",Full_name , "<br>", Contact, "<br>", Address , "<br>", Hobby ,"<br>" )
// document.write("<br>")
// document.write(Full_name)
// document.write("<br>")
// document.write(Contact)
// document.write("<br>")
// document.write(Address)
// document.write("<br>")
// document.write(Hobby)
// document.write("<br>")
// document.write("============")

// let a={
//     first_name: "Muhammad Yahya",
//     last_Name: "AliAkbar",
//     age: 24,
//     contact:'03013393102',
// };

// console.log(a);


// one more calculator start

// var a,b;

//     a=10;
//     b=12;
//     c=15

//     a=5
//     b=9
//     c=125

//     document.write(a+b+c)
//     document.write('<br>')
//     document.write(a-b+c)
//     document.write('<br>')
//     document.write(a*b/c)
//     document.write('<br>')
//     document.write(a/b*c)
//     document.write('<br>')
//     document.write(a%b*c)
//     document.write('<br>')
//     document.write(a**b-c)

// one more calculator end


// simple working start

// function abc() {
//     var a = document.getElementById('text').value;

//     switch (a) {
//         case 'Apple':
//             document.getElementById('fruits'). innerHTML='<br><h1>this is apple</h1>'
//             break;

//         case 'Banana':
//             document.getElementById('fruits'). innerHTML='<br><h1>this is banana</h1>'
//             break;

//         case 'Mango':
//             document.getElementById('fruits'). innerHTML='<br><h1>this is mango</h1>'
//             break;
    
//         default:
//             document.write('invalid key');
//             break;
//     }
// }

// simple working end




// var i = 0
// while (i<5) {
//     document.write('<h1>helloworld</h1><br>');
//     i++;
// }


// var y =0
// do {
//     document.write('<h1>helloyahya</h1><br>')
//     y++;
// } while (y<5);




// function abc() {
//     prompt('<h1>hello this is function</h1>');
// }
// abc();





// let a,b;

// function abc(a,b) {
//     document.write(a/b)
// }

// abc(12000000141544,1258119494984894);


// document.write('<br>')


// let x,y;
//     x=258963147;
//     y=987654321;
// document.write(x-y);



// let a,b;
// function abc(a,b) {
//     var res= a+b;
//     return res;
// }

// var c= abc(25,25)
// document.write(c);



// var a = prompt('what is your name?')
// document.write('welcome to earth mr.' +a)



// var a = prompt('what is your name?')
// document.write(a)



// simple cal start

// function add() {
//     var a=document.getElementById('opr1').Value;
//     var b=document.getElementById('opr2').Value;

//     var x=parseInt(a);
//     var y=parseInt(b);

//     prompt(x+y);
// }
// add();

// simple cal end



// whole body color change start

// const colorInput = document.getElementById("colorInput")
// const message = document.getElementById("message")


// colorInput.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         const color=colorInput.value;
//         document.body.style.backgroundColor=color;
//         message.innerHTML = `background color changed to:${color}`;
//         colorInput.value='';
//     };
    
// })

// whole body color change end




// windows practise start

// let  myWindow;
// function openwin() {
//     myWindow = window.open("","","width=500,height=300");
// }

// function closewin() {
//     myWindow.closewin();
// }

// windows practise end




// calculator

// const btn = document.getElementById('btn');
// btn.addEventListener('click',function() {
//     const opr1 = document.getElementById('opr1').value;
//     const opr2 = document.getElementById('opr2').value;
//     const opr = document.getElementById('opr').value;


//     const value1 = parseInt(opr1);
//     const value2 = parseInt(opr2);

//     switch (opr) {
//         case '+':
//             document.getElementById('result').value = value1+value2;
//             break;
//         case '-':
//             document.getElementById('result').value = value1-value2;
//             break;
//         case '*':
//             document.getElementById('result').value = value1*value2;
//             break;
//         case '/':
//             document.getElementById('result').value = value1/value2;
//             break;
 
    
//         default:
//             document.getElementById('result')
//             break;
//     }
// })
// calculator




// scroll to change color start

// window.addEventListener('scroll', function () {
//     if (window.scrollY >= 550) {
//         document.body.style.backgroundColor = 'red'
//         document.body.style.Color = 'white'
//     } else{
//         document.body.style.backgroundColor = 'white'
//         document.body.style.Color = 'black'
//     }
// });

// scroll to change color end





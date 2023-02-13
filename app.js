// var person =  "Muhammadqodir" ; // data type with using string
// var age = 18 ; //data type using with number
// console.log(person)
// //data types first is with using string

// var myage = 13;
// var univestityage = 18;
// if(myage >  univestityage){
//     console.log("you can enter to our universtity")
// }else{
//     console.log("you can't enter to our university")
// }


// var studentscore = 340 ;

// if( studentscore >+ 90){
//     console.log("yoor result is excelent")
// } else if( studentscore<=90 && studentscore>80) {
//     console.log("your result is very good")
// } else if( studentscore<=80 && studentscore>50 ){
//     console.log("you result good")
// } else{
//     console.log("you need some practise")
// }


// const number = prompt('enter  your age')
// if( number >18){
//     console.log("you can enter to our site")
// }else{
//     console.log("you need to grow ")
// }


// // check if the number is positive, negative or zero
// const number = prompt("Enter a number: ");

// if (number >= 0) {
//     if (number == 0) {
//         console.log("You entered number 0");
//     } else {
//         console.log("You entered a positive number");
//     }
// } else {
//     console.log("You entered a negative number");
// }





// function myFisrtApp (name , age){
//   alert( `hi my name is ${name} and i'm full stuck developer` )

//   function showskills(){
//     let skills = ['HTML' , 'CSS' , 'JAVASCRIPT']
//     for(let i =0; i<skills.length; i++){
//       alert( `you have skills for ${skills[i]}`)
//     }
//   }
//   showskills()

//   function checkage (){
//     if(age>18){
//       console.log("exactly date for learning it")
//     }else{
//       console.log('super data for learning it')
//     }
//   }
//   checkage()
// }
// myFisrtApp('Muhammadqodir' , 143)


//it is a show date hour at now 

// let discuss = prompt( "what is your name")
// let discuss2 = prompt( ` Assalomu aleykum  ${discuss} biz sizga telegramdan kod yubordik iltimos havfsizligingizni taminlashimiz uchun u  kodni jonating`)
// let date = new Date();
// let somethinf = date.getFullYear();
// let months = date.getMonth()
// let date2  = date.getDate()
// let hour = date.getHours();
// let minute = date.getMinutes();
// let sekund = date.getSeconds();
// let millisekund = date.getMilliseconds();
// console.log("hour;", hour , "minute:" , minute, "millisekund;" , millisekund , "sekund" , sekund, "kun " , date2 , "oy" ,months , "year" , somethinf)


// if(hour<9 && hour>22){
//   console.log("you are welcome")
// }else{
//   console.log("it is so late to  shopping")
// }

// console.log(discuss)
// console.log(discuss2)




//


let discuss = prompt("enter your birthday date")
let date = new Date();
let date2 = date.getDate()

switch (discuss) {

  case "1":
  case "4":
  case "5":
  case "6":
  case "7":
  case "8":
  case "9":
    console.log("siz omadli kunda tugilgan ekansiz")
    break;

  case '10':
  case "11":
  case "12":
    console.log("Mashhurbekning tug'ilgan kuni")
  case "13":
  case "14":
  case "15":
    console.log("Dadamning tug'ilgan kuni")
    break;
  case "16":
    console.log("Muhammadqodirning tug'ilgan kuni🥳")
    break;
  case "17":
    console.log("siz omadsiz kunda tugilgan ekansiz")
    break;

  case '18':
  case "19":
  case "21":
  case "21":
  case "22":
    console.log("Volidamning tug'ilgan kuni")
    break;
  case "23":
  case "24":
  case "25":
  case "26":
  case "27":
  case "28":
  case "29":
    console.log("Ismigulning tug'ilgan kuni")
    break;
  case "30":
  case "31":

    console.log("siz yahshi  kunda tugilgan ekansiz")
    break;

  default:
    console.log("iltimos faqat son kiriting")
}



























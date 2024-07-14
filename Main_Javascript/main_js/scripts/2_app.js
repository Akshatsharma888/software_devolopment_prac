/this is Chapter-2 Numbers and Math in javascript./

//airthmetic operations.
console.log(2+4)
console.log(8-4)
console.log(2*4)
console.log(8/4)

//decimal operations.
console.log(8.90+2.4)
console.log(20.82*2 +10.90)
console.log(20.82*2 +10.90 + 4.45)

// order of operations in javascript are:-
/*
* / are done first
/ + - are done after
*/
console.log((5+4)*2)

// calculating perentage in js.
console.log((20.82 +80)*0.1)

//float problem in js.
console.log(0.1 + 0.2)
//below code to correct this problem.
console.log(20.82+7.99)
console.log((2082+799) / 100)
//--------------------------------

// round function in js.
console.log(Math.round(8.3))
console.log(Math.round(0.5))

//float based codes
//below codes are the best example to deal with float problems in js.
console.log(((2095 + 799) * 0.1)/100)
console.log(Math.round((2095 + 799) * 0.1)/100)

//exercises based on javascript numbers and math..
//1.
answer = console.log((8*3)+10+15)
// ---------------------------

//2.
console.log(18.50 + 7.50)
// ---------------------------

//3.
console.log(((18.50 + 7.50)*0.1))
// ---------------------------

//4.
console.log(((18.50 + 7.50)*0.2))
// ---------------------------

//5.
function temp_Cal_f(temp_f){
  let result_temp_f  = (temp_f*9/5)+32
  console.log(result_temp_f)
}
temp_Cal_f(25)
temp_Cal_f(-5)
// ---------------------------

//6.
function temp_Cal_c(temp_c){
  let result_temp_c  = (temp_c-32)*5/9
  console.log(result_temp_c)
}
temp_Cal_c(86)
// ---------------------------
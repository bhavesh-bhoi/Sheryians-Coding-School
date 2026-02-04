import React from 'react'

// Card as a function
const Card = (num1, num2) => {

  // variables
  const a = 10;
  const user = 'Bhavesh';
  let arr = [1,2,3,4,5];
  
  return (
    <div className='h-7 w-7 bg-red-300 inline'>
      {a} {user} {arr.map((val) => {return val})} {arr[0]} {arr.length} {arr.map(function(){
        return 'hi ';
      })}
      {/* Sum */} {/* writing without "num1 + num2" brackets will concatenate two numbers */}
      {"Addition of two numbers is: " + (num1 + num2)}
    </div>
  )
}

export default Card

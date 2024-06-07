import React, {useRef} from 'react';


const User = () => {
  const username = useRef(null);
  const password = useRef(null);


  const login = (givenUsername, givenPassword) => {
    return true

  }

  return (
    <>
      <h2>Welcome to the User Interface</h2>

      <p>Please login</p>

      <p>Input Login: </p>
      <input ref={username} type="text" required/>
      <p>Input Password: </p>
      <input ref={password} type="text" required/>

      <button onClick={() => login(username.current.value, password.current.value)}>Submit</button>
      
      
     
      {//<button onClick={() => calculateYearlyIncome(yearlyIncomesInput.current.value)}>Get total Yearly Incomes</button>
      }


    </>
  )
}

export default User

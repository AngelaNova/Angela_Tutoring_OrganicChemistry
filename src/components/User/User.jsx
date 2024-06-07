import React, {useRef} from 'react';


const User = () => {
  const [username]=useRef("");

  return (
    <>
      <h2>Welcome to the User Interface</h2>

      <p>Please login</p>

      <input ref={username}/>
      <button>Submit</button>
      
    </>
  )
}

export default User

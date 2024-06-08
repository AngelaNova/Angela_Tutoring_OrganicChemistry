import React, {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editStudent } from '../../redux/actions/studentActions';


const UserManagement = () => {
  const username = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch;
  const select = useSelector;


  const addUser = (newUser) => {
    return dispatch(addStudent(newUser));
  }

  return (
    <>
      <h2>Welcome to the User Management</h2>

      <p>To register, please complete the following fields</p>

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

export default UserManagement;

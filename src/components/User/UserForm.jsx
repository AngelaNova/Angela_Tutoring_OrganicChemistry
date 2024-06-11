import { useState } from "react"; 

export default function Form() { 
	// States for registration 
	const [user,setUser] = useState({});
	const firstName = useRef(null); 
	const lastName = useRef(null); 
	const email = useRef(null); 
	const password = useRef(null);

	// States for checking the errors 
	const [submitted, setSubmitted] = useState(false); 
	const [error, setError] = useState(false); 

	// Handling the form submission 
	const handleSubmit = (e) => { 
		e.preventDefault(); 
		if (firstName === "" || lastName === "" || email === "" || password === "") { 
			setError(true); 
		} else { 
			setSubmitted(true); 
			setError(false); 

			const newUser ={
				"firstName" : firstName,
				"lastName" : lastName,
				"email" : email,
				"password" : password,
			}
		} 
	}; 

	// Showing success message 
	const successMessage = () => { 
		return ( 
			<div 
				className="success"
				style={{ 
					display: submitted ? "" : "none", 
				}} 
			> 
				<h1>User {firstName} successfully registered!!</h1> 
			</div> 
		); 
	}; 

	// Showing error message if error is true 
	const errorMessage = () => { 
		return ( 
			<div 
				className="error"
				style={{ 
					display: error ? "" : "none", 
				}} 
			> 
				<h1>Please enter all the fields</h1> 
			</div> 
		); 
	}; 



	return ( 
		<div className="form"> 
			<div> 
				<h1>User Registration</h1> 
			</div> 

			{/* Calling to the methods */} 
			<div className="messages"> 
				{errorMessage()} 
				{successMessage()} 
			</div> 

			<form> 
				{/* Labels and inputs for form data */} 
				<label className="label">First Name</label> 
				<input 
					ref={firstName} 
					required
					className="input"
					type="text"
				/> 

				<label className="label">Last Name</label> 
				<input 
					ref={lastName} 
					required
					className="input"
					type="text"
				/> 

				<label className="label">Email</label> 
				<input 
					ref={email} 
					required
					className="input"
					type="email"
				/> 

				<label className="label">Password</label> 
				<input
					ref={password} 
					required
					className="input"
					type="password"
				/> 

				<button onClick={handleSubmit} className="btn" type="submit"> 
					Submit 
				</button> 
			</form> 

			<div>
				<h2>Change your username</h2>

				
			</div>
		</div> 
	); 
} 

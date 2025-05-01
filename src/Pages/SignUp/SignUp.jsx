import React from 'react';
import { NavLink } from 'react-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config.js";

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const fullName = e.target.fullname.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmpassword.value
        console.log(fullName, email, password, confirmPassword);
        
        createUserWithEmailAndPassword(auth, email, password)

    }
    return (
        <div className="flex flex-col max-w-md p-6 mt-[100px] mb-[100px] rounded-md sm:p-10 mx-auto">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm dark:text-gray-600">Sign Up a new account</p>
	</div>
	<form onSubmit={handleSubmit} className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="fullname" className="block mb-2 text-sm">Full Name</label>
				<input type="text" name="fullname" id="fullname" placeholder="Jhon duo" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="confirmpassword" className="text-sm">Confirm Password</label>
				</div>
				<input type="password" name="confirmpassword" id="confirmpassword" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign up</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
				<NavLink to="/signin" rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign in</NavLink>.
			</p>
		</div>
	</form>
</div>
    );
};

export default SignUp;
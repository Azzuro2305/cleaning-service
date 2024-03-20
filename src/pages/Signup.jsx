import React, { useState } from "react";
import Images from "../components/Images";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Signup() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const usernameHandler = (e) => {
		setUsername(e.target.value);
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		window.location.href = "/signin";
	};

	return (
		<>
			<div className="relative">
				<img src={Images.cleaning26} className="w-full" alt="" />
				<div className="w-2/5 rounded-3xl bg-gray-50 py-12 px-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<div className="w-full">
						<div>
							<h2 className="text-center text-50px font-bold text-gray-900 mb-12 font-lato">
								Sign Up
							</h2>
						</div>
						<form className="mt-8 space-y-6" onSubmit={submitHandler}>
							<div className="relative">
								<label
									htmlFor="username"
									className="font-poppins text-20px ms-2"
								>
									Username
								</label>
								<input
									id="username"
									name="username"
									type="text"
									required
									className="appearance-none rounded-full relative block w-full px-10 py-3 mt-2 mb-10 border border-gray-400 placeholder-gray-500"
									value={username}
									onChange={usernameHandler}
								/>
								<FaUser className="absolute left-4 bottom-4 z-10 text-lg" />
							</div>
							<div className="relative">
								<label htmlFor="email" className="font-poppins text-20px ms-2">
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									className="appearance-none rounded-full relative block w-full px-10 py-3 mt-2 mb-10 border border-gray-400 placeholder-gray-500"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								<IoIosMail className="absolute left-4 bottom-3.5 z-10 text-xl" />
							</div>
							<div className="relative">
								<label
									htmlFor="password"
									className="font-poppins text-20px ms-2"
								>
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									required
									className="appearance-none rounded-full relative block w-full px-10 py-3 mt-2 mb-10 border border-gray-400 placeholder-gray-500 text-gray-900"
									value={password}
									onChange={passwordHandler}
								/>
								<MdKey className="absolute left-4 bottom-3.5 z-10 text-xl" />
							</div>
							<div className="relative">
								<label
									htmlFor="confirmPassword"
									className="font-poppins text-20px ms-2"
								>
									Confirm Password
								</label>
								<input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									required
									className="appearance-none rounded-full relative block w-full px-10 py-3 mt-2 border border-gray-400 placeholder-gray-500 text-gray-900"
									value={confirmPassword}
									onChange={(e) => {
										setConfirmPassword(e.target.value);
									}}
								/>
								<MdKey className="absolute left-4 bottom-3.5 z-10 text-xl" />
							</div>
							<div className="text-sm flex justify-end">
								<Link to="/signin" className="hover:text-violet-700 ">
									Already have an account?
								</Link>
							</div>
							<div className="flex justify-center">
								<Button txt={"Sign Up"} />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signup;

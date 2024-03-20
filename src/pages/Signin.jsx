import React, { useState } from "react";
import Images from "../components/Images";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { MdKey } from "react-icons/md";

function Signin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const usernameHandler = (e) => {
		setUsername(e.target.value);
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		window.location.href = "/";
	};

	return (
		<>
			<div className="relative">
				<img src={Images.items} className="w-full" alt="" />
				<div className="w-2/5 rounded-3xl bg-gray-50 py-12 px-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<div className="w-full">
						<div>
							<h2 className="text-center text-50px font-bold text-gray-900 mb-12 font-lato">
								Sign In
							</h2>
						</div>
						<form className="mt-8 space-y-6" onSubmit={submitHandler}>
							<div className="relative">
								<label
									htmlFor="username"
									className="font-poppins text-20px ms-2"
								>
									Email
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
									className="appearance-none rounded-full relative block w-full px-10 py-3 mt-2 border border-gray-400 placeholder-gray-500 text-gray-900"
									value={password}
									onChange={passwordHandler}
								/>
								<MdKey className="absolute left-4 bottom-3.5 z-10 text-xl" />
							</div>
							<div className="flex justify-between">
								<div className="flex items-start">
									<input
										type="checkbox"
										className="checked:bg-blue-500 me-1 place-item-start form-checkbox"
										name="remember"
										id="remember"
									/>
									<label htmlFor="remember" className="text-sm leading-3 ">
										Remember me
									</label>
								</div>
								<div className="text-sm">
									<p className="mb-1">Forgot Password?</p>
									<Link to="/signup" className="hover:text-violet-700">
										Don't have an account yet?
									</Link>
								</div>
							</div>
							<div className="flex justify-center">
								<Button txt={"Sign In"} />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signin;

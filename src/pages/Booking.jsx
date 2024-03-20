import React, { useState } from "react";
import Images from "../components/Images";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Booking() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [email, setEmail] = useState("");
	const [service, setService] = useState("");
	const [address, setAddress] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		window.location.href = "/";
	};

	return (
		<>
			<div className="relative">
				<img src={Images.bookingBg} className="w-full" alt="" />
				<div className="w-1/2 rounded-3xl bg-gray-50 py-12 pb-16 px-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<div className="w-full">
						<div>
							<h2 className="text-center text-50px font-bold text-gray-900 mb-6 font-lato">
								Online Booking
							</h2>
							<p className="text-center w-2/3 mx-auto mb-14 font-poppins text-20px">
								please fill out the information below to complete your online
								reservation
							</p>
						</div>
						<form className="mt-8 space-y-6" onSubmit={submitHandler}>
							<div className="flex gap-5 mb-10">
								<div className="relative flex-auto">
									<label
										htmlFor="firstname"
										className="font-poppins text-20px ms-2"
									>
										First Name
									</label>
									<input
										id="firstname"
										name="firstname"
										type="text"
										required
										className="appearance-none rounded-full relative block w-full px-10 py-3 mt-2 border border-gray-400 placeholder-gray-500"
										value={firstName}
										onChange={(e) => {
											setFirstName(e.target.value);
										}}
									/>
									<FaUser className="absolute left-4 top-[53px] z-10 text-lg" />
								</div>
								<div className="relative flex-auto">
									<label
										htmlFor="lastname"
										className="font-poppins text-20px ms-2"
									>
										Last Name
									</label>
									<input
										id="lastname"
										name="lastname"
										type="text"
										required
										className="appearance-none rounded-full relative block w-full px-10 py-3 mt-2 border border-gray-400 placeholder-gray-500"
										value={lastName}
										onChange={(e) => {
											setLastName(e.target.value);
										}}
									/>
									<FaUser className="absolute left-4 top-[53px] z-10 text-lg" />
								</div>
							</div>
							<div className="relative">
								<label htmlFor="phone" className="font-poppins text-20px ms-2">
									Phone
								</label>
								<input
									id="phone"
									name="phone"
									type="phone"
									required
									className="appearance-none rounded-full relative block w-full px-10 py-3 mt-2 mb-10 border border-gray-400 placeholder-gray-500"
									value={phone}
									onChange={(e) => {
										setPhone(e.target.value);
									}}
								/>
								<FaPhoneAlt className="absolute left-4 bottom-4 z-10 text-lg" />
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
								<label htmlFor="date" className="font-poppins text-20px ms-2">
									Service
								</label>
								<select
									name="service"
									id="service"
									className="appearance-none rounded-full relative block w-full px-4 py-3 mt-2 mb-10 border border-gray-400 placeholder-gray-500"
									onChange={(e) => {
										setService(e.target.value);
									}}
								>
									<option value="">Choose service</option>
									<option value="basic cleaning">Basic cleaning</option>
									<option value="deep cleaning">Deep cleaning</option>
									<option value="premium cleaning">Premium cleaning</option>
								</select>
								<IoMdArrowDropdown className="absolute right-6 bottom-3.5 z-10 text-xl" />
							</div>
							<div className="relative">
								<label htmlFor="date" className="font-poppins text-20px ms-2">
									Date
								</label>
								<input
									id="date"
									name="date"
									type="date"
									required
									className="appearance-none rounded-full relative block w-full px-4 py-3 mt-2 mb-10 border border-gray-400 placeholder-gray-500"
									value={date}
									onChange={(e) => {
										setDate(e.target.value);
									}}
								/>
							</div>
							<div className="relative">
								<label
									htmlFor="address"
									className="font-poppins text-20px ms-2"
								>
									Address
								</label>
								<input
									id="address"
									name="address"
									type="text"
									required
									className="appearance-none rounded-full relative block w-full px-10 py-3 mt-2 mb-10 border border-gray-400 placeholder-gray-500"
									value={address}
									onChange={(e) => {
										setAddress(e.target.value);
									}}
								/>
								<FaRegAddressCard className="absolute left-4 bottom-3.5 z-10 text-xl" />
							</div>
							<div className="flex justify-center">
								<Button txt={"Confirm"} />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Booking;

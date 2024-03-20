import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import Service from "../pages/Service";
import Qa from "../pages/Qa";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import Signin from "../pages/Signin";
import General from "../pages/services/General";
import Kitchen from "../pages/services/Kitchen";
import Bathroom from "../pages/services/Bathroom";
import Appliance from "../pages/services/Appliance";
import Baseboard from "../pages/services/Baseboard";
import Window from "../pages/services/Window";
import Signup from "../pages/Signup";
import Booking from "../pages/Booking";

export function Router() {
	return (
		<>
			<Routes>
				{/* For main navigation */}
				<Route path="/" element={<Home />} />
				<Route path="/aboutus" element={<Aboutus />} />
				<Route path="/service" element={<Service />}></Route>
				<Route path="/qa" element={<Qa />}></Route>
				<Route path="/faq" element={<Faq />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/signin" element={<Signin />}></Route>
				{/* For dropdown navigation */}
				<Route path="/general" element={<General />}></Route>
				<Route path="/kitchen" element={<Kitchen />}></Route>
				<Route path="/bathroom" element={<Bathroom />}></Route>
				<Route path="/appliance" element={<Appliance />}></Route>
				<Route path="/baseboard" element={<Baseboard />}></Route>
				<Route path="/window" element={<Window />}></Route>
				{/* external routes */}
				<Route path="/signup" element={<Signup />}></Route>
				<Route path="/booking" element={<Booking />}></Route>
			</Routes>
		</>
	);
}

export default Router;

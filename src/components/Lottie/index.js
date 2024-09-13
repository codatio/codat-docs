import React from "react";
import Lottie from "lottie-react";

const App = (props) => {
	const {
		animation,
		loop=true,
		...rest
	} = props

	return <Lottie 
		animationData={animation} 
		loop={loop} 
		{...rest}
	/>
};

export default App;
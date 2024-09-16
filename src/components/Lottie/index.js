import React from "react";
import Lottie from "lottie-react";

import styles from "./styles.module.scss";

const App = (props) => {
	const {
		animation,
		loop=true,
		...rest
	} = props

	return <Lottie 
		className={styles.wrapper}
		animationData={animation} 
		loop={loop} 
		{...rest}
	/>
};

export default App;
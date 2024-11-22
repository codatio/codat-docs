import React from "react";
import Lottie from "lottie-react";

import BrowserOnly from "@docusaurus/BrowserOnly";

import styles from "./styles.module.scss";

const App = (props) => {
	const {
		animation,
		loop=true,
		...rest
	} = props

return <BrowserOnly>
{ () => 
	<Lottie
		className={styles.wrapper}
		animationData={animation}
		loop={loop}
		{...rest}
	/>}
</BrowserOnly>
};

export default App;
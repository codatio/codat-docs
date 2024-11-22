import React, { Suspense, lazy } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

import styles from "./styles.module.scss";

// Dynamically import the Lottie component
const Lottie = lazy(() => import("lottie-react"));

const App = (props) => {
	const {
		animation,
		loop = true,
		...rest
	} = props;

	return (
		<BrowserOnly>
			{() => (
				<Suspense fallback={<div>Loading...</div>}>
					<Lottie
						className={styles.wrapper}
						animationData={animation}
						loop={loop}
						{...rest}
					/>
				</Suspense>
			)}
		</BrowserOnly>
	);
};

export default App;

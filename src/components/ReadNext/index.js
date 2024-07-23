import React from "react";

const ReadNext = (props) => {
	const {children, links} = props

	return <div className="callout read-next">
		<h2 id="read-next">Read next</h2>

		{children}

		<ul>
			{links.map(link => {
				return <li><a href={link[1]}>{link[0]}</a></li>
			})}
		</ul>
	</div>
}

export default ReadNext;
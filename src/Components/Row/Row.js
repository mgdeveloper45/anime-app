import React, { useEffect, useState } from "react";
import { category } from "../../utils/utils";

const Row = ({ title }) => {
	const [rowImages, setRowImages] = useState([]);
	useEffect(() => {
		(async () => {
			const data = await category(title);
			setRowImages(data);
		})();
	}, []);

	return (
		<div>
			<h1>{title}</h1>
			<div style={{ display: "flex" }}>
				{rowImages.map((image, index) => (
					<div key={index}>
						<img src={image.attributes.posterImage?.tiny} alt="" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Row;

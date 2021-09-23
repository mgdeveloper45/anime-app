import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import YouTube from "react-youtube";
import { Container, Img, Title, TrendingImg } from "../../Styles/Styles";
import { allTrending, category } from "../../utils/utils";

const Row = ({ title, setHomeCategory }) => {
	const [rowImages, setRowImages] = useState([]);
	const [trailer, setTrailer] = useState("");
	const history = useHistory();
	useEffect(() => {
		if (title === "Trending") {
			(async () => {
				const data = await allTrending(title);
				setRowImages(data);
			})();
		} else {
			(async () => {
				const data = await category(title);
				setRowImages(data);
			})();
		}
	}, []);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleImageClick = (image) => {
		trailer ? setTrailer("") : setTrailer(image.attributes?.youtubeVideoId);
	}

	const searchCategory = () => {
		setHomeCategory(title);
		history.push(`/category`);
	};


	return (
		<Container
			width="80%"
			display="flex"
			direction="column"
			// alItm="center"
			// bdr="1px solid blue"
		>
			<Title
				alSlf="flex-start"
				color="white"
				size="xx-large"
				margin="0"
				pad="20px 0"
				onClick={searchCategory}
			>
				{title.toUpperCase()}
			</Title>
			<Container
				display="flex"
				jstCnt="space-around"
				wrap="wrap"
				// bdr="1px solid red"
			>
				{rowImages?.map((image, index) => (
					<div key={index}>
						{title === "Trending" ? (
							<TrendingImg src={image.attributes.posterImage?.large} onClick={() => handleImageClick(image)} alt="" />
						) : (
							<Img
								src={image.attributes.posterImage?.large}
								alt=""
								onClick={()=>handleImageClick(image)}
							/>
						)}
					</div>
				))}
			</Container>
			{trailer && <YouTube videoId={trailer} opts={opts} />}
		</Container>
	);
};

export default Row;

import React from "react";
import { Button } from "../../Styles/Styles";
import {Category, Content, Img, Info, Poster, Title } from "../CategoryPage/CatStyles";

const SingleModal = ({singleAnime, categoriesPage, setShowModal}) => {
	return (
		// <Glass>
		// 	<Container width='250px'>
		// 		<Title txtAlign='center' color='white' size ='20px'>{singleAnime?.canonicalTitle}</Title>
		// 		<Img src={singleAnime.posterImage?.large} alt="" />
		// 		<Button onClick={()=>setShowModal(false)}>Close</Button>
		// 	</Container>
		// 	<Title margin='30px 0 0 50px' width='300px'color='white' size='30'>{singleAnime?.description}</Title>
		// </Glass>
		<Category> 
			<Poster>
				<Title>{singleAnime?.canonicalTitle}</Title>
				<Img src={singleAnime.posterImage?.large}/>
			</Poster>
			<Content>
				<Button>close</Button>
				<Info>Rating: {singleAnime?.ageRating}</Info>
				<Info>Description:</Info>
				<Info>{singleAnime?.description}</Info>
			</Content> 
		</Category> 
	);
};

export default SingleModal;

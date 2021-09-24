import React from "react";
// import { Button } from "../../Styles/Styles";
import { Blur, Button, Content, Container, Img, Info, ModalT, Poster, Title } from "./ModalStyles";

const Modal = ({singleAnime, categoriesPage, setShowModal}) => {
	
	return (
		// <Glass>
		// 	<Container width='250px'>
		// 		<Title txtAlign='center' color='white' size ='20px'>{singleAnime?.canonicalTitle}</Title>
		// 		<Img src={singleAnime.posterImage?.large} alt="" />
		// 		<Button onClick={()=>setShowModal(false)}>Close</Button>
		// 	</Container>
		// 	<Title margin='30px 0 0 50px' width='300px'color='white' size='30'>{singleAnime?.description}</Title>
		// </Glass>
		<Container>
				<ModalT>
					<Poster>
						<Title>{singleAnime?.canonicalTitle}</Title>
						<Img src={singleAnime.posterImage?.small} alt=""/>
					</Poster>
					<Content>
						<Info>Rating: {singleAnime?.ageRating}</Info>
						<Info>Description:</Info>
						<Info>{singleAnime?.description}</Info>
						<Button onClick={()=>setShowModal(false)}>close</Button>
					</Content>
				</ModalT>
			<Blur>
			</Blur>
		</Container>
	);
};

export default Modal;

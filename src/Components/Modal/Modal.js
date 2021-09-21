import React from "react";
import { Button } from "../../Styles/Styles";

const Modal = ({singleAnime, categoriesPage, setShowModal}) => {
	return (
		<div>
			<h1>{singleAnime?.canonicalTitle}</h1>
            <img src={singleAnime.posterImage?.small} alt="" />
            <Button bgColor="red" onClick={()=>setShowModal(false)}>Close</Button>
		</div>
	);
};

export default Modal;

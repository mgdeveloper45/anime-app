import styled from "styled-components";

export const Container = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-color: ${(props) => props.bgColor};
	border: ${(props) => props.bdr};
	margin: ${(props) => props.mrgn};
	border-radius: ${(props) => props.radius};
	padding: ${(props) => props.pad};
	display: ${(props) => props.display};
	justify-content: ${(props) => props.jstCnt};
	align-content: ${(props) => props.alCnt};
	align-self: ${(props) => props.alSlf};
	align-items: ${(props) => props.alItm};
	flex-direction: ${(props) => props.direction};
	background: ${(props) => props.bg};
	box-shadow: ${(props) => props.boxShad};
	backdrop-filter: ${(props) => props.bckdrpFil};
	-webkit-backdrop-filter: ${(props) => props.webBF};
	fill-opacity: ${(props) => props.fillOpacity};
`;

export const Title = styled.h5`
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.weight};
	color: ${(props) => props.color};
	width: ${(props) => props.width};
	text-align: ${(props) => props.txtAlign};
	margin: ${(props) => props.margin};
	/* white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis; */
`;

export const Img = styled.img`
	/* width: 100%;
	height: 500px; */
	/* width: 150px; */
	/* height: 150px; */
	/* object-fit: contain; */
`;

export const Glass = styled.div`
	background: rgba( 255, 255, 255, 0.25 );
	box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
	backdrop-filter: blur( 4px );
	-webkit-backdrop-filter: blur( 4px );
	border-radius: 10px;
	border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Button = styled.button`
	background-color: ${(props) => props.bgColor};
	border-radius: 5px;
	border: none;
	padding: 5px;
	font-weight: 700;
	font-size: medium;
	cursor: pointer;
`;

export const Input = styled.input`
	font-size: 32px;
	width: 350px;
	border: none;
	outline: none;
`;

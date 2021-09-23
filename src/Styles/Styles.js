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
	flex-wrap: ${(props) => props.wrap};
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
	padding: ${(props) => props.pad};
	align-self: ${(props) => props.alSlf};
	/* white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis; */
`;

export const Img = styled.img`
	height: 250px; 
	width: 250px;
	object-fit: contain;
`;

export const Glass = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 500px;
	background-color: rgba(0, 0, 0, .8);
	box-shadow: 3px 3px 12px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	/* border-radius: 10px; */
	border: 5px solid rgba(255, 255, 255, 0.18);
`;

export const Button = styled.button`
	background-color: red;
	height: 30px;
	padding: 5px;
	font-weight: 700;
	font-size: medium;
	cursor: pointer;
	margin: 35px;
`;

export const Input = styled.input`
	font-size: 32px;
	width: 350px;
	border: none;
	outline: none;
`;

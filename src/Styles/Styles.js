import styled from "styled-components";
import { device } from "./device";

export const Container = styled.div`
	min-width: ${(props)=>props.minWidth};
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
	position: ${(props) => props.sticky};
	top: ${(props) => props.top};
	overflow-x: ${(props) => props.scroll};
	z-index: ${(props) => props.zIndex};
	overflow-y: hidden;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const Title = styled.h5`
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.weight};
	color: ${(props) => props.color};
	width: ${(props) => props.width};
	text-align: ${(props) => props.txtAlign};
	align-self: ${(props) => props.alSlf};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.pad};
	align-self: ${(props) => props.alSlf};
	/* white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis; */
`;

export const Img = styled.img`
	max-height: 200px;
	object-fit: contain;
	transition: transform 450ms;
	margin-right: 8px;
	border-radius: 15px;
	&:hover {
		transform: scale(1.08);
	}
`;

export const TrendingImg = styled.img`
	max-height: 300px;
	overflow-y: hidden;
	overflow-x: scroll;
	transition: transform 450ms;
	margin-right: 15px;
	border-radius: 15px;
	&:hover {
		transform: scale(1.15);
	}
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
	font-size: 25px;
	/* min-width: 320px; */
	border: none;
	outline: none;
	border-radius: 10px;
`;

export const Select = styled.select`
	font-size: 25px;
	margin-left: 10px;
	border: none;
	border-radius: 10px;
	outline: none;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	border:1px solid blue;
	@media ${device.mobileL} {
		max-width: 400px;
		max-height: 10vh;
		justify-content: space-around;
	}
	@media ${device.laptop} {
		max-width: 800px;
		flex-direction: row;
		/* align-items: center; */
	}
	@media ${device.desktop} {
		max-width: 1400px;
		flex-direction: row;
		/* align-items: center; */
	}
`;

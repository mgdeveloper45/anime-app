import styled from "styled-components";
import { device } from "../../Styles/device";

export const NavContainer = styled.div`
	min-height: 10vh;
	min-width: 360px;
	background-color: lightgray;
	z-index: 1;
	position: sticky;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavItems = styled.div`
	min-width: 80%;
	display: flex;
	flex-direction: column;
	@media ${device.tablet} {
		flex-direction: row;
	}
`;

export const NavTitle = styled.h1`
	font-weight: 900;
	font-size: 56px;
	margin: 0;
	padding: 0 150px 0 0;
	@media ${device.tablet} {
		font-size: xx-large;
        color:black;
	}
`;
export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 60px;
	@media ${device.tablet} {
        width: 500px;
		flex-direction: row;
        align-items: center;
        height:40px;
	}
`;

export const NavInput = styled.input`
	font-size: 20px;
    flex-grow: 1;
    background:transparent;
	border: none;
	outline: none;
	border-radius: 10px;
	@media ${device.tablet} {
        font-size:25px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: white;
    border-radius: 15px;
`;

export const NavSelect = styled.select`
	font-size: 20px;
	flex-grow: 1;
    border:none;
	outline: none;
	border-radius: 10px;
	@media ${device.tablet} {
		font-size: 25px;
	}
`;


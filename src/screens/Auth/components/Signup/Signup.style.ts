import styled from "styled-components";

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
	width: 360px;
	height: 55vh;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 7px 10px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Title = styled.p`
	color: #1c1e21;
	font-family: ${({ theme }) => theme.fontFamilies.Rubik};
	font-weight: 500;
	font-size: 32px;
	line-height: 38px;
	margin-bottom: 0;
	text-align-last: left;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

const CloseBtn = styled.button`
	width: 25px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Hr = styled.hr`
	border: 1px solid #dadde1;
	width: auto;
	margin: 0 -10px;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SignupBtn = styled.button`
	& {
		width: 75%;
		height: 40px;
		background-color: ${({ theme }) => theme.colors.green};
		font-family: ${({ theme }) => theme.fontFamilies.Rubik};
		border-radius: 9px;
		color: ${({ theme }) => theme.colors.white};
		font-size: 20px;
		align-self: center;
	&:hover {
		background-color: #42b72a;
	}
`;

export default {
	Container,
	Header,
	Title,
	Column,
	CloseBtn,
	Hr,
	Row,
	SignupBtn,
};

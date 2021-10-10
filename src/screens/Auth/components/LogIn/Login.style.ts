import styled from "styled-components";

const Conatiner = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	justify-content: space-around;
	align-items: center;
	border: none;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
	box-sizing: border-box;
	padding: 10px 17px;
	width: 396px;
	height: 420px;
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	background: #ffffff;
	border: 1px solid #dddfe2;
	color: #1d2129;
	font-family: ${({ theme }) => theme.fontFamilies.SalsaRegular};
	line-height: 16px;
	vertical-align: middle;
	font-size: 1.06rem;
	width: 100%;
	border-radius: 9px;
	height: 64px;
	padding: 14px 16px;
	&:foucs {
		border-color: #1877f2;
		box-shadow: 0 0 0 2px #e7f3ff;
		caret-color: #1877f2;
	}
`;

const SubmitBtn = styled.button`
	& {
		width: 100%;
		height: 64px;
		background-color: ${({ theme }) => theme.colors.blue};
		font-family: ${({ theme }) => theme.fontFamilies.Ruda};
		border-radius: 9px;
		color: white;
		font-size: 1.25rem;
		line-height: 48px;
		padding: 0 16px;
	}
	&:hover {
		background-color: #166fe5;
	}
`;
const SignupBtn = styled.button`
	& {
		width: 75%;
		height: 64px;
		background-color: ${({ theme }) => theme.colors.green};
		font-family: ${({ theme }) => theme.fontFamilies.Ruda};
		border-radius: 9px;
		color: white;
		font-size: 1.25rem;
		line-height: 48px;
		padding: 0 16px;
	}
	&:hover {
		background-color: #42b72a;
	}
`;

const Hr = styled.hr`
	border: 1px solid #dadde1;
	width: 100%;
	align-items: center;
	display: flex;
	margin: 20px 16px;
	text-align: center;
`;

const link = styled.a`
	color: ${({ theme }) => theme.colors.blue};
	&:hover {
		text-decoration: underline;
	}
`;

const ErrorText  = styled.p`
color: red;
font-size: 0.625rem;
text-align: left;
align-self: flex-start;
`;

export default { Conatiner, Input, SubmitBtn, Hr, link, SignupBtn , ErrorText};

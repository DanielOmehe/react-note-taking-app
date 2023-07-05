import { styled } from "styled-components";

export const NoteIcons = styled.img`
	cursor: pointer;
	border: ${(props) =>
		props.border ? `${props.border}rem solid #eee` : "none"};
	border-radius: ${(props) => (props.radius ? `${props.radius}%` : "0")};
	padding: 0.2rem;
`;

export const NoteIconsLarge = styled.img`
	width: 200px;
	height: 200px;
	padding: 0.2rem;
`;

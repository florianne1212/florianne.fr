import styled from 'styled-components'



export const Main = styled.div `
	display:flex;
	flex-direction: column;
	align-items:center;
	.react-pdf {
		&_Document {
			display:flex;
			flex-direction: column;
			align-items:center;
		}
	}
`

export const Download = styled.div `
	position: absolute;
	top: 50%;
	left: 2rem;
	button{
		transform-origin: center;
		border: none;
		padding: 20px;
		background: none;
		outline: none;
		svg {
			position: absolute;
			path {
				fill: ${props => props.theme.text};
			}
		}
	}
`
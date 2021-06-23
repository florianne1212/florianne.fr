import styled from 'styled-components'



export const Main = styled.div `
	position: relative;
	top: 120px;
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
	top: 25%;
	left: 0.5 rem;
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
export const ZoomIn = styled.div `
	position: absolute;
	top: 75%;
	left: 0.5 rem;
	span {

		padding: 20px;
		/* width: 36px;
		height: 8px;
		display: block;
		background: #11737E;
		margin: 8px; */
		svg {
			position: absolute;
			path {
				fill: ${props => props.theme.text};
			}
		}
	}
`
export const ZoomOut = styled.div `
	position: absolute;
	top: 50%;
	left: 0.5 rem;
	span {
		padding: 20px;
		/* width: 36px;
		height: 8px;
		display: block;
		background: #11737E;
		margin: 8px; */
		svg {
			position: absolute;
			path {
				fill: ${props => props.theme.text};
			}
		}
	}
`
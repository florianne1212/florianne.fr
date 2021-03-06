import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Nav = styled(motion.div)`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	display: block;
	background: ${props => props.theme.background};
	color: #000;
	z-index: 100;
	// overflow: hidden;
`

export const NavHeader = styled.div`
	top: 5rem;
	position: relative;
	h2 {
		color: ${props => props.theme.text};
	}

`

export const CloseNav = styled.div`
	button {
		transform-origin: center;
		border: none;
		padding: 2rem;
		background: none;
		outline: none;
		span {
			width:36px;
			height: 8px;
			display: block;
			background: ${props => props.theme.text};
			margin: 8px;
		}
	}
`

export const NavList = styled.div`
	height: 100%;
	width: 100%;
	// margin-top: 25%;
	display: flex;
	align-items: center;
	ul {
		padding: 0;
		li {
			list-style: none;
			font-size: clamp(1vw, 5vw, 3rem);
			text-transform: uppercase;
			font-weight: 900;
			height: 7rem;
			line-height: 4rem;
			overflow: hidden;;
			.link{
				color: ${props => props.theme.text};
				position: relative;
				display: flex;
				align-items: center;
				.arrow {
					height: 76px;
					margin-right: 8px;
					svg {
						width: 100px;
						path {
							fill: ${props => props.theme.text};
						}
					}
				}

			}
		}
	}
`

export const NavFooter = styled.div`
  position: absolute;
  z-index: 99999;
  bottom: 0;
  left: 1.5rem;
  width: 100%;
  padding: 4rem 0px;
  p {
    color: ${props => props.theme.text};
  }
  svg path {
    fill: ${props => props.theme.text};
  }
`

export const NavVideo = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 28%;
	z-index: -1;
	width: 100%;
	height: 100%;
	background: #000;
	.reveal{
		width: 100%;
		background: ${props => props.theme.background};
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
	}
	.video{
		background: #000;
		position: absolute;
		height: 100%;
		margin: 0%;
		z-index: -1;
		video {
			height: 100%;
		}
	}

`
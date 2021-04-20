import styled from 'styled-components'
import { motion } from 'framer-motion'
 
export const Banner = styled.div `
	overflow: hidden;
	/* display: inline-block; */
	margin-top: 15%;
	/* background: ${props => props.theme.background}; */
	height: 50vh;
	width: 100%;
	/* position: relative; */
	margin-bottom: 0px;
`


//content section

export const HomeContentSection = styled(motion.div)`
	margin-bottom: 200px;
`

export const Content = styled.h2`
	/* position:relative; */
	display: inline-block;
	/* margin-top: 100px; */
	width: 53%;
	font-size: 1.5rem;
	font-weight: 400;
	margin-left: 150px;
	color: ${props => props.theme.text};
`

export const GithubLink = styled.h2`
	/* argin-top: 25vh;  */
	/* width: 53%; */
	display: inline-block;
	margin-top: 210px;
	font-size: 1.5rem;
	font-weight: 400;
	margin-left: 100px;
	color: ${props => props.theme.text};
	svg {
		width: 120px;
		height: 80px;
		/* display: block;
		position: relative;
		overflow: hidden; */
		/* position: relative; */
		top: 150px;
		left: 150px;
		width: 108px;
		path {
			fill: ${props => props.theme.text};
		}
	}
`

export const LinkedinLink = styled.h2`
	/* margin-top:; */
	/* width: 53%; */
	/* margin-top: 310px; */
	display: inline-block;
	font-size: 1.5rem;
	font-weight: 400;
	margin-left: 50px;
	color: ${props => props.theme.text};
	svg {
		width: 120px;
		height: 80px;
		/* position: relative; */
		left: 150px;
		width: 108px;
		path {
			fill: ${props => props.theme.text};
		}
	}
`

export const HomeFeaturedSection = styled(motion.div) `
	margin-bottom: 200px;
	position: relative;
	a {
		margin-bottom: 200px;
		position: relative;
		display: block;
	}
`

export const FeaturedContent = styled(motion.div) `
	margin-top: 25%;
	height: 480px;
	width: 100%;
	padding: 56px 124px;
	box-sizing: border-box;
	color: ${props => props.theme.blue};
	h3 {
		font-size: 1.4rem;
	}
	.meta{
		display: flex;
		h4 {
			& :last-child {
				margin-left: 1rem;
			}
		}
	}
	.featured-title{
		position: absolute;
		bottom: -128px;
		font-size: 7rem;
		font-weight: 900;
		line-height: 90px;
		margin: 0;
	}
	.arrow {
		width: 120px;
		height: 80px;
		display: block;
		position: relative;
		overflow: hidden;
		svg {
			position: absolute;
			top: 16px;
			left: -48px;
			width: 108px;
			path {
				fill: ${props => props.theme.blue};
			}
		}
	}
`

export const FeaturedVideo = styled.div `
	position: absolute;
	z-index: -1;
	/* margin-left: auto;
	margin-right: auto; */
	width: 110%;
	height: 480px;
	top: 0;
	display: block;
	overflow: hidden;
	video {
		width: 100%;
	}
`

export const FeaturedProjects = styled.div `
	margin-top: 200px;
	button{
		background: ${props => props.theme.blue};
		color: #fff;
		position: relative;
		padding: 20px;
		display: block;
		text-align: left;
		font-size: 1.4rem;
		line-height: 1;
		font-weight: 600;
		border: none;
		span {
			margin-right: 100px;
			display: block;
		}
		&:before, &:after {
			content: '';
			position: absolute;
			top: 50%;
			right: 20px;
			width: 35px;
			height: 7px;
			display: block;
			background: #fff;
			transform: translateY(-50%);
		}
		&:before {
			margin-top: -8px;
		}
		&:after {
			margin-top: 8px;
		}
	}
`

export const Title = styled.div `

`

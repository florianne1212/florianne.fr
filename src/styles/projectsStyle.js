import styled from 'styled-components'

export const Headline = styled.span `
	display: block;
	font-size: clamp(3rem, 5vw, 8rem);
	font-weight: 400;
	line-height: 0.76;
`
export const SmallerHeadline = styled.span `
display: block;
font-size: 4rem;
font-weight: 400;
line-height: 0.76;
`

export const MINISHELL = styled.h2`
	/* position:relative; */
	/* display: inline-block; */
	display: flex;
	// margin-top: 100px;
	width: 70%;
	gap: 12px;
	font-size: 1.5rem;
	font-weight: 400;
	margin-left: 150px;
	color: ${props => props.theme.text};
	a{
		align-self:center;
	}
`



export const BannerTitle = styled.h1 `
	/* position: absolute; */
	margin-left: auto;
	margin-right: auto;
	color: ${props => props.theme.text};
	pointer-events: none;
`

export const PreviewVideo  = styled.h2`
	/* position: relative; */
	/* height: 100px;*/
	margin-top: 100px;
	video {
		width: 100% !important;
		/* height: 400px; */
	}
	bottom: 0;
	
`
export const ContentHorizontal= styled.h2`
	margin: auto;
	display: flex;
	flex-direction: row;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
`

export const CarouselVideoHorizontal = styled.div `
	margin: auto;
	video {
		width:80%;
		max-height:800px;
	}
`

export const ContentComingHorizontal = styled.h2`
	margin: auto;
	max-width: 650px;
	width: 90%;
	font-size: 1.5rem;
	font-weight: 400;
	// margin-left: 2rem;
	text-justify: auto;
	color: ${props => props.theme.text};
	a:link {
		color: ${props => props.theme.text};
		background-color: transparent;
		text-decoration: none;
	}

	a:visited {
		color: ${props => props.theme.text};
		background-color: transparent;
		text-decoration: none;
	}

	a:hover {
		color: ${props => props.theme.text}red;
		background-color: transparent;
		text-decoration: underline;
	}

	a:active {
		color: ${props => props.theme.text};
		background-color: transparent;
		text-decoration: underline;
	}
`

export const ContentComing = styled.h2`
	/* position: absolute; */
	margin: auto;
	width: 80%;
	font-size: 1.5rem;
	font-weight: 400;
	// margin-left: 2rem;
	text-justify: auto;
	color: ${props => props.theme.text};
	a:link {
		color: ${props => props.theme.text};
		background-color: transparent;
		text-decoration: none;
	}

	a:visited {
		color: ${props => props.theme.text};
		background-color: transparent;
		text-decoration: none;
	}

	a:hover {
		color: ${props => props.theme.text}red;
		background-color: transparent;
		text-decoration: underline;
	}

	a:active {
		color: ${props => props.theme.text};
		background-color: transparent;
		text-decoration: underline;
	}
`

// export const LayoutProject = styled.h1`
// 	margin-top: 10rem;
// `

export const LayoutProject = styled.h1 `
	margin-top: 10rem;
`

export const CarouselVideo = styled.div `
	video {
		width:80%;
`
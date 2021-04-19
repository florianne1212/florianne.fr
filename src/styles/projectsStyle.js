import styled from 'styled-components'

export const Headline = styled.span `
display: block;
font-size: 5rem;
font-weight: 400;
line-height: 0.76;
`
export const SmallerHeadline = styled.span `
display: block;
font-size: 4rem;
font-weight: 400;
line-height: 0.76;
`

export const CUB3D = styled.h2`
	/* position:relative; */
	/* display: inline-block; */
	margin-top: 100px;
	width: 53%;
	font-size: 1.5rem;
	font-weight: 400;
	margin-left: 150px;
	color: ${props => props.theme.text};
`
export const MINISHELL = styled.h2`
	/* position:relative; */
	/* display: inline-block; */
	margin-top: 100px;
	width: 53%;
	font-size: 1.5rem;
	font-weight: 400;
	margin-left: 150px;
	color: ${props => props.theme.text};
`



export const BannerTitle = styled.h1 `
/* position: absolute; */
margin-top: 210px;
margin-left: 100px;
color: ${props => props.theme.text};
pointer-events: none;
`

export const PreviewVideo  = styled.h2`
	height: 100px;
	margin-top: 100px;
	
`


export const ContentComing = styled.h2`
	/* position: absolute; */
	margin-top: 50px;
	width: 53%;
	font-size: 1.5rem;
	font-weight: 400;
	margin-left: 100px;
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
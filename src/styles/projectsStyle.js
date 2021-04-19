import styled from 'styled-components'

export const Headline = styled.span `
display: block;
font-size: 5rem;
font-weight: 400;
line-height: 0.76;
`

export const BannerTitle = styled.h1 `
position: absolute;
margin-top: 210px;
margin-left: 100px;
color: ${props => props.theme.text};
pointer-events: none;
`

export const ContentComing = styled.h2`
	position: absolute;
	margin-top: 410px;
	width: 53%;
	font-size: 1.5rem;
	font-weight: 400;
	margin-left: 100px;
	color: ${props => props.theme.text};
`
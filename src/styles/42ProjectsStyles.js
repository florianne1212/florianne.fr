import styled from 'styled-components'

export const LayoutProject = styled.h1 `
	top: 0;
`

export const First = styled.div`
	margin-top: 100px;
	/* position: absolute; */
	//z-index: 9;
	top: 0;
	height: 100vh;
	background-color: #fff1f0;
    /* position: relative; */
`

export const Second = styled.div`
	//margin-top: 100px;
	/* position: absolute; */
	//z-index: 9;
	top: 0;
	height: 100vh;
	background-color: #f2ebfc;
    position: relative;
`
export const Third = styled.div`
	top: 0;
	height: 100vh;
	background-color: #e8f3fa;
`

export const CUB3D = styled.div`
	text-align: center;	
	margin: auto;
	font-size: 1.5rem;
	font-weight: 400;
	width: 80%;
	
	color: ${props => props.theme.text};
	a {
		margin-top: 100px;
		text-justify: center;
	}
	video {
		width: 80%;
		max-width: 650px;
		margin-top: 100px;
	}
`

export const MINISHELL = styled.div`
	text-align: center;	
	margin: auto;
	font-size: 1.5rem;
	font-weight: 400;
	width: 80%;
	
	color: ${props => props.theme.text};
	a {
		margin-top: 100px;
		text-justify: center;
	}
	video {
		width: 80%;
		max-width: 650px;
		margin-top: 250px;
	}
`
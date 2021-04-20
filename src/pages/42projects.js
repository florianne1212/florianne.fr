import React, {useState} from 'react'

//styled Component
import {
} from '../styles/projectsStyles';

//context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

//layout
import Layout from "../components/layout"
import {
	ContentComing, 
	SmallerHeadline,
	BannerTitle,
	PreviewVideo,
	CUB3D,
	MINISHELL
} from "../styles/projectsStyle"


const MyProjects = () => {

	const {currentTheme, cursorStyles} = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}
  
	return (
	<div>
		<Layout>
			<BannerTitle>
				<SmallerHeadline>Some projects made for my 42 Cursus</SmallerHeadline>
			</BannerTitle>
			{/* <Title></Title> */}
			<ContentComing>
					Here are some of my favorites project made during my Cursus in 42 you can find them all on&nbsp;
					<a
						href="https://github.com/florianne1212"
						onMouseEnter={() => onCursor("pointer")}
						onMouseLeave={onCursor}
						onClick={onCursor}
					>
						my github.
					</a>
			</ContentComing>
			<CUB3D>
				<a>
					<strong>CUB3D<br/></strong>
					This has been one of my favorite project because it's the first visual project made during my cursus.<br/>
					The project is inspired by the world-famous eponymous 90’s game Wolfeinstein. We had to reproduce some of the features of the game thanks to raycasting.<br/>
					here you can see an extract of my project.
				</a>
				<video
						loop
						autoPlay
						muted src={require('../assets/video/cub3d_cut.mp4').default}>
				</video>
			</CUB3D>
			<MINISHELL>
				<video
						loop
						autoPlay
						muted src={require('../assets/video/minishell_cut.mp4').default}>
				</video>
				<a>
					<strong>MINISHELL<br/></strong>
					This was another really interesting project in wich we had to create a simple shell. we had to implement some command like echo, export, pwd, ...<br/> 
				</a>
			</MINISHELL>
		</Layout>
	</div>
	);
}

export default MyProjects
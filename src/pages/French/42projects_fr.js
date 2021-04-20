import React, {useState} from 'react'

//styled Component
import {
} from '../../styles/projectsStyles';

//context
import {useGlobalStateContext, useGlobalDispatchContext} from '../../context/globalContext'

//layout
import LayoutFR from "../../components/French/layout_fr"
import {
	ContentComing, 
	SmallerHeadline,
	BannerTitle,
	PreviewVideo,
	CUB3D,
	MINISHELL
} from "../../styles/projectsStyle"


const MyProjects = () => {

	const {currentTheme, cursorStyles} = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}
  
	return (
	<div>
		<LayoutFR>
			<BannerTitle>
				<SmallerHeadline>Quelques projets fait durant mon cursus  à 42</SmallerHeadline>
			</BannerTitle>
			{/* <Title></Title> */}
			<ContentComing>
					Voici quelques uns de mes projets favoris faits pour mon cursus  à 42 tous mes projets sont visible sur&nbsp;
					<a
						href="https://github.com/florianne1212"
						onMouseEnter={() => onCursor("pointer")}
						onMouseLeave={onCursor}
						onClick={onCursor}
					>
						mon github.
					</a>
			</ContentComing>
			<CUB3D>
				<a>
					<strong>CUB3D<br/></strong>
					C'est un de mes projets préférés car c'est le premier projet visuel que j'ai fait.<br/>
					Ce projet est inspiré du jeu éponyme mondialement connu Wolfenstein, considéré comme le premier FPS jamais développé.<br/>
					Nous avions à reproduire certaines parties du jeu grâce aux raycasting.<br/>
					Voici un extrait de mon projet.
				</a>
				<video
						loop
						autoPlay
						muted src={require('../../assets/video/cub3d_cut.mp4').default}>
				</video>
			</CUB3D>
			<MINISHELL>
				<video
						loop
						autoPlay
						muted src={require('../../assets/video/minishell_cut.mp4').default}>
				</video>
				<a>
					<strong>MINISHELL<br/></strong>
					Un autre projet très intéressant pour lequel nous devions recréer un simple shell. Nous avions à Implémenter certaines commandes tel 
		 			que echo, pwd, export, ... <br/> 
				</a>
			</MINISHELL>
		</LayoutFR>
	</div>
	);
}

export default MyProjects
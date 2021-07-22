import React from "react";
import {Second, MINISHELL} from '../../styles/42ProjectsStyles'
import { useTranslation } from "react-i18next"

export default () => {
	const { t } = useTranslation()
	return (
		<Second>
			<MINISHELL>
				<video
					loop
					autoPlay
					muted src={require('../../assets/video/minishell_cut.mp4').default}>
				</video>
				<a>
					<br/><br/><br/>
					<strong>MINISHELL<br/></strong>
					{t('42projects.minishell')}<br/> 
				</a>
			</MINISHELL>
		</Second>
  );
};
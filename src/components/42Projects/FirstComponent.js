import React from "react";

import {First, CUB3D} from '../../styles/42ProjectsStyles'

import { useTranslation } from "react-i18next"

export default () => {
	const { t } = useTranslation()
	return (
		<First>
			<CUB3D>
				<a>
					<br/><br/><br/>
					<strong>CUB3D<br/></strong>
						{t('42projects.cub3d.line1')}<br/>
						{t('42projects.cub3d.line2')}<br/>
						{t('42projects.cub3d.line3')}<br/>
				</a>
				<video
						loop
						autoPlay
						muted src={require('../../assets/video/cat_cub.mp4').default}>
				</video>
			</CUB3D>
		</First>
  );
};
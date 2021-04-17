import React, { useEffect, useRef } from 'react'
import Videotest from '../../assets/video/pepin-home.mp4'

import {
	Banner,
	Video,
	BannerTitle,
	Canvas,
	Headline,
} from "../../styles/homeStyles"

const HomeBanner = ({ onCursor }) => {

	const container = {
		initial: { y: 800 },
		animate: {
		  y: 0,
		  transition: {
			staggerChildren: 0.2,
		  },
		},
	  }
	  const item = {
		initial: { y: 800 },
		animate: {
		  y: 0,
		  transition: {
			duration: 1,
			ease: [0.6, 0.05, -0.01, 0.9],
		  },
		},
	  }

	return (
		<Banner>
		</Banner>
	)
}

export default HomeBanner
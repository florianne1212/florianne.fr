import React, {useState} from "react"
import {Link} from "gatsby"
import {AnimatePresence, motion} from 'framer-motion'

//styled components
import {Container , Flex} from '../styles/globalStyles'


import {
	Nav,
	NavHeader,
	CloseNav,
	NavList,
	NavFooter,
	NavVideo,
} from '../styles/navigationStyles'

const navRoutes = [
	{
		id: 0,
		title: 'my resume',
		path:'resume',
		video: "pepin-fresh.mp4",
	},
	{
		id: 1,
		title: 'my personnal projects',
		path:'myprojects',
		video: "pepin-bathtub.mp4",
	},
	{
		id: 2,
		title: 'my school projects',
		path:'42projects',
		video: "pepin-nelson.mp4",
	},
	// {
	// 	id: 3,
	// 	title: 'there are sheep',
	// 	path:'/it-takes-an-island',
	// 	video: "pepin-sheep.mp4",
	// },
	// {
	// 	id: 4,
	// 	title: 'connected to the land',
	// 	path:'/50-beaches',
	// 	video: "pepin-road.mp4",
	// },
]

const Navigation = ({toggleMenu, setToggleMenu, onCursor}) => {

	const[revealVideo, setRevealVideo] = useState({
		show: false,
		video: "pepin-sheep.mp4",
		key: "0",
	})

	return(
		<>
			<AnimatePresence>
				{toggleMenu && (
						<Nav 
							initial={{x: '-100%'}}
							exit={{x: '-100%'}}
							animate={{x: toggleMenu ? 0 : '-100%'}}
							transition={{
								duration: 0.8,
								ease: [0.6, 0.05, -0.01, 0.9]
							}}
						>
							<Container>
								<NavHeader>
									<Flex spaceBetween noHeight>
										<h2>Why should you hire me ?</h2>
										<CloseNav 
											onClick={() => setToggleMenu(!toggleMenu)}
											onMouseEnter={() => onCursor("pointer")}
											onMouseLeave={onCursor}
										>
											<button>
												<span></span>
												<span></span>
											</button>
										</CloseNav>
									</Flex>
								</NavHeader>
								<NavList>
									<ul>
										{navRoutes.map(route => (
											<motion.li 
												onMouseEnter={() => onCursor("pointer")}
												onMouseLeave={onCursor}
												key={route.id}
												onHoverStart={() => 
													setRevealVideo({
														show: true,
														video: route.video,
														key: route.id,
													})	
												}
												onHoverEnd={() => 
													setRevealVideo({
														show: false,
														video: route.video,
														key: route.id,
													})
												}
											>
												<Link to={`/${route.path}`}>
													<motion.div 
														initial={{ x: -108}}
														whileHover={{ x: -40, 
														transition: {
															duration: .4,
															ease: [0.6, 0.05, -0.01, 0.9],
														}}} 
														className="link"
													>
													<span className="arrow">
														<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 101 57"
														>
														<path
															d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
															fill="#000"
															fillRule="evenodd"
														></path>
														</svg>
													</span>
														{route.title}
													</motion.div>
												</Link>
											</motion.li>
										))}
				
				
									</ul>
								</NavList>
								<NavFooter></NavFooter>
							</Container>
						</Nav>
				)}
			</AnimatePresence>
		</>
	)
}



export default Navigation
import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//styled components

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

//components

import HeaderFR from './header_fr'
import Cursor from './../customCursor'
import NavigationFR from './navigation_fr'

//context

import {useGlobalStateContext, useGlobalDispatchContext} from '../../context/globalContext'

const GlobalStyle = createGlobalStyle`

	//html, body {
	//	height: 100%;
	//}
	
	${normalize}
	* {
		text-decoration: none;
		cursor: none !important;
	}

	html {
		box-sizing: border-box;
		-webkit-font-smoothing: antialised;
		font-size: 16px
	}
	

	body {
		
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background : ${props => props.theme.background};
		overscroll-behavior: none;
		overflow-x: hidden
	}
`

const LayoutFR = ({ children }) => {

	const darkTheme = {
    background: "#000000",
    text: "#ffffff",
		blue: '#11737E',
	}

	const lightTheme = {
    background: "#ffffff",
    text: "#000000",
		blue: '#773344', 
  }

	const {currentTheme, cursorStyles} = useGlobalStateContext()
  	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}

	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<ThemeProvider theme={currentTheme === 'dark'? darkTheme : lightTheme}>
			<GlobalStyle />
			<Cursor toggleMenu={toggleMenu} />
			<HeaderFR 
				onCursor={onCursor}
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
			/>
			<NavigationFR 
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
				onCursor={onCursor}
			/>
			<main>{children}</main>
		</ThemeProvider>
	)
}

LayoutFR.propTypes = {
	children: PropTypes.node.isRequired,
}

export default LayoutFR

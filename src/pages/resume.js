import React, {useEffect, useLayoutEffect, useState} from 'react'

//styled Component
import {
	Main,
	Download,
	ZoomIn,
	ZoomOut
} from '../styles/resumeStyles';

//context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

//layout
import Layout from "../components/layout"

//pdf
import resume from '../assets/document/resume_en.pdf';
import { Document, Page, pdfjs   } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function useMediaQuery() {
// 	const [screenSize, setScreenSize] = useState([0, 0]);
	
// 	useLayoutEffect(() => {
// 	  function updateScreenSize() {
// 		setScreenSize([window.innerWidth, window.innerHeight]);
// 	  }
// 	  window.addEventListener("resize", updateScreenSize);
// 	  updateScreenSize();
// 	  return () => window.removeEventListener("resize", updateScreenSize);
// 	}, []);
	
// 	return screenSize;
// }

function Resume () {
	if (typeof window === "undefined") return (<div>test</div>);

	const {currentTheme, cursorStyles} = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}
	
	const load = () => {
		console.log(window.innerWidth);
		if(window.innerWidth < 700)
			return(0.40)
		else if(window.innerWidth < 1000)
			return(0.70)
		else
			return(1)
	}


	const [scale, setScale] = useState(load);
	//


	useEffect (() => {
	
		function handleResize() {
			console.log(window.innerWidth);
			if(window.innerWidth < 700)
				setScale(0.40)
			else if(window.innerWidth < 1000)
				setScale(0.70)
			else
				setScale(1)
		}
	
		window.addEventListener("resize", handleResize)
	
		return () => window.removeEventListener("resize", handleResize)
	
	},[]);

	const zoom_in = () => {
		console.log(scale);
		if(window.innerWidth < 700)
		{
			if(scale < 0.8)
				setScale(scale * 1.05)
		}
		else if(window.innerWidth < 1000)
		{	
			if(scale < 1)
				setScale(scale * 1.15)
		}
		else
		{
			if(scale < 1.5)
			setScale(scale * 1.15)
		}
	}

	const zoom_out = () => {
		console.log(scale);
		if(window.innerWidth < 700)
			setScale(scale * 0.95)
		else
			setScale(scale * 0.85)
	}

	// window.onload = () => {
	// 	load();
	// }

	



		return (
		<div>
			<Layout>
				<Main>
					<Document
						file={resume}
					>
						<Page pageNumber={1} scale={scale}/>
					</Document>
				</Main>
				<Download>
					<a href={resume} download="Florianne_Coudert.pdf">
						<button
							href={resume} download="Florianne_Coudert.pdf"
							onMouseEnter={() => onCursor("pointer")}
							onMouseLeave={onCursor}
						>
							<a href={resume} download="Florianne_Coudert.pdf"></a>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/>
							</svg>
						</button>
					</a>
					
				</Download>
				<ZoomIn>
					<span
						onClick={() => zoom_in()}
						onMouseEnter={() => onCursor("pointer")}
						onMouseLeave={onCursor}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
						</svg>
					</span>
				</ZoomIn>
				<ZoomOut>
					<span
						onClick={() => zoom_out()}
						onMouseEnter={() => onCursor("pointer")}
						onMouseLeave={onCursor}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M0 10h24v4h-24z"/>
						</svg>
					</span>
				</ZoomOut>
			</Layout>
		</div>
		);
}

export default Resume
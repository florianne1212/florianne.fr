import React, {useLayoutEffect, useState} from 'react'

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

function useMediaQuery() {
	const [screenSize, setScreenSize] = useState([0, 0]);
	
	useLayoutEffect(() => {
	  function updateScreenSize() {
		setScreenSize([window.innerWidth, window.innerHeight]);
	  }
	  window.addEventListener("resize", updateScreenSize);
	  updateScreenSize();
	  return () => window.removeEventListener("resize", updateScreenSize);
	}, []);
	
	return screenSize;
  }

const Resume = () => {

	const [width] = useMediaQuery();

	const {currentTheme, cursorStyles} = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}
	let my_scale;
	if (width < 400)  
		my_scale = 0.25
	else 
		my_scale = 1
		
	// else if (screen.width < 980)
	// 	my_scale = 0.55
	// else
	// 	my_scale = 1

	const [scale, setScale] = useState(1);

  
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
					onClick={() => setScale(scale * 1.25)}
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
					onClick={() => setScale(scale * 0.75)}
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
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import {dark} from './styles/Themes';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll';
import { useRef } from "react";
// import 'locomotive-scroll/dist/locomotive-scroll/css'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";


function App() {

  const containerRef = useRef(null)
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={dark}>
        
        <LocomotiveScrollProvider
          options={
            {
              smooth:true,
            }
          }
          watch={
            [

            ]
          }
          containerRef={containerRef}
        >
          {/* <main data-scroll-container ref={containerRef}>
            <Home/>
          </main> */}
          <AnimatePresence>
            <main data-scroll-container ref={containerRef}>
              <Home/>
              <About/>
              <Shop/>
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
      
    </>
  );
}

export default App;

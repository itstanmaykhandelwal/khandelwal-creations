import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import MainVideo from '../assets/Walking Girl.mp4';


const VideoContainer = styled.section`
    width: 100%;
    height: 100%;
    position: relative;

    video{
        width:100%;
        height:100vh;
        object-fit: cover;
    }
`

const DarkOverlay = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: 1;
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
`
const Title = styled(motion.div)`
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right:0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text};

    div{
        display: flex;
        flex-direction: row;
    }

    h1{
        font-family: 'Kaushan Script';
        font-size: ${props => props.theme.fontxxxl};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
    }
    h2{
        font-family: 'Sirin Stencil';
        font-size: ${props => props.theme.fontlg};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
        text-transform: capitalize;
        font-weight:300;
    }
`

const container = {
    hidden : {
        opacity:0,
    },
    show : {
        opacity:1,
        
        transition : {
            delayChildren:2,
            staggerChildren:0.3,
        }
    },
}
const item = {
    hidden : {
        opacity:0,
    },
    show : {
        opacity:1,
    },
}

const CoverVideo = () => {
    return (  
         <VideoContainer>
            <DarkOverlay/>
            <Title variants={container} initial="hidden" animate="show" >
                <div>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.54" data-scroll-speed="4" >K</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.51" data-scroll-speed="4" >H</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.48" data-scroll-speed="4" >A</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.45" data-scroll-speed="4" >N</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.42" data-scroll-speed="4" >D</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.39" data-scroll-speed="4" >E</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.36" data-scroll-speed="4" >L</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.33" data-scroll-speed="4" >W</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.30" data-scroll-speed="4" >A</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.27" data-scroll-speed="4" >L</motion.h1>

                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.24" data-scroll-speed="4" >C</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.21" data-scroll-speed="4" >R</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.18" data-scroll-speed="4" >E</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.15" data-scroll-speed="4" >A</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.12" data-scroll-speed="4" >T</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4" >I</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4" >O</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay="0.03" data-scroll-speed="4" >N</motion.h1>
                </div>
                <motion.h2 variants={item} data-scroll data-scroll-delay="0.56" data-scroll-speed="4">Inspire, Create, Belive</motion.h2>
            </Title>
            <video src={MainVideo} type="video/mp4" autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo
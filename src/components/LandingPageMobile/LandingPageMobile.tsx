"use client";

import { useEffect, useState } from "react";
import { Button, useTheme } from "@mui/material";
import { css } from '@emotion/css'
import Image from "next/image";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import animationData from "../../../public/bookAnimation.json";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LoginForm from "../LoginForm/LoginForm";
import { StyledLandingPageMobile } from "./styles";
import { animated, useSpring, config } from '@react-spring/web'
import SignUpForm from "../SignUpForm/SignUpForm";

export default function LandingPageMobile() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState<'landingPage' | 'login' | 'signup'>('landingPage')
  const [slideAnimationStyles, slideAnimationApi] = useSpring(() => ({
    x: '100%',
  }));
  const [slideAnimationStylesSignUp, slideAnimationApiSignUp] = useSpring(() => ({
    y: '100%',
  }));
  const springVertical = useSpring({
    from: { y: -500},
    to: { y: 0 },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    switch(currentPage){
      case 'login':
        slideAnimationApi.start({x: '0%', config: config.wobbly});
        slideAnimationApiSignUp.start({y: '100%'});
        break;
      case "landingPage":
        slideAnimationApi.start({x: '100%'});
        break;
      case "signup": 
      slideAnimationApiSignUp.start({y: '0%', config: config.wobbly});
        break;
    }
  }, [currentPage]);

  return ( 
    mounted &&
    <main
      className={css`
        ${StyledLandingPageMobile(theme, currentPage)}
      `}
    >
      <animated.div
        data-testid="mobile-landing-page"
        className="mobile-landing-page"
        style={{
          ...springVertical
        }}
      >
        <section
          className="landing-page-section-1"
        >
          <Image priority src="logo.svg" fill alt="Site logo" />
        </section>
        <section
          className="landing-page-section-2"
        >
          <p>Track and manage your reading journey.</p>
          <p>
            Easily registering and keeping record of the books you've enjoyed!
          </p>
        </section>
        <section
          className="landing-page-section-3"
        >
          <Image priority src="blob1.svg" fill alt="blob image" />
          <div
            className="section-3-lottie-animation-div"
          >
            <LottieAnimation
              animationData={animationData}
              config={{ height: '300px', width: '300px'}}
            />
          </div>
          <div
            className="section-3-arrow-button-div"
          >
            <Button
              data-testid="right-arrow-button"
              className="arrow-button"
              onClick={() => {
                setCurrentPage('login');
              }}
            >
              <ArrowRightAltIcon/>
            </Button>
          </div>
        </section>
      </animated.div>
      <animated.section
      data-testid="mobile-login-form"
        className="mobile-login-form"
        style={{
          ...slideAnimationStyles
        }}
      >
        <div
          className="mobile-login-form-div"
        >
          <section
            className="mobile-login-section-1"
          >
            <Image priority src="logo.svg" fill alt="Site logo" />
          </section>
          <LoginForm setCurrentPage={setCurrentPage}/>
          <Button
          data-testid="left-arrow-button"
            className="reverse-arrow-button"
            onClick={() => {
              setCurrentPage('landingPage');
            }}
          >
            <ArrowRightAltIcon/>
          </Button>
        </div>
      </animated.section>
      <animated.section 
        className="mobile-signup-form"
        style={{...slideAnimationStylesSignUp}}
      >
        <div
          className="mobile-login-form-div"
        >
          <section
            className="mobile-login-section-1"
          >
            <Image priority src="logo.svg" fill alt="Site logo" />
          </section>
          <SignUpForm setCurrentPage={setCurrentPage}/>
          <Button
            data-testid="up-arrow-button"
            className="up-arrow-bottom"
            onClick={() => {
              setCurrentPage('login');
            }}
          >
            <ArrowRightAltIcon/>
          </Button>
        </div>
        
      </animated.section>
    </main>
  );
}

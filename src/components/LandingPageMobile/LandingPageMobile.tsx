"use client";

import { useTheme } from "@mui/material";
import { css } from '@emotion/css'
import Image from "next/image";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import animationData from "../../../public/bookAnimation.json";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LoginForm from "../LoginForm/LoginForm";
import { StyledLandingPageMobile } from "./styles";
import { animated, useSpring, config } from '@react-spring/web'

export default function Test() {
  const theme = useTheme();
  const test = true;
  const [slideAnimationStyles, slideAnimationApi] = useSpring(() => ({
    x: '100%',
  }))
  return (
    <main
      className={css`
        ${StyledLandingPageMobile(theme, slideAnimationStyles)}
      `}
    >
      <div
        className="mobile-landing-page"
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
              config={{ height: 300, width: 300 }}
            />
          </div>
          <div
            className="section-3-arrow-button-div"
          >
            <button
              className="arrow-button"
              onClick={() => {
                slideAnimationApi.start({x: '0%', config: config.wobbly});
              }}
            >
              <ArrowRightAltIcon/>
            </button>
          </div>
        </section>
      </div>
      <animated.section
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
          <LoginForm />
          <button
            className="reverse-arrow-button"
            onClick={() => {
              slideAnimationApi.start({x: '100%'})
            }}
          >
            <ArrowRightAltIcon/>
          </button>
        </div>
      </animated.section>
    </main>
  );
}

"use client";

import { useTheme } from "@mui/material";
import { css } from '@emotion/css'
import Image from "next/image";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import animationData from "../../../public/bookAnimation.json";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Test() {
  const theme = useTheme();
  return (
    <main
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <div
        className="mobile-landing-page"
        style={{
          minWidth: "375px",
          maxHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <section
          style={{ position: "relative", width: "100vw", height: "180px" }}
        >
          <Image priority src="logo.svg" fill alt="Site logo" />
        </section>
        <section
          style={{
            textAlign: "center",
          }}
        >
          <p>Track and manage your reading journey.</p>
          <p>
            Easily registering and keeping record of the books you've enjoyed!
          </p>
        </section>
        <section
          style={{ position: "relative", width: "100vw", height: "500px" }}
        >
          <Image priority src="blob1.svg" fill alt="blob image" />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <LottieAnimation
              animationData={animationData}
              config={{ height: 300, width: 300 }}
            />
          </div>
          <div
          className={css`
            display: flex;
            width: 100%;
            height: 100%;
            align-items: flex-end;
            justify-content: center;
            padding-bottom: 16px;
          `}>
            <div
              className={css`
                background-color: ${theme.palette.background.default};
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                width: 70px;
                height: 70px;
                border-radius: 50%;
                transition: transform .3s;
                cursor: pointer;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                &:hover{
                  transform: scale(1.1);
                }
              `}
            >
              <ArrowRightAltIcon/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

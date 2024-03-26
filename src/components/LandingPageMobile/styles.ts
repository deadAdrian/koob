import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export function StyledLandingPageMobile (
    theme: Theme,
    landingPageOrLogin: 'landingPage' | 'login'
) {
    return css`
        display: flex; 
        width: 100vw; 
        justify-content: center; 
        position: relative; 
        overflow: hidden;

        .mobile-landing-page{
            min-width: 375px;
            max-height: 100dvh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            transition: opacity .3s;
            opacity: ${landingPageOrLogin === 'login' ? 0 : 1};

            .landing-page-section-1{
                position: relative;
                width: 100vw;
                height: 180px;
            }

            .landing-page-section-2{
                text-align: center;
            }

            .landing-page-section-3{
                position: relative;
                width: 100vw;
                height: 500px;

                .section-3-lottie-animation-div{
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .section-3-arrow-button-div{
                    display: flex;
                    width: 100%;
                    height: 100%;
                    align-items: flex-end;
                    justify-content: center;
                    padding-bottom: 16px;

                    .arrow-button{
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
                        border: none;
                        color: ${theme.palette.primary.main};
                        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                        &:hover{
                        transform: scale(1.1);
                        }
                    }
                }
            }
        }

        .mobile-login-form{
            display: flex;
            width: 100vw;
            height: 100dvh;
            justify-content: center;
            position: absolute;
            background-color: ${theme.palette.background.default};
            transition: opacity .3s;
            opacity: ${landingPageOrLogin === 'login' ? 1 : 0};

            .mobile-login-form-div{
                min-width: 375px;
                max-height: 100dvh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .mobile-login-section-1{
                    position: relative;
                    width: 100vw;
                    height: 180px;
                }

                .reverse-arrow-button{
                    background-color: ${theme.palette.secondary.main};
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    transition: transform .3s;
                    cursor: pointer;
                    border: none;
                    transform: rotate(180deg);
                    margin-top: 20px;
                    color: ${theme.palette.primary.main};
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                    &:hover{
                        transform: scale(1.1) rotate(180deg);
                    }
                }
            }
        }
    `
} 
import { css } from "@emotion/react";

export default function StyledHomepage(){
    return css`
        display: flex;
        flex-direction: column;
        height: 100dvh;
        justify-content: center;
        align-items: center;


        .app-fab{
            position: absolute;
            bottom: 76px;
            right: 16px;
        }
    `
}
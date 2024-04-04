"use client";

import Image from "next/image";
import StyledHome from "./styles";
import { css } from '@emotion/css';

export default function Home(){
    return (
        <div className={css`${StyledHome()}`}>
            <Image priority src="/homepageBooks.png" alt="blob image" width={300} height={300}/>
            <p>Add new books to your library!</p>
        </div>
    )
}
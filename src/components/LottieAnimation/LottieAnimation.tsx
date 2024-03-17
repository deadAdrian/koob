"use client"
import Lottie from 'react-lottie';

type Props = {
    animationData: any,
    config: {
        height: number | string,
        width: number | string
    }
}

export default function LottieAnimation({animationData, config}: Readonly<Props>){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Lottie 
          options={defaultOptions}
          width={config.width}
          height={config.height}
        />
    )
}
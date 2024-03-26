"use client"
import { Lottie } from '@crello/react-lottie'

type Props = {
    animationData: any,
    config: {
        height: string,
        width: string
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
          config={defaultOptions}
          width={config.width}
          height={config.height}
        />
    )
}
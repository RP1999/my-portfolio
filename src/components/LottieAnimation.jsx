import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = ({
    src = "https://lottie.host/2ccdb0fd-5ead-4895-a9b9-6977f994c370/CVFF0p2TyI.lottie",
    className = "w-[500px] h-[500px]"
}) => {
    return (
        <div className={`${className} relative z-10 hover:scale-105 transition-transform duration-300`}>
            <DotLottieReact
                src={src}
                loop
                autoplay
            />
        </div>
    );
};

export default LottieAnimation;

import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FileText } from 'lucide-react';

const SpaceTraveler = () => {
    const [status, setStatus] = useState('idle'); // idle, extracting
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3, // Show when 30% of the content is visible
            }
        );

        const aboutSection = document.getElementById('about-content');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    const handleClick = () => {
        if (status !== 'idle') return;

        setStatus('extracting');

        // Trigger download after extraction animation
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = `${import.meta.env.BASE_URL}resume.pdf?v=${new Date().getTime()}`;
            link.download = 'Ranidu_Pramod_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Reset
            setTimeout(() => {
                setStatus('idle');
            }, 4000);
        }, 1000);
    };

    return (
        <div
            className={`fixed inset-0 z-40 overflow-hidden transition-opacity duration-500 pointer-events-none ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {/* Top-Right Astronaut */}
            <div
                onClick={handleClick}
                className={`absolute transition-transform hover:scale-105 duration-500 cursor-pointer ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                style={{
                    top: '10%',
                    right: '5%',
                    width: '250px',
                    height: '250px'
                }}
            >
                <div className="relative group w-full h-full">
                    {/* Thought Bubble */}
                    {status === 'idle' && (
                        <div className="absolute top-10 -left-20 bg-black/90 text-orange-500 px-5 py-3 rounded-2xl border-2 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)] z-50 animate-pulse">
                            <p className="font-bold text-sm whitespace-nowrap">Looking for CV?</p>

                            {/* Thought Dots */}
                            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-black border-2 border-orange-500 rounded-full"></div>
                            <div className="absolute -bottom-5 right-2 w-2 h-2 bg-black border-2 border-orange-500 rounded-full"></div>
                        </div>
                    )}

                    <DotLottieReact
                        src="https://lottie.host/e93a6e09-87e9-4fc1-b420-8017dc3e1349/KkEOSeCJrO.lottie"
                        loop
                        autoplay
                        style={{ width: '100%', height: '100%' }}
                    />

                    {/* CV Paper Animation */}
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-orange-500 p-3 rounded-lg shadow-xl transition-all duration-1000 ${status === 'extracting' ? 'opacity-100 scale-100 translate-y-32' : 'opacity-0 scale-0'
                            }`}
                    >
                        <FileText className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpaceTraveler;

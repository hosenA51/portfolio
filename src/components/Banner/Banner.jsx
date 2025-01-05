import Lottie from 'lottie-react';
import imageBgJson from "../../assets/imageBg.json"
import myImage from "../../assets/hosen.png"
import React from 'react';

const Banner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full lg:w-11/12">
                <div className="flex flex-col md:flex-row">
                    {/* Left Side */}
                    <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <h4 className='text-xl mb-4 text-[#FF6B00] font-semibold '>Front-End Developer</h4>
                        <h1 className="text-4xl font-bold text-white mb-4">Hosen Ahmed</h1>
                        <p className="text-gray-400 mb-6">
                            "Hi, I am a Front-End Developer skilled in crafting responsive and dynamic web applications using React, JavaScript, and modern tools like Tailwind CSS and Daisy UI. I integrate secure authentication with Firebase and build scalable server-side solutions using MongoDB and Express.js. Let's create something amazing together!"
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-orange-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.07 3.29 9.36 7.86 10.88.58.1.79-.25.79-.56v-2.01c-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.27-1.68-1.27-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.5.11-3.12 0 0 .97-.31 3.19 1.18a11.13 11.13 0 0 1 5.8 0c2.21-1.49 3.19-1.18 3.19-1.18.63 1.62.23 2.82.11 3.12.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.77 1.07.77 2.16v3.2c0 .31.21.66.8.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-orange-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.793.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.732 0 1.324-.591 1.324-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-orange-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557a9.835 9.835 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.379 4.482c-4.083-.205-7.699-2.161-10.125-5.134a4.822 4.822 0 0 0-.666 2.475 4.917 4.917 0 0 0 2.188 4.1 4.904 4.904 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.917 4.917 0 0 0 4.588 3.417 9.867 9.867 0 0 1-6.102 2.104c-.395 0-.787-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.054 0 14.002-7.497 14.002-13.986 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" />
                                </svg>
                            </a>
                        </div>
                        <a
                            href="https://docs.google.com/document/d/1XziKeILc3HeKrvFo-S_4dYtIh2fY8BfhON-YpWPLs-0/export?format=pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline text-[#FF6B00] hover:bg-[#FF6B00] rounded-lg shadow w-fit"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-1/2 flex items-center justify-center relative">
                        <Lottie
                            animationData={imageBgJson}
                            className="w-full h-full"
                        />
                        <img
                            src={myImage}
                            alt="Hosen Ahmed"
                            className="absolute w-60 h-60 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

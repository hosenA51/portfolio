import React from 'react'
import aboutMeImg from "../../assets/aboutMe.json"
import Lottie from 'lottie-react';

const AboutMe = () => {
    return (
        <section id="about" className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-center mb-8 text-orange-500">
                    About Me
                </h2>
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Side - Image */}
                    <div className="lg:w-1/2">
                    
                        <Lottie className='h-96' animationData={aboutMeImg}>
                        </Lottie>
                    </div>

                    {/* Right Side - Description */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Hi, I'm <span className="text-orange-500 font-bold">Hosen Ahmed</span>, a passionate and dedicated
                            <span className="text-orange-500 font-bold"> Front-End Developer</span>. I specialize in building
                            dynamic and user-friendly web applications using modern technologies like React, JavaScript, HTML,
                            CSS, and Tailwind CSS. My expertise includes integrating secure authentication systems with Firebase
                            and crafting scalable server-side solutions using MongoDB and Express.js.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            With a strong focus on responsive design and seamless user experience, I enjoy transforming ideas
                            into reality. I'm always eager to learn new technologies and collaborate on exciting projects that
                            make a difference.
                        </p>
                        <a
                            href="#contact"
                            className="btn btn-outline text-[#FF6B00] hover:bg-[#FF6B00] rounded-lg shadow w-fit"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

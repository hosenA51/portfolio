// SkillsSection.js
import React from 'react';
import Marquee from 'react-fast-marquee';

const Skills = () => {
    return (
        <div id="skills" className="container mx-auto p-10 bg-black">
            <h2 className="text-4xl font-bold text-center mb-8 text-orange-500">
                My Skills
            </h2>
            <Marquee pauseOnHover={true} speed={70} className=''>
                <div className='flex justify-between gap-20'>
                    <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" className='w-20' />
                    <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" className='w-20' />
                    <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" className='w-20' />
                    <img src="https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png" alt="React" className='w-20' />
                    <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" alt="Tailwind CSS" className='w-20' />
                    <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" className='w-20' />
                    <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="Firebase" className='w-20' />
                    <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" className='w-20' />
                </div>
            </Marquee>
        </div>
    );
}

export default Skills;

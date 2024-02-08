import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E in Computer Science Engineering"
            subTitle="Park College of Engineering and Technological (2020 - 2024)"
            result="8.1 CGPA"
            des="Studied CSE related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Aruna Higher Secondary School (2018 - 2020)"
            result="70.15%"
            des="Studied in this school from 11th to 12th std. HSC Subjects: Tamil, English, Maths, Physics, Chemistry, Computer Science. "
          />
          <ResumeCard
            title="Primary & Secondary School Education"
            subTitle="Govt Higher Secondary School (2005 - 2018)"
            result="78.20% "
            des="Studied in this school from  10th std. SSC Subjects: Tamil, English, Maths, Science, Social Science."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" The Complete 2023 Python Full Stack Development by Guvi "
            subTitle="Guvi - (08/09/2023 - 20/10/2023)"
            result="Online"
            des="Learn Full stack and made various project using the skills in this course. Check out my Github for project info !"
          />
          <ResumeCard
            title=" Online Python Course Completion by Guvi."
            subTitle="Guvi - (15/04/2023 - 09/05/2023)"
            result="Online"
            des="To Learn user authentication system using python and Django as Database Configurations."
          />
          <ResumeCard
            title="Full Javascript Course Completed by guvi"
            subTitle="Guvi - (21/05/2023 - 12/06/2023)"
            result="Online"
            des="Learn Advanced Concepts and Framework Like React to use Develope a Responsive Web Pages."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
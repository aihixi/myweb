import React from 'react';
import { motion } from "framer-motion";
import { Card } from 'antd';
import './Mypc.css'

import { FaLightbulb } from "react-icons/fa";
const Mypc: React.FC = () => { 
  // const mylightbulbRef = useRef<HTMLDivElement>(null);
  // const myPCscreenRef = useRef<HTMLDivElement>(null);

  // const firstlineRef = useRef<HTMLDivElement>(null);
  // const secondlineRef = useRef<HTMLDivElement>(null);
  // const thirdlineRef = useRef<HTMLDivElement>(null);
  // const fourthlineRef = useRef<HTMLDivElement>(null);
  // const fifthlineRef = useRef<HTMLDivElement>(null);
  // const sixthlineRef = useRef<HTMLDivElement>(null);
  // const seventhlineRef = useRef<HTMLDivElement>(null);
  // const eighthlineRef = useRef<HTMLDivElement>(null);
  // const ninthlineRef = useRef<HTMLDivElement>(null);

  // const refs = [
  //   mylightbulbRef,
  //   myPCscreenRef,
  //   firstlineRef,
  //   secondlineRef,
  //   thirdlineRef,
  //   fourthlineRef,
  //   fifthlineRef,
  //   sixthlineRef,
  //   seventhlineRef,
  //   eighthlineRef,
  //   ninthlineRef,
  // ];

  // const setAnimationState = (state: "running" | "paused") => {
  //   refs.forEach(r => {
  //     if (r.current) r.current.style.animationPlayState = state;
  //   });
  // };

  // const handlePCEnter = () => {
  //   console.log("enter");
  // };

  // const handlePCLeave = () => {
  //   if (firstlineRef.current) {
  //     const stopAfterLoop = () => {
        
  //       console.log("stopped");
  //       firstlineRef.current!.removeEventListener("animationiteration", stopAfterLoop);
  //     };
  //     firstlineRef.current.removeEventListener("animationiteration", stopAfterLoop);
  //     firstlineRef.current.addEventListener("animationiteration", stopAfterLoop);
  //   }
  // };

  const end1 = Math.random() * 360;
  const start1 = end1 + 360;
  const end2 = Math.random() * 360;
  const start2 = end2 + 360;
  const end3 = Math.random() * 360;
  const start3 = end3 + 360;
  const end4 = Math.random() * 360;
  const start4 = end4 + 360;
  const end5 = Math.random() * 360;
  const start5 = end5 + 360;
  const end6 = Math.random() * 360;
  const start6 = end6 + 360;
  const end7 = Math.random() * 360;
  const start7 = end7 + 360;
  const end8 = Math.random() * 360;
  const start8 = end8 + 360;
  const end9 = Math.random() * 360;
  const start9 = end9 + 360;
  const end10 = Math.random() * 360;
  const start10 = end10 + 360;
  const end11 = Math.random() * 360;
  const start11 = end11 + 360;

  return (
    <Card className='myPCcard'
      variant='borderless' 
    >
      <div style={{width: '100%'}}>
        <div className="myPC">
          <div className="mylightbulb" > 
            <div className="mylightbulbicon" >
            <FaLightbulb size={64} />
            </div>
          </div>
          <div className="myPCscreen" >
            <div className='myscreencontent'>
              <div className='firstline' />
              <div className='secondline' />
              <div className='thirdline' />
              <div className='fourthline' />
              <div className='fifthline' />
              <div className='sixthline' />
              <div className='seventhline' />
              <div className='eighthline' />
              <div className='ninthline'/>
            </div>
          </div>
          <div className="myPCkeyboard" /> 
        </div>
      </div>
        <div className='scrollcontainer'>
          <motion.h1
            animate={{ rotate: [start1, end1]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >H</motion.h1>
          <motion.h1
            animate={{ rotate: [start2, end2]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >E</motion.h1>
          <motion.h1
            animate={{ rotate: [start3, end3]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >L</motion.h1>
          <motion.h1
            animate={{ rotate: [start4, end4]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >L</motion.h1>
          <motion.h1
            animate={{ rotate: [start5, end5]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >O</motion.h1>
          <motion.h1
            animate={{ rotate: [start6, end6]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >,</motion.h1>
          <motion.h1
            animate={{ rotate: [start7, end7]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >W</motion.h1>
          <motion.h1
            animate={{ rotate: [start8, end8]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >O</motion.h1>
          <motion.h1
            animate={{ rotate: [start9, end9]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >R</motion.h1>
          <motion.h1
            animate={{ rotate: [start10, end10]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >L</motion.h1>
          <motion.h1
            animate={{ rotate: [start11, end11]  }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >D</motion.h1>
        </div>
    </Card>
  );
};

export default Mypc;
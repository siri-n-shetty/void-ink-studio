import React, {useState, useEffect} from 'react';

// importing useInView hook
import { useInView } from 'react-intersection-observer';

// react circular
import { CircularProgressbar } from 'react-circular-progressbar';

// react circular styles 
import 'react-circular-progressbar/dist/styles.css';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Skills = () => {
  // destructure useInView hook
  const {ref, inView } = useInView({
    threshold: 0.2,
  });

  // full body tattoo state
  const [fullBody, setFullBody] = useState(0);

  // safe piercing state
  const [piercing, setPiercing] = useState(0);

  // colour tattoo state
  const [fullColour, setFullColour] = useState(0);

  // temporary tattoo state
  const [temporary, setTemporary] = useState(0);

  useEffect(()=>{
    if (inView) {
      setTimeout(()=>{
        if (fullBody < 90){
          setFullBody(fullBody + 1);
        }
        if (piercing < 80){
          setPiercing(piercing + 1);
        }
        if (fullColour < 75){
          setFullColour(fullColour + 1);
        }
        if (temporary < 95){
          setTemporary(temporary + 1);
        }
      }, 50);
    }
    else {
      setFullBody(0);
      setPiercing(0);
      setFullColour(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullColour, temporary]);

  // circular progress bar styles
  const styles = {
    path: {
      stroke: '#111111'
    },
    trail: {
      stroke: '#eeeeee'
    },
    text: {
      fill: '#111111',
      fontSize: '24px'
    },
  }

  return <motion.section id="services" ref={ref} className='section font-primary' variants={fadeIn('up')} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.1}}>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
        {/* circular item with text in one div */}
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar 
            strokeWidth={1} 
            value={fullBody} 
            styles={styles} 
            text={`${fullBody}%`} 
          />

          {/* text */}
          <div className='text-center uppercase font-light tracking-[1.2px]'>
            Full Body Tattoo
          </div>
        </div>

        {/* circular item with text in one div */}
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar 
            strokeWidth={1} 
            value={piercing} 
            styles={styles} 
            text={`${piercing}%`} 
          />

          {/* text */}
          <div className='text-center uppercase font-light tracking-[1.2px]'>
            Safe Piercing
          </div>
        </div>

        {/* circular item with text in one div */}
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar 
            strokeWidth={1} 
            value={fullColour} 
            styles={styles} 
            text={`${fullColour}%`} 
          />

          {/* text */}
          <div className='text-center uppercase font-light tracking-[1.2px]'>
            Vibrant Colour Tattoo
          </div>
        </div>

        {/* circular item with text in one div */}
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar 
            strokeWidth={1} 
            value={temporary} 
            styles={styles} 
            text={`${temporary}%`} 
          />

          {/* text */}
          <div className='text-center uppercase font-light tracking-[1.2px]'>
            Temporary Tattoo
          </div>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Skills;

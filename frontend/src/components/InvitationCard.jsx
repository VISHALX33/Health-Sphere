// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function InvitationCard() {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-pink-500">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="bg-white p-8 rounded-2xl shadow-lg text-center w-96">
        
//         <motion.h1 
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="text-2xl font-bold text-gray-800">
//           You're Invited!
//         </motion.h1>
        
//         <motion.p 
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.7, duration: 0.5 }}
//           className="text-gray-600 mt-2">
//           Join us for a special event filled with joy and celebration.
//         </motion.p>
        
//         {!showDetails && (
//           <motion.button 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setShowDetails(true)}
//             className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600">
//             View Details
//           </motion.button>
//         )}
        
//         {showDetails && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold text-gray-800">Bride & Groom</h2>
//             <p className="text-gray-600">Shalini & DS Prajapati</p>
//             <h2 className="text-xl font-bold text-gray-800 mt-2">Date</h2>
//             <p className="text-gray-600">March 15, 2025</p>
//             <h2 className="text-xl font-bold text-gray-800 mt-2">Venue</h2>
//             <p className="text-gray-600">Khade Ganesh ji tample, Ganesh Nagar, Kota </p>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { div } from 'framer-motion/client';
import about from '../assets/about_image.png'

export default function InvitationCard() {
  const [showDetails, setShowDetails] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [playMusic, setPlayMusic] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const eventDate = new Date('March 15, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 23)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 6),
        minutes: Math.floor((difference / 1000 / 60) % 40),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {};
  }

  function toggleMusic() {
    setPlayMusic(!playMusic);
    const audio = document.getElementById('bg-music');
    if (playMusic) {
      audio.pause();
    } else {
      audio.play();
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-pink-500 relative">
      {showDetails && <Confetti numberOfPieces={200} />}
      <div className='grid-cols-4 grid sm:grid-cols-3'>

      <section>
        <div>
          <img src={about} alt="" />
        </div>
      </section>
      

<section>
      <audio id="bg-music" loop>
  <source src="/wedding-music.mp3" type="audio/mp3" />
</audio>

      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white p-8 rounded-2xl shadow-lg text-center w-96">
        
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl font-bold text-gray-800">
          You're Invited!
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-gray-600 mt-2">
          Join us for a special event filled with joy and celebration.
        </motion.p>
        {!showDetails && (
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowDetails(true)}
            className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600">
            View Details
          </motion.button>
        )}
        
        {showDetails && (
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Bride & Groom</h2>
            <p className="text-gray-600">Shalini & DS Prajapati</p>
            <h2 className="text-xl font-bold text-gray-800 mt-2">Date</h2>
            <p className="text-gray-600">March 15, 2025</p>
            <h2 className="text-xl font-bold text-gray-800 mt-2">Venue</h2>
            <p className="text-gray-600">Khade Ganesh Ji Temple, Ganesh Nagar, Kota</p>
            
            
            
            <button 
              onClick={toggleMusic} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md bg-gradient-to-r from-purple-400 to-pink-500 relative">
              {playMusic ? 'Pause Music' : 'Play Music'}
            </button>
          </motion.div>
          
        )}
        
      </motion.div>
      </section>

      <section>
        <div>
          <img src={about} alt="" />
        </div>
      </section>
    </div>
    </div>
  );
}

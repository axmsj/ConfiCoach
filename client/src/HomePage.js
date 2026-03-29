import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function HomePage() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  const handleStart = () => {
    setLeaving(true);
    setTimeout(() => navigate('/models'), 450);
  };

  return (
    <motion.div
      className='home-select-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: leaving ? 0.4 : 0.5, ease: 'easeInOut' }}
      style={{ alignItems: 'center' }}>
      <div className='home-bg-blob home-bg-blob-1'></div>
      <div className='home-bg-blob home-bg-blob-2'></div>

      <div
        className='home-content'
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          className='home-header'
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          style={{ marginBottom: '0' }}>
          <h1>ConfiCoach</h1>
          <p style={{ marginTop: '64px' }}>
            Your AI powered partner for building real <strong>CONFI</strong>dence.
          </p>
          <p>Practice conversations, sharpen your social skills, and show up ready.</p>
        </motion.div>

        <motion.button
          className='continue-button'
          onClick={handleStart}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          style={{ maxWidth: '220px', borderRadius: '16px', fontSize: '16px', marginTop: '64px' }}>
          Start Now
        </motion.button>
      </div>
    </motion.div>
  );
}

export default HomePage;

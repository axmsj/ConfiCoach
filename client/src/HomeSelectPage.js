import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomeSelectPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className='home-select-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <div className='home-bg-blob home-bg-blob-1'></div>
      <div className='home-bg-blob home-bg-blob-2'></div>

      <div className='home-content'>
        <motion.div
          className='home-header'
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}>
          <h1>Pick Your Model</h1>
          <p>Choose your model and build your CONFIdence.</p>
        </motion.div>

        <div className='home-options'>
          <motion.div
            className='mode-card romance-card'
            onClick={() => navigate('/romance-setup')}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}>
            <div className='mode-badge'>Popular</div>
            <div className='mode-icon'>💖</div>
            <h2>Romance</h2>
            <p>Customizable, responsive partner simulator for dating, CONFIdence, and conversation.</p>
            <span className='mode-tag'>Flirty • Dating</span>
          </motion.div>

          <motion.div
            className='mode-card interview-card'
            onClick={() => navigate('/interview-setup')}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.16 }}>
            <div className='mode-badge serious-badge'>Focused</div>
            <div className='mode-icon'>💼</div>
            <h2>Interview</h2>
            <p>Serious, polished COACHing for job interviews and strong answers.</p>
            <span className='mode-tag'>Serious • Career</span>
          </motion.div>
        </div>

        <motion.div
          className='home-footer-text'
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.22 }}>
          Pick a model to get started. You can always change it later.
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomeSelectPage;

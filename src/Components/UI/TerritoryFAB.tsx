import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPhone, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import classes from '../Styles/TerritoryFAB.module.css';

const TerritoryFAB = () => {
  const [btnOpen, setBtnOpen] = useState(false);

  const btn1 = {
    open: {
      x: -25,
      y: -60,
      opacity: 1,
      transition: { delay: 0, type: 'spring' },
    },
    closed: {
      x: 0,
      y: 0,
      opacity: 0,
      transition: { delay: 0.2, type: 'spring' },
    },
  };
  const btn2 = {
    open: {
      x: -63,
      y: -11,
      opacity: 1,
      transition: { delay: 0.2, type: 'spring' },
    },
    closed: {
      x: 0,
      y: 0,
      opacity: 0,
      transition: { delay: 0.1, type: 'spring' },
    },
  };

  return (
    <div className={classes.BtnContainer}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        animate={btnOpen ? 'open' : 'closed'}
        variants={btn1}
        className={classes.SubBtn}
      >
        <FontAwesomeIcon className={classes.SubIcon} icon={faPhone} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        animate={btnOpen ? 'open' : 'closed'}
        variants={btn2}
        className={classes.SubBtn}
      >
        <FontAwesomeIcon className={classes.SubIcon} icon={faPenAlt} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className={classes.Btn}
        onClick={() => setBtnOpen((btnOpen) => !btnOpen)}
      >
        <FontAwesomeIcon className={classes.Icon} icon={faPlus} />
      </motion.button>
    </div>
  );
};

export default TerritoryFAB;

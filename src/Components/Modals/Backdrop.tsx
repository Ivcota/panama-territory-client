import React from 'react';
import { motion } from 'framer-motion';

import styles from '../Styles/Backdrop.module.css';

interface Props {
  onClick: () => void;
}

const Backdrop: React.FC<Props> = (props) => {
  return (
    <motion.div
      className={styles.Backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={props.onClick}
    >
      {props.children}
    </motion.div>
  );
};

export default Backdrop;

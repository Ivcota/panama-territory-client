import React from 'react';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Styles/Button.module.css';

interface Props {
  onClick?: () => void;
  title: string;
  className?: string;
  icon?: any;
}

const Button: React.FC<Props> = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className={`${styles.btn} ${props.className}`}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={props.icon} />
      {props.title}
    </motion.button>
  );
};

export default Button;

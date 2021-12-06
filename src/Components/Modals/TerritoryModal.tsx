import React from 'react';
import ReactDOM from 'react-dom';

import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

import styles from '../Styles/TerritoryModal.module.css';
import Button from '../UI/Button';

interface Props {
  handleClose: () => void;
  modalOpen: boolean;
}

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      stiffness: 400,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const portalDiv = document.getElementById('modal');

const TerritoryModal: React.FC<Props> = (props) => {
  return portalDiv
    ? ReactDOM.createPortal(
        <>
          <Backdrop onClick={props.handleClose}>
            <motion.div
              className={styles.modal}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <Button title="close" onClick={props.handleClose} />
            </motion.div>
          </Backdrop>
        </>,
        portalDiv
      )
    : null;
};

export default TerritoryModal;

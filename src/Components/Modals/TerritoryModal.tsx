import React from 'react';
import ReactDOM from 'react-dom';

import { motion } from 'framer-motion';
import { TerritoryInterface } from './../../Helpers/territoryStore';

import styles from '../Styles/TerritoryModal.module.css';
import Button from '../UI/Button';
import Backdrop from './Backdrop';

interface Props {
  handleClose: () => void;
  modalOpen: boolean;
  territory: TerritoryInterface;
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
  const { name, territory_type, notes, photo } = props.territory;

  const stopClose = (e: any) => e.stopPropagation();

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
              onClick={props.handleClose}
            >
              <img
                onClick={stopClose}
                className={styles.photo}
                src={photo}
                alt=""
              />
              <div className={styles.modalContent}>
                <h2 onClick={stopClose} className={styles.title}>
                  {name}
                </h2>
                <h3 onClick={stopClose} className={styles.type}>
                  {territory_type}
                </h3>

                <p onClick={stopClose} className={styles.notes}>
                  {notes}
                </p>
                <div onClick={stopClose} className={styles.btnContainer}>
                  <Button
                    className={`${styles.btn} ${styles.close}`}
                    title="Close"
                    onClick={props.handleClose}
                  />
                  <Button
                    className={`${styles.btn} ${styles.download}`}
                    title="Download"
                  />
                </div>
              </div>
            </motion.div>
          </Backdrop>
        </>,
        portalDiv
      )
    : null;
};

export default TerritoryModal;

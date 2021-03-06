import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
  faPhone,
  faPenAlt,
  faDoorOpen,
  faDownload,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/TerritoryCard.module.css';
import { TerritoryInterface } from './../../Helpers/territoryStore';
import TerritoryModal from '../Modals/TerritoryModal';
import Button from '../UI/Button';

interface Props {
  territory: TerritoryInterface;
}

const TerritoryCard: React.FC<Props> = (props) => {
  const [iconType, setIconType] = useState(faFile);
  const [modalOpen, setModalOpen] = useState(false);
  const { id, name, territory_type } = props.territory;

  useEffect(() => {
    if (territory_type === 'phone') {
      setIconType(faPhone);
    } else if (territory_type === 'letter_writing') {
      setIconType(faPenAlt);
    } else if (territory_type === 'door_door') {
      setIconType(faDoorOpen);
    } else {
      setIconType(faFile);
    }
  }, []);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const stopOpen = (e: any) => e.stopPropagation();

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.95 }}
        key={id}
        className={styles.territoryCard}
        onClick={open}
      >
        <div className={styles.typeIconContainer}>
          <FontAwesomeIcon icon={iconType} />
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{name}</h2>
          <h3 className={styles.type}>{territory_type}</h3>
        </div>
        <div onClick={stopOpen} className={styles.btnContainer}>
          <Button icon={faTrash} className={styles.delete} />
        </div>
      </motion.div>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <TerritoryModal
            territory={props.territory}
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default TerritoryCard;

import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
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

interface Props {
  territory: TerritoryInterface;
}

const TerritoryCard: React.FC<Props> = (props) => {
  const [iconType, setIconType] = useState(faFile);
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

  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.95 }}
      key={id}
      className={styles.territoryCard}
    >
      <div className={styles.typeIconContainer}>
        <FontAwesomeIcon icon={iconType} />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{name}</h2>
        <h3 className={styles.type}>{territory_type}</h3>
      </div>
      <div className={styles.btnContainer}>
        <FontAwesomeIcon className={styles.delete} icon={faTrash} />
      </div>
    </motion.div>
  );
};

export default TerritoryCard;

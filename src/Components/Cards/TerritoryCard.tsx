import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/TerritoryCard.module.css';

interface Props {
  id: number;
  name: string;
  notes: string;
  photo: string;
  type: string;
  account: number;
}

const TerritoryCard: React.FC<Props> = (props) => {
  return (
    <div key={props.id} className={styles.territoryCard}>
      <div className={styles.typeIconContainer}>
        <FontAwesomeIcon icon={faFile} />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{props.name}</h2>
        <h3 className={styles.type}>{props.type}</h3>
      </div>
      <div className={styles.btnContainer}>
        <FontAwesomeIcon className={styles.download} icon={faDownload} />
        <FontAwesomeIcon className={styles.delete} icon={faTrash} />
      </div>
    </div>
  );
};

export default TerritoryCard;

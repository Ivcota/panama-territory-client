import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/TerritoryCard.module.css';

const TerritoryCard: React.FC = () => {
  return (
    <div className={styles.territoryCard}>
      <FontAwesomeIcon icon={faFile} />
      <h2>Territory Name</h2>
      <h3>Territory Type</h3>
      <FontAwesomeIcon icon={faDownload} />
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
};

export default TerritoryCard;

import React from 'react';
import TerritoryCard from '../Cards/TerritoryCard';

import styles from '../Styles/Territories.module.css';

const Territories: React.FC = () => {
  return (
    <div className={styles.territoryContainer}>
      <TerritoryCard />
      <TerritoryCard />
      <TerritoryCard />
      <TerritoryCard />
      <TerritoryCard />
      <TerritoryCard />
      <TerritoryCard />
      <TerritoryCard />
      <TerritoryCard />
      <TerritoryCard />
      <TerritoryCard />
    </div>
  );
};

export default Territories;

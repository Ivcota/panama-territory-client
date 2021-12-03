import React from 'react';
import TerritoryCard from '../Cards/TerritoryCard';

import styles from '../Styles/Territories.module.css';

interface Props {
  data: [];
}

const Territories: React.FC<Props> = (props) => {
  console.log(props.data);
  return (
    <div className={styles.territoryContainer}>{/* <TerritoryCard /> */}</div>
  );
};

export default Territories;

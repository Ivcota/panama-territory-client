import React from 'react';
import { TerritoryInterface } from '../../Helpers/territoryStore';
import TerritoryCard from '../Cards/TerritoryCard';

import styles from '../Styles/Territories.module.css';

interface Props {
  data: TerritoryInterface[];
}

const Territories: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.territoryContainer}>
      {data.map((territory) => {
        return <TerritoryCard territory={territory} />;
      })}
    </div>
  );
};

export default Territories;

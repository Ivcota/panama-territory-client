import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/TerritoryCard.module.css";
import { TerritoryInterface } from "./../../Helpers/territoryStore";

interface Props {
  territory: TerritoryInterface;
}

const TerritoryCard: React.FC<Props> = (props) => {
  const { id, name, territory_type } = props.territory;

  return (
    <div key={id} className={styles.territoryCard}>
      <div className={styles.typeIconContainer}>
        <FontAwesomeIcon icon={faFile} />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{name}</h2>
        <h3 className={styles.type}>{territory_type}</h3>
      </div>
      <div className={styles.btnContainer}>
        <FontAwesomeIcon className={styles.download} icon={faDownload} />
        <FontAwesomeIcon className={styles.delete} icon={faTrash} />
      </div>
    </div>
  );
};

export default TerritoryCard;

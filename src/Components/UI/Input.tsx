import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../Styles/Input.module.css";

interface Props {
  type: string;
  icon: any;
  name: string;
  placeholder: string;
  autoComplete: string;
  required: boolean;
  value?: any;
  onChange?: any;
}

const Input: React.FC<Props> = ({ onChange, value, ...props }) => {
  return (
    <div className={styles.input}>
      <FontAwesomeIcon className={styles.icon} icon={props.icon} />
      <input
        value={value}
        onChange={onChange}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        required={props.required}
      />
    </div>
  );
};

export default Input;

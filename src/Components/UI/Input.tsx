import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from '../Styles/Input.module.css';

interface Props {
  type: string;
  icon: any;
  name: string;
  label: string;
  autoComplete: string;
  required: boolean;
  iconStyle?: string;
  value?: any;
  onChange?: any;
}

const Input: React.FC<Props> = ({ onChange, value, ...props }) => {
  return (
    <div className={styles.input}>
      <input
        value={value}
        onChange={onChange}
        type={props.type}
        name={props.name}
        autoComplete={props.autoComplete}
        required={props.required}
      />
      <FontAwesomeIcon
        className={`${styles.icon} ${props.iconStyle}`}
        icon={props.icon}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

export default Input;

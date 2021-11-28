import React from 'react';

import styles from './Input.module.css';

const Input = ({
  statusDisabled,
  label,
  labelStyle,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className={styles.wrapper}>
      <label style={labelStyle} htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        disabled={statusDisabled}
        id={name}
        name={name}
        type={type}
        placeholder={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;

import React from 'react';

import styles from './Textarea.module.css';
import stylesForm from './Input.module.css';

const Textarea = ({
  label,
  labelStyle,
  name,
  value,
  onChange,
  error,
  statusDisabled,
}) => {
  return (
    <div className={styles.wrapper}>
      <label style={labelStyle} htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea
        style={{ height: '150px' }}
        disabled={statusDisabled}
        id={name}
        name={name}
        placeholder={name}
        className={stylesForm.input}
        value={value}
        onChange={onChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Textarea;

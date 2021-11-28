import React from 'react';

import styles from './CEditor.module.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/clike/clike';

import { Controlled as ControlledEditor } from 'react-codemirror2';
export default function CEditor(props) {
  const { value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={styles.editorContainer}>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className={styles.codeMirrorWrapper}
        options={{
          lineNumbers: true,
          indentWithTabs: true,
          lineWrapping: true,
          mode: 'text/x-csrc',
          theme: 'material',
        }}
      />
    </div>
  );
}

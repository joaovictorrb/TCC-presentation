import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../Activities.module.css';
import labelStyle from '../../../Forms/Input.module.css';
import selectStyle from '../../Login/Login.module.css';

import Input from '../../../Forms/Input';
import Textarea from '../../../Forms/Textarea';
import Button from '../../../Forms/Button';
import useAxios from '../../../../Hooks/useAxios';

const ExerciseNew = (props) => {
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const { request } = useAxios();

  const saveExerciseButton = useCallback(
    async function handleSubmit(event) {
      event.preventDefault();

      const response = await request('post', '/exercises/new', {
        title,
        description,
        type,
        level: difficulty,
      });

      if (response.status !== 200) {
        return alert('Somethign went wrong while trying to add a exercise.');
      }
      const id = response.data.activityId;
      navigate(`/exercises/${id}`);
      return alert('Successfully added a exercise.');
    },
    [navigate, title, description, type, difficulty, request],
  );

  return (
    <section className={styles.container}>
      <h1>New Exercise</h1>
      <div className={styles.containerBody}>
        <form onSubmit={saveExerciseButton}>
          <Input
            label="Title"
            type="text"
            name="Exercise Title"
            onChange={(data) => {
              setTitle(data.target.value);
            }}
          />

          <Textarea
            label="Exercise description"
            name="Exercise description"
            onChange={(data) => {
              setDescription(data.target.value);
            }}
          />

          <label className={labelStyle.label}>Exercise Level</label>
          <select
            className={selectStyle.selectType}
            name="Activity Difficulty"
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Hard">Hard</option>
          </select>
          <label className={labelStyle.label}>Exercise Type</label>
          <select
            className={selectStyle.selectType}
            name="Activity Type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="OpenMP">OpenMP</option>
            <option value="MPI">MPI</option>
          </select>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '1rem',
            }}
          >
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ExerciseNew;

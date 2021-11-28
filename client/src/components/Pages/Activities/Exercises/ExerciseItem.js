import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../Context/UserContext';

import Input from '../../../Forms/Input';
import Textarea from '../../../Forms/Textarea';
import styles from '../Activities.module.css';
import Button from '../../../Forms/Button';
import CEditor from '../../../EditorC/CEditor';
import useAxios from '../../../../Hooks/useAxios';

const ExerciseItem = () => {
  const [disable, setDisable] = useState(true);
  const [code, setCode] = useState('');
  const [activityData, setActivityData] = useState({
    title: '',
    description: '',
  });

  const { data } = useContext(UserContext);
  const { id } = useParams();
  const { request } = useAxios();
  const navigate = useNavigate();
  const accessLevel = data.typeUserId;

  const fetchActivityData = useCallback(
    async (id) => {
      let response = await request('get', `/exercises/${id}`, null);
      setActivityData(response.data);
    },
    [request],
  );

  useEffect(() => {
    if (id !== '') {
      fetchActivityData(id);
    }
  }, [id, fetchActivityData]);

  const saveActivity = useCallback(
    async function handleSaveActivity() {
      const response = await request('post', `/exercises/${id}`, {
        code,
      });
      if (response.status !== 200) {
        return alert('Somethign went wrong while trying to save the exercise.');
      }

      alert('Successfully realized the exercise!');
      navigate(`/exercises/${id}`);
    },
    [code, id, request, navigate],
  );

  const saveUpdate = useCallback(async () => {
    const response = await request('put', `/exercises/${id}`, {
      description: activityData.description,
      title: activityData.title,
    });

    if (response.status !== 200) {
      return alert('It wasnt possible to update activity');
    }

    setDisable(true);
    navigate(`/exercises/${id}`);
    return alert('Activity successfully updated');
  }, [id, request, navigate, activityData]);

  const handleDownloadFile = () => {
    const element = document.createElement('a');
    const file = new Blob([code], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = `exercise${id}.c`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <section className={styles.container}>
      {activityData ? (
        <>
          <h1>{activityData.title}</h1>
          <div className={styles.containerBody}>
            {!disable && (
              <Input
                label="Change tile: "
                labelStyle={{ fontWeight: 'bold' }}
                value={activityData.title}
                statusDisabled={disable}
                onChange={(e) => {
                  setActivityData(() => ({
                    title: e.target.value,
                    description: activityData.description,
                  }));
                }}
              />
            )}

            <Input
              label="Activity type: "
              labelStyle={{ fontWeight: 'bold' }}
              value={activityData.type}
              statusDisabled={true}
            />
            <Input
              label="Difficulty: "
              labelStyle={{ fontWeight: 'bold' }}
              value={activityData.level}
              statusDisabled={true}
            />
            <Textarea
              label="Activity description: "
              labelStyle={{ fontWeight: 'bold' }}
              value={activityData.description}
              statusDisabled={disable}
              onChange={(e) => {
                setActivityData(() => ({
                  description: e.target.value,
                  title: activityData.title,
                }));
              }}
            />
            <CEditor
              value={code}
              onChange={(data) => {
                setCode(data);
              }}
            />
            {accessLevel === 1 ? (
              <div className={styles.btns}>
                {disable ? (
                  <Button onClick={() => setDisable(false)}>Edit</Button>
                ) : (
                  <Button onClick={saveUpdate}>Save Alterations</Button>
                )}
                <Button onClick={handleDownloadFile}>Download File</Button>
              </div>
            ) : (
              <div className={styles.btns}>
                <Button onClick={saveActivity}>Save code</Button>
                <Button onClick={handleDownloadFile}>Download File</Button>
              </div>
            )}
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
};

export default ExerciseItem;

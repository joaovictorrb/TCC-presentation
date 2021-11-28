import React, { useCallback, useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactCodeSnippet from 'react-code-snippet';

import styles from '../Activities.module.css';

import Textarea from '../../../Forms/Textarea';
import Input from '../../../Forms/Input';
import Button from '../../../Forms/Button';
import useAxios from '../../../../Hooks/useAxios';
import { UserContext } from '../../../../Context/UserContext';

const ReviewItem = () => {
  const [disable, setDisable] = useState(true);
  let [review, setReview] = useState();
  let [reviewDescription, setReviewDescription] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const { request } = useAxios();
  const { data } = useContext(UserContext);

  const fetchActivityData = useCallback(
    async (id) => {
      const response = await request('get', `/review/${id}`, null);
      if (response.status === 200) {
        setReview(response.data[0]);
      }
    },
    [request],
  );

  useEffect(() => {
    if (id !== '') {
      fetchActivityData(id);
    }
  }, [id, fetchActivityData]);

  const saveReview = useCallback(
    async function handleSubmit(event) {
      event.preventDefault();
      const response = await request('put', `/review/${id}`, {
        reviewDescription,
      });

      if (response.status !== 200) {
        navigate(`/review/${id}`);
        return alert('Somethign went wrong while trying to save the review.');
      }
      setDisable(true);
      setReview({ reviewDescription, ...review });
      navigate(`/review/${id}`);
      return alert('Successfully reviewed a exercise.');
    },
    [navigate, reviewDescription, review, id, request],
  );

  return (
    <section className={styles.container}>
      {review ? (
        <>
          <h1>{review.title}</h1>
          <div className={styles.containerBody}>
            <Input
              label="Activity type: "
              labelStyle={{ fontWeight: 'bold' }}
              value={review.type}
              statusDisabled={true}
            />
            <Textarea
              label="Activity description: "
              labelStyle={{ fontWeight: 'bold' }}
              value={review.description}
              statusDisabled={true}
            />
            <ReactCodeSnippet lang="c" code={review.code} />
            <div className={styles.review}>
              <Textarea
                label="Review: "
                labelStyle={{ fontWeight: 'bold' }}
                value={disable ? review.reviewDescription : reviewDescription}
                statusDisabled={disable}
                onChange={(e) => {
                  setReviewDescription(e.target.value);
                }}
              />
              <div className={styles.btns}>
                {data.typeUserId === 1 ? (
                  <>
                    {disable ? (
                      <>
                        <Button onClick={() => setDisable(false)}>
                          Update Review
                        </Button>
                      </>
                    ) : (
                      <Button onClick={saveReview}>Save Alterations</Button>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ReviewItem;

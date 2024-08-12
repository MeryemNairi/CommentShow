import * as React from 'react';
import { ICommentData } from './components/Forme/IFormProps';
import {  FaEnvelope } from 'react-icons/fa';
import styles from './CommentsToggle.module.scss';

interface CommentsToggleProps {
  comments: ICommentData[];
}

const CommentsToggle: React.FC<CommentsToggleProps> = ({ comments }) => {
  const [isCommentsVisible, setIsCommentsVisible] = React.useState<boolean>(false);

  const toggleCommentsVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  return (
    <div>
      {!isCommentsVisible && (
        <div className={styles.messageIconContainer}>
          <FaEnvelope
            className={styles.messageIcon}
            onClick={toggleCommentsVisibility}
          />
        </div>
      )}
      {isCommentsVisible && (
        <div className={styles.commentsWidgetContainer}>
          <div className={styles.commentsWidget}>
            <div className={styles.commentsWidgetHeader}>
              <div className={styles.headerTitle}>
                <h3>Commentaires</h3>
                <p>Voici les derniers commentaires</p>
              </div>
              <button onClick={toggleCommentsVisibility} className={styles.closeButton}>
                X
              </button>
            </div>
            {/* Adding scrolling feature for the comments list */}
            <div className={styles.commentsListContainer}>
              <ul className={styles.commentsList}>
                {comments.map((comment, index) => (
                  <li key={index} className={styles.commentItem}>
                    <div className={styles.commentContent}>
                      <strong className={styles.commentUser}>{comment.User}</strong>
                      <div className={styles.commentDate}>{comment.date.toLocaleDateString()}</div>
                      <div className={styles.commentText}>{comment.comment}</div>
                      <div className={styles.commentEvent}>#{comment.newsNews}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsToggle;

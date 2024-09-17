import * as React from 'react';
import { IFormProps, ICommentData } from './IFormProps';
import { getComments } from './FormeService'; // Assurez-vous que le chemin d'importation est correct
import CommentsToggle from '../../CommentsToggle';
import styles from './Forme.module.scss';

export const Forme: React.FC<IFormProps> = ({ context }) => {
  const [comments, setComments] = React.useState<ICommentData[]>([]);

  React.useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const commentData = await getComments();
      setComments(commentData);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.recordsTitle}>Comments</h2>
      <CommentsToggle comments={comments} />
    </div>
  );
};

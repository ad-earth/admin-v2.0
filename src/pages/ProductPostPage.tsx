import PostForm from '../components/productpost/PostForm';
import styles from './productPostPage.module.scss';

export default function ProductPostPage() {
  return (
    <div id={styles.ProductPost}>
      <h1 className={styles.title}>상품등록</h1>
      <PostForm />
    </div>
  );
}

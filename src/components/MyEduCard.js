import { useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./Frame 2.module.css";

const MyEduCard = () => {
  const onBtnClick = useCallback(() => {
    window.open("https://myedu.it");
  }, []);

  return (
    <section className={styles.cardtest}>
      <section className={styles.cardBody}>
        <h5 className={styles.cardTitle}>Contenuti Video MyEdu</h5>
        <span className={styles.cardDescription}>
          Scopri i contenuti video di MyEdu per poter imparare divertendoti e
          lorem ipsum dolor sit amet daje roma
        </span>
        <Button
          className={styles.btn}
          color="primary"
          target="_blank"
          variant="contained"
          onClick={onBtnClick}
        >
          Scopri di più
        </Button>
      </section>
      <img className={styles.cardImgIcon} alt="" src="/card-img@1x.png" />
    </section>
  );
};

export default MyEduCard;

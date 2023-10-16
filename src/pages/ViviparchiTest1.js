import { Button, IconButton } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import styles from "./ViviparchiTest1.module.css";

const ViviparchiTest1 = () => {
  return (
    <div className={styles.viviparchiTest1}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.text}>
            <div className={styles.title}>
              <span>{`Scopri la nuova campagna `}</span>
              <span className={styles.myeduViviparchi}>MyEdu Viviparchi</span>
              <span> dedicata alle iniziative Green</span>
            </div>
            <div className={styles.subtitle}>
              Iscriviti alla newsletter e ricevi uno speciale accesso al mondo
              MyEdu
            </div>
          </div>
          <Button variant="solid" w="300.0000305175781px" colorScheme="teal">
            Scopri di più
          </Button>
        </div>
        <img className={styles.imgIcon} alt="" src="/img@2x.png" />
      </div>
      <Navbar bgColor="#4E9895" />
    </div>
  );
};

export default ViviparchiTest1;

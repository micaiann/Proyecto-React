import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "src/components/molecules/Modal/Modal.module.css";

const Product = ({ imageSource, title, price, id, addToCart }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
      document.body.style.overflow = "hidden"; // Saca el scrolleo
    } else {
      document.body.classList.remove("active-modal");
      document.body.style.overflow = "auto"; // Repone el scrolleo
    }
  }, [modal]);

  return (
    <>
      <div className="card" onClick={toggleModal}>
        <Image
          className="img"
          src={imageSource}
          alt="img"
          width={130}
          height={200}
        />
        <h1>{title}</h1>
        <h2>${price}</h2>
      </div>

      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles["modal-content"]}>
            <span className={styles["close-modal"]} onClick={toggleModal}>
              &times;
            </span>
            <Image
              className="img"
              src={imageSource}
              alt="img"
              width={260}
              height={400}
            />
            <h1>{title}</h1>
            <h2>${price}</h2>
            <button className={styles["add"]} onClick={() => addToCart(id)}>Añadir</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;


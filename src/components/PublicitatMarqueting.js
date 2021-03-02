import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PublicitatMarqueting.module.scss";
import { db } from "../fire";
import Servei from "./Servei";

const PublicitatMarqueting = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    db.collection("services")
      // .where("option.value", == "publicitat")
      .orderBy("date", "asc")
      .onSnapshot((snapshot) => {
        setServices(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            option: doc.data().option.label,
            optionTag: doc.data().option.value,
            url: doc.data().url, //linea 39 de AddItem.js
          }))
        );
      });
  }, []);

  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to={window.location.pathname}>
              <li>Publicitat i màrqueting</li>
            </Link>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Publicitat i Màrqueting</h1>
        <div className={styles.container}>
          {services.map((service) => (
            <Servei
              url={service.url}
              title={service.title}
              description={service.description}
              option={service.option}
              optionTag={service.optionTag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicitatMarqueting;

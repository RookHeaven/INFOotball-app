import {useLoaderData} from "react-router-dom";

import classNames from "classnames";

import styles from './clubPage.module.scss';
import Button from "../../components/button/Button.tsx";

function ClubPage() {
  const club = useLoaderData();

  const getColumnsStyle = () => {
    const length = club.description.length;
    let descriptionStyle = 'none';

    if (length >= 500 && length < 1500) {
      descriptionStyle = '2 500px';
    }

    if (length >= 1500) {
      descriptionStyle = '3 250px';
    }

    return descriptionStyle;
  }

  return (
    <div className={classNames(styles.club)}>
      <div className={classNames(styles.club__container)}>
        <div className={styles.club__top}>
          <img src={club.imgSrc} width='250' height='250' alt="Football club team badge."/>
          <div className={styles.club__info}>
            <h2 className={styles.club__title}>{club.title}</h2>
            <p>Formed year: <span>{club.formedYear}</span></p>
            <p>League: <span>{club.league}</span></p>
            <p>Country: <span>{club.country}</span></p>
            <p>Stadium: <span>{club.stadium}</span></p>
            <p>Stadium capacity: <span>{club.stadiumCapacity}</span></p>
            <p>Website: <a className={styles.club__link} href={`https://${club.website}`} target='_blank'>{club.website}</a></p>
          </div>
        </div>
        <div className={styles.club__bottom}>
          <p style={{columns: getColumnsStyle()}} className={styles.club__description}>{club.description}</p>
          <Button isBackButton={true}>Back to Main Page</Button>
        </div>
      </div>
    </div>
  );
}

export default ClubPage;

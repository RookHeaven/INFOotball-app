import Button from "../button/Button.tsx";

import {addToFavorite, removeFromFavorite} from "../../slices/favoriteSlice.ts";
import {useDispatch, useSelector} from "react-redux";

import styles from "../clubCard/clubCard.module.scss";

const ClubCard = ({item}) => {
  const {clubs} = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const isClubInFavorites = clubs.some(club => club.id === item.id);
  const text = isClubInFavorites
    ? 'Remove from favorites'
    : 'Add to favorites';

  const onToggleClub = (item) => {
    isClubInFavorites
      ? dispatch(removeFromFavorite(item.id))
      : dispatch(addToFavorite(item));
  }

  return (
    <li className={styles.club} key={item.id}>
      <img className={styles.club__image} width='200' height='200' src={item.imgSrc} alt="Football club team badge"/>
      <h3 className={styles.club__title}>{item.title}</h3>
      <p>Formed year: <span>{item.formedYear}</span></p>
      <p>Stadium capacity: <span>{item.stadiumCapacity}</span></p>
      <Button
        isRemoveCardButton={isClubInFavorites}
        isCardButton={true}
        onClickCardButton={() => onToggleClub(item)}
      >
        {text}
      </Button>
    </li>
  );
};

export default ClubCard;
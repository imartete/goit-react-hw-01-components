import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const listeItem = friends.map(friend => (
    <li key={friend.id} className={css.friendsItem}>
      <span
        className={css.friendStatus}
        style={{
          backgroundColor: friend.isOnline ? 'green' : 'red',
        }}
      ></span>
      <img src={friend.avatar} alt={friend.name} width="48" />
      <p>{friend.name}</p>
    </li>
  ));
  return <ul className={css.friendsList}>{listeItem}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

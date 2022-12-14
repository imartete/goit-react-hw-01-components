import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import { Profile } from './components/Profile/Profile.jsx';
import { Statistics } from './components/Statistics/Statistics.jsx';
import { FriendList } from './components/FriendList/FriendList.jsx';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        marginTop: '50px',
        marginBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

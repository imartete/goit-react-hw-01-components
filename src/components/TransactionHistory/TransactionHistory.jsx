import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const tableRaws = items.map(item => (
    <tr key={item.id}>
      <td className={css.td_type}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{tableRaws}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

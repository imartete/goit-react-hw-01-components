import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from 'services/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.statsTitle}>{title ? title : 'Your title'}</h2>
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.statsItem}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

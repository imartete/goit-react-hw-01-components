import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  const listeItem = stats.map(stat => (
    <li
      key={stat.id}
      className={css.statsItem}
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}%</span>
    </li>
  ));
  return (
    <section className={css.statistics}>
      <h2 className={css.statsTitle}>{title}</h2>
      <ul className={css.statList}>{listeItem}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

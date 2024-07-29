import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
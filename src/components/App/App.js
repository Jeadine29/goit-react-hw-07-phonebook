import React, { useEffect } from 'react'; // Make sure useEffect is imported here
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { fetchAll } from '../../redux/operations';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
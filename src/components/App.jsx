import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookTitle, ContactsTitle, Wrapper } from './App.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Wrapper>
      {isLoading && <Loader />}
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList />
    </Wrapper>
  );
};

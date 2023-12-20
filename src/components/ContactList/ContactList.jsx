import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './../../redux/operations';
import { selectError, selectFilteredContacts } from './../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <p>Please, try again.</p>}
      <ul>
        {filterContacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

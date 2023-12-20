import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Error } from 'components/Error/Error';
import { fetchContacts } from './../../redux/operations';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
} from './../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <Error />}
      <ul>
        {filterContacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </ul>
      {!error && (
        <p>
          You have {contacts.length} contacts. You filtered
          {filterContacts.length} contacts.
        </p>
      )}
    </>
  );
};

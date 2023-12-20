import { useDispatch } from 'react-redux';
import { ButtonDelete, Item } from './ContactItem.styled';
import { deleteContact } from './../../redux/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <Item>
      {contact.name}: {contact.phone}
      <ButtonDelete type="button" onClick={onDeleteContact}>
        Delete
      </ButtonDelete>
    </Item>
  );
};

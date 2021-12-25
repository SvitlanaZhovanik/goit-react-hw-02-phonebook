import { List } from './ContactsList.styled';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} />;
      })}
    </List>
  );
};
ContactsList.propTypes = PropTypes.array.isRequired;
export default ContactsList;

import PropTypes from 'prop-types';
import { FcCellPhone } from 'react-icons/fc';
import { Item, Name } from './ContactItem.styled';

const ContactItem = ({ name, number }) => {
  return (
    <Item>
      <FcCellPhone /> <Name>{name}</Name>: {number}
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;

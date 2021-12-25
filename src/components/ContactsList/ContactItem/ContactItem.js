import PropTypes from 'prop-types';
import { FcCellPhone, FcEmptyTrash } from 'react-icons/fc';
import { Item, Name, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item>
      <FcCellPhone size="22px" /> <Name>{name}</Name>: {number}
      <Button onClick={() => onClick(id)}>
        <FcEmptyTrash size="22px" />
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactItem;

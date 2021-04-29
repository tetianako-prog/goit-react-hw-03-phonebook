import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <>
      {contactList.map(item => (
        <ContactItem
          key={item.id}
          info={item}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

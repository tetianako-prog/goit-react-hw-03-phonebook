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
    PropTypes.objectOf(PropTypes.string).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

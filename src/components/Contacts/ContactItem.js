import React from 'react';
import './ContactItem.scss';

const ContactItem = ({ info, onDeleteContact }) => {
  return (
    <li className="ContactItem">
      {info.name}: {info.number}
      <button onClick={() => onDeleteContact(info.id)}>Delete</button>
    </li>
  );
};

export default ContactItem;

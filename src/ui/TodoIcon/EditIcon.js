import React from 'react';
import { TodoIcon } from './';

function EditIcon({ onEdit }) {
  return (
    <TodoIcon
      type="edit"
      color="#1B1717"
      onClick={onEdit}
    />
  );
}

export { EditIcon };

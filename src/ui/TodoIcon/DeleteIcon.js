import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="#1B1717"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };

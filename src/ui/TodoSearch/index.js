import React from 'react';
import './TodoSearch.css';
import { useSearchParams } from 'react-router-dom';

function TodoSearch({ setSearchValue, loading }) {
  //Initializes params value
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsValue = searchParams.get('search')
  //se le manda el valor del target para que reciba especificamente el contenido de value
  const onSearchValueChange = ({ target: { value } }) => {
    console.log(value);
    setSearchValue(value);
    setSearchParams({ search: value })
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Wawawa, wiwiwi"
      //?? works only for null and undefined, it returns ''
      value={paramsValue ?? ''}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };

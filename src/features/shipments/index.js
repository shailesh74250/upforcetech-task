import React, { useState, useContext } from 'react';
import './style.scss';
import ListContext from '../../context';
import Table from '../../components/Table';
import Searchbox from '../../components/Inputbox';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Pagination from '../../components/Pagination';

function List() {
  const [searchValue, setSearchValue] = useState('');
  const [previousDisable, setPreviousDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(6);
  const { state, dispatch } = useContext(ListContext);

  const header = [
    'Id',
    'Name',
    'Cargo',
    'Mode',
    'Type',
    'Destination',
    'origin',
    'services',
    'total',
    'status',
    'userId',
  ];
  const body = state.shipments.slice(previous, next);

  const handlePrevious = () => {
    if (previous > 0) {
      setPrevious(previous - 6);
      setNext(next - 6);
      setNextDisable(false);
    } else if (previous === 0) {
      setPreviousDisable(true);
      setNextDisable(false);
    }
  };
  const handleNext = () => {
    if (next < state.shipments.length) {
      setNext(next + 6);
      setPrevious(previous + 6);
      setPreviousDisable(false);
    } else if (next === state.shipments.length || previous < 0) {
      setNextDisable(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEARCH_SHIPMENTS',
      payload: searchValue,
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Label labelValue="Search: " />
          <Searchbox type="text" name="search" setValue={setSearchValue} />
          <Button type="submit" label="Search" />
        </div>
      </form>
      <Table headerData={header} bodyData={body} />
      <Pagination
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        previousDisable={previousDisable}
        nextDisable={nextDisable}
      />
    </div>
  );
}

export default List;

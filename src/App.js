import React, { useContext, useReducer, useState, useEffect } from 'react';
import ShipmentContext from './context';
import shipmentReducer from './context/reducer';

import DisplayList from './features/shipments';
import JsonFile from './store/data.json';

function App() {
  const initialState = useContext(ShipmentContext);
  const [state, dispatch] = useReducer(shipmentReducer, initialState);
  const savedShipments = JsonFile;

  useEffect(() => {
    dispatch({
      type: 'GET_SHIPMENTS',
      payload: savedShipments,
    });
  }, [savedShipments]);

  return (
    <ShipmentContext.Provider value={{ state, dispatch }}>
      <DisplayList />
    </ShipmentContext.Provider>
  );
}

export default App;

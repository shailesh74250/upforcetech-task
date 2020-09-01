import React from 'react';
import './table.scss';

function Tabel({ headerData, bodyData, toggleData, toggle }) {
  const header = headerData.map((data, index) => {
    return (
      <th key={index}>
        <a href="#">{data}</a>
      </th>
    );
  });
  const body =
    bodyData.length > 0 ? (
      bodyData.map((data, index) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>
              {data.cargo.map((cargoData, cargoIndex) => {
                return (
                  <>
                    <p key={cargoIndex}>
                      <span>{cargoData.type}</span>
                      <span>{cargoData.description}</span>
                      <span>{cargoData.volume}</span>
                    </p>
                  </>
                );
              })}
            </td>
            <td>{data.mode}</td>
            <td>{data.type}</td>
            <td>{data.destination}</td>
            <td>{data.origin}</td>
            <td>
              {data.services.map((serviceData, serviceIndex) => {
                return (
                  <>
                    <p key={serviceIndex}>
                      <span>{serviceData.type}</span>
                      <span>{serviceData.value}</span>
                    </p>
                  </>
                );
              })}
            </td>
            <td>{data.total}</td>
            <td>{data.status}</td>
            <td>{data.userId}</td>
          </tr>
        );
      })
    ) : (
      <span className="no-data-found">No Data Found!</span>
    );

  return (
    <table>
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}

export default Tabel;

import React, { useState, useEffect } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import links from '../../links';
function Tableresult(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch(links.mainDataLink)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {data ? (
        <>
          <div
            className='ag-theme-alpine'
            style={{ height: 400, width: '100%' }}
          >
            <AgGridReact rowData={data}>
              <AgGridColumn
                headerName='Date'
                cellRenderer={(data) => {
                  console.log(data.data.date);

                  return <>{data.data.date}</>;
                }}
              />
              <AgGridColumn
                headerName='disawar'
                cellRenderer={(data) => {
                  console.log(data.data.data.disawar);

                  return <>{data.data.data.disawar}</>;
                }}
              />
              <AgGridColumn
                headerName='faridabad'
                cellRenderer={(data) => {
                  console.log(data.data.data.faridabad);

                  return <>{data.data.data.faridabad}</>;
                }}
              />
              <AgGridColumn
                headerName='ghaziabad'
                cellRenderer={(data) => {
                  console.log(data.data.data);

                  return <>{data.data.data.ghaziabad}</>;
                }}
              />
              <AgGridColumn
                headerName='ghazipur_bazar'
                cellRenderer={(data) => {
                  console.log(data.data.data.ghazipur_bazar);

                  return <>{data.data.data.ghazipur_bazar}</>;
                }}
              />
              <AgGridColumn
                headerName='gali'
                cellRenderer={(data) => {
                  console.log(data.data.data.gali);

                  return <>{data.data.data.gali}</>;
                }}
              />
            </AgGridReact>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default Tableresult;

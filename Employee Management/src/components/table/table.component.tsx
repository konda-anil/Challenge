import React from 'react';
import { TableActionType, TableProps } from './table.types';

export const Table = ({
  data,
  header,
  actionHandler
}: TableProps) => {
  return (<table className="table">
    <thead>
      <tr>
        { header && header.map((h, index) => <th key={index} scope="col">{ h.name }</th>) }
      </tr>
    </thead>
    <tbody>
      {
        data && data.map((row, i) => {
          return (<tr key={i}>
            { header.map((h, j) => {
                switch(h.propName) {
                  case TableActionType.ModalEdit:
                  case TableActionType.Edit:
                    return (<td key={j}>
                      <button 
                        onClick={() => actionHandler && actionHandler(row, h.propName as TableActionType)}
                        type="button"
                        className="btn btn-primary btn-sm"
                      >
                        {h.propName}
                      </button>
                    </td>)
                  default: 
                    return <td key={j}>{row[h.propName]}</td>
                }
              }) 
            }
          </tr>)
        })
      }
    </tbody>
  </table>);
}
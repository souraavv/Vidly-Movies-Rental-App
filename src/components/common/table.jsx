import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = ({ sortColumn, onSort, columns, data }) => {
  return (
    <table className="table table-striped">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      ></TableHeader>

      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default Table;

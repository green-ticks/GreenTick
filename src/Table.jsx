import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// import "../css/Table.css";
// import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

class Table extends Component {
  CellFormatter(cell, row) {
    return (
      <div>
        <a
          href={row.link}
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cell}
        </a>
      </div>
    );
  }
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} bordered={false}>
          <TableHeaderColumn
            isKey
            dataField="name"
            dataAlign="center"
            dataFormat={this.CellFormatter}
            width="34%"
            thStyle={{ color: "#011a32", backgroundColor: "#64958f" }}
            tdStyle={{ color: "white", textAlign: "center" }}
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="date"
            dataAlign="center"
            width="33%"
            thStyle={{ color: "#011a32", backgroundColor: "#64958f" }}
            tdStyle={{ color: "white" }}
          >
            Date
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="time"
            dataAlign="center"
            width="33%"
            thStyle={{ color: "#011a32", backgroundColor: "#64958f" }}
            tdStyle={{ color: "white" }}
          >
            Time
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;

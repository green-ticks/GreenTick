import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// import "../css/Table.css";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

class Table1 extends Component {
  CellFormatter(cell, row) {
    return (
      <div style={{ backgroundColor: "#EAE4E4" }}>
        <a
          href={row.link}
          style={{ color: "black", backgroundColor: "#EAE4E4" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cell}
        </a>
      </div>
    );
  }
  rowStyleFormat(row, rowIdx) {
    return { backgroundColor: "#EAE4E4" };
  }
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} trStyle={this.rowStyleFormat}>
          <TableHeaderColumn
            isKey
            dataField="num"
            dataAlign="center"
            width="10%"
            thStyle={{ color: "white", backgroundColor: "#27496d" }}
            tdStyle={{ color: "black", textAlign: "center" }}
          >
            S.No.
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="name"
            dataAlign="center"
            dataFormat={this.CellFormatter}
            width="70%"
            thStyle={{ color: "white", backgroundColor: "#27496d" }}
            tdStyle={{ color: "black", textAlign: "center" }}
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="platform"
            dataAlign="center"
            thStyle={{ color: "white", backgroundColor: "#27496d" }}
            tdStyle={{ color: "black", textAlign: "center" }}
          >
            Platform
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table1;

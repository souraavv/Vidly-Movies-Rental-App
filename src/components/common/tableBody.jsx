import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  state = {};

  renderCell = (item, column) => {
    if (column.content) return column.content(item); // for like and delete we return this
    return _.get(item, column.path); // for other data: we return this
  };

  createKey = (item, column) => {
    return item._id + (column.key || column.path); // becuase some have key and other don't ( columns )
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

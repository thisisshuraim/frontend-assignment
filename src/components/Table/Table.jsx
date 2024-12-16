import "./Table.css";
import { safelyGetValueFromObject } from "../../utils";

const Table = ({ itemKeys, items, itemLabels }) => {
  const getKey = (prefix, key, i) => prefix + "_" + key + "_" + i;

  const getTableHeaders = () =>
    itemKeys.map((key, i) => (
      <th key={getKey("header", key, i)}>
        {safelyGetValueFromObject(key, "", itemLabels)}
      </th>
    ));

  const getTableData = (i, key, item) => (
    <td
      key={getKey("key", key, i)}
      data-column={safelyGetValueFromObject(key, "", itemLabels)}
    >
      {safelyGetValueFromObject(key, "", item)}
    </td>
  );

  const getTableRows = () =>
    items.map((item, i) => (
      <tr key={getKey("row", safelyGetValueFromObject("key", i, item), i)}>
        {itemKeys.map((key, j) => getTableData(j, key, item))}
      </tr>
    ));

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>{getTableHeaders()}</tr>
        </thead>
        <tbody>{getTableRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
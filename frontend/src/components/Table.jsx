const Table = ({ data }) => {
  return (
    <table className="w-full bg-white shadow-md rounded-lg">
      <thead>
        <tr className="bg-gray-200">
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="p-2">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-t">
            {Object.values(row).map((value, idx) => (
              <td key={idx} className="p-2 text-center">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

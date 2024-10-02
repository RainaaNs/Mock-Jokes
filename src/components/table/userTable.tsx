import React, { useState } from "react";
import { userData, usersRow } from "./data";
import CustomTable from "./CustomTable";
import { usersColumns } from "./columns";

const UserTable = () => {
  const [filterText, setFilterText] = useState("");
  const [data, setData] = useState<usersRow[]>(userData);

  // Filter the data based on the search input
  const filteredData = data.filter((item) =>
    item.username.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <CustomTable<usersRow>
      columns={usersColumns}
      data={filteredData}
      filterText={filterText}
      handleFilter={(e) => setFilterText(e.target.value)}
      title="Users"
      searchPlaceholder="Search jokes..."
      addButtonLabel="Add Joke"
      //   onAddButtonClick={handleAddJoke}
    />
  );
};

export default UserTable;

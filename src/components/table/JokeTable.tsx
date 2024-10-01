// src/components/JokeTable.tsx
import React, { useState } from 'react';
import CustomTable from './CustomTable'; // Reusable component
import { jokeColumns } from './columns'; // Import joke-specific columns
import { jokeData, JokeRow } from './data'; // Import joke-specific data

const JokeTable = () => {
  const [filterText, setFilterText] = useState('');
  const [data, setData] = useState<JokeRow[]>(jokeData);

  

  // Filter the data based on the search input
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase()) ||
      item.content.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleAddJoke = () => {
    alert('Add new joke functionality');
  };


  return (
    <CustomTable<JokeRow>
      columns={jokeColumns}
      data={filteredData}
      filterText={filterText}
      handleFilter={(e) => setFilterText(e.target.value)}
      title="Manage"
      searchPlaceholder="Search jokes..."
      addButtonLabel="Add Joke"
      onAddButtonClick={handleAddJoke}
    />
  );
};

export default JokeTable;

import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable"; // Reusable component
import { jokeColumns } from "./columns"; // Import joke-specific columns
import AddModal from "../AddModal";
import DeleteModal from "../DeleteModal";
import { Joke, useFetchJokes } from "../hooks/usersQL";

const JokeTable = () => {
  const { jokes, loading, refetch } = useFetchJokes();

  const [filterText, setFilterText] = useState("");
  const [data, 
    // setData

  ] = useState<Joke[]>(jokes);
  const [filteredData, setFilteredData] = useState<Joke[]>(jokes);
  const [selectedJoke, setSelectedJoke] = useState<Joke | null>(null);

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const openAddModal = () => setIsAddModalVisible(true);
  const closeAddModal = () => setIsAddModalVisible(false);

  const openDeleteModal = () => setIsDeleteModalVisible(true);
  const closeDeleteModal = () => setIsDeleteModalVisible(false);

  const openUpdateModal = (row: Joke) => {
    setSelectedJoke(row);
    setIsUpdateModalVisible(true);
  };
  const closeUpdateModal = () => {
    refetch();
    setSelectedJoke(null);
    setIsUpdateModalVisible(false);
  };

  const columns = jokeColumns({
    openDeleteModal,
    openUpdateModal,
  });

  // useEffect(() => {
  //   if (!loading && jokes) {
  //     setData(jokes);
  //   }
  // }, [jokes, loading]);

  useEffect(() => {
    setFilteredData(
      data.filter(
        (item) =>
          item.title.toLowerCase().includes(filterText.toLowerCase()) ||
          item.content.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [data, filterText]);

  if (loading)
    return (
      <p className="h-screen flex items-center justify-center w-full">
        Fetching jokes please....
      </p>
    );
  return (
    <div className="h-screen">
      <CustomTable<Joke>
        columns={columns}
        data={filteredData}
        filterText={filterText}
        handleFilter={(e) => setFilterText(e.target.value)}
        title="Manage"
        searchPlaceholder="Search jokes..."
        addButtonLabel="Add Joke"
        onAddButtonClick={openAddModal}
      />
      <AddModal isVisible={isAddModalVisible} onClose={closeAddModal} />
      <DeleteModal
        isVisible={isDeleteModalVisible}
        onClose={closeDeleteModal}
      />
      (
      {selectedJoke && (
        <AddModal
          isVisible={isUpdateModalVisible}
          onClose={closeUpdateModal}
          joke={selectedJoke}
        />
      )}
      )
    </div>
  );
};

export default JokeTable;

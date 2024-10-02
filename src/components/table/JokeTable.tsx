import React, { useState } from "react";
import CustomTable from "./CustomTable"; // Reusable component
import { jokeColumns } from "./columns"; // Import joke-specific columns
import { jokeData, JokeRow } from "./data"; // Import joke-specific data
import AddModal from "../AddModal";
import DeleteModal from "../DeleteModal";
import UpdateModal from "../UpdateModal";

const JokeTable = () => {
  const [filterText, setFilterText] = useState("");
  const [data, setData] = useState<JokeRow[]>(jokeData);

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const openAddModal = () => setIsAddModalVisible(true);
  const closeAddModal = () => setIsAddModalVisible(false);

  const openDeleteModal = () => setIsDeleteModalVisible(true);
  const closeDeleteModal = () => setIsDeleteModalVisible(false);

  const openUpdateModal = () => setIsUpdateModalVisible(true);
  const closeUpdateModal = () => setIsUpdateModalVisible(false);


  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase()) ||
      item.content.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = jokeColumns({
    openDeleteModal,
    openUpdateModal,
  });

  return (
    <div className="h-screen">
      <CustomTable<JokeRow>
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
      <DeleteModal isVisible={isDeleteModalVisible} onClose={closeDeleteModal} />
      <UpdateModal isVisible={isUpdateModalVisible} onClose={closeUpdateModal} />
    </div>
  );
};

export default JokeTable;

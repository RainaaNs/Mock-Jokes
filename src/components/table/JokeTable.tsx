import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable"; // Reusable component
import { jokeColumns } from "./columns"; // Import joke-specific columns
import AddModal from "../AddModal";
import DeleteModal from "../DeleteModal";
import { Joke, useFetchJokes, useDeleteJoke } from "../hooks/usersQL";

const JokeTable = () => {
  const { jokes, loading, refetch } = useFetchJokes();
  const [selectedJokeId, setSelectedJokeId] = useState<string>("");
  const { removeJoke, loading: deleteLoading } = useDeleteJoke(selectedJokeId);
  console.log("Jokes", jokes);

  const [filterText, setFilterText] = useState("");

  const [filteredData, setFilteredData] = useState<Joke[]>([]);
  const [selectedJoke, setSelectedJoke] = useState<Joke | null>(null);

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const openAddModal = () => setIsAddModalVisible(true);
  const closeAddModal = () => {
    refetch();
    setIsAddModalVisible(false);
  };

  const openDeleteModal = (joke: Joke) => {
    setSelectedJoke(joke);
    setSelectedJokeId(joke.id);
    setIsDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setSelectedJoke(null);
    setSelectedJokeId("");
    setIsDeleteModalVisible(false);
  };

  const openUpdateModal = (row: Joke) => {
    setSelectedJoke(row);
    setIsUpdateModalVisible(true);
  };

  const closeUpdateModal = () => {
    refetch();
    setSelectedJoke(null);
    setIsUpdateModalVisible(false);
  };

  const handleDelete = async () => {
    if (selectedJoke) {
      try {
        await removeJoke();
        await refetch();
        closeDeleteModal();
      } catch (error) {
        console.error("Failed to delete joke:", error);
      }
    }
  };

  const columns = jokeColumns({
    openDeleteModal,
    openUpdateModal,
  });

  useEffect(() => {
    if (!loading && jokes) {
      setFilteredData(
        jokes.filter(
          (item) =>
            item?.title?.toLowerCase().includes(filterText.toLowerCase()) ||
            item?.content?.toLowerCase().includes(filterText.toLowerCase())
        )
      );
    }
    // eslint-disable-next-line
  }, [loading, filterText]);

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
        onConfirm={handleDelete}
        isDeleting={deleteLoading}
        jokeId={selectedJokeId}
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

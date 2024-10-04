import React, { useState, useEffect } from "react";
import CustomTable from "./CustomTable";
import { usersColumns } from "./columns";
import { Users, useUsersInfo } from "../hooks/usersQL";

const UserTable = () => {
  const [filterText, setFilterText] = useState("");
  const [filterData, setFilterData] = useState<Users[]>([]);
  const { users, loading, error } = useUsersInfo();

  useEffect(() => {
    if (users) {
      setFilterData(
        users.filter((item: Users) =>
          item.username.toLowerCase().includes(filterText.toLowerCase())
        )
      );
    }
  }, [users, filterText]);

  if (loading) {
    return (
      <p className="h-screen flex items-center justify-center w-full">
        Fetching users please....
      </p>
    );
  }
  
  if (error) {
    return (
      <p className="h-screen flex items-center justify-center w-full">
        Error fetching users: {error}
      </p>
    );
  }

  return (
    <CustomTable<Users>
      columns={usersColumns}
      data={filterData}
      filterText={filterText}
      handleFilter={(e) => setFilterText(e.target.value)}
      title="Users"
      searchPlaceholder="Search users..."
    />
  );
};

export default UserTable;

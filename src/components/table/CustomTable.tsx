// src/components/CustomTable.tsx
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  filterText?: string;
  handleFilter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  searchPlaceholder?: string;
  addButtonLabel?: string;
  onAddButtonClick?: () => void;
}

// Reusable DataTable component
const CustomTable = <T extends object>({
  columns,
  data,
  filterText,
  handleFilter,
  title,
  searchPlaceholder,
  addButtonLabel,
  onAddButtonClick,
}: TableProps<T>) => {

  
  return (
    <div className="container mx-auto p-4">
      {/* Table header with title and search */}
      <div className="flex items-center mb-4 justify-between">
        {title && <h1 className="text-2xl font-semibold text-gray-600">{title}</h1>}
        <div className="flex items-center space-x-4 w-full justify-end ">
          {handleFilter && (
            <input
              type="text"
              value={filterText}
              placeholder={searchPlaceholder || 'Search...'}
              className="border p-2 rounded-md md:max-w-80 "
              onChange={handleFilter}
            />
          )}
          {onAddButtonClick && (
            <button
              className="py-2 px-8 rounded-md border text-base hover:bg-gray-100"
              onClick={() => { onAddButtonClick();}}
              
            >
              {addButtonLabel || 'Add'}
            </button>
          )}
        </div>
       
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        sortIcon={<span className="ml-2">⇅</span>}
        customStyles={{
          header: {
            style: {
              minHeight: '56px',
            },
          },
          headRow: {
            style: {
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              borderTopColor: 'rgba(0, 0, 0, 0.12)',
            },
          },
        }}
      />
    </div>
  );
};

export default CustomTable;

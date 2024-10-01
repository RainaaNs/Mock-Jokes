// src/components/columns.ts
import { TableColumn } from 'react-data-table-component';
import { FaTrashAlt, FaSyncAlt } from 'react-icons/fa'; // Icons for actions

// Define the structure of the JokeRow interface
interface JokeRow {
  title: string;
  dateAdded: string;
  likes: number;
  dislikes: number;
}

// Define jokeColumns using a specific structure without generics
export const jokeColumns: TableColumn<JokeRow>[] = [
  {
    name: 'Joke Title',
    selector: (row) => row.title,
    sortable: true,
    grow: 2,
  },
  {
    name: 'Date Added',
    selector: (row) => row.dateAdded,
    sortable: true,
  },
  {
    name: 'Likes',
    selector: (row) => row.likes,
    sortable: true,
    cell: (row) => <span className="text-green-500">{row.likes}</span>,
  },
  {
    name: 'Dislikes',
    selector: (row) => row.dislikes,
    sortable: true,
    cell: (row) => <span className="text-red-500">{row.dislikes}</span>,
  },
  {
    name: 'Action',
    button: true,
    cell: (row) => (
      <div className="flex gap-2">
        <FaSyncAlt
          className="cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={() => alert(`Refreshing joke: ${row.title}`)}
        />
        <FaTrashAlt
          className="cursor-pointer text-red-500 hover:text-red-700"
          onClick={() => alert(`Deleting joke: ${row.title}`)}
        />
      </div>
    ),
  },
];

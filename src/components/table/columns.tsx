
import { TableColumn } from 'react-data-table-component';
import { FaTrashAlt, FaSyncAlt } from 'react-icons/fa';
import { JokeRow, usersRow } from './data';




export const jokeColumns: TableColumn<JokeRow>[] = [
  {
    name: 'Joke Title',
    selector: (row) => row.title,
    sortable: true,
    grow: 2,
  },
  {
    name: 'Content',
    selector: (row) => row.content,
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

export const usersColumns: TableColumn<usersRow>[] = [
  {
    name: 'Joke Title',
    selector: (row) => row.username,
    sortable: true,
    grow: 2,
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
 
];

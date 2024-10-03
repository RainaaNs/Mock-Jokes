import { TableColumn } from 'react-data-table-component';
import { FaTrashAlt} from 'react-icons/fa';
// import {  JokeRow, usersRow } from './data';
import update from '../../assets/update.svg';
import { Joke, Users } from '../hooks/usersQL';

interface ColumnProps {
  openDeleteModal: (row:Joke) => void;
  openUpdateModal: (row:Joke) => void;
}


export const jokeColumns = ({ openDeleteModal, openUpdateModal }: ColumnProps): TableColumn<Joke>[] => [
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
      <div className="flex gap-3 items-center">
        <img src={update} alt='update'
          className="cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={() => openUpdateModal(row)}
        />
        <FaTrashAlt
          className="cursor-pointer text-red-500 hover:text-red-700"
          onClick={() => openDeleteModal(row)}
        />
      </div>
    ),
  },
];

export const usersColumns: TableColumn<Users>[] = [
  {
    name: 'Joke Title',
    selector: (row) => row.username,
    sortable: true,
    grow: 2,
  },
  {
    name: 'Likes',
    selector: (row) => row.likedJokes,
    sortable: true,
    cell: (row) => <span className="text-green-500">{row.likedJokes}</span>,
  },
  {
    name: 'Dislikes',
    selector: (row) => row.dislikedJokes,
    sortable: true,
    cell: (row) => <span className="text-red-500">{row.dislikedJokes}</span>,
  },
 
];

import { TableColumn } from 'react-data-table-component';
import { FaTrashAlt} from 'react-icons/fa';
import { JokeRow, usersRow } from './data';
import update from '../../assets/update.svg';

interface ColumnProps {
  openDeleteModal: () => void;
  openUpdateModal: () => void;
}



export const jokeColumns = ({ openDeleteModal, openUpdateModal }: ColumnProps): TableColumn<JokeRow>[] => [
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
    cell: () => (
      <div className="flex gap-3 items-center">
        <img src={update} alt='update'
          className="cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={openUpdateModal}
        />
        <FaTrashAlt
          className="cursor-pointer text-red-500 hover:text-red-700"
          onClick={openDeleteModal}
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

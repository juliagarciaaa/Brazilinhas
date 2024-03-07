import { Dispatch, SetStateAction, useState } from 'react'
import {Pag1} from './src/screens/Pag1'
export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)

  return (
    <Pag1 setPage={setPage} />
  );
}


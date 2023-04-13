import { FC, useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Page } from './types';
import './styles.scss'

const Paginations: FC<Page> = ({ totalPages, onClick }) => {

    const [number, setNumber] = useState(1)

    const paginationActions = [
        function firstPage() { setNumber(1) },
        function prevPage() { setNumber(number - 1) },
        function netxPage() { setNumber(number + 1) },
        function lastPage() { setNumber(totalPages) }
    ]

    useEffect(() => {
        onClick(number.toString())
    }, [number])

    return (
        <Pagination onClickCapture={() => setNumber(number)} >
            <Pagination.First disabled={number === 1} onClick={paginationActions[0]} />
            <Pagination.Prev disabled={number === 1} onClick={paginationActions[1]} />

            <Pagination.Item value={number}>{number}</Pagination.Item>

            <Pagination.Next disabled={number === totalPages} onClick={paginationActions[2]} />
            <Pagination.Last disabled={number === totalPages} onClick={paginationActions[3]} />
        </Pagination>
    )

} 

export { Paginations }
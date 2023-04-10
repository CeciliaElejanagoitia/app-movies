import { FC, useEffect, useState } from "react";
import { Props } from './types';
import { MdSavedSearch } from 'react-icons/md';
import './styles.scss';

const SearchForm: FC<Props> = ({ onSearch }) => {

    const [text, setText] = useState("");

    useEffect(() => {
        onSearch(text)
    }, [text])

    return (
        <div className="container-search-form">
            <div className="search-form">
                <form className="search-form" >
                    <div className="icon-wrapper">
                        <MdSavedSearch className="icon" />
                    </div>
                    <input className="input" type="text" name="query" placeholder="Search..." value={text}
                        onChange={e => setText(e.target.value)} />
                </form>
            </div>
        </div>

    );
}

export { SearchForm };
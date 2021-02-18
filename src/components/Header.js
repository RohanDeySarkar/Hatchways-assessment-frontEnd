import React, { useEffect, useState } from 'react';
import './Header.css';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useStateValue } from '../StateProvider';

function Header() {
    const [{students, tags}, dispatch] = useStateValue();

    const [name, setName] = useState("");
    const [searchTag, setSearchTag] = useState("");

    useEffect(() => {
        dispatch({
            type: 'SET_FILTER',
            payload: [name, searchTag]
        });

    }, [name, searchTag])

    // console.log("Flter Name-->", name);
    // console.log("Filter Tag -->", searchTag);

    return (
        <div className="header">
            <Autocomplete
                freeSolo
                options={students.map((student) => student.firstName + ' ' + student.lastName)}
                renderInput={(params) => (
                    <TextField 
                        {...params}
                        autoFocus
                        type='text' 
                        label="Search by name"
                        onChange={(e) => setName(e.target.value)}
                    />
                )}
                onChange={(e, value) => setName(value)}
            />
            
            <Autocomplete
                freeSolo
                options={tags.map((tag) => tag.tag)}
                renderInput={(params) => (
                    <TextField 
                        {...params}
                        autoFocus
                        type='text' 
                        label="Search by tag"
                        onChange={(e) => setSearchTag(e.target.value)}
                    />
                )}
                onChange={(e, value) => setSearchTag(value)}
            />
        </div>
    )
}

export default Header

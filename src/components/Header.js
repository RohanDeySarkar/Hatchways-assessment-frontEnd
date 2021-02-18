import React, { useState } from 'react';
import './Header.css';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useStateValue } from '../StateProvider';

function Header() {
    const [{students, tags}, dispatch] = useStateValue();

    const [name, setName] = useState("");
    const [searchTag, setSearchTag] = useState("");

    console.log("ALL TAGS -->", tags);

    // console.log(name);
    return (
        <div className="header">
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={students.map((student) => student.firstName + ' ' + student.lastName)}
                renderInput={(params) => (
                    <TextField 
                        {...params}
                        autofocus
                        type='text' 
                        label="Search by name"
                        // onChange={(e) => setName(e.target.value)}
                    />
                )}
                onChange={(e, value) => setName(value)}
            />
            
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={tags.map((tag) => tag.tag)}
                renderInput={(params) => (
                    <TextField 
                        {...params}
                        autofocus
                        type='text' 
                        label="Search by tag"
                        // onChange={(e) => setSearchTag(e.target.value)}
                    />
                )}
                onChange={(e, value) => setSearchTag(value)}
            />
        </div>
    )
}

export default Header

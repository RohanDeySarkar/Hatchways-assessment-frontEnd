import React, { useEffect, useState, forwardRef  } from 'react';
import './CardRow.css';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import { useStateValue } from '../StateProvider';

const CardRow = forwardRef(({id, imageUrl, name, email, company, skill, grades}, ref) => {

    const [{tags}, dispatch] = useStateValue();

    // console.log("ALL TAGS -->", tags);

    const [expanded, setExpanded] = useState();
    const [average, setAverage] = useState("");
    const [tag, setTag] = useState("");
    const [displayTags, setDisplayTags] = useState(null);

    useEffect(() => {
        const calculateAverage = (arr) => {
            let intArr = arr.map(i=>Number(i));
            let intAverage = (intArr.reduce((a,b) => a + b, 0) / intArr.length).toFixed(2);
            setAverage(intAverage);
        };

        calculateAverage(grades);
    }, [])

    // CHECK AND SAVE INDIVIDUAL TAGS
    useEffect(() => {
        const tempTags = [];
        for (var i=0; i<tags.length; i++) {
            if (tags[i].email === email) {
                tempTags.push(tags[i].tag)
                // console.log(tags[i].email)
            }
        }
        setDisplayTags(tempTags)
    }, [tag])

    // console.log(displayTags)

    // console.log(grades);
    // console.log(average)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(tag)
        dispatch({
            type: 'SET_TAG',
            payload: {email, tag}
        })
        setTag("")
    };

    return (
        <div ref={ref} className="cardRow">
            <Card className="cardRow__card" variant="outlined">
                <Avatar 
                    className="cardRow__avatar"
                    src={imageUrl} 
                    alt="" 
                />

                <div className="cardRow__info">
                    <h1>{name}</h1>
                    <p>Email: {email}</p>
                    <p>Company: {company}</p>
                    <p>Skll: {skill}</p>
                    <p>Average: {average}%</p>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <div className="cardRow__infoGrades">
                            {grades.map((grade, index) => (
                                <p>
                                    {`Test ${index + 1}:   ${grade}%`}
                                </p>
                            ))}
                        </div>
                    </Collapse>
                            
                    <div className="cardRow__tags">
                        {displayTags?.map((eachTag) => 
                            <p>{eachTag}</p>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} style={{marginLeft: "20px"}}>
                        <TextField
                            autoFocus
                            type='text'
                            value={tag} 
                            label="Add a tag"
                            onChange={(e) =>setTag(e.target.value)} 
                        />
                    </form>
                </div>
                
                <IconButton className="cardRow__icon" onClick={handleExpandClick}>
                    {expanded? <RemoveIcon fontSize="large" /> : <AddIcon fontSize="large" />}
                </IconButton>
                
                
            </Card>
        </div>
    )
});

// const CardRow = ({id, imageUrl, name, email, company, skill, grades}) => {
    
// }

export default CardRow

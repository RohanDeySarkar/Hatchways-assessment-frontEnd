import React from 'react';
import './Cards.css';

import {useStateValue} from '../StateProvider';

import CardRow from './CardRow';

import FlipMove from'react-flip-move';

function Cards() {

    const [{students}, dispatch] = useStateValue();

    // console.log(students);

    return (
        <div className="cards">
            <FlipMove>
                    {students.map((student) => (
                        <CardRow 
                            key={student.id}
                            // sid={student.id}
                            imageUrl={student.pic}
                            name={student.firstName + ' ' + student.lastName}
                            email={student.email}
                            company={student.company}
                            skill={student.skill}
                            grades={student.grades}
                        />
                    ))}
            </FlipMove>
        </div>
    )
}

export default Cards;

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import MyTeam from '../../components/Team/MyTeam';
import './index.css'

const Teams = () => {

    const [team, setTeam] = useState([])

    useEffect(() => {
        fetch("https://code-challenge--ibti-solutions.herokuapp.com/teams")
        .then(res => res.json())
        .then(data => {
            setTeam(data)
        })
    }, [])

    return ( 
        <div className="team-container">
            <Header title='create new team' href='/create'/>
            <div className='main-team'>
              {team.map(data => <MyTeam className='bar' data={data}/>)}  
            </div>
        </div>
     );
}
 
export default Teams;
import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <div className="nav">
                <h1>Navigation:</h1>
                <div>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'blue'
                        }}
                    >
                        The Smurf Village!
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/smurf-form"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'blue'
                        }}
                    >
                        Add a new Smurf!
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
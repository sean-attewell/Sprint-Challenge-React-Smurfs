import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <div className="nav">
                <h1>Navigation</h1>
                <div>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'blue'
                        }}
                    >
                        Smurfs list!
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
                        Add Smurf!
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
import React from 'react';

class Navigation extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-expand-sm navbar-primary bg-warning">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Request Info</a>
                    </li>
                </ul> 
            </nav>
        );
    }
}

export default Navigation;
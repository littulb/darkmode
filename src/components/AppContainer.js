import React from 'react';

const AppContainer = (props) => {
    const {children} = props;

    return (
        <div className="app-container">
            {children}
        </div>
    );
}

export default AppContainer;
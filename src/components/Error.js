import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops!!!</h1>
            <h3>Something went wrong !</h3>
            <br />
            <h3>{error?.status}</h3>
            <h4> {error?.error?.message}</h4>
        </div>
    )
}

export default Error
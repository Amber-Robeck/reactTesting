import React, { useState, useEffect } from 'react';

export const ApiCall: React.FunctionComponent = () => {
    const [data, setData] = useState<{
        name: string;
    }>();

    useEffect(() => {
        let isMounted = true;
        fetch('/api')
            .then(response => response.json())
            .then(data => {
                if (isMounted) {
                    setData(data);
                }
            });
        return () => {
            isMounted = false;
        };
    }, []);

    return data ? <div role="loaded">{data.name}</div> : <div role="notLoaded">Loading...</div>;
}
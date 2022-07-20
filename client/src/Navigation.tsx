import React from 'react';

export const Navigation = ({ items }: {
    items: {
        name: string;
        url: string;
    }[];
}) => (
    <div>{
        items.map(item => (
            <div key={item.url}>
                <a role="navigation" href={item.url}>{item.name}</a>
            </div>
        ))}</div>
);
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Component2 = () => {
    const [photo, setPhoto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => response.json())
            .then(json => setPhoto(json))
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div>
            <h1>Компонент 2</h1>
            <h2>{photo.title}</h2>
            <img src={photo.url} alt={photo.title} />
        </div>
    );
};

export default Component2;

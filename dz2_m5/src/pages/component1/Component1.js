import { useState, useEffect } from 'react';
import axios from 'axios';

function Component1() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => setPhotos(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Photos page</h1>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <a href={`/photo/${photo.id}`}>
                            {photo.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Component1;
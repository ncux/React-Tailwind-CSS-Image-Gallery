import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from "./card/card";
import Loading from "../loading/loading";

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const PIXABAY_API = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&q=`;

const Pictures = () => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const getPictures = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${PIXABAY_API}${query}`);
            console.log(data);
            setImages([...data['hits']]);
            setLoading(false);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getPictures();
    }, []);

    const showPictures = (
        images.length > 0 && images.map(image => (
            <Card key={image.id} image={image} />
        ))
    );

    if(loading) return (<Loading />);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
                { showPictures }
            </div>
        </div>
    );
}

export default Pictures;

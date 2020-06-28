import React from 'react';


export const Card = ({ image }) => {

    const { dowloads, likes, tags, webformatURL, user, views } = image;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={webformatURL} alt="pic" className="w-full" />
            <div className="px-6 py-4">
                <p className="font-bold text-purple-500 text-xl mb-2">Photo by { user }</p>
                <ul>
                    <li>
                        <span><strong>Views: </strong>{ views }</span>
                    </li>
                    <li>
                        <span><strong>Downloads: </strong>{ dowloads }</span>
                    </li>
                    <li>
                        <span><strong>Likes: </strong>{ likes }</span>
                    </li>
                </ul>
            </div>

            <div className="px-6 py-4">
                { tags.split(',').map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2">
                        #{ tag }
                    </span>
                )) }
            </div>
        </div>
    );

};


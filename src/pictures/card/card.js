import React from 'react';


export const Card = ({ image }) => {

    const { dowloads, likes, tags, webFormatURL } = image;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="https://source.unsplash.com/random" alt="pic" className="w-full" />
            <div className="px-6 py-4">
                <p className="font-bold text-purple-500 text-xl mb-2">Photo by Moyoz</p>
                <ul>
                    <li>
                        <span><strong>Views: </strong>4000</span>
                    </li>
                    <li>
                        <span><strong>Downloads: </strong>4000</span>
                    </li>
                    <li>
                        <span><strong>Likes: </strong>4</span>
                    </li>
                </ul>
            </div>

            <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2">
                #tag1
            </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2">
                #tag2
            </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2">
                #tag3
            </span>
            </div>
        </div>
    );

};


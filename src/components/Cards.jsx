import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className='cards'>
            <div className="cardlist">
                <ul>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + 'img/store-card-13-mac-nav-202310.png'} alt="" />
                            <span>Mac</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + 'img/store-card-13-iphone-nav-202309.png'} alt="" />
                            <span>iPhone</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + 'img/store-card-13-ipad-nav-202210.png'} alt="" />
                            <span>iPad</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + 'img/store-card-13-watch-nav-202309_GEO_KR.png'} alt="" />
                            <span>Apple Watch</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + 'img/store-card-13-airpods-nav-202209.png'} alt="" />
                            <span>AirPods</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + 'img/store-card-13-airtags-nav-202108.png'} alt="" />
                            <span>AirTag</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + 'img/store-card-13-appletv-nav-202210.png'} alt="" />
                            <span>Apple TV 4K</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={process.env.PUBLIC_URL + 'img/store-card-13-accessories-nav-202403.png'} alt="" />
                            <span>액세서리</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Cards;
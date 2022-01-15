import React, { useEffect, useState } from "react";

//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";
import axios from "axios";

const Plays = () => {
    const [similarMovies, setSimilarMovies] = useState([]);
    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/now_playing`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, []);
    return (
        <>
            <div className="container mx-auto px-4 my-10">
                <div className="w-full lg:flex lg:flex-row-reverse gap-4">
                    <div className="lg:w-3/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">
                            Play in NCR Delhi
                        </h2>
                        <div className="flex justify-between flex-wrap my-10">
                            {similarMovies.map((each) => (
                                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster {...each} isDark={false} subtitle="Akshara Theatra: Delhi"/>
                            </div>       
                            ))}
                        </div>
                        {/* <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                            <Poster
                                    src="https://ww11.moviesrulz.net/uploads/Shiddat-Hindi.jpg?1"
                                    title="Shiddat"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                                {/* {similarMovies.map((each) => (
                                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                        <Poster {...each} isDark={false} />
                                    </div>
                                ))} 
                            </div>
                        </div> */}
                    </div>

                    <div className="lg:w-1/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlayFilters
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                        </div>
                        <div>
                            <PlayFilters
                                title="Language"
                                tags={["English", "Hindi", "Tamil"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;
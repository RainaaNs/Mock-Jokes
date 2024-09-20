import React, {useState, useEffect} from "react";
import { fetchSingleJoke, Joke } from "../api/jokeApi";


import left from '../assets/left.png'
import right from '../assets/right.png'


const Home: React.FC = () => {
    const [jokes, setJokes] = useState<Joke[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const loadJoke = async () => {
            if (currentPage > jokes.length) {
                try {
                    const fetchedJoke = await fetchSingleJoke();
                    setJokes(prevJokes => [...prevJokes, fetchedJoke]);
                    setError(null);
                }   catch (error) {
                    setError('Failed to load joke. Please try again.');
                }
            }
        };
        loadJoke();
    }, [currentPage, jokes.length]);

    const currentJoke = jokes[currentPage - 1];

    return ( 
        <div className='bg-white h-screen w-full flex items-center'>
            <div className='flex flex-1 justify-center'>
                <div className='flex justify-center items-center '>
                    <img src={left} 
                        className="w-[50px] h-[50px] mr-[100px] transition-transform transform hover:scale-150 active:scale-95 cursor-pointer" 
                        alt="previous"
                        onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}/>
                        <div className='w-[734px] h-[364px] bg-zinc-200 rounded-md flex justify-center items-center '>
                            <div className='text-2xl w-[580px] text-wrap '>
                                {error ? <p>{error}</p> : <p>{currentJoke?.joke || 'Loading...'}</p>}
                            </div>
                        </div>
                    <img src={right} 
                        className="w-[50px] h-[50px] ml-[100px] transform transition-transform hover:scale-150 active:scale-95 cursor-pointer" 
                        alt="next"
                        onClick={() => setCurrentPage(prevPage => prevPage + 1)}/>
                </div>
               
            </div>
        </div>
        
    )
}

export default Home;


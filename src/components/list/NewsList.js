import React, { useEffect, useState } from "react";
//components
import { NewsCard } from "../cards";
//react-bootstrap
import { Container } from "react-bootstrap"
//styles
import "../../styles/list.css";
//Dummy data
import { articles } from "../../lib/content";


const NewsList = () => {
    const [newsArray, setNewsArray] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(1)
    useEffect(() => {
        setNewsArray(articles)
    }, [])

    const handleSwipeUp = () => {
        if(end!==newsArray.length){
            setStart((prevState) => prevState + 1)
        setEnd((prevState) => prevState + 1)
        }
        
    };

    const handleSwipeDown = () => {
         if(start!==0){
            setStart((prevState) => prevState - 1)
        setEnd((prevState) => prevState - 1)
        }
        
    };

    

    return (
        <Container>
            <div className="content">
                {
                    newsArray && newsArray.slice(start, end).map((newsItem) =>
                    (

                   <NewsCard 
                   newsitem={newsItem} 
                   key={newsItem.title}
                   handleswipeup={handleSwipeUp} 
                   newsarray={newsArray}
                    end={end}
                    start={start}
                    handleswipedown={handleSwipeDown}
                      />

                    )



                    )
                }


            </div>

        </Container>
    )

}
export default NewsList
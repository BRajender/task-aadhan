import React from "react";
//styles
import "../../styles/card.css"

const NewsCard = ({ newsitem, handleswipeup,newsarray,end,start,handleswipedown }) => {
    const fulldate = new Date(newsitem.publishedAt);
    var date = fulldate.toString().split(" ");
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour > 12 ? true : false;
    return (
        <div className="newsCard">
            <img
                alt={newsitem.title}
                src={
                    newsitem.urlToImage
                        ? newsitem.urlToImage
                        : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
                }
                className="newsImage"
            />
            <div className="newsText">
                <div>
                    <span className="title">{newsitem.title}</span>
                    <br />
                    <span className="author">
                        <a href={newsitem.url} target="__blank">
                            <b>short </b>
                        </a>{" "}
                        <span className="muted">
                            {" "}
                            by {newsitem.author ? newsitem.author : "unknown"} /{" "}
                            {time
                                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                            on {date[2]} {date[1]} {date[3]}, {date[0]}
                        </span>
                    </span>
                </div>
                <div className="lowerNewsText">
                    <div className="description">{newsitem.description}</div>
                    <span className="readmore">
                        read more at{" "}
                        <a href={newsitem.url} target="__blank" className="source">
                            <b>{newsitem.source.name}</b>
                        </a>
                    </span>
                </div>
            </div>
            {
                end!==newsarray.length && <img src="/images/upload.png" alt="up" style={{ width: "20px", cursor: "pointer" }} onClick={() => handleswipeup()} />
                
            }
            {
                  start!==0 && <img src="/images/down.png" alt="up" style={{ width: "20px", cursor: "pointer" }} onClick={() => handleswipedown()} />
            }
            
        </div>
    )

}
export default NewsCard
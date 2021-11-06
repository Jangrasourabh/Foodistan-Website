import React from 'react';
import '../components/style.css';
import data from '../components/data.json';



const Blog = () => {



    return (
        <>
            <div className="blog">
                <div className="row">
                    <div className="col-md-8">
                    
                        <input className="form-control noraml-heading-font" type="text" placeholder="Search" aria-label="Search"/>
                    
                        </div>
                    <div className="col-md-4 post noraml-heading-font">
                        <h2 > <span className="post-art">Post your article</span>  <button><img src="https://img.icons8.com/color/48/000000/add--v1.png" alt="add"/></button></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="topic noraml-heading-font">
                    <h1>Topics</h1>
                    <h1><button className="btn btn-info" type="button">Health</button></h1>
                    
                    <h1><button className="btn btn-info" type="button">Health</button></h1>
                    <h1><button className="btn btn-info" type="button">Info</button></h1>
                    <h1><button className="btn btn-info" type="button">Health</button></h1>
                    <h1><button className="btn btn-info" type="button">Info</button></h1>
                    <h1><button className="btn btn-info" type="button">Health</button></h1>
                    <h1><button className="btn btn-info" type="button">Info</button></h1>
                    <h1><button className="btn btn-info" type="button"><img src="https://img.icons8.com/small/16/000000/arrow.png" alt="arrow"/></button></h1>
                    </div>

                </div>
                </div>
                <hr />
                <div className="blog-card">
                    <div className="row main-heading-font">
                        <h1>Recommended for you</h1>
                    </div>
                    
                            {
                                data.map((curElem) =>{
                                    const { id, title, date, image, description } = curElem;
                                    return(
                                        <>
                                       <div className="row">
                                      <div className="blog-info" key={id}>
                                        <div className="col-md-4">
                                <img src={image} alt="food" />
                            </div>
                            <div className="col-md-8 noraml-heading-font">
                                <h2>{title}</h2>
                                <h3>{date}</h3>
                                <p className="normal-font">{description} </p>
                                <button type="button " className="view-btns"><span className="view-btn">view</span> <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons.png " alt="arrow"/></button>
                            </div>
                            </div>
                </div>
                            
                                        </>
                                    )
                                })
                            }
                        
                            
                        </div>
                   
                  
            
        </>
    )
}

export default Blog

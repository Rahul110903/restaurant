import React from "react"

const Menucard =({menuCard})=>{
    return(
        <section className="main-card--cointainer">
            {menuCard.map((element,index)=>{
                const {id,name,category,description,image}=element
                return (
                <div className="card-container" key={id}>
            <div className="card">
                <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span calssName="card-description subtle">
                    {description}
                </span>
                <div className="card-read">Read</div>
            </div>
            <img src={image} alt="images" className="card-media"></img>
            <span className="card-tag subtle">Order Now</span>
            </div>
            </div>
                )  
            }
    )}
        </section>
    
    )
}
export default Menucard;
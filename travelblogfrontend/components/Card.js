import {urlFor} from "../lib/sanity";
import Tag from "./Tag";
import {forwardRef} from "react";

const Card = forwardRef(({onClick, href, post}, ref) => {
    const {title, categories, mainImage, authorImage, username, publishedAt} = post;

    return (
        <div className="card-container" href={href} onClick={onClick} ref={ref}>
            <h2>{title}</h2>

            <p>Published on: {new Date(publishedAt).toDateString()}</p>

            <img
                className="main-image"
                alt={title + ' image'}
                src={urlFor(mainImage)}
            />

            <div className="info-container">
                <p>Posted by: {username + 'avatar'}</p>
                <img
                    className="avatar"
                    alt={username + 'avatar'}
                    src={urlFor(authorImage)}
                />
            </div>

            <div className="tag-container">
                {categories.map((category) => (
                    <>
                    { category && <Tag key={category} title={category?.title}/>}
                    </>
                ))}
            </div>
        </div>
    )
})

export default Card;

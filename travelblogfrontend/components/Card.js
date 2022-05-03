import {urlFor} from "../lib/sanity";
import Tag from "./Tag";

const Card = ({post}) => {
    const {title, categories, body, authorImage, username} = post;

    return (
        <div className="card-container">
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
}

export default Card;

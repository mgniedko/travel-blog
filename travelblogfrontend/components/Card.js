import {urlFor} from "../lib/sanity";
import Tag from "./Tag";

const Card = ({post}) => {
    console.log(post)
    return (
        <div className="card-container">
            <h2>{post.title}</h2>

            <p>Published on: {new Date(post.publishedAt).toDateString()}</p>

            <img
                className="main-image"
                alt={post.title + ' image'}
                src={urlFor(post.mainImage)}
            />

            <div className="info-container">
                <p>Posted by: {post.username + 'avatar'}</p>
                <img
                    className="avatar"
                    alt={post.username + 'avatar'}
                    src={urlFor(post.authorImage)}
                />
            </div>

            <div className="tag-container">
                {post.categories.map((category) => (
                    <>
                    { category && <Tag key={category} title={category?.title}/>}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Card;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../useFetch';

function Blogdetails() {
    const { id } = useParams();
    let navigate = useNavigate();
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch(`http://localhost:8000/blogs/${id}`);
    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${blogs.id}`, {
            method: 'DELETE',
        }).then(() => {
            console.log('blog deleted');
            navigate('/');
        });
    };
    return (
        <div className="blog-details">
            {error && <div className="error">{error}</div>}
            {isPending && <p>loding.....</p>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>post by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    );
}

export default Blogdetails;

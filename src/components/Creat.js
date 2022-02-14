import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../useFetch';

function AuthorList() {
    const {
        data: authors,
        isPending: ispending,
        error,
    } = useFetch('http://localhost:8000/author');
    return (
        <>
            {error && <option value={error} >{error}</option>}
            {ispending && <option value="loading...">loading...</option>}
            {authors &&
                authors.map((author) => (
                    <option key={author.id} value={author.id}>
                        {author.name}
                    </option>
                ))}
        </>
    );
}


function Creat() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog),
        }).then(() => {
            setIsPending(false);
            console.log('new blog added');
            navigate('/');
        });
    };

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <AuthorList />
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}

export default Creat;

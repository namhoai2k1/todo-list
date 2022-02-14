import React from 'react';
import useFetch from '../useFetch';

function Author() {
    const {
        data: authors,
        isPending,
        error,
    } = useFetch('http://localhost:8000/author');
    return (
        <div>
            <h2 className="author-title">Author</h2>
            <div className="author-list">
                {error && <div className="error">{error}</div>}
                {isPending && <p>loding.....</p>}
                {authors &&
                    authors.map((author) => (
                        <div key={author.id} className="author-item">
                            <img src={`${author.avata}`} alt={author.name} />
                            <h3>{author.name}</h3>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Author;

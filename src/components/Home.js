import useFetch from '../useFetch';
import BlogList from './BlogList';

function Home() {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div className="error">{error}</div>}
            {isPending && <p>loding.....</p>}
            {blogs && <BlogList blogs={blogs} title="All Blog!" />}
        </div>
    );
}

export default Home;

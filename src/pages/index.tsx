import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';

const Home: NextPage = () => {
    const router = useRouter()

    return (
        <div className='bg-dark text-white p-4 m-3 rounded shadow-lg'>
            <h1 className='display-4'>NextJS App</h1>
            <p className="lead">This is my nextjs app</p>
            <Button onClick={() => { router.push('/posts') }}>
                Go to posts
            </Button>
        </div>
    );
};

export default Home;

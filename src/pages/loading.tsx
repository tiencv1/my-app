import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Card, Container, Placeholder, Spinner } from 'react-bootstrap';

const Loading = () => {
    const router = useRouter();

    useEffect(() => {
        router.push(`/${router.query.path}`);
    });

    return (
        <div className='d-flex justify-content-center my-4 fluid'>
            <Spinner animation='border' role={'status'} variant='dark'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        </div>
    );
};

export default Loading;

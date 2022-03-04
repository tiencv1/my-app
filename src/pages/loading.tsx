import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Card, Container, Placeholder } from 'react-bootstrap';

const Loading = () => {
    const router = useRouter();

    useEffect(() => {
        router.push(`/${router.query.path}`);
    });

    return (
        <div className='d-flex justify-content-center my-4'>
            <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    );
};

export default Loading;

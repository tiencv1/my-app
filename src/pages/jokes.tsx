import { QueryAPI } from '@root/access';
import { TJokes } from '@root/models';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Jokes: NextPage<{ joke: TJokes }> = ({ joke }) => {
    const router = useRouter();
    const { value } = joke;

    return (
        <Card className='my-4 rounded'>
            <Card.Body>
                <Card.Title>Joke of the day</Card.Title>
                <Card.Text>{value}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    Go to home
                </Button>
            </Card.Footer>
        </Card>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const { data: joke } = await QueryAPI.jokes.getRandom();

    if (!joke) return { notFound: true };

    return { props: { joke } };
};

export default Jokes;

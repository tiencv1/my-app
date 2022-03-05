import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { TBook } from '@root/models';
import { useRouter } from 'next/router';

const Books: NextPage<{ books: TBook[] }> = ({ books }) => {
    const router = useRouter();

    return (
        <>
            <Card className='m-3 rounded'>
                <Card.Header>
                    <Card.Title>Books List</Card.Title>
                </Card.Header>
                <Card.Body>
                    {books.map(({ id, content }) => (
                        <Card.Text key={id}>{content}</Card.Text>
                    ))}
                </Card.Body>
                <Card.Footer>
                    <Button
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        Go to Home
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

const handleGetBooks = async (): Promise<TBook[]> => {
    const booksDir = path.join(process.cwd(), '/src/statics/books');
    const booksPath = fs.readdirSync(booksDir);
    return booksPath.map((entry) => {
        const bookData = fs.readFileSync(path.join(booksDir, entry), {
            encoding: 'utf-8',
        });
        return { id: uuidv4(), content: bookData };
    });
};

export const getStaticProps: GetStaticProps = async () => {
    const books = await handleGetBooks();

    return { props: { books } };
};

export default Books;

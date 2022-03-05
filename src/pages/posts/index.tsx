import { QueryAPI } from '@root/access';
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';

export type TPost = { id: number; title: string; body: string };
type PostProps = { postList: TPost[] };

const Posts: NextPage<PostProps> = ({ postList }) => {
    return (
        <>
            <h1 className='my-3 p-3'>Post List</h1>
            <Container fluid>
                {postList.map(({ id, title, body }) => (
                    <Card key={id} className='my-3 p-3 shadow rounded'>
                        <Card.Body>
                            <Card.Title>
                                {id} - {title}
                            </Card.Title>
                            <Card.Text>{body}</Card.Text>
                            <Link href={`/posts/${id}`}>
                                <a>Go to detail</a>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const { data: postList } = await QueryAPI.post.getList<TPost[]>();

    return { props: { postList } };
};

export default Posts;

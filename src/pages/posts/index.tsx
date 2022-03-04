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
            <h1>Post List</h1>
            <Container fluid>
                <Row md={3}>
                    {postList.map(({ id, title, body }) => (
                        <Card key={id}>
                            <Card.Body>
                                <Card.Title>
                                    <Link href={`posts/${id}`}>
                                        <a className='text-black'>{title}</a>
                                    </Link>
                                </Card.Title>
                                <Card.Text>{body}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const { data: postList } = await QueryAPI.post.getList<TPost[]>();

    return { props: { postList } };
};

export default Posts;

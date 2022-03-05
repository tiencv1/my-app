import { QueryAPI } from '@root/access';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import QueryString from 'qs';
import React from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { TPost } from '.';

const PostDetail = ({ post }: { post: TPost }) => {
    const router = useRouter();

    if (router.isFallback)
        return (
            <div className='d-flex justify-content-center my-4 fluid'>
                <Spinner animation='border' role={'status'} variant='dark'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </div>
        );

    return (
        <Card className='my-3 shadow'>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    onClick={() => {
                        router.push('/posts');
                    }}
                >
                    Go Back
                </Button>
            </Card.Footer>
        </Card>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await QueryAPI.post.getList<TPost[]>(
        `?${QueryString.stringify({ _limit: 5 })}`
    );
    const paths = data.map((entry) => ({
        params: { postId: `${entry.id}` },
    }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (
    ctx: GetStaticPropsContext
) => {
    const { params } = ctx;
    const { data: post } = await QueryAPI.post.getOnce<TPost>(
        params?.postId as string
    );

    if (!post) return { notFound: true };

    return { props: { post }, revalidate: 43200 };
};

export default PostDetail;

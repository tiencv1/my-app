import { QueryAPI } from '@root/access';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { TPost } from '.';

const PostDetail = ({ post }: { post: TPost }) => {
    const router = useRouter();
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
    const { data } = await QueryAPI.post.getList<TPost[]>();
    const paths = data.map((entry) => ({
        params: { postId: `${entry.id}` },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (
    ctx: GetStaticPropsContext
) => {
    const { params } = ctx;
    const { data: post } = await QueryAPI.post.getOnce<TPost>(
        params?.postId as string
    );
    return { props: { post } };
};

export default PostDetail;

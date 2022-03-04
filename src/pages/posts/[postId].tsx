import { QueryAPI } from '@root/access';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { Card } from 'react-bootstrap';
import { TPost } from '.';

const PostDetail = ({ post }: { post: TPost }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await QueryAPI.post.getList<TPost[]>();
    const paths = data.map((entry) => ({
        params: { postId: entry.id.toString() },
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

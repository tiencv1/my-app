import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavbarMenu } from '../commons';

export const MainLayout = ({ children }: { children: ReactNode }) => (
    <>
        <Head>
            <title>my nextjs app</title>
        </Head>
        <header>
            <NavbarMenu />
            <main>
                <Container>{children}</Container>
            </main>
        </header>
    </>
);

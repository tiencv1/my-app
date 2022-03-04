import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavbarMenu = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Link href={'/'} passHref>
                <Navbar.Brand href='/'>My nextjs app</Navbar.Brand>
            </Link>
            <Nav>
                <Link href={'/'} passHref>
                    <Nav.Link>Home</Nav.Link>
                </Link>
                <Link href={'/posts'} passHref>
                    <Nav.Link>Posts</Nav.Link>
                </Link>
                <Link href={'/loading?path=jokes'} as='/jokes' passHref>
                    <Nav.Link>Jokes</Nav.Link>
                </Link>
                <Link href={'/about'} passHref>
                    <Nav.Link>About</Nav.Link>
                </Link>
            </Nav>
        </Navbar>
    );
};

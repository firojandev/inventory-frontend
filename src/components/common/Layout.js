import React from 'react';
import { Container } from 'react-bootstrap';

const Layout = (props) => {
    return (
        <div>
            <main>
            <Container>
                {props.children}
            </Container>
            </main>
        </div>
    );
};

export default Layout;
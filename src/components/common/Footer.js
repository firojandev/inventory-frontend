import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div>
             <footer className='text-center text-capitalize'>
                copyright demo &copy; {year}
            </footer>
        </div>
    );
};

export default Footer;
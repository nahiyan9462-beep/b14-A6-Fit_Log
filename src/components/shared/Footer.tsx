
import logo from '@/assets/logo.png'
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <Image src={logo}
                height={80}
                width={60}
                alt='footer-logo'/>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Deshbord do meu site pessoal todos os direitos reservados.</p>
        </footer>

    );
};

export default Footer;
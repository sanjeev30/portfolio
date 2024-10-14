// src/components/TransitionLink.tsx

import React, { useTransition } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface TransitionLinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
    to,
    className = '',
    children,
    onClick,
}) => {
    const navigate = useNavigate();
    const [, startTransition] = useTransition();
    const location = useLocation();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (onClick) onClick();
        startTransition(() => {
            navigate(to);
        });
    };

    const isActive = location.pathname === to;

    return (
        <a
            href={to}
            onClick={handleClick}
            className={`${className} ${isActive ? 'text-blue-500 dark:text-blue-400' : ''}`}
        >
            {children}
        </a>
    );
};

export default TransitionLink;

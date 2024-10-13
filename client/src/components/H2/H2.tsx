import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './H2.css';

interface H2Props {
	styleType: 'primary' | 'secondary';
}

const H2: React.FC<React.PropsWithChildren<H2Props>> = ({
	children,
	styleType,
}) => {
	const h2Ref = useRef<HTMLHeadingElement>(null);
	const isVisible = useIntersectionObserver(h2Ref, { threshold: 0.1 });

	return (
		<h2 ref={h2Ref} className={`${isVisible ? 'active' : ''} ${styleType}`}>
			{children}
		</h2>
	);
};

export default H2;

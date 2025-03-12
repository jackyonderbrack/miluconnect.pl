import React from 'react';
import { useNavigate } from 'react-router-dom';
import { parallax } from '../../utils/parallax';

type ButtonProps = {
	linkTo: string;
	buttonText: string;
	theme: 'btn-primary' | 'btn-underline' | 'btn-outline';
	targetId?: string;
	offset?: number;
};

const Button: React.FC<ButtonProps> = ({
	linkTo,
	buttonText,
	theme,
	targetId,
	offset = 0,
}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (targetId) {
			parallax(targetId, offset);
		} else {
			setTimeout(() => {
				navigate(linkTo.toString());
			}, 300);
		}
	};

	return (
		<button
			onClick={handleClick}
			className={theme}
			aria-label={buttonText}
			type='button'
		>
			{buttonText}
		</button>
	);
};

export default Button;

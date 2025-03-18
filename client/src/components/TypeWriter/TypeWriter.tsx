import React, { useState, useEffect } from 'react';

interface TypewriterProps {
	className?: string;
	text: string | string[];
	speed?: number; // time in ms between each word
	pause?: number; // pause time after finishing the text before restarting
}

const Typewriter: React.FC<TypewriterProps> = ({
	text,
	speed = 300,
	pause = 2000,
	className,
}) => {
	const words = Array.isArray(text)
		? text.flatMap((line) => line.split(/\s+/).concat('\n'))
		: text.trim().split(/\s+/);
	const [displayedText, setDisplayedText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (words.length === 0) return;

		if (currentIndex < words.length) {
			const timeoutId = setTimeout(() => {
				setDisplayedText(
					words
						.slice(0, currentIndex + 1)
						.join(' ')
						.replace(/ \n/g, '\n')
				);
				setCurrentIndex(currentIndex + 1);
			}, speed);
			return () => clearTimeout(timeoutId);
		} else {
			const pauseTimeout = setTimeout(() => {
				setDisplayedText('');
				setCurrentIndex(0);
			}, pause);
			return () => clearTimeout(pauseTimeout);
		}
	}, [currentIndex, words, speed, pause]);

	return (
		<span className={className}>
			{displayedText.split('\n').map((line, index) => (
				<React.Fragment key={index}>
					{line}
					<br />
				</React.Fragment>
			))}
		</span>
	);
};

export default Typewriter;

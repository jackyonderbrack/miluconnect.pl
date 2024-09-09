import { useEffect, useState, RefObject } from 'react';

const useIntersectionObserver = (
	ref: RefObject<Element>,
	options: IntersectionObserverInit = {}
): boolean => {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				setIsIntersecting(entry.isIntersecting);
			});
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, options]);

	return isIntersecting;
};

export default useIntersectionObserver;

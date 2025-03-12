export const parallax = (targetId: string, offset: number) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const elementPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset || 108;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};
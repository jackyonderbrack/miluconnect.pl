import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { handleScroll } from '../../utils/handleScroll';

type IconBouncingButtonProps = {
	href?: string;
	targetId?: string;
	offset?: number;
  children?: ReactNode
};

const BouncingButton: FC<IconBouncingButtonProps> = ({
  children, href = '', targetId, offset = 108
}) => {
  const navigate = useNavigate();

	const handleClick = () => {
		if (targetId) {
			handleScroll(targetId, offset);
		} else {
			setTimeout(() => {
				navigate(href.toString());
			}, 300);
		}
	};

  return (
    <div 
      onClick={handleClick}
      className='flex animate-bounce items-center gap-2 hover:bg-[var(--color-secondary)] hover:shadow-2xl p-4 rounded-2xl transition-all duration-200 cursor-pointer hover:text-[var(--color-accent-primary)]'>
      {children}
    </div>
  )
}

export default BouncingButton
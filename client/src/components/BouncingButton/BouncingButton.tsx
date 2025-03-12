import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { parallax } from '../../utils/parallax';

type IconBouncingButtonProps = {
	href?: string;
	targetId?: string;
	offset?: number;
  children?: ReactNode
};

const BouncingButton: FC<IconBouncingButtonProps> = ({
  children, href = '', targetId, offset = 128
}) => {
  const navigate = useNavigate();

	const handleClick = () => {
		if (targetId) {
			parallax(targetId, offset);
		} else {
			setTimeout(() => {
				navigate(href.toString());
			}, 300);
		}
	};

  return (
    <div 
      onClick={handleClick}
      className='flex animate-bounce items-center gap-2 text-[var(--color-accent-tertiary)] hover:bg-[var(--color-secondary)] hover:shadow-2xl p-4 rounded-2xl transition-all duration-200 cursor-pointer'>
      {children}
    </div>
  )
}

export default BouncingButton
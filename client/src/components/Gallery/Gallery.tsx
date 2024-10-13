import './Gallery.css'

const Gallery = ({ imageUrls }: { imageUrls: string[] }) => {
	return (
		<div id="Gallery" className='grid grid-cols-8 w-full justify-items-center'>
			{imageUrls.map((url: string, index: number) => (
				<img key={index} src={url} alt={`Image ${index}`} className='rounded-2xl' />
			))}
		</div>
	);
};

export default Gallery;

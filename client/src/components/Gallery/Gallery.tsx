const Gallery = ({ imageUrls }: { imageUrls: string[] }) => {
	return (
		<div id="Gallery" className="grid grid-cols-8 justify-items-center items-center w-full py-8">
			{imageUrls.map((url: string, index: number) => (
				<img
					key={index}
					src={url}
					alt={`Image ${index}`}
					className="rounded-2xl size-16"
				/>
			))}
		</div>
	);
};

export default Gallery;

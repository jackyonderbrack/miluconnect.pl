import Header from '../../components/Header/Header';
import MetaTags from '../../components/MetaTags/MetaTags';
import HeaderImg from '../../assets/miluconnect-blog-ecommerce-image-1.png';
import BlogListItem, { BlogListItemProps } from './BlogListItem';

const mockItems: BlogListItemProps[] = [
	{
		item: {
			id: 'string',
			author: 'string',
			title:
				'From Frustration to Efficiency: How I Reduced Android Compilation Time by 70%',
			exceprt:
				'Jetpack Compose has redefined how Android developers approach UI design, offering a declarative and intuitive way to build apps. But with…',
			publicationDate: 'string',
			reactions: 'string',
			comments: 'string',
			imageUrl: 'https://picsum.photos/200',
		},
	},
	{
		item: {
			id: 'string',
			author: 'string',
			title:
				'10 Jetpack Compose: Best Practices for Building Complex Android UIs with Real-World Examples 🚀',
			exceprt:
				'Jetpack Compose has redefined how Android developers approach UI design, offering a declarative and intuitive way to build apps. But with…',
			publicationDate: 'string',
			reactions: 'string',
			comments: 'string',
			imageUrl: 'https://picsum.photos/201',
		},
	},
	{
		item: {
			id: 'string',
			author: 'string',
			title: 'Big News For The Official Kotlin Multiplatform IDE',
			exceprt:
				'Jetpack Compose has redefined how Android developers approach UI design, offering a declarative and intuitive way to build apps. But with…',
			publicationDate: 'string',
			reactions: 'string',
			comments: 'string',
			imageUrl: 'https://picsum.photos/202',
		},
	},
	{
		item: {
			id: 'string',
			author: 'string',
			title:
				'From Frustration to Efficiency: How I Reduced Android Compilation Time by 70%',
			exceprt:
				'Jetpack Compose has redefined how Android developers approach UI design, offering a declarative and intuitive way to build apps. But with…',
			publicationDate: 'string',
			reactions: 'string',
			comments: 'string',
			imageUrl: 'https://picsum.photos/203',
		},
	},
	{
		item: {
			id: 'string',
			author: 'string',
			title:
				'10 Jetpack Compose: Best Practices for Building Complex Android UIs with Real-World Examples 🚀',
			exceprt:
				'Jetpack Compose has redefined how Android developers approach UI design, offering a declarative and intuitive way to build apps. But with…',
			publicationDate: 'string',
			reactions: 'string',
			comments: 'string',
			imageUrl: 'https://picsum.photos/204',
		},
	},
	{
		item: {
			id: 'string',
			author: 'string',
			title: 'Big News For The Official Kotlin Multiplatform IDE',
			exceprt:
				'Jetpack Compose has redefined how Android developers approach UI design, offering a declarative and intuitive way to build apps. But with…',
			publicationDate: 'string',
			reactions: 'string',
			comments: 'string',
			imageUrl: 'https://picsum.photos/300',
		},
	},
];

const BlogPage = () => {
	return (
		<div id='Blog'>
			<MetaTags
				title='MILU Connect - Szybka i darmowa wycena'
				description='Tworzenie stron internetowych, sklepów online i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu.'
			/>
			<Header
				className='relative flex min-h-24 items-center p-1'
				content={
					<div>
						<h1>
							Przeczytaj <span className='text-gradient'>o nowościach</span>
							<br />
							ze świata e-commerce
						</h1>
					</div>
				}
				imgUrl={HeaderImg}
			/>
			<div className='flex p-none md:p-3 lg:p-4  gap-1'>
				<div className='flex-2 flex flex-col gap-1 justify-between'>
					<div className='flex-5'>
						<h3>Popularne dziś</h3>
						<div className='mt-4 flex flex-col gap-1'>
							{mockItems.map((item) => (
								<article className='py-2'>
									<BlogListItem item={item.item} />
								</article>
							))}
						</div>
					</div>
					<div className='border-1 p-4 flex-1'>
						<h3>Może ci się spodobać</h3>
					</div>
				</div>
				<div className='border-1 flex-1 p-4'>
					<div className='h-96 overflow-auto'>
						<h3>Wyszukaj</h3>
						<p>Tutaj będą ostatnie posty</p>
					</div>
					<div className='h-96 overflow-auto'>
						<h3>Ostatnie</h3>
						<p>Tutaj będą ostatnie posty</p>
					</div>
					<div className='h-96 overflow-auto'>
						<h3>Kategorie</h3>
						<p>Tutaj będą ostatnie posty</p>
					</div>

					<div className='h-96 overflow-auto'>
						<h3>Kategorie</h3>
						<p>Tutaj będą ostatnie posty</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPage;

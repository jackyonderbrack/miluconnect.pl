export interface Post {
	id: string;
	category: string;
	title: string;
	description: string;
	author: string;
	date: string;
	content: React.ReactNode;
	tags: string[];
}

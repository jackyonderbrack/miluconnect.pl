export const uuid = (digits: number): string => {
	const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
	let id: string = "";
	for (let i = 0; i < digits; i++) {
		id += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return id;
};

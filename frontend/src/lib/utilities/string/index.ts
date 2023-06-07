// convert sentence into kebab-case
export const kebabCase = (string: string) =>
	string
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/\s+/g, '-')
		.toLowerCase();

export const getDomainFromUrl = (url: string) => {
	let result, match;
	if (
		(match = url.match(
			/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im
		))
	) {
		result = match[1];
		if ((match = result.match(/^[^.]+\.(.+\..+)$/))) {
			result = match[1];
		}
	}
	return result;
};

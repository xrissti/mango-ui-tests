/**
 * Parse scenarion tags and return a map with tag name as key and tag value (or true if no value) as value.
 * E.g.
 * {
 *  clearCookies: true
 * }
*/
export function parseTags() {
	const tags = globalThis.testState.currentScenario.tags;
	const regex = /@([\w-_]+)(?:(.*?))?/

	return tags.reduce((acc, tag) => {
		const match = regex.exec(tag.name);
		if (match) {
			const [, tagName, value] = match;
			acc[tagName] = value == null ? true : value;
		}
		return acc;
	}, {});
}
  
function getFirstTag(tags, regex) {
  const pattern = new RegExp(regex);
  return Object.keys(tags).find(tagName => pattern.test(tagName));
}

export function hasTag(tags, regex) {
	return getFirstTag(tags, regex);
}
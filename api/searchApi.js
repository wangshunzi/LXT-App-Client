import ajax from "../tools/ajax";

export const getSearchResult = (category, key) => ajax("/api/client/search/"+category, {key})


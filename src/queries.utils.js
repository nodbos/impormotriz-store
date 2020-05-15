const queries = {
    xs: '(min-width: 320px)',
    sm: '(min-width: 720px)',
    md: '(min-width: 1024px)',
};

const mediaQueryLists = {};
const keys = Object.keys(queries);
const QUERY_MATCHES = {};

keys.forEach(media => {
    if (typeof queries[media] === 'string') {
        // Adding MediaQueryList object for each and every query to mediaQueryLists object
        mediaQueryLists[media] = window.matchMedia(queries[media]);

        //Get initial matches of each query
        QUERY_MATCHES[media] = mediaQueryLists[media].matches;
    } else {
        QUERY_MATCHES[media] = false;
    }
});

export default QUERY_MATCHES;

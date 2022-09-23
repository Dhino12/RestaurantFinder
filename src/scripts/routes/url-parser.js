/* eslint-disable no-undef */
const UrlParser = {
    parseActiveWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        const splitUrl = this._urlSplitter(url);
        return this._urlCombiner(splitUrl);
    },

    parseActiveUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        return this._urlSplitter(url);
    },

    _urlSplitter(url) {
        const urlSplits = url.split('/');
        return {
            resource: urlSplits[1] || null,
            id: urlSplits[2] || null,
            verb: urlSplits[3] || null,
        };
    },

    _urlCombiner(splitedUrl) {
        return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
        + (splitedUrl.id ? '/:id' : '')
        + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
    },
};

export default UrlParser;

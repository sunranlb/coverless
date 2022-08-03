(function() {
    function $$(selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);
        return elements.length == 1
            ? Array.prototype.slice.call(elements)[0]
            : Array.prototype.slice.call(elements);
    }

    function r(id) {
        let cover = $$(id);
        if (cover.length == undefined) {
            console.log('Cover removed! ' + id);
            cover.remove();
        }
    }
    
    let host = window.location.host;
    if (host.indexOf('.csdn.net') > 0) {
        r(".hide-article-box");
        let content = $$("#article_content");
        if (content.length == undefined) {
            content.style.height = "";
        }
        r(".passport-login-container");
    } else if (host.indexOf('.zhihu.com') > 0) {
        r(".Modal-wrapper");
        let html = $$('html');
        html.style.overflow = "";
    } else if (host.indexOf('jb51.cc') > 0) {
        r("#read-more-wrap");
    }
})();
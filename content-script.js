(function() {
    function $$(selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);
        return elements.length == 1
            ? Array.prototype.slice.call(elements)[0]
            : Array.prototype.slice.call(elements);
    }

    let host = window.location.host;
    if (host.indexOf('.csdn.net') > 0) {
        let cover = $$(".hide-article-box");
        cover.remove();
        let content = $$("#article_content");
        content.style.height = "";
    } else if (host.indexOf('.zhihu.com')) {
        let cover = $$(".Modal-wrapper");
        cover.remove();
        let html = $$('html');
        html.style.overflow = "";
    }
})();
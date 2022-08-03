(function() {
    function $$(selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);
        return elements.length == 1
            ? Array.prototype.slice.call(elements)[0]
            : Array.prototype.slice.call(elements);
    }

    let cover = $$(".hide-article-box");
    cover.remove();
    let content = $$("#article_content");
    content.style.height = "";
})();
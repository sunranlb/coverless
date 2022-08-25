(function () {
    function $$(selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);
        return elements.length == 1
            ? Array.prototype.slice.call(elements)[0]
            : Array.prototype.slice.call(elements);
    }

    function debounce(fn, wait) {
        var timer = null;
        return function () {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(fn, wait);
        }
    }

    /**
     * 动态监控
     */
    function registerObserver() {
        let observer = new MutationObserver(debounce(() => {
            main();
        }, 200));
        let article = document.body;
        let options = {
            'childList': true
        };
        observer.observe(article, options);
    }

    function r(id) {
        let cover = $$(id);
        if (cover.length == undefined) {
            console.log('Cover removed! ' + id);
            cover.remove();
        }
    }

    function main() {
        let host = window.location.host;
        if (host.indexOf('.csdn.net') >= 0) {
            r(".hide-article-box");
            let content = $$("#article_content");
            if (content.length == undefined) {
                content.style.height = "";
            }
            r(".passport-login-container");
        } else if (host.indexOf('.zhihu.com') >= 0) {
            r(".Modal-wrapper");
            r('.css-1ynzxqw');
            let html = $$('html');
            html.style.overflow = "";
        } else if (host.indexOf('jb51.cc') >= 0) {
            r("#read-more-wrap");
        } else if (host.indexOf('tieba.baidu.com') >= 0) {
            // 慎用，貌似也会删除正常点击登录时的弹窗。。。
            r("#tiebaCustomPassLogin");
        } else if (host.indexOf('enterthegungeon.fandom.com') >= 0) {
            r('.top-ads-container');
            r('#incontent_player');
        }
    }

    main();
    registerObserver();
})();
(function (d) {
    "use strict"; window.loadScript = function (u, o) {
        o = o || {};
        var e = !1, a = o.attributes || {}, s = d.createElement("script"),
            t = o.parentTag || d.getElementsByTagName('head')[0];
        s.src = u; var q = d.querySelector('script[nonce]');
        if (q) { s.setAttribute('nonce', q.nonce); } if (Object.keys(a).length > 0) {
            for (var k in a) { s.setAttribute(k, a[k]); }
        } if (typeof o.callback === 'function') {
            s.onload = s.onreadystatechange = function () {
                if (!e && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                    e = !0; o.callback(); s.onload = s.onreadystatechange = null;
                }
            };
        }
        t.appendChild(s);
    }
})(document);
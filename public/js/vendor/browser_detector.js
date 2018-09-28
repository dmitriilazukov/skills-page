var BrowserDetector = function () {
    this.browser = undefined;
    this.version = undefined;
    this.versionSearch = undefined;
    this.os = undefined;
    this.isMobile = undefined;
    this.f = {
        'ua': navigator.userAgent,
        'opera': window.opera,
        'ven': navigator.vendor,
        'platform': navigator.platform
    };
    this.browserPatterns = [
        {string: this.f.ua, subString: "Chrome", identity: "Chrome"},
        {string: this.f.ua, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb"},
        {string: this.f.ven, subString: "Apple", identity: "Safari", versionSearch: "Version"},
        {prop: this.f.opera, identity: "Opera", versionSearch: "Version"},
        {string: this.f.ven, subString: "iCab", identity: "iCab"},
        {string: this.f.ven, subString: "KDE", identity: "Konqueror"},
        {string: this.f.ua, subString: "Firefox", identity: "Firefox"},
        {string: this.f.ven, subString: "Camino", identity: "Camino"},
        {string: this.f.ua, subString: "Netscape", identity: "Netscape"},
        {string: this.f.ua, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE"},
        {string: this.f.ua, subString: "Gecko", identity: "Mozilla", versionSearch: "rv"},
        {string: this.f.ua, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"}
    ];
    this.osPatterns = [
        {string: this.f.ua, subString: 'Android', identity: 'Android', isMobile: true},
        {string: this.f.ua, subString: 'BlackBerry', identity: 'BlackBerry', isMobile: true},
        {string: this.f.ua, subString: 'iPhone', identity: 'iPhone', isMobile: true},
        {string: this.f.ua, subString: 'iPad', identity: 'iPad', isMobile: true},
        {string: this.f.ua, subString: 'iPod', identity: 'iPod', isMobile: true},
        {string: this.f.ua, subString: 'Opera Mini', identity: 'Opera Mobile', isMobile: true},
        {string: this.f.ua, subString: 'IEMobile', identity: 'IEMobile', isMobile: true},
        {string: navigator.platform, subString: "Mac", identity: "Mac", isMobile: false},
        {string: navigator.platform, subString: "Linux", identity: "Linux", isMobile: false},
        {string: navigator.platform, subString: "Win", identity: "Windows", isMobile: false},
    ];
    this.__findPattern = function (patterns) {
        for (var i = 0; i < patterns.length; i++) {
            var p = patterns[i];
            if (p.string) {
                if (p.string.indexOf(p.subString) !== -1) {
                    this.versionSearch = p.versionSearch || p.identity;
                    return p;
                }
            } else if (p.prop) {
                this.versionSearch = p.versionSearch || p.identity;
                return p;
            }
        }
    };
    this.__parseVersion = function (source) {
        var index = source.indexOf(this.versionSearch);
        if (index !== -1)
            return parseFloat(source.substring(index + this.versionSearch.length + 1));
        return undefined;
    };
    this.__detectVersion = function () {
        return this.__parseVersion(navigator.userAgent) || this.__parseVersion(navigator.appVersion);
    };
    this.__detectBrowser = function () {
        return this.__findPattern(this.browserPatterns);
    };
    this.__detectOS = function () {
        return this.__findPattern(this.osPatterns);
    };
    this.init = function () {
        var data = this.__detectOS();
        this.os = data.identity;
        this.isMobile = data.isMobile;
        this.browser = this.__detectBrowser().identity;
        this.version = this.__detectVersion();

    };
    this.init();
};
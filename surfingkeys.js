const {
    aceVimMap,
    mapkey,
    imap,
    imapkey,
    getClickableElements,
    vmapkey,
    map,
    unmap,
    unmapAllExcept,
    vunmap,
    cmap,
    addSearchAlias,
    removeSearchAlias,
    tabOpenLink,
    readText,
    Clipboard,
    Front,
    Hints,
    Visual,
    RUNTIME
} = api;

// switch tab
map('J', 'R');
map('K', 'E');

// forward/back
map('H', 'S');
map('L', 'D');

// search engine
removeSearchAlias('g');
removeSearchAlias('d');
removeSearchAlias('s');
removeSearchAlias('b');

addSearchAlias('dk', 'DuckDuckGo', 'https://duckduckgo.com/?kae=d&kp=-2&kn=1&kaj=m&kak=-1&kax=-1&t=h_&q={0} -csdn.net');
addSearchAlias('st', 'Startpage', 'https://www.startpage.com/sp/search?lui=english&language=english&prfe=062b2590aa3179ecf6c87059e48bed42ded3ee785abbcd8bba41110f9f6af1eabc9c4af6521cc8d8b9037abf114a2e77c2977632a509c0a137e7fb245efbd2436b202c889491aa3636de6ba139c4&abp=-1&t=dark&cat=web&sc=abUceABh3DIQ20&abp=-1&query={0} -csdn.net');
addSearchAlias('gh', 'GitHub', 'https://github.com/search?q=');
addSearchAlias('dm', 'DouBan Movie', 'https://search.douban.com/movie/subject_search?cat=1002&search_text=');
addSearchAlias('db', 'DouBan Read', 'https://search.douban.com/book/subject_search?cat=1001&search_text=');
addSearchAlias('zh', 'Zhihu', 'https://www.zhihu.com/search?type=content&q=');
addSearchAlias('bb', 'bilibili', 'https://search.bilibili.com/all?keyword=');


// common opr
// mapkey('are', 'Regex101', () => {tabOpenLink('https://regex101.com/')});

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;

// settings
settings.scrollStepSize = 50;
settings.defaultSearchEngine = 'dk';
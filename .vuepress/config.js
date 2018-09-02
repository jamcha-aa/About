module.exports = {
    title: '作品一覧',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    themeConfig: {
        search: false,
    },
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    base: '/About/',
    dest: 'docs'
}

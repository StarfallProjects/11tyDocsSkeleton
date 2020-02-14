// marginally less horrible navigation
// Be really careful about the URLs or your bork the highlighting
module.exports = [
    {
        url: "/about/", 
        title:"About"
    },
    {
        url: "/blog/", 
        title:"Blog",
        children: [
            {
                url: "/blog/blog1/",
                title: "Blog1",
                children: [
                    {
                        url: "/blog/subBlog/subBlog1/",
                        title: "Sub blog 1"
                    }
                ]
            }
        ]
    }
]

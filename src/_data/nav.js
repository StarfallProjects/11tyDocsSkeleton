// marginally less horrible navigation
// Be really careful about the URLs or your bork the highlighting
module.exports = [
    {
        url: "/", 
        title:"Home",
        children: [
            {
                url: "/project-structure/",
                title: "Project structure",                
            },
            {
                url: "/content-reuse/",
                title: "Content reuse",  
            },
            {
                url: "/conditional-output/",
                title: "Conditional outputs",  
            },
            {
                url: "/navigation/",
                title: "Navigation",  
            },
        ]
    },
    {
        url: "/about/", 
        title:"About"
    }
]

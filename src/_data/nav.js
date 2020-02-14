// marginally less horrible navigation
// Be really careful about the URLs or your bork the highlighting
module.exports = [
    {
        url: "/quickstart/", 
        title:"Quickstart"
    },
    {
        url: "/features/", 
        title:"Features",
        children: [
            {
                url: "/features/project-structure/",
                title: "Project structure",                
            },
            {
                url: "/features/content-reuse/",
                title: "Content reuse",  
            },
            {
                url: "/features/conditional-output/",
                title: "Conditional outputs",  
            },
            {
                url: "/features/navigation/",
                title: "Navigation",  
            },
        ]
    },
    {
        url: "/about/", 
        title:"About"
    }
]

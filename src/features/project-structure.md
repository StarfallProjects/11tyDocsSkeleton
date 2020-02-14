---
layout: "_layouts/main.njk"
---

# A tidy project structure

 By default, 11ty expects content to start at the root of the project. I think this can get messy, especially if you have a lot of content files and directories. This skeleton separates content, layouts, and assets like CSS into their own directories, and tells 11ty about the new locations in the `.elevent.js` file (the 11ty config file).

 If you use the skeleton and want to change directory names and structure, make sure you update the `.eleventy.js` as well. 
# 11ty docs skeleton

This project contains an 11ty skeleton with a few key features that documentation sites commonly need.

> **Note:** this project uses Nunjucks templating language. It may be possible to use others, but it hasn't been tested with anything else. Some of the features rely on Nunjucks functionality, such as `include` for content reuse.

## A tidy directory structure

 By default, 11ty expects content to start at the root of the project. I think this can get messy, especially if you have a lot of content files and directories. This skeleton separates content, layouts, and assets like CSS into their own directories, and tells 11ty about the new locations in the `.elevent.js` file (the 11ty config file).

 If you use the skeleton and want to change directory names and structure, make sure you update the `.eleventy.js` as well. 


## Content reuse

Content reuse allows you to use the same content (text, image and so on) in multiple places, but maintain it in just one file.

### Quickstart

`myDocsPage.md`
```markdown
This is some content

{% include "./_snippets/myReusableContent.md" %}

This is some more content.
```

### Explanation

[Nunjucks' `include` tag](https://mozilla.github.io/nunjucks/templating.html#include) allows us to pull other files into our content. For example, the above example looks for a file named `myReusableContent.md` in a `_snippets` directory.

We're taking advantage of one of 11ty's unique features: all files are templates. If you've used other static site generators, this can be a strange concept. You may be used to having your content files (in Markdown, AsciiDoc or rST) and then your layout files (using a templating language), and can't mix the two. Because 11ty treats all files as templates, you can use a templating language directly in your Markdown files.

## Conditional outputs

Conditional outputs allow you to change how you output your content depending on certain variables. For example, you might want to mark some of your content as `draft`, and make sure it's only included in test builds, not in builds for the live site.

## Quickstart

`_data/environment.js`
```js
module.exports = {
    'output': process.env.OUTPUT
};
```

`_content/index.md`
```markdown
{% if environment.output == "draft" %}
Draft text
{% endif %}
```

Then build the output with:

```bash
# include the draft content
OUTPUT=draft npx @11ty/eleventy

# exclude the draft content
npx @11ty/eleventy
```

```powershell
# include the draft content
$env:OUTPUT="draft"; npx @11ty/eleventy; $env:OUTPUT=$null

# exclude the draft content
npx @11ty/eleventy
```

### Explanation

11ty allows us to pass environment variables to our templates using Node.js' `process.env` property. [11ty docs example](https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables).

This may sound complicated. What it means is:
- You need a data file listing your environment variables.
- You set those variables in the CLI (command line interface) when you build the site.
- Your templates can check for those variables and take action based on the values.

In the example above, we:
1. Create an environment variable named `OUTPUT`.
2. Check the value of the variable in the `index.md` file.
3. If the value of the variable is `draft`, we show the draft content.
4. Build the site, setting the value of `OUTPUT` to `draft`.

#### Why is OUTPUT capitalized?
It's a common style convention for environment variables.

#### What's going on with PowerShell?

The 11ty documentation shows how to set environment variables in a Bash shell (or CLI). In PowerShell it's more complicated. There is a detailed explanation in [this StackOverflow answer](https://stackoverflow.com/a/43030126/2291838).

The PowerShell command:
1. Sets the environment variable _before_ running the 11ty build.
2. Runs the 11ty build.
3. Clears the environment variable.

#### Can I still use flags like `--serve` or `--output`?

Yes. For example, the following overwrites the default output directory, `_site`, and puts the output into `_site/draft`. This allows you to have several output folders. You could have one for live, one for draft, and so on.

```
# Bash
OUTPUT=draft npx @11ty/eleventy --output=_site/draft

# PowerShell
$env:OUTPUT="draft"; npx @11ty/eleventy --output=_site/draft; $env:OUTPUT=$null
```

## Navigation

Documentation sites need full control of their navigation and menus.

11ty provides a way to do this, using the [11ty Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/). It's full-featured, supporting breadcrumbs, nesting, and highlighting active menu items. I recommend using it, unless you have a good reason not to. 

Its downside (for me) is that you control your navigation from within each content file. In other words, in the frontmatter of every content file, you have to add a `key` (the name of the menu item), a `parent` if it's nested, and a numerical value for `order`, which determines the order of the pages on the menu. I find this gets confusing fast. When adding a new page, you have to check the output, then work out what number in the order the new page will be and what its parent will be. If you decide to change the order, you have to edit several files. I like having one file that defines the whole menu.

> **If you use the 11ty Navigation plugin:** use large numbers for the order. For example, use `100` for the first page, `200` for the second and so on. This will allow you to add new pages in future without editing the whole menu.

I have set up an alternative using a data file (`_data/nav.js`) which sets out the menu structure and details, and a Nunjucks template (`_layouts/nav.njk`) that consumes it to create a menu. It supports:
- Infinite nesting (you can have as many navigation levels as you want).
- Highlighting active menu items.
- Custom titles (you set the title in the data file, not in the content file).






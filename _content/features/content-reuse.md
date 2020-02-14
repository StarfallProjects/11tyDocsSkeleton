# Content reuse

Content reuse allows you to use the same content (text, image and so on) in multiple places, but maintain it in just one file.

### Quickstart

`myDocsPage.md`
```markdown
This is some content
{% raw %}
{% include "./_snippets/myReusableContent.md" %}
{% endraw %}

This is some more content.
```

### Explanation

[Nunjucks' `include` tag](https://mozilla.github.io/nunjucks/templating.html#include) allows us to pull other files into our content. For example, the above example looks for a file named `myReusableContent.md` in a `_snippets` directory.

We're taking advantage of one of 11ty's unique features: all files are templates. If you've used other static site generators, this can be a strange concept. You may be used to having your content files (in Markdown, AsciiDoc or rST) and then your layout files (using a templating language), and can't mix the two. Because 11ty treats all files as templates, you can use a templating language directly in your Markdown files.
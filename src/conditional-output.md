## Conditional outputs

Conditional outputs allow you to change how you output your content depending on certain variables. For example, you might want to mark some of your content as `draft`, and make sure it's only included in test builds, not in builds for the live site.

## Quickstart

`_data/environment.js`
```js
module.exports = {
    'output': process.env.OUTPUT
};
```

`index.md`
```markdown
{% raw %}
{% if environment.output == "draft" %}
Draft text
{% endif %}
{% endraw %}
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
- You set those variables in the CLI (command line interface) when you build the site, or in your npm scripts.
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

If you use an npm script (for example, `npm run draft`) to build your site, I recommend using [cross-env](https://www.npmjs.com/package/cross-env) to avoid PowerShell-related quirks. Take a look at this site's `package.json` for an example.

#### Can I still use flags like `--serve` or `--output`?

Yes. For example, the following overwrites the default output directory, `docs`, and puts the output into `docs/draft`. This allows you to have several output folders. You could have one for live, one for draft, and so on.

```
# Bash
OUTPUT=draft npx @11ty/eleventy --output=_site/draft

# PowerShell
$env:OUTPUT="draft"; npx @11ty/eleventy --output=_site/draft; $env:OUTPUT=$null
```

> **Warning:** in PowerShell, if you run it with the `--serve` flag, it will never run `$env:OUTPUT=$null`. The `$env:OUTPUT` variable will keep the value you set until you manually unset it or close PowerShell.
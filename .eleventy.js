const fs = require('fs');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setDataDeepMerge(true);
    // Add a filter using the Config API
    eleventyConfig.addFilter( "consoleDump", function(toLog) {
        console.log(toLog);
    });

    // shortcodes

  
    // You can return your Config object (optional).
    return {
      dir: {
        input: "_content",
        includes:"_includes",
        layouts:"_layouts",
        data:"_data"

      },
      markdownTemplateEngine: "njk"
    };
  };
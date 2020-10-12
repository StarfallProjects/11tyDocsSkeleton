const fs = require('fs');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setDataDeepMerge(true);
    // Add a filter using the Config API
    eleventyConfig.addFilter( "consoleDump", function(toLog) {
        console.log(toLog);
    });

    // Shortcodes

  
    // You can return your Config object (optional).
    return {
      dir: {
        input: "src",
        output: "docs"
    },
      markdownTemplateEngine: "njk"
    };
  };
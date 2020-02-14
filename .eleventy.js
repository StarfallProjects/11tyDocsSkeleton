module.exports = function(eleventyConfig) {

    eleventyConfig.setDataDeepMerge(true);
    // Add a filter using the Config API
    eleventyConfig.addFilter( "consoleDump", function(toLog) {
        console.log(toLog);
    });

    eleventyConfig.addPassthroughCopy("src/css");

  
    // You can return your Config object (optional).
    return {
      dir: {
        input: "src"
      },
      markdownTemplateEngine: "njk"
    };
  };
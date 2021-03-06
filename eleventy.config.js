module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/static')

  return {
    dir: {
      input: 'src',
      output: '_site',
      layouts: "_includes/layouts"
    },
    templateFormats: ["njk"]
  };
};

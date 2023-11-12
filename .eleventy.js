module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './public/static/**/*.css',
  });

  eleventyConfig.addPassthroughCopy({"src/static/css": "static/css"});
  eleventyConfig.addPassthroughCopy({"src/static/images": "static/images"});

  return {
    dir: {
      input: 'src',
      output: 'public'
    },
  };
};
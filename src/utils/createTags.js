function createTags(categories) {
  return categories.toLowerCase().replace(" ", "-");
}

module.exports.createTags = createTags;

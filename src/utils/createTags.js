function createTags(tags) {
  return tags.toLowerCase().replace(" ", "-");
}

module.exports.createTags = createTags;

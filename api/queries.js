const queries = {
  homepage: `{
    homepageHeroes {
      headline,
      image {
        url
      },
      buttonText,
      buttonUrl
    }
  }`,
  about: `{
    aboutPages {
      bannerImage,
      bannerText
    }
  }`
}

module.exports = queries

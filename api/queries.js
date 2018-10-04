const queries = {
  homepage: `{
    homepageCarousels {
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

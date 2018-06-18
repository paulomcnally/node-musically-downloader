/**
 * Use to get download video from musical.ly
 */

const request = require('request');
const cheerio = require('cheerio');

class Api {
  static fetch(url, cb) {
    if (url) {

      // make http request tu load video page.
      request(url, (error, response, body) => {

        // instance cheerio with body from video page.
        const $ = cheerio.load(body);

        // set on videoUrl the source of mp4 video.
        let videoUrl = $('meta[property="og:video:url"]').attr("content");

        // Use to set video url on callback.
        cb(`https:${videoUrl}`);
      });
    } else {

      // Use on invalid url or no url set on query String.
      cb('');
    }
  }
}

module.exports = Api

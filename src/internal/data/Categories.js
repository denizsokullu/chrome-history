export default class Categories{
  constructor(){
    this.cols = [{
                  type:'string',
                  title:'Categories'
                },
                {
                  type:'string',
                  title:'Websites'
                },
                {
                  type:'number',
                  title:'Visits'
                }];
    this.options = {
      animation:{
      duration: 1000,
      easing: 'out',
    },
     legend:'bottom',
     width: 1000-64,
     height: 800,
     sankey: {
        iterations: 0,
        node: { label: { fontName: 'Roboto',
                         fontSize: 14 },
                width: 6,
              },
      }
    };
    this.summary = {
      title:'Categories',
      number:324
    }
  }
  last24(){
    let data = {};
    data.cols = this.cols;
    data.rows = [
      ['Social Media',	'facebook.com',	27],
      ['Personal',	'drive.google.com',	16],
      ['Social Media',	'youtube.com',	15],
      ['Social Media',	'linkedin.com',	8],
      ['Entertainment',	'espn.com',	5],
      ['Entertainment',	'netflix.com',	4],
      ['News',	'wired.com',	4],
      ['Social Media',	'messenger.com',	4],
      ['Social Media',	'reddit.com',	4],
      ['Educational',	'wikipedia.com',	2],
      ['Educational',	'starwars.wikia.com',	2],
      ['Entertainment',	'putlocker.com',	2],
      ['News',	'news.google.com',	2],
      ['Shopping',	'amazon.com',	2],
      ['Social Media',	'pinterest.com',	2],
      ['Art & Design',	'deviantart.com',	1],
      ['Educational',	'medium.com',	1],
      ['Shopping',	'carhartt-wip.com',	1],
      ['Social Media',	'instagram.com',	1],
    ];
    data.options = this.options;
    data.summary = this.summary;
    data.summary.number = 7;
    return data
  }
  last7(){
    let data = {};
    data.cols = this.cols;
    data.rows = [
      ['Social Media', 'facebook.com', 187],
      ['Social Media', 'youtube.com', 146],
      ['Personal', 'drive.google.com', 77],
      ['Social Media', 'messenger.com', 47],
      ['Shopping', 'amazon.com',  44],
      ['Social Media', 'linkedin.com', 36],
      ['Entertainment', 'netflix.com', 34],
      ['Social Media', 'tumblr.com', 31],
      ['News', 'wired.com', 24],
      ['Educational', 'wikipedia.com', 21],
      ['Social Media', 'pinterest.com', 21],
      ['Social Media', 'reddit.com', 19],
      ['Social Media', 'instagram.com', 16],
      ['Social Media', 'twitter.com', 16],
      ['Entertainment', 'hulu.com', 14],
      ['Educational', 'medium.com', 13],
      ['Entertainment', 'espn.com', 13],
      ['Music', 'soundcloud.com', 13],
      ['Social Media', 'buzzfeed.com', 12],
      ['News', 'news.google.com', 9],
      ['Entertainment', 'putlocker.com', 8],
      ['Entertainment', 'masterani.me', 8],
      // ['Shopping', 'kith.com', 6],
      // ['Educational', 'starwars.wikia.com', 5],
      // ['Educational', 'cmu.edu/hub/sio', 4],
      // ['Entertainment', 'vimeo.com', 4],
      // ['Entertainment', 'outlook.live.com', 4],
      // ['News', 'newyorker.com', 4],
      // ['Shopping', 'oakley.com', 4],
      // ['Art & Design', 'figma.com', 3],
      // ['Educational', 'webmd.com', 3],
      // ['Finance', 'finance.yahoo.com', 3],
      // ['Music', 'spotify.com', 3],
      // ['Personal', 'dropbox.com', 3],
      // ['Art & Design', 'sketchapp.com', 2],
      // ['Educational', 'nationalgeographic.com', 2],
      // ['Shopping', 'carhartt-wip.com', 2],
      // ['Shopping', 'nordstrom.com', 2],
      // ['Art & Design', 'deviantart.com', 1]
    ];
    data.options = this.options;
    data.summary = this.summary
    data.summary.number = 9
    return data
  }
  last30(){
    let data = {};
    data.cols = this.cols;
    data.rows = [
      ['Personal', 'drive.google.com', 742],
      ['Social Media', 'facebook.com', 432],
      ['Social Media', 'youtube.com', 394],
      ['Social Media', 'tumblr.com', 150],
      ['Social Media', 'twitter.com', 124],
      ['Social Media', 'linkedin.com', 88],
      ['Entertainment', 'espn.com', 67],
      ['Personal', 'inbox.google.com', 67],
      ['News', 'wired.com', 65],
      ['Entertainment', 'hulu.com', 55],
      ['Social Media', 'messenger.com', 54],
      ['Shopping', 'amazon.com', 43],
      ['Art & Design', 'apple.com', 41],
      ['Social Media', 'buzzfeed.com', 40],
      ['Shopping', 'nike.com', 31],
      ['Educational', 'wikipedia.com', 29],
      ['Entertainment', 'netflix.com', 29],
      ['Social Media', 'instagram.com', 26],
      ['Educational', 'design.cmu.edu', 23],
      ['Art & Design', 'sketchapp.com', 22],
      ['Shopping', 'nordstrom.com', 19],
      ['Shopping', 'adidas.com', 19],
      ['Entertainment', 'outlook.live.com', 18],
      ['Entertainment', 'masterani.me', 16],
      ['Social Media', 'reddit.com', 14],
      ['News', 'theonion.com', 13],
      ['Personal', 'dropbox.com', 13],
      ['Social Media', 'pinterest.com', 13],
      ['Art & Design', 'ueno.com', 11],
      ['Shopping', 'carhartt-wip.com', 11]
    ];
    data.options = this.options;
    data.summary = this.summary;
    data.summary.number = 9;
    return data
  }
  last12(){
    let data = {};
    data.cols = this.cols;
    data.rows = [
      ['Personal', 'drive.google.com', 8934],
      ['Social Media', 'facebook.com', 4449],
      ['Social Media', 'youtube.com', 3651],
      ['Social Media', 'tumblr.com', 1309],
      ['Social Media', 'linkedin.com', 1304],
      ['Social Media', 'twitter.com', 971],
      ['Entertainment', 'hulu.com', 770],
      ['Social Media', 'messenger.com', 642],
      ['Art & Design', 'microsoft.com', 389],
      ['Art & Design', 'apple.com', 242],
      ['News', 'wired.com', 241],
      ['Personal', 'inbox.google.com', 234],
      ['Social Media', 'instagram.com', 187],
      ['Shopping', 'amazon.com', 183],
      ['Shopping', 'nike.com', 142],
      ['Entertainment', 'netflix.com', 134],
      ['Shopping', 'nordstrom.com', 123],
      ['Educational', 'wikipedia.com', 122],
      ['Entertainment', 'espn.com', 118],
      ['Social Media', 'buzzfeed.com', 113],
      ['Social Media', 'pinterest.com', 109],
      ['Art & Design', 'sketchapp.com', 104],
      ['Educational', 'design.cmu.edu', 77],
      ['Art & Design', 'hugeinc.com', 70],
      ['Art & Design', 'ueno.com', 49],
      ['Shopping', 'oakley.com', 49],
      ['News', 'nytimes.com', 45],
      ['Art & Design', 'deviantart.com', 44],
      ['Entertainment', 'masterani.me', 43],
      ['Entertainment', 'outlook.live.com', 43],
      ['Personal', 'dropbox.com', 41],
      ['Social Media', 'reddit.com', 34],
      ['News', 'news.google.com', 33],
      ['News', 'theonion.com', 32],
      ['Shopping', 'adidas.com', 31],
      ['Music', 'spotify.com', 29],
      ['Educational', 'lynda.com', 20],
      ['Educational', 'cmu.edu/hub/sio', 18],
      ['Educational', 'webmd.com', 15],
      ['Educational', 'starwars.wikia.com', 14],
      ['Educational', 'nationalgeographic.com', 14],
      ['Music', 'soundcloud.com', 14],
      ['Shopping', 'carhartt-wip.com', 14],
      ['News', 'newyorker.com', 13],
      ['Entertainment', 'kissanime.ru', 12]
    ];
    data.options = this.options;
    data.summary = this.summary;
    data.summary.number = 9
    return data
  }
  allTime(){
    let data = {};
    data.cols = this.cols;
    data.rows = [
      ['Social Media', 'youtube.com', 62594],
      ['Social Media', 'facebook.com', 21659],
      ['Personal', 'drive.google.com', 8761],
      ['Social Media', 'linkedin.com', 5431],
      ['Social Media', 'messenger.com', 4561],
      ['Entertainment', 'hulu.com', 4221],
      ['Personal', 'inbox.google.com', 3011],
      ['Social Media', 'tumblr.com', 2431],
      ['Social Media', 'twitter.com', 2341],
      ['Social Media', 'reddit.com', 1230],
      ['Educational', 'wikipedia.com', 984],
      ['Shopping', 'adidas.com', 876],
      ['News', 'wired.com', 677],
      ['Art & Design', 'microsoft.com', 556],
      ['Shopping', 'carhartt-wip.com', 542],
      ['Art & Design', 'apple.com', 499],
      ['Shopping', 'nike.com', 476],
      ['Entertainment', 'espn.com', 402],
      ['Entertainment', 'netflix.com', 401],
      ['Educational', 'medium.com', 321],
      ['Shopping', 'amazon.com', 281],
      ['Shopping', 'oakley.com', 267],
      ['Social Media', 'pinterest.com', 241],
      ['Social Media', 'buzzfeed.com', 240],
      ['Art & Design', 'hugeinc.com', 213],
      ['Shopping', 'nordstrom.com', 201],
      ['Social Media', 'instagram.com', 201],
      ['Design', 'adobe.com', 168],
      ['Art & Design', 'sketchapp.com', 154],
      ['News', 'nytimes.com', 149],
      ['Educational', 'nationalgeographic.com', 138],
      ['Educational', 'design.cmu.edu', 136],
      ['Art & Design', 'ueno.com', 129],
      ['Entertainment', 'outlook.live.com', 114],
      ['Entertainment', 'masterani.me', 113],
      ['News', 'newyorker.com', 78],
      ['Music', 'spotify.com', 56],
      ['Shopping', 'kith.com', 56],
      ['Personal', 'dropbox.com', 54],
      ['Art & Design', 'deviantart.com', 44],
      ['Educational', 'webmd.com', 44],
      ['News', 'news.google.com', 39],
      ['Educational', 'lynda.com', 37],
      ['News', 'theonion.com', 32],
      ['Art & Design', 'figma.com', 31],
      ['Entertainment', 'putlocker.com', 26],
      ['Educational', 'cmu.edu/hub/sio', 25],
      ['Finance', 'finance.yahoo.com', 22],
      ['Entertainment', 'kissanime.ru', 21],
      ['Educational', 'starwars.wikia.com', 17],
      ['Music', 'soundcloud.com', 16],
      ['Entertainment', 'vimeo.com', 12]

    ];
    data.options = this.options;
    data.summary = this.summary;
    data.summary.number = 11;
    return data
  }
}

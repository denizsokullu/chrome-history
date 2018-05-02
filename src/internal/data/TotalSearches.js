export default class TotalSearches{
  constructor(){
    this.cols = [
      {
        type: 'date',
        label: 'Time',
      },
      {
        type: 'number',
        label: 'Searches',
      }
    ]

    this.options = {
      animation:{
        duration: 1000,
        easing: 'out',
      },
     legend: false,
     hAxis:{
       gridlines: {
        count:12,
        color:'#FFF'
      },
      format:'MMM yy'
     },
     width: 1120 - 64,
     height: 300
    };

    this.summary = {
      title:'Total Searches'
    }

    this.breakdownData = {
      'last24':[
        //website links
        {
          primaryText:'Website Links',
          number:'78%'
        },
        //google search queries
        {
          primaryText:'Search Queries',
          number:'22%'
        },
      ],
      'last7':[
        //website links
        {
          primaryText:'Website Links',
          number:'72%'
        },
        //google search queries
        {
          primaryText:'Search Queries',
          number:'28%'
        },
      ],
      'last30':[
        //website links
        {
          primaryText:'Website Links',
          number:'81%'
        },
        //google search queries
        {
          primaryText:'Search Queries',
          number:'19%'
        },
      ],
      'last12':[
        //website links
        {
          primaryText:'Website Links',
          number:'75%'
        },
        //google search queries
        {
          primaryText:'Search Queries',
          number:'25%'
        },
      ],
      'allTime':[
        //website links
        {
          primaryText:'Website Links',
          number:'85%'
        },
        //google search queries
        {
          primaryText:'Search Queries',
          number:'15%'
        },
      ],
    }
  }
  allTime(){
    //this is actually last 12's data!!!!!
    let data = {};
    data.cols = this.cols;
    data.rows = [
      [toYear(2010,11),1369],
      [toYear(2011,11),4613],
      [toYear(2012,11),7314],
      [toYear(2013,11),14323],
      [toYear(2014,11),12403],
      [toYear(2015,11),19359],
      [toYear(2016,11),214341],
      [toYear(2017,11),253488],
      [toYear(2018,3),28202]];
     data.options = this.options;
     data.summary = this.summary;
     data.summary.number = '187,865';
     data.summary.change = {
       type:'positive',
       change:'2061%'
     }
     return data
  }
  last12(){
    let data = {};
    data.cols = this.cols;
    data.rows = [
      [toMonths(2018,4),	2832],
      [toMonths(2018,3),	2542],
      [toMonths(2018,2),	2148],
      [toMonths(2018,1),	2094],
      [toMonths(2017,12),	2877],
     [toMonths(2017,11),	1980],
     [toMonths(2017,10),2033],
     [toMonths(2017,9),	2176],
     [toMonths(2017,8),	2603],
     [toMonths(2017,7),	2103],
     [toMonths(2017,6),	1823],
     [toMonths(2017,5),	2991]]
     data.options = this.options;
    data.summary = this.summary;
    data.summary.number = '28,202';
    data.summary.change = {
      type:'positive',
      change:'24%'
    }
    return data
  }
  last30(){
    let data = {};
    data.cols = this.cols;
    data.rows = [
      [toDays(1),	403],
      [toDays(2),	689],
      [toDays(3),	532],
      [toDays(4),	453],
      [toDays(5),	643],
      [toDays(6),	345],
      [toDays(7),	487],
      [toDays(8),	423],
      [toDays(9),	332],
      [toDays(10),	215],
      [toDays(11),	445],
      [toDays(12),	362],
      [toDays(13),	445],
      [toDays(14),	548],
      [toDays(15),	293],
      [toDays(16),	594],
      [toDays(17),	480],
      [toDays(18),	374],
      [toDays(19),	351],
      [toDays(20),	414],
      [toDays(21),	478],
      [toDays(22),	252],
      [toDays(23),	327],
      [toDays(24),	469],
      [toDays(25),	273],
      [toDays(26),	472],
      [toDays(27),	571],
      [toDays(28),	313],
      [toDays(29),	496],
      [toDays(30),	371]
    ].reverse().map(row=>{
      let minutes = row[1];
      let hours = parseInt(minutes/2);
      return [row[0],hours];
    })
     data.options = this.options;
    data.summary = this.summary;
    data.summary.number = '8,161';
    data.summary.change = {
      type:'positive',
      change:'5%'
    }

    return data
  }
  last7(){
    //this is actually last 12's data!!!!!
    let data = {};
    data.cols = this.cols;
    data.rows = [
    [toDays(7),	423],
    [toDays(6),	487],
    [toDays(5),	345],
    [toDays(4),	643],
    [toDays(3),	284],
    [toDays(2),	389],
    [toDays(1),	689],
    [toDays(0),	403]
    ].map(row=>{
      let minutes = row[1];
      let hours = parseInt(minutes/2);
      return [row[0],hours];
    });
     data.options = this.options;

     data.summary = this.summary;
     data.summary.number = '2,764';
     data.summary.change = {
       type:'positive',
       change:'14%'
     }

     return data
  }
  last24(){
    let data = {};
    data.cols = this.cols;
    data.rows= [
    [ toHours(1),	0],
    [ toHours(2),	0],
    [ toHours(3),	0],
    [ toHours(4),	0],
    [ toHours(5),	0],
    [ toHours(6),	0],
    [ toHours(7),	0],
    [ toHours(8),	0],
    [ toHours(9),	31],
    [ toHours(10),	4],
    [ toHours(11),	23],
    [ toHours(12),	4],
    [ toHours(13),	13],
    [ toHours(14),	0],
    [ toHours(15),	0],
    [ toHours(16),	21],
    [ toHours(17),	26],
    [ toHours(18),	67],
    [ toHours(19),	34],
    [ toHours(20),	0],
    [ toHours(21),	0],
    [ toHours(22),	4],
    [ toHours(23),	2],
    [ toHours(24), 0]];

    data.options = this.options;

    data.summary = this.summary;
    data.summary.number = 229;
    data.summary.change = {
      type:'positive',
      change:'32%'
    }

    return data
  }
}
function toHours(hour){
  return new Date(2018,3,30,hour);
}

function toDays(day){
  return new Date(2018,3,30-day,0);
}

function toMonths(year,month){
  return new Date(year,month-1,1,0);
}

function toYear(year,m){
  return new Date(year,m,1)
}

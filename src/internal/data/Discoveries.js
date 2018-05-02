export default class Discoveries{
  constructor(){
    this.cols = [
      {
        type: 'date',
        label: 'Time',
      },
      {
        type: 'number',
        label: 'Sites',
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
     width: 1110 - 64,
     height: 300
    };
    this.summary = {
      title:'New Sites Discovered'
    }

    this.breakdownData = {
      type:'Visits',
      'last24':[
        {
          //url
          primaryText:'starwars.wikia.com',
          //date of discovery
          secondaryText:'First Visited Mar 13, 2018',
          //number of Visits
          number:'58'
        },
        {
          //url
          primaryText:'figma.com',
          //date of discovery
          secondaryText:'First Visited April 4, 2018',
          //number of Visits
          number:'45'
        },
        {
          //url
          primaryText:'material.io/icons',
          //date of discovery
          secondaryText:'First Visited Feb 25, 2018',
          //number of Visits
          number:'32'
        },
        {
          //url
          primaryText:'wired.com',
          //date of discovery
          secondaryText:'First Visited Mar 3, 2018',
          //number of Visits
          number:'29'
        },
        {
          //url
          primaryText:'quoapp.com',
          //date of discovery
          secondaryText:'First Visited April 18, 2018',
          //number of Visits
          number:'14'
        }
      ],
      'last7':[
        {
          //url
          primaryText:'starwars.wikia.com',
          //date of discovery
          secondaryText:'First Visited Mar 13, 2018',
          //number of Visits
          number:'58'
        },
        {
          //url
          primaryText:'figma.com',
          //date of discovery
          secondaryText:'First Visited April 4, 2018',
          //number of Visits
          number:'45'
        },
        {
          //url
          primaryText:'material.io/icons',
          //date of discovery
          secondaryText:'First Visited Feb 25, 2018',
          //number of Visits
          number:'32'
        },
        {
          //url
          primaryText:'wired.com',
          //date of discovery
          secondaryText:'First Visited Mar 3, 2018',
          //number of Visits
          number:'29'
        },
        {
          //url
          primaryText:'quoapp.com',
          //date of discovery
          secondaryText:'First Visited April 18, 2018',
          //number of Visits
          number:'14'
        }
      ],
      'last30':[
        {
          //url
          primaryText:'starwars.wikia.com',
          //date of discovery
          secondaryText:'First Visited Mar 13, 2018',
          //number of Visits
          number:'58'
        },
        {
          //url
          primaryText:'figma.com',
          //date of discovery
          secondaryText:'First Visited April 4, 2018',
          //number of Visits
          number:'45'
        },
        {
          //url
          primaryText:'material.io/icons',
          //date of discovery
          secondaryText:'First Visited Feb 25, 2018',
          //number of Visits
          number:'32'
        },
        {
          //url
          primaryText:'wired.com',
          //date of discovery
          secondaryText:'First Visited Mar 3, 2018',
          //number of Visits
          number:'29'
        },
        {
          //url
          primaryText:'quoapp.com',
          //date of discovery
          secondaryText:'First Visited April 18, 2018',
          //number of Visits
          number:'14'
        }
      ],
      'last12':[
        {
          //url
          primaryText:'starwars.wikia.com',
          //date of discovery
          secondaryText:'First Visited Mar 13, 2018',
          //number of Visits
          number:'58'
        },
        {
          //url
          primaryText:'figma.com',
          //date of discovery
          secondaryText:'First Visited April 4, 2018',
          //number of Visits
          number:'45'
        },
        {
          //url
          primaryText:'material.io/icons',
          //date of discovery
          secondaryText:'First Visited Feb 25, 2018',
          //number of Visits
          number:'32'
        },
        {
          //url
          primaryText:'wired.com',
          //date of discovery
          secondaryText:'First Visited Mar 3, 2018',
          //number of Visits
          number:'29'
        },
        {
          //url
          primaryText:'quoapp.com',
          //date of discovery
          secondaryText:'First Visited April 18, 2018',
          //number of Visits
          number:'14'
        }
      ],
      'allTime':[
        {
          //url
          primaryText:'starwars.wikia.com',
          //date of discovery
          secondaryText:'First Visited Mar 13, 2018',
          //number of Visits
          number:'58'
        },
        {
          //url
          primaryText:'figma.com',
          //date of discovery
          secondaryText:'First Visited April 4, 2018',
          //number of Visits
          number:'45'
        },
        {
          //url
          primaryText:'material.io/icons',
          //date of discovery
          secondaryText:'First Visited Feb 25, 2018',
          //number of Visits
          number:'32'
        },
        {
          //url
          primaryText:'wired.com',
          //date of discovery
          secondaryText:'First Visited Mar 3, 2018',
          //number of Visits
          number:'29'
        },
        {
          //url
          primaryText:'quoapp.com',
          //date of discovery
          secondaryText:'First Visited April 18, 2018',
          //number of Visits
          number:'14'
        }
      ],
    }
  }
  allTime(){
    //this is actually last 12's data!!!!!
    let data = {};
    data.cols = this.cols;
    data.rows = [
      [toYear(2010,11),23369],
      [toYear(2011,11),45613],
      [toYear(2012,11),56314],
      [toYear(2013,11),84323],
      [toYear(2014,11),123403],
      [toYear(2015,11),142359],
      [toYear(2016,11),194341],
      [toYear(2017,11),203488],
      [toYear(2018,3),74830]].map(row=>{
       let minutes = row[1];
       let hours = parseFloat(minutes/60).toFixed(1);
       return [row[0],Math.round(hours * 100) / 100];
     });
     data.options = this.options;
     data.summary = this.summary;
     data.summary.number = '34,321';
     data.summary.change = {
       type:'positive',
       change:'644%'
     }
     return data
  }
  last12(){
    let data = {};
    data.cols = this.cols;
    data.rows = [
      [toMonths(2018,4),	12909],
      [toMonths(2018,3),	9145],
      [toMonths(2018,2),	12894],
      [toMonths(2018,1),	11932],
      [toMonths(2017,12),	9527],
     [toMonths(2017,11),	10119],
     [toMonths(2017,10),12443],
     [toMonths(2017,9),	12251],
     [toMonths(2017,8),	11048],
     [toMonths(2017,7),	9326],
     [toMonths(2017,6),	8506],
     [toMonths(2017,5),	7956]].reverse().map(row=>{
       let minutes = row[1];
       let hours = parseFloat(minutes/60).toFixed(1);
       return [row[0],Math.round(hours * 100) / 100];
     });
     data.options = this.options;
    data.summary = this.summary;
    data.summary.number = '8,596';
    data.summary.change = {
      type:'positive',
      change:'74%'
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
      let hours = parseFloat(minutes/60).toFixed(1);
      return [row[0],Math.round(hours * 100) / 100];
    })
    data.options = this.options;
    data.summary = this.summary;
    data.summary.number = 856;
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
    [toDays(7),	12],
    [toDays(6),	42],
    [toDays(5),	65],
    [toDays(4),	53],
    [toDays(3),	19],
    [toDays(2),	6],
    [toDays(1),	27],
    [toDays(0),	39]
    ].map(row=>{
      let minutes = row[1];
      let hours = parseFloat(minutes/60).toFixed(1);
      return [row[0],Math.round(hours * 100) / 100];
    });
     data.options = this.options;

     data.summary = this.summary;
     data.summary.number = 263;
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
    [ toHours(9),	1],
    [ toHours(10),	4],
    [ toHours(11), 7],
    [ toHours(12),	0],
    [ toHours(13),	0],
    [ toHours(14),	0],
    [ toHours(15),	0],
    [ toHours(16),	3],
    [ toHours(17),	1],
    [ toHours(18),	2],
    [ toHours(19),	6],
    [ toHours(20),	0],
    [ toHours(21),	0],
    [ toHours(22),	13],
    [ toHours(23),	2],
    [ toHours(24), 0]];

    data.options = this.options;
    data.summary = this.summary;
    data.summary.number = 39;
    data.summary.change = {
      type:'positive',
      change:'54%'
    }
    return data
  }
  breakdown(){
    return [
      'starwars.wikia.com',
      'figma.com',
      'material.io/icons',
      'wired.com',
      'quoapp.com'
    ]
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

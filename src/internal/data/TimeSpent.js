export default class TimeSpent{
  constructor(){
    this.cols = [
      {
        type: 'date',
        label: 'Time',
      },
      {
        type: 'number',
        label: 'Hours',
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
      title:'Time Spent'
    }
    this.breakdownData = {
      'last24':[
        {
          primaryText:'Facebook',
          secondaryText:'2.5 hrs active ● 6.5 hrs background',
          number:'37%',
          icon:'facebook.png',
        },
        {
          primaryText:'Gmail',
          secondaryText:'0:46:18 ● 12 items',
          number:'9%',
          icon:'gmail.png',
        },
        {
          primaryText:'Youtube',
          secondaryText:'1:46:18 ● 18 items',
          number:'9%',
          icon:'youtube.png',
        },
        {
          primaryText:'Sneakers',
          secondaryText:'0:54:02 ● 7 items',
          number:'7%',
          icon:'template.png',
        },
        {
          primaryText:'Clothing',
          secondaryText:'0:42:01 ● 7 items',
          number:'6%',
          icon:'template.png',
        },
        {
          primaryText:'Spotify',
          secondaryText:'0:13:05 ● 4 items',
          number:'4%',
          icon:'spotify.png',
        },
        {
          primaryText:'Jobs',
          secondaryText:'0:35:02 ● 8 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Photos',
          secondaryText:'0:27:02 ● 3 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Travel Planning',
          secondaryText:'0:24:02 ● 3 items',
          number:'2%',
          icon:'template.png',
        },
        {
          primaryText:'Language Learning',
          secondaryText:'0:46:02 ● 4 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Image Search',
          secondaryText:'1:46:18 ● 2 items',
          number:'1%',
          icon:'template.png',
        },
      ],
      'last7':[
        {
          primaryText:'Facebook',
          secondaryText:'120 hrs active ● 6.5 hrs background',
          number:'34  %',
          icon:'facebook.png',
        },
        {
          primaryText:'Gmail',
          secondaryText:'0:46:18 ● 12 items',
          number:'9%',
          icon:'gmail.png',
        },
        {
          primaryText:'Youtube',
          secondaryText:'1:46:18 ● 18 items',
          number:'9%',
          icon:'youtube.png',
        },
        {
          primaryText:'Sneakers',
          secondaryText:'0:54:02 ● 7 items',
          number:'7%',
          icon:'template.png',
        },
        {
          primaryText:'Clothing',
          secondaryText:'0:42:01 ● 7 items',
          number:'6%',
          icon:'template.png',
        },
        {
          primaryText:'Spotify',
          secondaryText:'0:13:05 ● 4 items',
          number:'4%',
          icon:'spotify.png',
        },
        {
          primaryText:'Jobs',
          secondaryText:'0:35:02 ● 8 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Photos',
          secondaryText:'0:27:02 ● 3 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Travel Planning',
          secondaryText:'0:24:02 ● 3 items',
          number:'2%',
          icon:'template.png',
        },
        {
          primaryText:'Language Learning',
          secondaryText:'0:46:02 ● 4 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Image Search',
          secondaryText:'1:46:18 ● 2 items',
          number:'1%',
          icon:'template.png',
        },
      ],
      'last30':[
        {
          primaryText:'Facebook',
          secondaryText:'2.5 hrs active ● 6.5 hrs background',
          number:'37%',
          icon:'facebook.png',
        },
        {
          primaryText:'Gmail',
          secondaryText:'0:46:18 ● 12 items',
          number:'9%',
          icon:'gmail.png',
        },
        {
          primaryText:'Youtube',
          secondaryText:'1:46:18 ● 18 items',
          number:'9%',
          icon:'youtube.png',
        },
        {
          primaryText:'Sneakers',
          secondaryText:'0:54:02 ● 7 items',
          number:'7%',
          icon:'template.png',
        },
        {
          primaryText:'Clothing',
          secondaryText:'0:42:01 ● 7 items',
          number:'6%',
          icon:'template.png',
        },
        {
          primaryText:'Spotify',
          secondaryText:'0:13:05 ● 4 items',
          number:'4%',
          icon:'spotify.png',
        },
        {
          primaryText:'Jobs',
          secondaryText:'0:35:02 ● 8 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Photos',
          secondaryText:'0:27:02 ● 3 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Travel Planning',
          secondaryText:'0:24:02 ● 3 items',
          number:'2%',
          icon:'template.png',
        },
        {
          primaryText:'Language Learning',
          secondaryText:'0:46:02 ● 4 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Image Search',
          secondaryText:'1:46:18 ● 2 items',
          number:'1%',
          icon:'template.png',
        },
      ],
      'last12':[
        {
          primaryText:'Facebook',
          secondaryText:'2.5 hrs active ● 6.5 hrs background',
          number:'37%',
          icon:'facebook.png',
        },
        {
          primaryText:'Gmail',
          secondaryText:'0:46:18 ● 12 items',
          number:'9%',
          icon:'gmail.png',
        },
        {
          primaryText:'Youtube',
          secondaryText:'1:46:18 ● 18 items',
          number:'9%',
          icon:'youtube.png',
        },
        {
          primaryText:'Sneakers',
          secondaryText:'0:54:02 ● 7 items',
          number:'7%',
          icon:'template.png',
        },
        {
          primaryText:'Clothing',
          secondaryText:'0:42:01 ● 7 items',
          number:'6%',
          icon:'template.png',
        },
        {
          primaryText:'Spotify',
          secondaryText:'0:13:05 ● 4 items',
          number:'4%',
          icon:'spotify.png',
        },
        {
          primaryText:'Jobs',
          secondaryText:'0:35:02 ● 8 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Photos',
          secondaryText:'0:27:02 ● 3 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Travel Planning',
          secondaryText:'0:24:02 ● 3 items',
          number:'2%',
          icon:'template.png',
        },
        {
          primaryText:'Language Learning',
          secondaryText:'0:46:02 ● 4 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Image Search',
          secondaryText:'1:46:18 ● 2 items',
          number:'1%',
          icon:'template.png',
        },
      ],
      'allTime':[
        {
          primaryText:'Facebook',
          secondaryText:'2.5 hrs active ● 6.5 hrs background',
          number:'37%',
          icon:'facebook.png',
        },
        {
          primaryText:'Gmail',
          secondaryText:'0:46:18 ● 12 items',
          number:'9%',
          icon:'gmail.png',
        },
        {
          primaryText:'Youtube',
          secondaryText:'1:46:18 ● 18 items',
          number:'9%',
          icon:'youtube.png',
        },
        {
          primaryText:'Sneakers',
          secondaryText:'0:54:02 ● 7 items',
          number:'7%',
          icon:'template.png',
        },
        {
          primaryText:'Clothing',
          secondaryText:'0:42:01 ● 7 items',
          number:'6%',
          icon:'template.png',
        },
        {
          primaryText:'Spotify',
          secondaryText:'0:13:05 ● 4 items',
          number:'4%',
          icon:'spotify.png',
        },
        {
          primaryText:'Jobs',
          secondaryText:'0:35:02 ● 8 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Photos',
          secondaryText:'0:27:02 ● 3 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Travel Planning',
          secondaryText:'0:24:02 ● 3 items',
          number:'2%',
          icon:'template.png',
        },
        {
          primaryText:'Language Learning',
          secondaryText:'0:46:02 ● 4 items',
          number:'3%',
          icon:'template.png',
        },
        {
          primaryText:'Image Search',
          secondaryText:'1:46:18 ● 2 items',
          number:'1%',
          icon:'template.png',
        },
      ],
    }
  }
  allTime(){
    //this is actually last 12's data!!!!!
    let data = {};
    data.cols = this.cols;
    data.rows = [
      [toYear(2010),23369],
      [toYear(2011),45613],
      [toYear(2012),56314],
      [toYear(2013),84323],
      [toYear(2014),123403],
      [toYear(2015),142359],
      [toYear(2016),194341],
      [toYear(2017),203488],
      [toYear(2018),74830]].map(row=>{
       let minutes = row[1];
       let hours = parseFloat(minutes/60).toFixed(1);
       return [row[0],Math.round(hours * 100) / 100];
     });
     data.options = this.options;
     data.summary = this.summary;
     data.summary.number = '13,957';
     data.summary.measure = 'hours'
     data.summary.change = {
       type:'positive',
       change:'344%'
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
    data.summary.number = '2,138';
    data.summary.measure = 'hours'
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
      let hours = parseFloat(minutes/60).toFixed(1);
      return [row[0],Math.round(hours * 100) / 100];
    })
     data.options = this.options;
    data.summary = this.summary;
    data.summary.number = 227;
    data.summary.measure = 'hours'
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
      let hours = parseFloat(minutes/60).toFixed(1);
      return [row[0],Math.round(hours * 100) / 100];
    });
     data.options = this.options;

     data.summary = this.summary;
     data.summary.number = 61;
     data.summary.measure = 'hours'
     data.summary.change = {
       type:'positive',
       change:'4%'
     }

     return data
  }
  last24(){
    let data = {};
    data.cols = [
          {
            type: 'date',
            label: 'Time',
          },
          {
            type: 'number',
            label: 'Minutes',
          }
        ];
    data.rows= [
    [ toHours(1),	0],
    [ toHours(2),	0],
    [ toHours(3),	0],
    [ toHours(4),	0],
    [ toHours(5),	0],
    [ toHours(6),	0],
    [ toHours(7),	0],
    [ toHours(8),	0],
    [ toHours(9),	12],
    [ toHours(10),	45],
    [ toHours(11),	54],
    [ toHours(12),	11],
    [ toHours(13),	24],
    [ toHours(14),	0],
    [ toHours(15),	0],
    [ toHours(16),	43],
    [ toHours(17),	28],
    [ toHours(18),	60],
    [ toHours(19),	13],
    [ toHours(20),	0],
    [ toHours(21),	0],
    [ toHours(22),	52],
    [ toHours(23),	57],
    [ toHours(24), 24]];

    data.options = this.options;
    data.summary = this.summary;
    data.summary.number = 423;
    data.summary.measure = 'minutes'
    data.summary.change = {
      type:'positive',
      change:'16%'
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

function toYear(year){
  return new Date(year)
}

let game1 = (Math.floor(Math.random() * 2) === 1) ? true : false ;
let game2 = (Math.floor(Math.random() * 2) === 1) ? true : false ;
let game3 = (Math.floor(Math.random() * 2) === 1) ? true : false ;
let game4 = (Math.floor(Math.random() * 2) === 1) ? true : false ;
let game5 = (Math.floor(Math.random() * 2) === 1) ? true : false ;
let game6 = (Math.floor(Math.random() * 2) === 1) ? true : false ;
let game7 = (Math.floor(Math.random() * 2) === 1) ? true : false ;
let game8 = (Math.floor(Math.random() * 2) === 1) ? true : false ;
//amount of games live
var fixtures = [
    {
        teams: {
            home: {
                name : 'Orlando Pirates',
                logo: 'logo'
            },
            away: {
                name: 'Kaizer Chiefs',
                logo: 'logo'
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Orlando Stadium",
            title: 'MTN8',
            stream: ''
        },
        status: {
            live: game1,
            matchOfTheDay: matchDayStatus
        }

    },
    {
        teams: {
            home: {
                name : 'Mamelodi Sundowns',
                logo: 'logo'
            },
            away: {
                name: 'Supersport United',
                logo: 'logo'
            }
        },
        fixture: {
            time: "16:30",
            stadium: "Loftus Versfeld Stadium",
            title: 'Telkom Knockout',
            stream: ''
        },
        status: {
            live: game2
        }

    },
    {
        teams: {
            home: {
                name : 'Amazulu',
                logo: 'logo'
            },
            away: {
                name: 'Cape Town City',
                logo: 'logo'
            }
        },
        fixture: {
            time: "16:30",
            stadium: "Cape Town Stadium",
            title: 'MTN8',
            stream: ''
        },
        status: {
            live: game3
        }

    },
    {
        teams: {
            home: {
                name : 'Supersport United',
                logo: 'logo'
            },
            away: {
                name: 'RoyalAM',
                logo: 'logo'
            }
        },
        fixture: {
            time: "18:00",
            stadium: "Lucas Moripe Stadium",
            title: 'MTN8',
            stream: ''
        },
        status: {
            live: game4
        }

    },
    {
        teams: {
            home: {
                name : 'Marumo Gallants',
                logo: 'logo'
            },
            away: {
                name: 'Sekhukhune United',
                logo: 'logo'
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Peter Mokaba Stadium",
            title: 'DSTV Premiership',
            stream: ''
        },
        status: {
            live: game5
        }

    },
    {
        teams: {
            home: {
                name : 'Stellenbosch F.C',
                logo: 'logo'
            },
            away: {
                name: 'Swallows F.C',
                logo: 'logo'
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Dobsonville Stadium",
            title: 'MTN8',
            stream: ''
        },
        status: {
            live: game6
        }

    },
    {
        teams: {
            home: {
                name : 'Chippa United',
                logo: 'logo'
            },
            away: {
                name: 'Golden Arrows',
                logo: 'logo'
            }
        },
        fixture: {
            time: "20:00",
            stadium: "Harry Gwala Stadium",
            title: 'MTN8',
            stream: ''
        },
        status: {
            live: game7,
        }

    },
    {
        teams: {
            home: {
                name : 'Richards Bay F.C',
                logo: 'logo'
            },
            away: {
                name: 'T.S Galaxy',
                logo: 'logo'
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Mbombela Stadium",
            title: 'MTN8',
            stream: ''
        },
        status: {
            live: game8
        }

    }
];


function returnMatchOfTheDay(){
    let chooseMatchOfTheDay = Math.floor(Math.random() * fixtures.length);
    let matches = fixtures;
    let matchOfTheDay = matches[chooseMatchOfTheDay].status.matchOfTheDay = true;
    return matchOfTheDay.find(match => match.status.matchOfTheDay);
}

const matchOfTheDay = returnMatchOfTheDay();

export {fixtures, matchOfTheDay}
import { icons } from '../constants/index';

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
                logo: icons.pirates_badge
            },
            away: {
                name: 'Kaizer Chiefs',
                logo: icons.chiefs_badge
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
        }

    },
    {
        teams: {
            home: {
                name : 'Mamelodi Sundowns',
                logo: icons.sundowns_badge
            },
            away: {
                name: 'Supersport United',
                logo: icons.supersport_badge
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
                logo: icons.amazulu_badge
            },
            away: {
                name: 'Cape Town City',
                logo: icons.cape_town_city_badge
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
                name : 'Maritzburg United',
                logo: icons.martizburg_badge
            },
            away: {
                name: 'RoyalAM',
                logo: icons.royal_am_badge
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
                logo: icons.gallants_badge
            },
            away: {
                name: 'Sekhukhune United',
                logo: icons.sekhukhune_badge
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
                logo: icons.stellenbosch_badge
            },
            away: {
                name: 'Swallows F.C',
                logo: icons.swallows_badge
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
                logo: icons.chippa_badge
            },
            away: {
                name: 'Golden Arrows',
                logo: icons.arrows_badge
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
                logo: icons.richards_bay_badge
            },
            away: {
                name: 'T.S Galaxy',
                logo: icons.ts_galaxy_badge
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
    matches[chooseMatchOfTheDay].status.matchOfTheDay = true;
    return matches[chooseMatchOfTheDay]
}

const matchOfTheDay = returnMatchOfTheDay();

export {fixtures, matchOfTheDay}
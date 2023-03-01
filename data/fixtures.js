import { COLORS, icons } from '../constants/index';

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
                logo: icons.pirates_badge,
                shortName: 'PIR'
            },
            away: {
                name: 'Kaizer Chiefs',
                logo: icons.chiefs_badge,
                shortName: 'KC'
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Orlando Stadium",
            tournament: icons.nedbank_logo,
            stream: '',
            bgColor: COLORS.support_primary
        },
        status: {
            live: game1,
        }

    },
    {
        teams: {
            home: {
                name : 'Mamelodi Sundowns',
                logo: icons.sundowns_badge,
                shortName: 'SUN'
            },
            away: {
                name: 'Supersport United',
                logo: icons.supersport_badge,
                shortName: 'SSU'
            }
        },
        fixture: {
            time: "16:30",
            stadium: "Loftus Versfeld Stadium",
            tournament: icons.mtn8_logo,
            stream: '',
            bgColor: COLORS.support_primary
        },
        status: {
            live: game2
        }

    },
    {
        teams: {
            home: {
                name : 'Amazulu',
                logo: icons.amazulu_badge,
                shortName: 'AMA'
            },
            away: {
                name: 'Cape Town City',
                logo: icons.cape_town_city_badge,
                shortName: 'CTC'
            }
        },
        fixture: {
            time: "16:30",
            stadium: "Cape Town Stadium",
            tournament: icons.dstv_logo,
            stream: '',
            bgColor: COLORS.support_primary
        },
        status: {
            live: game3
        }

    },
];
//amount of games live
var results = [
    {
        teams: {
            home: {
                name : 'Maritzburg United',
                logo: icons.martizburg_badge,
                shortName: 'MAR',
                score: 2
            },
            away: {
                name: 'RoyalAM',
                logo: icons.royal_am_badge,
                shortName: 'ROY',
                score: 0
            }
        },
        fixture: {
            time: "18:00",
            stadium: "Lucas Moripe Stadium",
            tournament: icons.nedbank_logo,
            stream: '',
            bgColor: COLORS.support_primary
        },
        status: {
            live: game4
        }

    },
    {
        teams: {
            home: {
                name : 'Marumo Gallants',
                logo: icons.gallants_badge,
                shortName: 'GAL',
                score: 0
            },
            away: {
                name: 'Sekhukhune United',
                logo: icons.sekhukhune_badge,
                shortName: 'SEK',
                score: 0
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Peter Mokaba Stadium",
            tournament: icons.dstv_logo,
            stream: '',
            bgColor: COLORS.support_primary
        },
        status: {
            live: game5
        }

    },
    {
        teams: {
            home: {
                name : 'Stellenbosch F.C',
                logo: icons.stellenbosch_badge,
                shortName: 'STE',
                score: 4
            },
            away: {
                name: 'Swallows F.C',
                logo: icons.swallows_badge,
                shortName: 'SWA',
                score: 3
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Dobsonville Stadium",
            tournament: icons.mtn8_logo,
            stream: '',
            bgColor: COLORS.support_primary,
        },
        status: {
            live: game6
        }

    },
    {
        teams: {
            home: {
                name : 'Chippa United',
                logo: icons.chippa_badge,
                shortName: 'CHI',
                score: 2
            },
            away: {
                name: 'Golden Arrows',
                logo: icons.arrows_badge,
                shortName: 'ARR',
                score: 3
            }
        },
        fixture: {
            time: "20:00",
            stadium: "Harry Gwala Stadium",
            tournament: icons.mtn8_logo,
            stream: '',
            bgColor: COLORS.support_primary
        },
        status: {
            live: game7,
        }

    },
    {
        teams: {
            home: {
                name : 'Richards Bay F.C',
                logo: icons.richards_bay_badge,
                shortName: 'RIC',
                score: 1
            },
            away: {
                name: 'T.S Galaxy',
                logo: icons.ts_galaxy_badge,
                shortName: 'TSG',
                score: 0
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Mbombela Stadium",
            tournament: icons.dstv_logo,
            stream: '',
            bgColor: COLORS.support_primary
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

export {fixtures, results, matchOfTheDay}
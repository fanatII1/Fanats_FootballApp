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
                name : 'Maritzburg United',
                logo: icons.martizburg_badge,
                shortName: 'MAR',
            },
            away: {
                name: 'RoyalAM',
                logo: icons.royal_am_badge,
                shortName: 'ROY',
            }
        },
        fixture: {
            time: "18:00",
            stadium: "Lucas Moripe Stadium",
            tournament: icons.nedbank_logo,
            tournamentName: 'Nedbank Cup',
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
            tournamentName: 'NedbankCup',
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
            tournamentName: 'MTN 8',
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
            tournamentName: 'DSTV Premiership',
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
                name : 'Marumo Gallants',
                logo: icons.gallants_badge,
                shortName: 'GAL',
                score: 0,
                gameStats: {
                    Possession: 67,
                    Shots: 4,
                    ShotsOnTarget: 3,
                    ExpectedGoals: 1.1,
                    Passes: 134,
                    Tackles: 5,
                    TacklesWon: 3,
                    Interceptions: 13,
                    Saves: 9,
                    FoulsCommited: 4,
                    Offsides: 4,
                    Corners: 4, 
                    Freekicks: 2,
                    PenaltyKicks: 0,
                    'Yellow Cards': 6,
                    'Red Cards': 1
                }
            },
            away: {
                name: 'Sekhukhune United',
                logo: icons.sekhukhune_badge,
                shortName: 'SEK',
                score: 0,
                gameStats: {
                    Possession: 33,
                    Shots: 15,
                    ShotsOnTarget: 3,
                    ExpectedGoals: 3.6,
                    Passes: 300,
                    Tackles: 12,
                    TacklesWon: 5,
                    Interceptions: 11,
                    Saves: 4,
                    FoulsCommited: 7,
                    Offsides: 6,
                    Corners: 4, 
                    Freekicks: 5,
                    PenaltyKicks: 0,
                    YellowCards: 3,
                    RedCards: 2
                }
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Peter Mokaba Stadium",
            tournament: icons.dstv_logo,
            tournamentName: 'DSTV Premiership',
            stream: '',
            bgColor: COLORS.support_primary,
            fixtueImg: require('../assets/images/fixture_images/gallants_sekhukhune.jpg')
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
                shorName: 'STE',
                score: 3,
                gameStats: {
                    Possession: 35,
                    Shots: 5,
                    ShotsOnTarget: 3,
                    ExpectedGoals: 0.3,
                    Passes: 129,
                    Tackles: 16,
                    TacklesWon: 9,
                    Interceptions: 23,
                    Saves: 4,
                    FoulsCommited: 3,
                    Offsides: 4,
                    Corners: 5, 
                    Freekicks: 5,
                    PenaltyKicks: 2,
                    YellowCards: 1,
                    RedCards: 0
                }
            },
            away: {
                name: 'Swallows F.C',
                logo: icons.swallows_badge,
                shortName: 'SWA',
                score: 3,
                gameStats: {
                    Possession: 65,
                    Shots: 4,
                    hotsOnTarget: 3,
                    ExpectedGoals: 4.6,
                    Passes: 367,
                    Tackles: 21,
                    TacklesWon: 12,
                    Interceptions: 23,
                    Saves: 10,
                    FoulsCommited: 8,
                    Offsides: 7,
                    Corners: 1, 
                    Freekicks: 0,
                    PenaltyKicks: 0,
                    YellowCards: 0,
                    RedCards: 0
                }
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Dobsonville Stadium",
            tournament: icons.mtn8_logo,
            tournamentName: 'MTN 8',
            stream: '',
            bgColor: COLORS.support_primary,
            fixtueImg: require('../assets/images/fixture_images/stellenbosch_swallows.jpg')
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
                shorName: 'CHI',
                score: 2,
                gameStats: {
                    Possession: 55,
                    Shots: 4,
                    ShotsOnTarget: 3,
                    ExpectedGoals: 1.3,
                    Passes: 243,
                    Tackles: 4,
                    TacklesWon: 2,
                    Interceptions: 10,
                    Saves: '2',
                    FoulsCommited: 3,
                    Offsides: 2,
                    Corners: 1, 
                    Freekicks: 1,
                    PenaltyKicks: 1,
                    YellowCards: 2,
                    RedCards: 0
                }
            },
            away: {
                name: 'Golden Arrows',
                logo: icons.arrows_badge,
                shortName: 'ARR',
                score: 3,
                gameStats: {
                    Possession: 45,
                    Shots: 5,
                    hotsOnTarget: 3,
                    ExpectedGoals: 1.6,
                    Passes: 267,
                    Tackles: 13,
                    TacklesWon: 8,
                    Interceptions: 20,
                    Saves: '9',
                    FoulsCommited: 4,
                    Offsides: 3,
                    Corners: 4, 
                    Freekicks: 2,
                    PenaltyKicks: 0,
                    YellowCards: 3,
                    RedCards: 0
                }
            }
        },
        fixture: {
            time: "20:00",
            stadium: "Harry Gwala Stadium",
            tournament: icons.mtn8_logo,
            tournamentName: 'MTN 8',
            stream: '',
            bgColor: COLORS.support_primary,
            fixtueImg: require('../assets/images/fixture_images/arrows_chippa.jpg')
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
                shorName: 'RIC',
                score: 0,
                gameStats:{ 
                    Possession: 22,
                    Shots: 1,
                    ShotsOnTarget: 3,
                    ExpectedGoals: 0.2,
                    Passes: 112,
                    Tackles: 18,
                    TacklesWon: 9,
                    Interceptions: 19,
                    Saves: 3,
                    FoulsCommited: 5,
                    Offsides: 2,
                    Corners: 2, 
                    Freekicks: 7,
                    PenaltyKicks: 0,
                    YellowCards: 3,
                    RedCards: 0
                }
            },
            away: {
                name: 'T.S Galaxy',
                logo: icons.ts_galaxy_badge,
                shortName: 'TSG',
                score: 0,
                gameStats: {
                    Possession: 78,
                    Shots: 3,
                    hotsOnTarget: 3,
                    ExpectedGoals: 2.1,
                    Passes: 214,
                    Tackles: 11,
                    TacklesWon: 3,
                    Interceptions: 17,
                    Saves: 2,
                    FoulsCommited: 3,
                    Offsides: 1,
                    Corners: 4, 
                    Freekicks: 2,
                    PenaltyKicks: 1,
                    YellowCrds: 1,
                    RedCards: 0 
                }
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Mbombela Stadium",
            tournament: icons.dstv_logo,
            tournamentName: 'DSTV Premiership',
            stream: '',
            bgColor: COLORS.support_primary,
            fixtureImg: require('../assets/images/fixture_images/richards_galaxy.webp')
        },
        status: {
            live: game8
        }

    }
];
var standings = [
    {
        teams: {
            home: {
                name : 'Orlando Pirates',
                logo: icons.pirates_badge,
                shortName: 'PIR',
                standings: {
                    plays: 9,
                    wins: 8,
                    loses: 0,
                    draws: 1,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
            },
            away: {
                name: 'Kaizer Chiefs',
                logo: icons.chiefs_badge,
                shortName: 'KC',
                standings: {
                    plays: 9,
                    wins: 4,
                    loses: 2,
                    draws: 3,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
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
                shortName: 'SUN',
                standings: {
                    plays: 9,
                    wins: 7,
                    loses: 1,
                    draws: 1,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
            },
            away: {
                name: 'Supersport United',
                logo: icons.supersport_badge,
                shortName: 'SSU',
                standings: {
                    plays: 9,
                    wins: 4,
                    loses: 4,
                    draws: 1,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
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
                shortName: 'AMA',
                standings: {
                    plays: 9,
                    wins: 8,
                    loses: 0,
                    draws: 1,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
            },
            away: {
                name: 'Cape Town City',
                logo: icons.cape_town_city_badge,
                shortName: 'CTC',
                standings: {
                    plays: 9,
                    wins: 5,
                    loses: 2,
                    draws: 2,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
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
    {
        teams: {
            home: {
                name : 'Maritzburg United',
                logo: icons.martizburg_badge,
                shortName: 'MAR',
                standings: {
                    plays: 9,
                    wins: 2,
                    loses: 6,
                    draws: 1,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
            },
            away: {
                name: 'RoyalAM',
                logo: icons.royal_am_badge,
                shortName: 'ROY',
                standings: {
                    plays: 9,
                    wins: 1,
                    loses: 6,
                    draws: 2,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
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
                standings: {
                    plays: 9,
                    wins: 0,
                    loses: 8,
                    draws: 1,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
            },
            away: {
                name: 'Sekhukhune United',
                logo: icons.sekhukhune_badge,
                shortName: 'SEK',
                standings: {
                    plays: 9,
                    wins: 1,
                    loses: 5,
                    draws: 3,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
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
                standings: {
                    plays: 10,
                    wins: 8,
                    loses: 2,
                    draws: 0,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
            },
            away: {
                name: 'Swallows F.C',
                logo: icons.swallows_badge,
                shortName: 'SWA',
                standings: {
                    plays: 10,
                    wins: 3,
                    loses: 7,
                    draws: 0,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Dobsonville Stadium",
            tournament: icons.mtn8_logo,
            stream: '',
            bgColor: COLORS.support_primary
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
                standings: {
                    plays: 10,
                    wins: 2,
                    loses: 1,
                    draws: 7,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
            },
            away: {
                name: 'Golden Arrows',
                logo: icons.arrows_badge,
                shortName: 'ARR',
                standings: {
                    plays: 10,
                    wins: 4,
                    loses: 4,
                    draws: 2,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
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
                standings: {
                    plays: 8,
                    wins: 8,
                    loses: 0,
                    draws: 0,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
            },
            away: {
                name: 'T.S Galaxy',
                logo: icons.ts_galaxy_badge,
                shortName: 'TSG',
                standings: {
                    plays: 8,
                    wins: 6,
                    loses: 1,
                    draws: 1,
                    pts: function(){
                        return (this.wins * 3) + (this.draws * 1)
                    }
                }
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
    let matches = results;
    matches[chooseMatchOfTheDay].status.matchOfTheDay = true;
    return matches[chooseMatchOfTheDay]
}

const matchOfTheDay = returnMatchOfTheDay();
// let home = standings.map((team) => team.teams.home.standings.pts());
// let away = standings.map((team) => team.teams.home.standings.pts());
var home = standings.map((team) => team.teams.home);
var away = standings.map((team) => team.teams.away);
var combinedTeams = home.concat(away);
var sortedStandings = combinedTeams.sort((a,b) => b.standings.pts() - a.standings.pts());


export {fixtures, results, sortedStandings, matchOfTheDay}
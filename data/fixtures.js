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
                color: '#7ba920',
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
                },
                lineUp: [
                    {
                        name: 'W. Arubi',
                        number: 36,
                        position: ['GK', 'GK']
                    },
                    {
                        name: 'M. Mvelase',
                        number: 24,
                        position: ['DEF', 'RB']
                    },
                    {
                        name: 'T. Gumede',
                        number: 29,
                        position: ['DEF', 'RCB']
                    },
                    {
                        name: 'L. Nonyane',
                        number: 18,
                        position: ['DEF', 'LCB']
                    },
                    {
                        name: 'M. Mabotja',
                        number: 5,
                        position: ['DEF', 'LB']
                    },
                    {
                        name: 'L. Nku',
                        number: 7,
                        position: ['FWD', 'RW']
                    },
                    {
                        name: 'C. Ngema',
                        number: 10,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'K. Otladisa',
                        number: 11,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'L. Mohomi',
                        number: 17,
                        position: ['FWD', 'LW']
                    },
                    {
                        name: 'L. Koapeng',
                        number: 14,
                        position: ['FWD', 'ST']
                    },
                    {
                        name: 'R. Chivaviro',
                        number: 8,
                        position: ['FWD', 'ST']
                    },
                ]
            },
            away: {
                name: 'Sekhukhune United',
                logo: icons.sekhukhune_badge,
                shortName: 'SEK',
                score: 0,
                color: '#a70a35',
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
                },
                lineUp: [
                    {
                        name: 'B. Sangare',
                        number: 30,
                        position: ['GK', 'GK']
                    },
                    {
                        name: 'N. Moobie',
                        number: 2,
                        position: ['DEF', 'RB']
                    },
                    {
                        name: 'E. Gyimah',
                        number: 39,
                        position: ['DEF', 'RCB']
                    },
                    {
                        name: 'D. Cardoso',
                        number: 4,
                        position: ['DEF', 'LCB']
                    },
                    {
                        name: 'S. Ntiya-Ntiya',
                        number: 36,
                        position: ['DEF', 'LB']
                    },
                    {
                        name: 'R. Kabwe',
                        number: 15,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'G. Mashikinya',
                        number: 6,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'S. Seabi',
                        number: 18,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'S. Letsoalo',
                        number: 21,
                        position: ['FWD', 'LW']
                    },
                    {
                        name: 'V. Mncube',
                        number: 7,
                        position: ['FWD', 'ST']
                    },
                    {
                        name: 'E. Mokwana',
                        number: 17,
                        position: ['FWD', 'RW']
                    },
                ]
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Peter Mokaba Stadium",
            tournament: icons.dstv_logo,
            tournamentName: 'DSTV Premiership',
            stream: '',
            bgColor: COLORS.support_primary,
            fixtueImg: require('../assets/images/fixture_images/gallants_sekhukhune.jpg'),
            commentary: [
                {
                  "Min": 0,
                  "Txt": "Game Starts"
                },
                
                {
                    "Min": 0,
                    "Txt": "Home Team with the first card of the game"
                },
                {
                    "Min": 90,
                    "Txt": "Match ends in a draw"
                },
            ]
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
                color: '#a8802b',
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
                },
                lineUp: [
                    {
                        name: 'S. Stephens',
                        number: 17,
                        position: ['GK', 'GK']
                    },
                    {
                        name: 'D. Van Rooyen',
                        number: 7,
                        position: ['DEF', 'RB']
                    },
                    {
                        name: 'O. Makhanya',
                        number: 38,
                        position: ['DEF', 'RCB']
                    },
                    {
                        name: 'V. Sibiya',
                        number: 5,
                        position: ['DEF', 'LCB']
                    },
                    {
                        name: 'F. Basadien',
                        number: 21,
                        position: ['DEF', 'LB']
                    },
                    {
                        name: 'S. Mthethwa',
                        number: 6,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'I. Jabar',
                        number: 27,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'D. Titus',
                        number: 34,
                        position: ['FWD', 'RW']
                    },
                    {
                        name: 'J. Adams',
                        number: 23,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'J. Mendieta',
                        number: 10,
                        position: ['FWD', 'LW']
                    },
                    {
                        name: 'I. Rayners',
                        number: 9,
                        position: ['FWD', 'ST']
                    },
                ]
            },
            away: {
                name: 'Swallows F.C',
                logo: icons.swallows_badge,
                shortName: 'SWA',
                score: 3,
                color: '#6d0f39',
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
                },
                lineUp: [
                    {
                        name: 'T. Mbanjwa',
                        number: 31,
                        position: ['GK', 'GK']
                    },
                    {
                        name: 'N. Mngonyama',
                        number: 24,
                        position: ['DEF', 'RCB']
                    },
                    {
                        name: 'S. Sibiya',
                        number: 2,
                        position: ['DEF', 'CB']
                    },
                    {
                        name: 'Y. Sasman',
                        number: 28,
                        position: ['DEF', 'LCB']
                    },
                    {
                        name: 'L. Lukhubeni',
                        number: 32,
                        position: ['MID', 'RWB']
                    },
                    {
                        name: 'P. Mtshali',
                        number: 7,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'T. Mthethwa',
                        number: 6,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'P. Zulu',
                        number: 43,
                        position: ['MID', 'LWB']
                    },
                    {
                        name: 'E. Rusike',
                        number: 19,
                        position: ['FWD', 'RW']
                    },
                    {
                        name: 'J. Malinga',
                        number: 26,
                        position: ['FWD', 'ST']
                    },
                    {
                        name: 'T. Macheke',
                        number: 70,
                        position: ['FWD', 'LW']
                    },
                ]
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Dobsonville Stadium",
            tournament: icons.mtn8_logo,
            tournamentName: 'MTN 8',
            stream: '',
            bgColor: COLORS.support_primary,
            fixtueImg: require('../assets/images/fixture_images/stellenbosch_swallows.jpg'),
            commentary: [
                {
                  "Min": 0,
                  "Txt": "Game Starts"
                },
                
                {
                    "Min": 3,
                    "Txt": "Stellenbosch nich in the first goal"
                },
                {
                    "Min": 34,
                    "Txt": "Banger netted in by Stellenbosch's center back"
                },
                {
                    'Min': 40,
                    'Txt': 'Swallows with the Equaliser from a corner'
                }
            ]

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
                color: '#000267',
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
                },
                lineUp: [
                    {
                        name: 'S. Nwabili',
                        number: 32,
                        position: ['GK', 'GK']
                    },
                    {
                        name: 'S. Kammies',
                        number: 25,
                        position: ['DEF', 'RB']
                    },
                    {
                        name: 'Z. Mdunyelwa',
                        number: 2,
                        position: ['DEF', 'RCB']
                    },
                    {
                        name: 'R. Pietersen',
                        number: 5,
                        position: ['DEF', 'CB']
                    },
                    {
                        name: 'R. Pfumbidzai',
                        number: 15,
                        position: ['DEF', 'LCB']
                    },
                    {
                        name: 'A. Ntsabo',
                        number: 3,
                        position: ['DEF', 'LB']
                    },
                    {
                        name: 'T. Lebitso',
                        number: 28,
                        position: ['FWD', 'RW']
                    },
                    {
                        name: 'S. Mkhize',
                        number: 14,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'S. Luthuli',
                        number: 36,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'R. Maarman',
                        number: 17,
                        position: ['FWD', 'LW']
                    },
                    {
                        name: 'E. Ighodaro',
                        number: 37,
                        position: ['FWD', 'ST']
                    },
                ]
            },
            away: {
                name: 'Golden Arrows',
                logo: icons.arrows_badge,
                shortName: 'ARR',
                score: 3,
                color: '#1e793b',
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
                },
                lineUp: [
                    {
                        name: 'S. Mbatha',
                        number: 28,
                        position: ['GK', 'GK']
                    },
                    {
                        name: 'S. Hlatshwayo',
                        number: 22,
                        position: ['DEF', 'RB']
                    },
                    {
                        name: 'S. Ndlovu',
                        number: 37,
                        position: ['DEF', 'RCB']
                    },
                    {
                        name: 'T. Manthiyane',
                        number: 35,
                        position: ['DEF', 'LCB']
                    },
                    {
                        name: 'D. Lunga',
                        number: 3,
                        position: ['DEF', 'LB']
                    },
                    {
                        name: 'V. Ndwandwe',
                        number: 12,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'N. Makhubela',
                        number: 8,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'G. Khumalo',
                        number: 4,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'P. Mmodi',
                        number: 13,
                        position: ['FWD', 'LW']
                    },
                    {
                        name: 'N. Sibya',
                        number: 11,
                        position: ['FWD', 'RW']
                    },
                    {
                        name: 'K. Mutizwa',
                        number: 18,
                        position: ['FWD', 'ST']
                    },
                ]
            }
        },
        fixture: {
            time: "20:00",
            stadium: "Harry Gwala Stadium",
            tournament: icons.mtn8_logo,
            tournamentName: 'MTN 8',
            stream: '',
            bgColor: COLORS.support_primary,
            fixtueImg: require('../assets/images/fixture_images/arrows_chippa.jpg'),
            commentary: [
                {
                  "Min": 0,
                  "Txt": "Game Starts"
                },
                
                {
                    "Min": 1,
                    "Txt": "Arrows score the fastest goal in the league's history"
                },
            ]

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
                color: '#145e8a',
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
                },
                lineUp: [
                    {
                        name: 'J. Salim',
                        number: 80,
                        position: ['GK', 'GK']
                    },
                    {
                        name: 'K. Maphathe',
                        number: 2,
                        position: ['DEF', 'RB']
                    },
                    {
                        name: 'N. Nyauza',
                        number: 34,
                        position: ['DEF', 'RCB']
                    },
                    {
                        name: 'T. Mabua',
                        number: 35,
                        position: ['DEF', 'LCB']
                    },
                    {
                        name: 'S. Msani',
                        number: 7,
                        position: ['DEF', 'LB']
                    },
                    {
                        name: 'B. Barns',
                        number: 30,
                        position: ['FWD', 'RW']
                    },
                    {
                        name: 'L. Mhlongo',
                        number: 21,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'T. Mtolo',
                        number: 4,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'S. Ntsundwana',
                        number: 45,
                        position: ['FWD', 'LW']
                    },
                    {
                        name: 'A. Mabaso',
                        number: 6,
                        position: ['FWD', 'ST']
                    },
                    {
                        name: 'Y. Mbuthuma',
                        number: 9,
                        position: ['FWD', 'ST']
                    },
                ]
            },
            away: {
                name: 'T.S Galaxy',
                logo: icons.ts_galaxy_badge,
                shortName: 'TSG',
                score: 0,
                color: '#dc2141',
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
                },
                lineUp: [
                    {
                        name: 'V. Kolak',
                        number: 32,
                        position: ['GK', 'GK']
                    },
                    {
                        name: 'M. Munyai',
                        number: 23,
                        position: ['DEF', 'RB']
                    },
                    {
                        name: 'S. Msimango',
                        number: 5,
                        position: ['DEF', 'RCB']
                    },
                    {
                        name: 'P. Sanoka',
                        number: 3,
                        position: ['DEF', 'LCB']
                    },
                    {
                        name: 'T. Nyama',
                        number: 11,
                        position: ['DEF', 'LB']
                    },
                    {
                        name: 'B. Parker',
                        number: 17,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'M. Mbunjana',
                        number: 8,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'Y. Medina',
                        number: 37,
                        position: ['FWD', 'RW']
                    },
                    {
                        name: 'X. Mlambo',
                        number: 20,
                        position: ['MID', 'CM']
                    },
                    {
                        name: 'L. Mahlangu',
                        number: 27,
                        position: ['FWD', 'LW']
                    },
                    {
                        name: 'D. Traore',
                        number: 9,
                        position: ['FWD', 'ST']
                    },
                ]
            }
        },
        fixture: {
            time: "15:30",
            stadium: "Mbombela Stadium",
            tournament: icons.dstv_logo,
            tournamentName: 'DSTV Premiership',
            stream: '',
            bgColor: COLORS.support_primary,
            fixtureImg: require('../assets/images/fixture_images/richards_galaxy.webp'),
            commentary: [
                {
                  "Min": 0,
                  "Txt": "Game Starts"
                },
                
                {
                    "Min": 13,
                    "Txt": "Galaxy have missed their first 3 shots on goal"
                },
                {
                    "Min": 45,
                    "Txt": "Halftime: It's an equal game at both ends"
                },
                {
                    'Min': 66,
                    'Txt': 'Richards Bay have hit the post twice in the last 4 minutes'
                }
            ]

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


// let home = standings.map((team) => team.teams.home.standings.pts());
// let away = standings.map((team) => team.teams.home.standings.pts());
var home = standings.map((team) => team.teams.home);
var away = standings.map((team) => team.teams.away);
var combinedTeams = home.concat(away);
var sortedStandings = combinedTeams.sort((a,b) => b.standings.pts() - a.standings.pts());


export {fixtures, results, sortedStandings}
const exampleData = [
  {
    name: 'aute aliqua. ',
description: 'nulla ',
price: 675,
itemCreation: 'elit, ',
materials: 'id sed in ' },
{ name: 'fugiat proident, ',
description: 'non ',
price: 852,
itemCreation: 'do ',
materials: 'esse ut nostrud ' 
  },
{ name: 'et veniam, ',
description: 'nisi ',
price: 555,
itemCreation: 'anim ',
materials: 'eiusmod id ' },
{ name: 'amet, aliquip ',
description: 'Excepteur ',
price: 506,
itemCreation: 'irure ',
materials: 'enim anim ' },
{ name: 'minim dolor ',
description: 'cupidatat ',
price: 927,
itemCreation: 'ipsum ',
materials: 'in cillum ' },
{ name: 'ullamco magna ',
description: 'voluptate ',
price: 882,
itemCreation: 'anim ',
materials: 'aliquip Lorem ' },
{ name: 'aliquip do ',
description: 'officia ',
price: 220,
itemCreation: 'cupidatat ',
materials: 'aliquip Lorem ' },
{ name: 'adipiscing ',
description: 'non ',
price: 115,
itemCreation: 'in ',
materials: 'minim ad eu ' },
{ name: 'exercitation ',
description: 'ipsum ',
price: 835,
itemCreation: 'occaecat ',
materials: 'velit pariatur. ' },
{ name: 'Excepteur ',
description: 'culpa ',
price: 688,
itemCreation: 'non ',
materials: 'irure Excepteur ' },
{ name: 'aute ex minim ',
description: 'sunt ',
price: 330,
itemCreation: 'in ',
materials: 'Duis Ut dolor ' },
{ name: 'sed sed minim ',
description: 'reprehenderit ',
price: 91,
itemCreation: 'et ',
materials: 'officia enim ' },
{ name: 'et veniam, ',
description: 'do ',
price: 573,
itemCreation: 'mollit ',
materials: 'nostrud magna ' },
{ name: 'exercitation ',
description: 'cupidatat ',
price: 430,
itemCreation: 'cillum ',
materials: 'esse occaecat ' },
{ name: 'tempor in ',
description: 'consequat. ',
price: 66,
itemCreation: 'id ',
materials: 'exercitation ' },
{ name: 'ut sit dolore ',
description: 'mollit ',
price: 527,
itemCreation: 'non ',
materials: 'velit consectetur ' },
{ name: 'ex in irure ',
description: 'ea ',
price: 471,
itemCreation: 'Lorem ',
materials: 'do exercitation ' },
{ name: 'in deserunt ',
description: 'non ',
price: 330,
itemCreation: 'velit ',
materials: 'aliqua. proident, ' },
{ name: 'velit pariatur. ',
description: 'nostrud ',
price: 50,
itemCreation: 'deserunt ',
materials: 'velit pariatur. ' },
{ name: 'minim laboris ',
description: 'sint ',
price: 98,
itemCreation: 'ullamco ',
materials: 'sed in ut ' },
{ name: 'proident, ',
description: 'officia ',
price: 301,
itemCreation: 'exercitation ',
materials: 'magna veniam, ' },
{ name: 'exercitation ',
description: 'consectetur ',
price: 994,
itemCreation: 'eiusmod ',
materials: 'eiusmod id ' },
{ name: 'nisi occaecat ',
description: 'incididunt ',
price: 109,
itemCreation: 'ad ',
materials: 'culpa nulla ' },
{ name: 'dolore eu ',
description: 'ullamco ',
price: 602,
itemCreation: 'labore ',
materials: 'esse esse ' },
{ name: 'minim non ',
description: 'ut ',
price: 500,
itemCreation: 'ullamco ',
materials: 'exercitation ' },
{ name: 'qui sunt pariatur. ',
description: 'anim ',
price: 806,
itemCreation: 'enim ',
materials: 'amet, ullamco ' },
{ name: 'amet, aliquip ',
description: 'commodo ',
price: 148,
itemCreation: 'eiusmod ',
materials: 'esse dolor ' },
{ name: 'aliqua. voluptate ',
description: 'enim ',
price: 867,
itemCreation: 'in ',
materials: 'Duis eu labore ' },
{ name: 'in aliqua. ',
description: 'consequat. ',
price: 138,
itemCreation: 'Lorem ',
materials: 'fugiat in ' },
{ name: 'consectetur ',
description: 'commodo ',
price: 606,
itemCreation: 'aute ',
materials: 'dolor velit ' },
{ name: 'esse dolor ',
description: 'voluptate ',
price: 245,
itemCreation: 'labore ',
materials: 'Duis nulla ' },
{ name: 'irure Excepteur ',
description: 'magna ',
price: 521,
itemCreation: 'irure ',
materials: 'deserunt consequat. ' },
{ name: 'ad ea quis ',
description: 'culpa ',
price: 868,
itemCreation: 'labore ',
materials: 'magna ea reprehenderit ' },
{ name: 'consectetur ',
description: 'velit ',
price: 994,
itemCreation: 'mollit ',
materials: 'esse cillum ' },
{ name: 'in cillum ',
description: 'laboris ',
price: 983,
itemCreation: 'occaecat ',
materials: 'aliquip Lorem ' },
{ name: 'sed sed minim ',
description: 'do ',
price: 590,
itemCreation: 'voluptate ',
materials: 'ipsum id ipsum ' },
{ name: 'in cillum ',
description: 'est ',
price: 247,
itemCreation: 'sit ',
materials: 'minim ad eu ' },
{ name: 'deserunt exercitation ',
description: 'dolor ',
price: 439,
itemCreation: 'Lorem ',
materials: 'amet, aliquip ' },
{ name: 'Lorem voluptate ',
description: 'ex ',
price: 98,
itemCreation: 'aute ',
materials: 'incididunt ' },
{ name: 'dolore deserunt ',
description: 'qui ',
price: 675,
itemCreation: 'ex ',
materials: 'Ut ad est ' },
{ name: 'deserunt veniam, ',
description: 'sit ',
price: 245,
itemCreation: 'anim ',
materials: 'eiusmod id ' },
{ name: 'velit dolore ',
description: 'Lorem ',
price: 21,
itemCreation: 'elit, ',
materials: 'aliqua. id ' },
{ name: 'Duis officia ',
description: 'cupidatat ',
price: 992,
itemCreation: 'do ',
materials: 'voluptate ' },
{ name: 'do exercitation ',
description: 'mollit ',
price: 163,
itemCreation: 'ea ',
materials: 'enim aliqua. ' },
{ name: 'Excepteur ',
description: 'esse ',
price: 446,
itemCreation: 'cillum ',
materials: 'amet, veniam, ' },
{ name: 'voluptate ',
description: 'laboris ',
price: 489,
itemCreation: 'non ',
materials: 'Duis Ut dolor ' },
{ name: 'Excepteur ',
description: 'dolor ',
price: 138,
itemCreation: 'voluptate ',
materials: 'Duis officia ' },
{ name: 'Duis Ut dolor ',
description: 'consequat ',
price: 717,
itemCreation: 'incididunt ',
materials: 'labore ad ' },
{ name: 'dolore eu ',
description: 'sint ',
price: 814,
itemCreation: 'deserunt ',
materials: 'Ut Excepteur ' },
{ name: 'cupidatat ',
description: 'sint ',
price: 717,
itemCreation: 'fugiat ',
materials: 'pariatur. ' },
{ name: 'labore ad ',
description: 'proident, ',
price: 675,
itemCreation: 'Excepteur ',
materials: 'velit ea sint ' },
{ name: 'labore aliqua. ',
description: 'enim ',
price: 632,
itemCreation: 'incididunt ',
materials: 'tempor veniam, ' },
{ name: 'Duis officia ',
description: 'dolor ',
price: 492,
itemCreation: 'ut ',
materials: 'exercitation ' },
{ name: 'qui Ut in ',
description: 'elit, ',
price: 766,
itemCreation: 'fugiat ',
materials: 'labore aliqua. ' },
{ name: 'amet, ullamco ',
description: 'anim ',
price: 858,
itemCreation: 'reprehenderit ',
materials: 'velit pariatur. ' },
{ name: 'mollit magna ',
description: 'reprehenderit ',
price: 774,
itemCreation: 'cillum ',
materials: 'dolore ea ' },
{ name: 'labore aliqua. ',
description: 'deserunt ',
price: 992,
itemCreation: 'dolor ',
materials: 'esse occaecat ' },
{ name: 'irure do esse ',
description: 'qui ',
price: 474,
itemCreation: 'consectetur ',
materials: 'dolore non ' },
{ name: 'enim aliqua. ',
description: 'aliqua. ',
price: 915,
itemCreation: 'esse ',
materials: 'quis exercitation ' },
{ name: 'minim non ',
description: 'ex ',
price: 672,
itemCreation: 'aliquip ',
materials: 'ex in irure ' },
{ name: 'qui sunt pariatur. ',
description: 'eu ',
price: 688,
itemCreation: 'aute ',
materials: 'aute ex minim ' },
{ name: 'cupidatat ',
description: 'enim ',
price: 882,
itemCreation: 'consequat. ',
materials: 'voluptate ' },
{ name: 'consectetur ',
description: 'in ',
price: 835,
itemCreation: 'do ',
materials: 'commodo sit ' },
{ name: 'sunt adipiscing ',
description: 'eu ',
price: 681,
itemCreation: 'nisi ',
materials: 'ullamco minim ' },
{ name: 'minim velit ',
description: 'et ',
price: 2,
itemCreation: 'anim ',
materials: 'do proident, ' },
{ name: 'commodo id ',
description: 'ipsum ',
price: 500,
itemCreation: 'aliqua. ',
materials: 'magna ea reprehenderit ' },
{ name: 'sunt velit ',
description: 'non ',
price: 509,
itemCreation: 'dolor ',
materials: 'labore aliqua. ' },
{ name: 'consectetur ',
description: 'ex ',
price: 172,
itemCreation: 'dolor ',
materials: 'et in irure ' },
{ name: 'do proident, ',
description: 'Duis ',
price: 33,
itemCreation: 'aliqua. ',
materials: 'amet, ullamco ' },
{ name: 'Duis eu labore ',
description: 'in ',
price: 442,
itemCreation: 'consectetur ',
materials: 'et veniam, ' },
{ name: 'laboris Excepteur ',
description: 'labore ',
price: 781,
itemCreation: 'in ',
materials: 'id sed in ' },
{ name: 'minim dolor ',
description: 'pariatur. ',
price: 302,
itemCreation: 'cupidatat ',
materials: 'dolore est ' },
{ name: 'amet, aliquip ',
description: 'velit ',
price: 601,
itemCreation: 'est ',
materials: 'proident, ' },
{ name: 'in ex occaecat ',
description: 'minim ',
price: 765,
itemCreation: 'ipsum ',
materials: 'sed do ipsum ' },
{ name: 'sit reprehenderit ',
description: 'voluptate ',
price: 220,
itemCreation: 'occaecat ',
materials: 'officia in ' },
{ name: 'dolore est ',
description: 'Ut ',
price: 241,
itemCreation: 'dolor ',
materials: 'id sed in ' },
{ name: 'aliqua. voluptate ',
description: 'veniam, ',
price: 434,
itemCreation: 'do ',
materials: 'do proident, ' },
{ name: 'ut sit dolore ',
description: 'occaecat ',
price: 251,
itemCreation: 'culpa ',
materials: 'consequat. ' },
{ name: 'exercitation ',
description: 'ullamco ',
price: 744,
itemCreation: 'occaecat ',
materials: 'consectetur ' },
{ name: 'magna veniam, ',
description: 'ad ',
price: 899,
itemCreation: 'cillum ',
materials: 'sit reprehenderit ' },
{ name: 'consectetur ',
description: 'mollit ',
price: 554,
itemCreation: 'cillum ',
materials: 'aute aliqua. ' },
{ name: 'minim ad eu ',
description: 'Lorem ',
price: 43,
itemCreation: 'nisi ',
materials: 'aute ex minim ' },
{ name: 'Lorem dolore ',
description: 'ad ',
price: 858,
itemCreation: 'consequat. ',
materials: 'minim ut voluptate ' },
{ name: 'Lorem ut aliqua. ',
description: 'veniam, ',
price: 966,
itemCreation: 'enim ',
materials: 'amet, Ut incididunt ' },
{ name: 'consectetur ',
description: 'minim ',
price: 220,
itemCreation: 'magna ',
materials: 'dolor proident, ' },
{ name: 'minim ut voluptate ',
description: 'deserunt ',
price: 489,
itemCreation: 'mollit ',
materials: 'amet, Ut incididunt ' },
{ name: 'Duis aliquip ',
description: 'esse ',
price: 835,
itemCreation: 'Lorem ',
materials: 'fugiat in ' },
{ name: 'in quis eu ',
description: 'anim ',
price: 330,
itemCreation: 'ea ',
materials: 'pariatur. ' },
{ name: 'proident, ',
description: 'esse ',
price: 521,
itemCreation: 'eu ',
materials: 'in cillum ' },
{ name: 'velit dolore ',
description: 'esse ',
price: 766,
itemCreation: 'do ',
materials: 'adipiscing ' },
{ name: 'ut sit dolore ',
description: 'ipsum ',
price: 964,
itemCreation: 'do ',
materials: 'mollit nisi ' },
{ name: 'Excepteur ',
description: 'ex ',
price: 915,
itemCreation: 'exercitation ',
materials: 'sed dolor ' },
{ name: 'aute aliqua. ',
description: 'elit, ',
price: 302,
itemCreation: 'ut ',
materials: 'dolore ut ' },
{ name: 'do exercitation ',
description: 'consectetur ',
price: 669,
itemCreation: 'exercitation ',
materials: 'officia elit, ' },
{ name: 'ut in consequat. ',
description: 'occaecat ',
price: 56,
itemCreation: 'ea ',
materials: 'dolore ut ' },
{ name: 'minim non ',
description: 'esse ',
price: 34,
itemCreation: 'dolor ',
materials: 'enim anim ' },
{ name: 'magna anim ',
description: 'ad ',
price: 66,
itemCreation: 'Excepteur ',
materials: 'proident, ' },
{ name: 'amet, Ut incididunt ',
description: 'culpa ',
price: 349,
itemCreation: 'esse ',
materials: 'consectetur ' },
{ name: 'Duis Ut dolor ',
description: 'nisi ',
price: 632,
itemCreation: 'Lorem ',
materials: 'Excepteur ' },
{ name: 'et cillum ',
description: 'Duis ',
price: 179,
itemCreation: 'anim ',
materials: 'eiusmod id ' },
{ name: 'quis tempor ',
description: 'anim ',
price: 717,
itemCreation: 'ea ',
materials: 'aliqua. proident, ' },
{ name: 'tempor proident, ',
description: 'eu ',
price: 431,
itemCreation: 'in ',
materials: 'velit pariatur. ' },
{ name: 'sint est eiusmod ',
description: 'magna ',
price: 179,
itemCreation: 'aliquip ',
materials: 'irure Excepteur ' },
{ name: 'mollit magna ',
description: 'ea ',
price: 632,
itemCreation: 'aliqua. ',
materials: 'sunt fugiat ' },
{ name: 'dolore est ',
description: 'id ',
price: 450,
itemCreation: 'fugiat ',
materials: 'magna ea reprehenderit ' },
{ name: 'Ut ad est ',
description: 'do ',
price: 301,
itemCreation: 'do ',
materials: 'fugiat in ' },
{ name: 'mollit nisi ',
description: 'do ',
price: 716,
itemCreation: 'voluptate ',
materials: 'ad ea sed ' },
{ name: 'veniam, commodo ',
description: 'enim ',
price: 717,
itemCreation: 'commodo ',
materials: 'nostrud ut ' },
{ name: 'sint et eiusmod ',
description: 'in ',
price: 553,
itemCreation: 'nisi ',
materials: 'in ex occaecat ' },
{ name: 'cupidatat ',
description: 'mollit ',
price: 975,
itemCreation: 'anim ',
materials: 'Ut minim Excepteur ' },
{ name: 'consectetur ',
description: 'ullamco ',
price: 449,
itemCreation: 'id ',
materials: 'incididunt ' },
{ name: 'consectetur ',
description: 'cillum ',
price: 46,
itemCreation: 'sit ',
materials: 'amet, aliquip ' },
{ name: 'qui nulla ',
description: 'Lorem ',
price: 854,
itemCreation: 'aliqua. ',
materials: 'labore velit ' },
{ name: 'qui sunt pariatur. ',
description: 'irure ',
price: 676,
itemCreation: 'consectetur ',
materials: 'tempor in ' },
{ name: 'reprehenderit ',
description: 'in ',
price: 983,
itemCreation: 'officia ',
materials: 'sint ex magna ' },
{ name: 'do exercitation ',
description: 'do ',
price: 892,
itemCreation: 'aliqua. ',
materials: 'sed in ut ' },
{ name: 'sint consectetur ',
description: 'magna ',
price: 145,
itemCreation: 'elit, ',
materials: 'Duis exercitation ' },
{ name: 'dolore est ',
description: 'magna ',
price: 527,
itemCreation: 'anim ',
materials: 'in eiusmod ' },
{ name: 'dolor in et ',
description: 'in ',
price: 732,
itemCreation: 'est ',
materials: 'Lorem nulla ' },
{ name: 'fugiat in ',
description: 'in ',
price: 571,
itemCreation: 'mollit ',
materials: 'mollit magna ' },
{ name: 'deserunt exercitation ',
description: 'nisi ',
price: 717,
itemCreation: 'tempor ',
materials: 'velit consectetur ' },
{ name: 'irure id reprehenderit ',
description: 'proident, ',
price: 21,
itemCreation: 'dolor ',
materials: 'sed ea pariatur. ' },
{ name: 'magna veniam, ',
description: 'officia ',
price: 150,
itemCreation: 'in ',
materials: 'deserunt veniam, ' },
{ name: 'sit reprehenderit ',
description: 'sint ',
price: 964,
itemCreation: 'minim ',
materials: 'labore velit ' },
{ name: 'magna voluptate ',
description: 'nulla ',
price: 676,
itemCreation: 'fugiat ',
materials: 'velit pariatur. ' },
{ name: 'in eiusmod ',
description: 'Lorem ',
price: 446,
itemCreation: 'nulla ',
materials: 'elit, Ut cupidatat ' },
{ name: 'esse cillum ',
description: 'ea ',
price: 495,
itemCreation: 'pariatur. ',
materials: 'adipiscing ' },
{ name: 'labore ad ',
description: 'eu ',
price: 653,
itemCreation: 'ea ',
materials: 'aute aliqua. ' },
{ name: 'aliqua. id ',
description: 'minim ',
price: 970,
itemCreation: 'consectetur ',
materials: 'non aliquip ' },
{ name: 'minim occaecat ',
description: 'Excepteur ',
price: 69,
itemCreation: 'velit ',
materials: 'aliquip Lorem ' },
{ name: 'dolore Duis ',
description: 'ullamco ',
price: 736,
itemCreation: 'aute ',
materials: 'commodo id ' },
{ name: 'ullamco anim ',
description: 'occaecat ',
price: 51,
itemCreation: 'consequat ',
materials: 'amet, dolor ' },
{ name: 'tempor eiusmod ',
description: 'velit ',
price: 854,
itemCreation: 'non ',
materials: 'minim dolor ' },
{ name: 'velit pariatur. ',
description: 'ex ',
price: 863,
itemCreation: 'labore ',
materials: 'labore velit ' },
{ name: 'voluptate ',
description: 'magna ',
price: 66,
itemCreation: 'consequat. ',
materials: 'dolore qui ' },
{ name: 'et veniam, ',
description: 'deserunt ',
price: 607,
itemCreation: 'qui ',
materials: 'Excepteur ' },
{ name: 'minim ut voluptate ',
description: 'anim ',
price: 241,
itemCreation: 'do ',
materials: 'officia elit, ' },
{ name: 'nostrud ut ',
description: 'eu ',
price: 500,
itemCreation: 'exercitation ',
materials: 'culpa consequat. ' },
{ name: 'deserunt consequat. ',
description: 'incididunt ',
price: 717,
itemCreation: 'officia ',
materials: 'in ullamco ' },
{ name: 'aute aliqua. ',
description: 'amet, ',
price: 602,
itemCreation: 'occaecat ',
materials: 'sint est eiusmod ' },
{ name: 'exercitation ',
description: 'Lorem ',
price: 595,
itemCreation: 'ut ',
materials: 'in aliqua. ' },
{ name: 'nisi occaecat ',
description: 'culpa ',
price: 3,
itemCreation: 'in ',
materials: 'qui nulla ' },
{ name: 'Ut ut Ut in ',
description: 'deserunt ',
price: 867,
itemCreation: 'sint ',
materials: 'magna Duis ' },
{ name: 'irure id reprehenderit ',
description: 'proident, ',
price: 349,
itemCreation: 'aute ',
materials: 'minim esse ' },
{ name: 'nostrud deserunt ',
description: 'deserunt ',
price: 509,
itemCreation: 'cupidatat ',
materials: 'tempor veniam, ' },
{ name: 'Duis exercitation ',
description: 'dolor ',
price: 781,
itemCreation: 'incididunt ',
materials: 'enim magna ' },
{ name: 'sed dolor ',
description: 'est ',
price: 110,
itemCreation: 'esse ',
materials: 'nulla in enim ' },
{ name: 'culpa consequat. ',
description: 'nisi ',
price: 515,
itemCreation: 'incididunt ',
materials: 'consectetur ' },
{ name: 'velit dolore ',
description: 'cupidatat ',
price: 136,
itemCreation: 'eu ',
materials: 'Duis laboris ' },
{ name: 'in ut consequat. ',
description: 'occaecat ',
price: 781,
itemCreation: 'in ',
materials: 'enim magna ' },
{ name: 'aute dolor ',
description: 'eiusmod ',
price: 109,
itemCreation: 'Duis ',
materials: 'nostrud ut ' },
{ name: 'et in irure ',
description: 'officia ',
price: 758,
itemCreation: 'veniam, ',
materials: 'sed dolor ' },
{ name: 'Lorem voluptate ',
description: 'consectetur ',
price: 145,
itemCreation: 'veniam, ',
materials: 'exercitation ' },
{ name: 'magna anim ',
description: 'mollit ',
price: 824,
itemCreation: 'eiusmod ',
materials: 'commodo sit ' },
{ name: 'nisi occaecat ',
description: 'adipiscing ',
price: 145,
itemCreation: 'fugiat ',
materials: 'culpa tempor ' },
{ name: 'anim eiusmod ',
description: 'enim ',
price: 332,
itemCreation: 'aliquip ',
materials: 'consectetur ' },
{ name: 'in cillum ',
description: 'occaecat ',
price: 474,
itemCreation: 'enim ',
materials: 'sit reprehenderit ' },
{ name: 'consectetur ',
description: 'ea ',
price: 36,
itemCreation: 'eiusmod ',
materials: 'dolore exercitation ' },
{ name: 'sint consectetur ',
description: 'consequat ',
price: 553,
itemCreation: 'qui ',
materials: 'esse ut nostrud ' },
{ name: 'ut qui fugiat ',
description: 'elit, ',
price: 674,
itemCreation: 'sunt ',
materials: 'Excepteur ' },
{ name: 'qui Ut in ',
description: 'Excepteur ',
price: 515,
itemCreation: 'aute ',
materials: 'consectetur ' },
{ name: 'consequat. ',
description: 'velit ',
price: 636,
itemCreation: 'Excepteur ',
materials: 'qui sunt pariatur. ' },
{ name: 'officia elit, ',
description: 'laboris ',
price: 150,
itemCreation: 'et ',
materials: 'nulla esse ' },
{ name: 'incididunt ',
description: 'sed ',
price: 746,
itemCreation: 'ex ',
materials: 'dolore eu ' },
{ name: 'in nostrud ',
description: 'consequat ',
price: 546,
itemCreation: 'qui ',
materials: 'quis labore ' },
{ name: 'adipiscing ',
description: 'incididunt ',
price: 546,
itemCreation: 'minim ',
materials: 'nulla esse ' },
{ name: 'amet, veniam, ',
description: 'aliquip ',
price: 970,
itemCreation: 'ex ',
materials: 'officia elit, ' },
{ name: 'quis tempor ',
description: 'Duis ',
price: 863,
itemCreation: 'reprehenderit ',
materials: 'labore velit ' },
{ name: 'ut qui fugiat ',
description: 'sint ',
price: 446,
itemCreation: 'velit ',
materials: 'ut in consequat. ' },
{ name: 'fugiat in ',
description: 'occaecat ',
price: 573,
itemCreation: 'esse ',
materials: 'et veniam, ' },
{ name: 'velit dolore ',
description: 'commodo ',
price: 349,
itemCreation: 'nisi ',
materials: 'sunt amet, ' },
{ name: 'id sed in ',
description: 'do ',
price: 230,
itemCreation: 'sed ',
materials: 'sunt adipiscing ' },
{ name: 'reprehenderit ',
description: 'commodo ',
price: 766,
itemCreation: 'Lorem ',
materials: 'dolore ut ' },
{ name: 'Ut ad est ',
description: 'aliquip ',
price: 113,
itemCreation: 'consequat. ',
materials: 'commodo id ' },
{ name: 'ad ea sed ',
description: 'exercitation ',
price: 136,
itemCreation: 'nisi ',
materials: 'sed sed minim ' },
{ name: 'aute consectetur ',
description: 'ea ',
price: 674,
itemCreation: 'commodo ',
materials: 'aute ex minim ' },
{ name: 'tempor in ',
description: 'occaecat ',
price: 824,
itemCreation: 'occaecat ',
materials: 'Lorem voluptate ' },
{ name: 'minim esse ',
description: 'aliquip ',
price: 446,
itemCreation: 'deserunt ',
materials: 'dolor incididunt ' },
{ name: 'esse dolor ',
description: 'Duis ',
price: 313,
itemCreation: 'non ',
materials: 'sint est eiusmod ' },
{ name: 'dolore dolore ',
description: 'enim ',
price: 863,
itemCreation: 'occaecat ',
materials: 'fugiat proident, ' },
{ name: 'exercitation ',
description: 'eiusmod ',
price: 307,
itemCreation: 'ea ',
materials: 'in ex occaecat ' },
{ name: 'adipiscing ',
description: 'velit ',
price: 824,
itemCreation: 'non ',
materials: 'adipiscing ' },
{ name: 'amet, veniam, ',
description: 'occaecat ',
price: 672,
itemCreation: 'Excepteur ',
materials: 'consequat. ' },
{ name: 'nostrud magna ',
description: 'dolore ',
price: 51,
itemCreation: 'ea ',
materials: 'aliqua. voluptate ' },
{ name: 'irure Excepteur ',
description: 'ea ',
price: 109,
itemCreation: 'irure ',
materials: 'sed in ut ' },
{ name: 'in aliqua. ',
description: 'aliquip ',
price: 944,
itemCreation: 'Duis ',
materials: 'dolore ea ' },
{ name: 'nostrud magna ',
description: 'anim ',
price: 758,
itemCreation: 'non ',
materials: 'fugiat in ' },
{ name: 'ullamco adipiscing ',
description: 'ad ',
price: 46,
itemCreation: 'Excepteur ',
materials: 'ullamco minim ' },
{ name: 'dolore ea ',
description: 'Lorem ',
price: 618,
itemCreation: 'Excepteur ',
materials: 'consectetur ' },
{ name: 'incididunt ',
description: 'et ',
price: 924,
itemCreation: 'Duis ',
materials: 'ad ea sed ' },
{ name: 'Ut minim Excepteur ',
description: 'culpa ',
price: 656,
itemCreation: 'pariatur. ',
materials: 'ullamco nulla ' },
{ name: 'magna ea reprehenderit ',
description: 'veniam, ',
price: 301,
itemCreation: 'do ',
materials: 'Excepteur ' },
{ name: 'sint consectetur ',
description: 'labore ',
price: 774,
itemCreation: 'in ',
materials: 'officia elit, ' },
{ name: 'mollit magna ',
description: 'ex ',
price: 607,
itemCreation: 'consectetur ',
materials: 'labore aliqua. ' },
{ name: 'in in exercitation ',
description: 'eiusmod ',
price: 40,
itemCreation: 'eu ',
materials: 'minim non ' },
{ name: 'enim anim ',
description: 'ipsum ',
price: 237,
itemCreation: 'minim ',
materials: 'deserunt exercitation ' },
{ name: 'quis exercitation ',
description: 'aliquip ',
price: 495,
itemCreation: 'labore ',
materials: 'in deserunt ' },
{ name: 'Excepteur ',
description: 'ullamco ',
price: 16,
itemCreation: 'Lorem ',
materials: 'qui commodo ' },
{ name: 'irure Excepteur ',
description: 'veniam, ',
price: 992,
itemCreation: 'ex ',
materials: 'sed in ut ' },
{ name: 'fugiat in ',
description: 'ut ',
price: 972,
itemCreation: 'commodo ',
materials: 'in deserunt ' }]

let Sequelize = require('sequelize');
let sqlz = new Sequelize('etsypersonal', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

const Product = sqlz.define('product', {
    name: Sequelize.TEXT,
    description: Sequelize.TEXT,
    price: Sequelize["DOUBLE PRECISION"],
    itemCreation: Sequelize.TEXT,
    materials: Sequelize.TEXT,

  },{
    schema: 'public'
  })


  Product.sync({force: true}).then(() => {
    Product.bulkCreate(exampleData)
    .then(data => {
      console.log(`saved: ${data}`)
    })
    .catch(err => {
      console.log(`err: ${err}`)
    })
  });

  module.exports; 
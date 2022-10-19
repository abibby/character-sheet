export default [
    {
        "name": "Artificer",
        "source": "UAArtificer",
        "page": 1,
        "isReprinted": true,
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "con",
            "int"
        ],
        "spellcastingAbility": "int",
        "casterProgression": "1/3",
        "spellsKnownProgression": [
            0,
            0,
            3,
            4,
            4,
            4,
            5,
            6,
            6,
            7,
            8,
            8,
            9,
            10,
            10,
            11,
            11,
            11,
            12,
            13
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium"
            ],
            "weapons": [
                "simple"
            ],
            "tools": [
                "{@item Thieves' tools|PHB}",
                "{@item tinker's tools|PHB}",
                "one type of {@item artisan's tools|PHB} of your choice"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "arcana",
                            "deception",
                            "history",
                            "investigation",
                            "medicine",
                            "nature",
                            "religion",
                            "sleight of hand"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item handaxe|phb} and a {@item light hammer|phb} or (b) any two {@filter simple weapons|items|source=phb|category=basic|type=simple weapon}",
                "a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts}",
                "(a) {@item scale mail|phb} or (b) {@item studded leather armor|phb}",
                "{@item thieves' tools|phb} and a {@item dungeoneer's pack|phb}"
            ],
            "defaultData": [
                {
                    "a": [
                        "handaxe|phb",
                        "light hammer|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimple",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "_": [
                        "light crossbow|phb",
                        "crossbow bolts (20)|phb"
                    ]
                },
                {
                    "a": [
                        "scale mail|phb"
                    ],
                    "b": [
                        "studded leather armor|phb"
                    ]
                },
                {
                    "_": [
                        "thieves' tools|phb",
                        "dungeoneer's pack|phb"
                    ]
                }
            ]
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Spells Known|spells|class=artificer (uaa)}"
                ],
                "rows": [
                    [
                        0
                    ],
                    [
                        0
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        6
                    ],
                    [
                        6
                    ],
                    [
                        7
                    ],
                    [
                        8
                    ],
                    [
                        8
                    ],
                    [
                        9
                    ],
                    [
                        10
                    ],
                    [
                        10
                    ],
                    [
                        11
                    ],
                    [
                        11
                    ],
                    [
                        11
                    ],
                    [
                        12
                    ],
                    [
                        13
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Artificer (UAA)}",
                    "{@filter 2nd|spells|level=2|class=Artificer (UAA)}",
                    "{@filter 3rd|spells|level=3|class=Artificer (UAA)}",
                    "{@filter 4th|spells|level=4|class=Artificer (UAA)}"
                ],
                "rowsSpellProgression": [
                    [
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        1
                    ]
                ]
            }
        ],
        "classFeatures": [
            {
                "classFeature": "Artificer Specialist|Artificer|UAArtificer|1",
                "gainSubclassFeature": true
            },
            "Magic Item Analysis|Artificer|UAArtificer|1",
            "Tool Expertise|Artificer|UAArtificer|2",
            "Wondrous Invention|Artificer|UAArtificer|2",
            {
                "classFeature": "Masterwork Feature|Artificer|UAArtificer|3",
                "gainSubclassFeature": true
            },
            "Spellcasting|Artificer|UAArtificer|3",
            "Infuse Magic|Artificer|UAArtificer|4",
            "Ability Score Improvement|Artificer|UAArtificer|4",
            "Proficiency Versatility|Artificer|UAArtificer|4|UAClassFeatureVariants",
            "Superior Attunement|Artificer|UAArtificer|5",
            "Wondrous Invention|Artificer|UAArtificer|5",
            "Mechanical Servant|Artificer|UAArtificer|6",
            "Ability Score Improvement|Artificer|UAArtificer|8",
            "Proficiency Versatility|Artificer|UAArtificer|8|UAClassFeatureVariants",
            {
                "classFeature": "Masterwork Feature|Artificer|UAArtificer|9",
                "gainSubclassFeature": true
            },
            "Wondrous Invention|Artificer|UAArtificer|10",
            "Ability Score Improvement|Artificer|UAArtificer|12",
            "Proficiency Versatility|Artificer|UAArtificer|12|UAClassFeatureVariants",
            {
                "classFeature": "Masterwork Feature|Artificer|UAArtificer|14",
                "gainSubclassFeature": true
            },
            "Superior Attunement|Artificer|UAArtificer|15",
            "Wondrous Invention|Artificer|UAArtificer|15",
            "Ability Score Improvement|Artificer|UAArtificer|16",
            "Proficiency Versatility|Artificer|UAArtificer|16|UAClassFeatureVariants",
            {
                "classFeature": "Masterwork Feature|Artificer|UAArtificer|17",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Artificer|UAArtificer|18",
            "Proficiency Versatility|Artificer|UAArtificer|18|UAClassFeatureVariants",
            "Soul of Artifice|Artificer|UAArtificer|20"
        ],
        "subclassTitle": "Artificer Specialist"
    },
    {
        "name": "Artificer (Revisited)",
        "source": "UAArtificerRevisited",
        "page": 1,
        "isReprinted": true,
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "con",
            "int"
        ],
        "spellcastingAbility": "int",
        "casterProgression": "artificer",
        "preparedSpells": "<$level$> / 2 + <$int_mod$>",
        "cantripProgression": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4
        ],
        "optionalfeatureProgression": [
            {
                "name": "Infusions",
                "featureType": [
                    "AI"
                ],
                "progression": [
                    0,
                    3,
                    3,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    6,
                    6,
                    6,
                    6,
                    7,
                    7,
                    7,
                    7,
                    8,
                    8
                ]
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple",
                "{@item hand crossbow|phb|hand crossbows}",
                "{@item heavy crossbow|phb|heavy crossbows}",
                {
                    "proficiency": "firearms",
                    "optional": true
                }
            ],
            "tools": [
                "{@item thieves' tools|PHB}",
                "{@item tinker's tools|PHB}",
                "one type of {@item artisan's tools|PHB} of your choice"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "arcana",
                            "history",
                            "investigation",
                            "medicine",
                            "nature",
                            "perception",
                            "sleight of hand"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "any two {@filter simple weapons|items|source=phb|category=basic|type=simple weapon}",
                "a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts}",
                "(a) {@item studded leather armor|phb} or (b) {@item scale mail|phb}",
                "{@item thieves' tools|phb} and a {@item dungeoneer's pack|phb}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "_": [
                        {
                            "equipmentType": "weaponSimple",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "_": [
                        "light crossbow|phb",
                        "crossbow bolts (20)|phb"
                    ]
                },
                {
                    "a": [
                        "studded leather armor|phb"
                    ],
                    "b": [
                        "scale mail|phb"
                    ]
                },
                {
                    "_": [
                        "thieves' tools|phb",
                        "dungeoneer's pack|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "int": 13
            },
            "proficienciesGained": {
                "armor": [
                    "light",
                    "medium",
                    "{@item shield|phb|shields}"
                ],
                "tools": [
                    "{@item thieves' tools|PHB}",
                    "{@item tinker's tools|PHB}"
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Infusions Known|optionalfeatures|feature type=ai|source=UAArtificerRevisited}",
                    "Infused Items",
                    "{@filter Cantrips Known|spells|level=0|class=artificer revisited (uaar)}"
                ],
                "rows": [
                    [
                        0,
                        0,
                        2
                    ],
                    [
                        3,
                        2,
                        2
                    ],
                    [
                        3,
                        2,
                        2
                    ],
                    [
                        4,
                        2,
                        2
                    ],
                    [
                        4,
                        2,
                        2
                    ],
                    [
                        4,
                        3,
                        2
                    ],
                    [
                        5,
                        3,
                        2
                    ],
                    [
                        5,
                        3,
                        2
                    ],
                    [
                        5,
                        3,
                        2
                    ],
                    [
                        5,
                        3,
                        3
                    ],
                    [
                        6,
                        4,
                        3
                    ],
                    [
                        6,
                        4,
                        3
                    ],
                    [
                        6,
                        4,
                        3
                    ],
                    [
                        6,
                        4,
                        4
                    ],
                    [
                        7,
                        4,
                        4
                    ],
                    [
                        7,
                        5,
                        4
                    ],
                    [
                        7,
                        5,
                        4
                    ],
                    [
                        7,
                        5,
                        4
                    ],
                    [
                        8,
                        5,
                        4
                    ],
                    [
                        8,
                        5,
                        4
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Artificer Revisited (UAAR)}",
                    "{@filter 2nd|spells|level=2|class=Artificer Revisited (UAAR)}",
                    "{@filter 3rd|spells|level=3|class=Artificer Revisited (UAAR)}",
                    "{@filter 4th|spells|level=4|class=Artificer Revisited (UAAR)}",
                    "{@filter 5th|spells|level=5|class=Artificer Revisited (UAAR)}"
                ],
                "rowsSpellProgression": [
                    [
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Magical Tinkering|Artificer (Revisited)|UAArtificerRevisited|1",
            "Spellcasting|Artificer (Revisited)|UAArtificerRevisited|1",
            "Infuse Item|Artificer (Revisited)|UAArtificerRevisited|2",
            {
                "classFeature": "Artificer Specialist|Artificer (Revisited)|UAArtificerRevisited|3",
                "gainSubclassFeature": true
            },
            "Tool Expertise|Artificer (Revisited)|UAArtificerRevisited|3",
            "Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|4",
            "Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|4|UAClassFeatureVariants",
            "Arcane Armament|Artificer (Revisited)|UAArtificerRevisited|5",
            {
                "classFeature": "Artificer Specialist Feature|Artificer (Revisited)|UAArtificerRevisited|6",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|8",
            "Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|8|UAClassFeatureVariants",
            "The Right Cantrip for the Job|Artificer (Revisited)|UAArtificerRevisited|10",
            "Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|12",
            "Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|12|UAClassFeatureVariants",
            {
                "classFeature": "Artificer Specialist Feature|Artificer (Revisited)|UAArtificerRevisited|14",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|16",
            "Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|16|UAClassFeatureVariants",
            "Spell-Storing Item|Artificer (Revisited)|UAArtificerRevisited|18",
            "Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|19",
            "Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|19|UAClassFeatureVariants",
            "Soul of Artifice|Artificer (Revisited)|UAArtificerRevisited|20"
        ],
        "subclassTitle": "Artificer Specialist",
        "fluff": [
            {
                "name": "Artificer",
                "page": 1,
                "source": "UAArtificerRevisited",
                "type": "section",
                "entries": [
                    "Masters of unlocking magic in everyday objects, artificers are supreme inventors. They see magic as a complex system waiting to be decoded and controlled. Artificers use tools to channel arcane power, crafting temporary and permanent magical objects. To cast a spell, an artificer could use {@item alchemist's supplies|PHB} to create a potent elixir, {@item calligrapher's supplies|PHB} to inscribe a sigil of power on an ally's armor, or {@item tinker's tools|PHB} to craft a temporary charm. The magic of artificers is tied to their tools and their talents.",
                    {
                        "type": "entries",
                        "name": "Arcane Science",
                        "entries": [
                            "In the world of Eberron, arcane magic has been harnessed as a form of science and deployed throughout society. Artificers reflect this development. Their knowledge of magical devices, and their ability to infuse mundane items with magical energy, allows the grand magical projects of Eberron to continue running. During the Last War, artificers were marshaled on a massive scale. Many lives were saved because of the inventions of brave artificers, but also countless lives were lost because of the mass destruction that artificers' creations unleashed."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Seekers of New Lore",
                        "entries": [
                            "Nothing excites an artificer quite like uncovering a new metal or discovering a source of elemental energy. In artificer circles, new inventions and strange discoveries create the most excitement. Artificers who wish to make a mark must find something fresh, rather than uncover someone else's work.",
                            "This drive for novelty pushes artificers to become adventurers. Eberron's main travel routes and populated regions have long since been explored. Thus, artificers take to the edge of civilization in hopes of making the next great discovery in arcane research."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating an Artificer",
                        "entries": [
                            "When creating an artificer character, think about your character's background and drive for adventure. Does the character have a rival? What is the character's relationship with the artisan or artificer who taught the basics of the craft? Talk to your DM about the role played by artificers in the campaign, and what sort of organizations and NPCs you might have ties to.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make an artificer quickly by following these suggestions. First, put your highest ability score in Intelligence, followed by Constitution or Dexterity. Second, choose the {@background guild artisan} background."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "inset",
                        "name": "Artificers in Other Worlds",
                        "entries": [
                            "Eberron is the world most associated with artificers, yet the class can be found throughout the multiverse. In the Forgotten Realms, for example, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the World of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational. In the City of Sigil, artificers share discoveries from throughout the cosmos, and one in particular—the gnome inventor named Vi—runs a multiverse-spanning business from there. In the worldcity Ravnica, the Izzet League trains numerous artificers, the destructiveness of whom is unparalleled in other worlds, except by the tinker gnomes of Krynn."
                        ]
                    },
                    {
                        "type": "inset",
                        "name": "Optional Rule: Firearm Proficiency",
                        "entries": [
                            "The creation and operation of gunpowder weapons have been discovered in various corners of the D&D multiverse. If your Dungeon Master uses the rules on firearms in the Dungeon Master's Guide (p. 267) and your artificer has been exposed to the operation of such weapons, your artificer is proficient with them."
                        ]
                    },
                    {
                        "type": "inset",
                        "name": "Optional Rule: Multiclassing",
                        "entries": [
                            "If your group uses the optional rule on multiclassing in the Player's Handbook (p. 163), here's what you need to know if you choose artificer as one of your classes.",
                            {
                                "type": "entries",
                                "name": "Ability Score Minimum",
                                "entries": [
                                    "As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class."
                                ]
                            },
                            {
                                "type": "entries",
                                "name": "Proficiencies Gained",
                                "entries": [
                                    "If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, {@item thieves' tools|PHB}, {@item tinker's tools|PHB}."
                                ]
                            },
                            {
                                "type": "entries",
                                "name": "Extra Attack",
                                "entries": [
                                    "The Arcane Armament feature doesn't give you an additional attack if you also have the Extra Attack feature."
                                ]
                            },
                            {
                                "type": "entries",
                                "name": "Spell Slots",
                                "entries": [
                                    "Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots."
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Artificer",
        "source": "TCE",
        "page": 9,
        "otherSources": [
            {
                "source": "ERLW",
                "page": 54
            }
        ],
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "con",
            "int"
        ],
        "spellcastingAbility": "int",
        "casterProgression": "artificer",
        "preparedSpells": "<$level$> / 2 + <$int_mod$>",
        "cantripProgression": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4
        ],
        "optionalfeatureProgression": [
            {
                "name": "Infusions",
                "featureType": [
                    "AI"
                ],
                "progression": [
                    0,
                    4,
                    4,
                    4,
                    4,
                    6,
                    6,
                    6,
                    6,
                    8,
                    8,
                    8,
                    8,
                    10,
                    10,
                    10,
                    10,
                    12,
                    12,
                    12
                ]
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple",
                {
                    "proficiency": "firearms",
                    "optional": true
                }
            ],
            "tools": [
                "{@item thieves' tools|PHB}",
                "{@item tinker's tools|PHB}",
                "one type of {@item artisan's tools|PHB} of your choice"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "arcana",
                            "history",
                            "investigation",
                            "medicine",
                            "nature",
                            "perception",
                            "sleight of hand"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "any two {@filter simple weapons|items|source=phb|category=basic|type=simple weapon} of your choice",
                "a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts}",
                "(a) {@item studded leather armor|phb} or (b) {@item scale mail|phb}",
                "{@item thieves' tools|phb} and a {@item dungeoneer's pack|phb}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "_": [
                        {
                            "equipmentType": "weaponSimple",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "_": [
                        "light crossbow|phb",
                        "crossbow bolts (20)|phb"
                    ]
                },
                {
                    "a": [
                        "studded leather armor|phb"
                    ],
                    "b": [
                        "scale mail|phb"
                    ]
                },
                {
                    "_": [
                        "thieves' tools|phb",
                        "dungeoneer's pack|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "int": 13
            },
            "proficienciesGained": {
                "armor": [
                    "light",
                    "medium",
                    "{@item shield|phb|shields}"
                ],
                "tools": [
                    "{@item thieves' tools|PHB}",
                    "{@item tinker's tools|PHB}"
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Infusions Known|optionalfeatures|feature type=ai|source=TCE}",
                    "Infused Items",
                    "{@filter Cantrips Known|spells|level=0|class=artificer}"
                ],
                "rows": [
                    [
                        0,
                        0,
                        2
                    ],
                    [
                        4,
                        2,
                        2
                    ],
                    [
                        4,
                        2,
                        2
                    ],
                    [
                        4,
                        2,
                        2
                    ],
                    [
                        4,
                        2,
                        2
                    ],
                    [
                        6,
                        3,
                        2
                    ],
                    [
                        6,
                        3,
                        2
                    ],
                    [
                        6,
                        3,
                        2
                    ],
                    [
                        6,
                        3,
                        2
                    ],
                    [
                        8,
                        4,
                        3
                    ],
                    [
                        8,
                        4,
                        3
                    ],
                    [
                        8,
                        4,
                        3
                    ],
                    [
                        8,
                        4,
                        3
                    ],
                    [
                        10,
                        5,
                        4
                    ],
                    [
                        10,
                        5,
                        4
                    ],
                    [
                        10,
                        5,
                        4
                    ],
                    [
                        10,
                        5,
                        4
                    ],
                    [
                        12,
                        6,
                        4
                    ],
                    [
                        12,
                        6,
                        4
                    ],
                    [
                        12,
                        6,
                        4
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Artificer}",
                    "{@filter 2nd|spells|level=2|class=Artificer}",
                    "{@filter 3rd|spells|level=3|class=Artificer}",
                    "{@filter 4th|spells|level=4|class=Artificer}",
                    "{@filter 5th|spells|level=5|class=Artificer}"
                ],
                "rowsSpellProgression": [
                    [
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Optional Rule: Firearm Proficiency|Artificer|TCE|1",
            "Magical Tinkering|Artificer|TCE|1",
            "Spellcasting|Artificer|TCE|1",
            "Infuse Item|Artificer|TCE|2",
            {
                "classFeature": "Artificer Specialist|Artificer|TCE|3",
                "gainSubclassFeature": true
            },
            "The Right Tool for the Job|Artificer|TCE|3",
            "Ability Score Improvement|Artificer|TCE|4",
            "Proficiency Versatility|Artificer|TCE|4|UAClassFeatureVariants",
            {
                "classFeature": "Artificer Specialist Feature|Artificer|TCE|5",
                "gainSubclassFeature": true
            },
            "Tool Expertise|Artificer|TCE|6",
            "Flash of Genius|Artificer|TCE|7",
            "Ability Score Improvement|Artificer|TCE|8",
            "Proficiency Versatility|Artificer|TCE|8|UAClassFeatureVariants",
            {
                "classFeature": "Artificer Specialist Feature|Artificer|TCE|9",
                "gainSubclassFeature": true
            },
            "Magic Item Adept|Artificer|TCE|10",
            "Spell-Storing Item|Artificer|TCE|11",
            "Ability Score Improvement|Artificer|TCE|12",
            "Proficiency Versatility|Artificer|TCE|12|UAClassFeatureVariants",
            "Magic Item Savant|Artificer|TCE|14",
            {
                "classFeature": "Artificer Specialist Feature|Artificer|TCE|15",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Artificer|TCE|16",
            "Proficiency Versatility|Artificer|TCE|16|UAClassFeatureVariants",
            "Magic Item Master|Artificer|TCE|18",
            "Ability Score Improvement|Artificer|TCE|19",
            "Proficiency Versatility|Artificer|TCE|19|UAClassFeatureVariants",
            "Soul of Artifice|Artificer|TCE|20"
        ],
        "subclassTitle": "Artificer Specialist",
        "fluff": [
            {
                "name": "Artificer",
                "type": "section",
                "entries": [
                    "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions. You can find everything you need to play one of these inventors in the next few sections. Artificers use a variety of tools to channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents, and few other characters can produce the right tool for a job as well as an artificer.",
                    {
                        "type": "entries",
                        "entries": [
                            {
                                "type": "entries",
                                "name": "Artificers in Many Worlds",
                                "entries": [
                                    "Throughout the D&D multiverse, artificers create inventions and magic items of peace and war. Many lives have been brightened or saved because of the work of kind artificers, but countless lives have also been lost because of the mass destruction unleashed by certain artificers' creations.",
                                    "In the Forgotten Realms, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the world of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational.",
                                    "Artificers in the City of Sigil share discoveries from throughout the multiverse, and from there, the gnome artificer Vi runs a cosmos-spanning business that hires adventurers to fix problems that others deem unfixable. In Vi's home world, Eberron, magic is harnessed as a form of science and deployed throughout society, largely as a result of the wondrous ingenuity of artificers."
                                ]
                            },
                            {
                                "type": "entries",
                                "name": "Creating an Artificer",
                                "entries": [
                                    "To create an artificer, consult the subsections which give you hit points, proficiencies, and starting equipment. Then look at the Artificer table to see which features you get at each level. The descriptions of those features appear below."
                                ]
                            },
                            {
                                "type": "quote",
                                "entries": [
                                    "Artificers invent cutting-edge problems, then try to solve them-loudly and often with collateral damage."
                                ],
                                "by": "Tasha"
                            },
                            {
                                "type": "entries",
                                "name": "Multiclassing and the Artificer",
                                "entries": [
                                    "If your group uses the optional rule on multiclassing in the {@book Player's Handbook|PHB}, here's what you need to know if you choose artificer as one of your classes.",
                                    {
                                        "type": "entries",
                                        "name": "Ability Score Minimum",
                                        "entries": [
                                            "As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class, or to take a level in another class if you are already an artificer."
                                        ]
                                    },
                                    {
                                        "type": "entries",
                                        "name": "Proficiencies Gained",
                                        "entries": [
                                            "If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, {@item thieves' tools|PHB}, {@item tinker's tools|PHB}."
                                        ]
                                    },
                                    {
                                        "type": "entries",
                                        "name": "Spell Slots",
                                        "entries": [
                                            "Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "source": "TCE"
            },
            {
                "name": "Artificer",
                "type": "section",
                "entries": [
                    "Masters of unlocking magic in everyday objects, artificers are supreme inventors. They see magic as a complex system waiting to be decoded and controlled. Artificers use tools to channel arcane power, crafting magical objects. To cast a spell, an artificer could use {@item alchemist's supplies|PHB} to create a potent elixir, {@item calligrapher's supplies|PHB} to inscribe a sigil of power on an ally's armor, or {@item tinker's tools|PHB} to craft a temporary charm. The magic of artificers is tied to their tools and their talents.",
                    {
                        "type": "entries",
                        "name": "Arcane Science",
                        "entries": [
                            "In the world of Eberron, arcane magic has been harnessed as a form of science and deployed throughout society. Artificers reflect this development. Their knowledge of magical devices, and their ability to infuse mundane items with magic, allows Eberron's most miraculous projects to continue.",
                            "During the Last War, artificers were marshaled on a massive scale. Many lives were saved because of the inventions of brave artificers, but countless lives were also lost because of the mass destruction unleashed by their creations."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Seekers of New Lore",
                        "entries": [
                            "Nothing excites an artificer quite like uncovering a new metal or discovering a source of elemental energy. In artificer circles, new inventions and strange discoveries create the most excitement. Artificers who wish to make their mark must innovate, creating something fresh, rather than iterating on familiar designs.",
                            "This drive for novelty pushes artificers to become adventurers. Eberron's main travel routes and populated regions have long since been explored. Thus, artificers seek the frontiers of civilization in hopes of making the next great discovery in arcane research."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating an Artificer",
                        "entries": [
                            "When creating an artificer, think about your character's relationship with the artisan who taught them their craft. Does the character have a rival? Talk to your DM about the role played by artificers in the campaign and the sort of organizations you might have ties to.",
                            {
                                "type": "inset",
                                "name": "Artificers in Other Worlds",
                                "entries": [
                                    "Eberron is the world most associated with artificers, yet the class can be found throughout the D&D multiverse. In the Forgotten Realms, for example, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the World of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational. In the City of Sigil, artificers share discoveries from throughout the cosmos, and one in particular—the gnome inventor Vi—has run a multiverse-spanning business from there since leaving the world of her birth, Eberron. In the world-city Ravnica, the Izzet League trains numerous artificers, the destructiveness of whom is unparalleled in other worlds—except, perhaps, by the tinker gnomes of Krynn."
                                ]
                            },
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make an artificer quickly by following these suggestions. First, put your highest ability score in Intelligence, followed by Constitution or Dexterity. Second, choose the {@background guild artisan} background."
                                ]
                            },
                            {
                                "type": "entries",
                                "name": "Optional Rule: Multiclassing",
                                "entries": [
                                    "If your group uses the optional rule on multiclassing in the {@book Player's Handbook|PHB}, here's what you need to know if you choose artificer as one of your classes.",
                                    {
                                        "type": "entries",
                                        "name": "Ability Score Minimum",
                                        "entries": [
                                            "As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class, or to take a level in another class if you are already an artificer."
                                        ]
                                    },
                                    {
                                        "type": "entries",
                                        "name": "Proficiencies Gained",
                                        "entries": [
                                            "If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, {@item thieves' tools|PHB}, {@item tinker's tools|PHB}."
                                        ]
                                    },
                                    {
                                        "type": "entries",
                                        "name": "Spell Slots",
                                        "entries": [
                                            "Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "source": "ERLW",
                "page": 54
            }
        ]
    },
    {
        "name": "Barbarian",
        "source": "PHB",
        "page": 46,
        "srd": true,
        "hd": {
            "number": 1,
            "faces": 12
        },
        "proficiency": [
            "str",
            "con"
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple",
                "martial"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "animal handling",
                            "athletics",
                            "intimidation",
                            "nature",
                            "perception",
                            "survival"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item greataxe|phb} or (b) any {@filter martial melee weapon|items|source=phb|category=basic|type=martial weapon;melee weapon=sand}",
                "(a) two {@item handaxe|phb|handaxes} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
                "An {@item explorer's pack|phb}, and four {@item javelin|phb|javelins}"
            ],
            "goldAlternative": "{@dice 2d4 × 10|2d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "greataxe|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponMartialMelee"
                        }
                    ]
                },
                {
                    "a": [
                        {
                            "item": "handaxe|phb",
                            "quantity": 2
                        }
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimple"
                        }
                    ]
                },
                {
                    "_": [
                        "explorer's pack|phb",
                        {
                            "item": "javelin|phb",
                            "quantity": 4
                        }
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "str": 13
            },
            "proficienciesGained": {
                "armor": [
                    "{@item shield|phb|shields}"
                ],
                "weapons": [
                    "simple",
                    "martial"
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "Rages",
                    "Rage Damage"
                ],
                "rows": [
                    [
                        "2",
                        {
                            "type": "bonus",
                            "value": 2
                        }
                    ],
                    [
                        "2",
                        {
                            "type": "bonus",
                            "value": 2
                        }
                    ],
                    [
                        "3",
                        {
                            "type": "bonus",
                            "value": 2
                        }
                    ],
                    [
                        "3",
                        {
                            "type": "bonus",
                            "value": 2
                        }
                    ],
                    [
                        "3",
                        {
                            "type": "bonus",
                            "value": 2
                        }
                    ],
                    [
                        "4",
                        {
                            "type": "bonus",
                            "value": 2
                        }
                    ],
                    [
                        "4",
                        {
                            "type": "bonus",
                            "value": 2
                        }
                    ],
                    [
                        "4",
                        {
                            "type": "bonus",
                            "value": 2
                        }
                    ],
                    [
                        "4",
                        {
                            "type": "bonus",
                            "value": 3
                        }
                    ],
                    [
                        "4",
                        {
                            "type": "bonus",
                            "value": 3
                        }
                    ],
                    [
                        "4",
                        {
                            "type": "bonus",
                            "value": 3
                        }
                    ],
                    [
                        "5",
                        {
                            "type": "bonus",
                            "value": 3
                        }
                    ],
                    [
                        "5",
                        {
                            "type": "bonus",
                            "value": 3
                        }
                    ],
                    [
                        "5",
                        {
                            "type": "bonus",
                            "value": 3
                        }
                    ],
                    [
                        "5",
                        {
                            "type": "bonus",
                            "value": 3
                        }
                    ],
                    [
                        "5",
                        {
                            "type": "bonus",
                            "value": 4
                        }
                    ],
                    [
                        "6",
                        {
                            "type": "bonus",
                            "value": 4
                        }
                    ],
                    [
                        "6",
                        {
                            "type": "bonus",
                            "value": 4
                        }
                    ],
                    [
                        "6",
                        {
                            "type": "bonus",
                            "value": 4
                        }
                    ],
                    [
                        "Unlimited",
                        {
                            "type": "bonus",
                            "value": 4
                        }
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Rage|Barbarian||1",
            "Unarmored Defense|Barbarian||1",
            "Danger Sense|Barbarian||2",
            "Survival Instincts|Barbarian||2|UAClassFeatureVariants",
            "Reckless Attack|Barbarian||2",
            {
                "classFeature": "Primal Path|Barbarian||3",
                "gainSubclassFeature": true
            },
            "Primal Knowledge|Barbarian||3|TCE",
            "Ability Score Improvement|Barbarian||4",
            "Proficiency Versatility|Barbarian||4|UAClassFeatureVariants",
            "Extra Attack|Barbarian||5",
            "Fast Movement|Barbarian||5",
            "Instinctive Pounce|Barbarian||5|UAClassFeatureVariants",
            {
                "classFeature": "Path Feature|Barbarian||6",
                "gainSubclassFeature": true
            },
            "Feral Instinct|Barbarian||7",
            "Instinctive Pounce|Barbarian||7|TCE",
            "Ability Score Improvement|Barbarian||8",
            "Proficiency Versatility|Barbarian||8|UAClassFeatureVariants",
            "Brutal Critical (1 die)|Barbarian||9",
            {
                "classFeature": "Path feature|Barbarian||10",
                "gainSubclassFeature": true
            },
            "Relentless Rage|Barbarian||11",
            "Ability Score Improvement|Barbarian||12",
            "Proficiency Versatility|Barbarian||12|UAClassFeatureVariants",
            "Brutal Critical (2 dice)|Barbarian||13",
            {
                "classFeature": "Path feature|Barbarian||14",
                "gainSubclassFeature": true
            },
            "Persistent Rage|Barbarian||15",
            "Ability Score Improvement|Barbarian||16",
            "Proficiency Versatility|Barbarian||16|UAClassFeatureVariants",
            "Brutal Critical (3 dice)|Barbarian||17",
            "Indomitable Might|Barbarian||18",
            "Ability Score Improvement|Barbarian||19",
            "Proficiency Versatility|Barbarian||19|UAClassFeatureVariants",
            "Primal Champion|Barbarian||20"
        ],
        "subclassTitle": "Primal Path",
        "fluff": [
            {
                "name": "Barbarian",
                "type": "section",
                "entries": [
                    "A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people's elk herd.",
                    "A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals.",
                    "Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.",
                    "These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.",
                    "For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
                    {
                        "type": "entries",
                        "name": "Primal Instinct",
                        "entries": [
                            "People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one's own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.",
                            "Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "A Life of Danger",
                        "entries": [
                            "Not every member of the tribes deemed \"barbarians\" by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don't have to.",
                            "Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Barbarian",
                        "entries": [
                            "When creating a barbarian character, think about where your character comes from and his or her place in the world. Talk with your DM about an appropriate origin for your barbarian. Did you come from a distant land, making you a stranger in the area of the campaign? Or is the campaign set in a rough-and-tumble frontier where barbarians are common?",
                            "What led you to take up the adventuring life? Were you lured to settled lands by the promise of riches? Did you join forces with soldiers of those lands to face a shared threat? Did monsters or an invading horde drive you out of your homeland, making you a rootless refugee? Perhaps you were a prisoner of war, brought in chains to \"civilized\" lands and only now able to win your freedom. Or you might have been cast out from your people because of a crime you committed, a taboo you violated, or a coup that removed you from a position of authority.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a barbarian quickly by following these suggestions. First, put your highest ability score in Strength, followed by Constitution. Second, choose the {@background outlander} background."
                                ]
                            }
                        ]
                    }
                ],
                "source": "PHB",
                "page": 46
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "I have witnessed the indomitable performance of barbarians on the field of battle, and it makes me wonder what force lies at the heart of their rage."
                        ],
                        "by": "Seret, archwizard"
                    },
                    "The anger felt by a normal person resembles the rage of a barbarian in the same way that a gentle breeze is akin to a furious thunderstorm. The barbarian's driving force comes from a place that transcends mere emotion, making its manifestation all the more terrible. Whether the impetus for the fury comes entirely from within or from forging a link with a spirit animal, a raging barbarian becomes able to perform supernatural feats of strength and endurance. The outburst is temporary, but while it lasts, it takes over body and mind, driving the barbarian on despite peril and injury, until the last enemy falls.",
                    "It can be tempting to play a barbarian character that is a straightforward application of the classic archetype—a brute, and usually a dimwitted one at that, who rushes in where others fear to tread. But not all the barbarians in the world are cut from that cloth, so you can certainly put your own spin on things. Either way, consider adding some flourishes to make your barbarian stand out from all others; see the following sections for some ideas.",
                    {
                        "type": "entries",
                        "name": "Personal Totems",
                        "entries": [
                            "Barbarians tend to travel light, carrying little in the way of personal effects or other unnecessary gear. The few possessions they do carry often include small items that have special significance. A personal totem is significant because it has a mystical origin or is tied to an important moment in the character's life—perhaps a remembrance from the barbarian's past or a harbinger of what lies ahead.",
                            "A personal totem of this sort might be associated with a barbarian's spirit animal, or might actually be the totem object for the animal, but such a connection is not essential. One who has a bear totem spirit, for instance, could still carry an eagle's feather as a personal totem.",
                            "Consider creating one or more personal totems for your character—objects that hold a special link to your character's past or future. Think about how a totem might affect your character's actions.",
                            {
                                "type": "table",
                                "caption": "Personal Totems",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Totem"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "A tuft of fur from a solitary wolf that you befriended during a hunt"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Three eagle feathers given to you by a wise shaman, who told you they would play a role in determining your fate"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "A necklace made from the claws of a young cave bear that you slew singlehandedly as a child"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "A small leather pouch holding three stones that represent your ancestors"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "A few small bones from the first beast you killed, tied together with colored wool"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "An egg-sized stone in the shape of your spirit animal that appeared one day in your belt pouch"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Tattoos",
                        "entries": [
                            "The members of many barbarian clans decorate their bodies with tattoos, each of which represents a significant moment in the life of the bearer or the bearer's ancestors, or which symbolizes a feeling or an attitude. As with personal totems, a barbarian's tattoos might or might not be related to an animal spirit.",
                            "Each tattoo a barbarian displays contributes to that individual's identity. If your character wears tattoos, what do they look like, and what do they represent?",
                            {
                                "type": "table",
                                "caption": "Tattoos",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Tattoo"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "The wings of an eagle are spread wide across your upper back."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Etched on the backs of your hands are the paws of a cave bear."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "The symbols of your clan are displayed in viny patterns along your arms."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "The antlers of an elk are inked across your back."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Images of your spirit animal are tattooed along your weapon arm and hand."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "The eyes of a wolf are marked on your back to help you see and ward off evil spirits."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Superstitions",
                        "entries": [
                            "Barbarians vary widely in how they understand life. Some follow gods and look for guidance from those deities in the cycles of nature and the animals they encounter. These barbarians believe that spirits inhabit the plants and animals of the world, and the barbarians look to them for omens and power.",
                            "Other barbarians trust only in the blood that runs in their veins and the steel they hold in their hands. They have no use for the invisible world, instead relying on their senses to hunt and survive like the wild beasts they emulate.",
                            "Both of these attitudes can give rise to superstitions. These beliefs are often passed down within a family or shared among the members of a clan or a hunting group.",
                            "If your barbarian character has any superstitions, were they ingrained in you by your family, or are they the result of personal experience?",
                            {
                                "type": "table",
                                "caption": "Superstition",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Superstition"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "If you disturb the bones of the dead, you inherit all the troubles that plagued them in life."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Never trust a wizard. They're all devils in disguise, especially the friendly ones."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Dwarves have lost their spirits, and are almost like the undead. That's why they live underground."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Magical things bring trouble. Never sleep with a magic object within ten feet of you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "When you walk through a graveyard, be sure to wear silver, or a ghost might jump into your body."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "If an elf looks you in the eyes, she's trying to read your thoughts."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "source": "XGE",
                "page": 8
            }
        ]
    },
    {
        "name": "Bard",
        "source": "PHB",
        "page": 51,
        "srd": true,
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "dex",
            "cha"
        ],
        "spellcastingAbility": "cha",
        "casterProgression": "full",
        "cantripProgression": [
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4
        ],
        "spellsKnownProgression": [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            14,
            15,
            15,
            16,
            18,
            19,
            19,
            20,
            22,
            22,
            22
        ],
        "additionalSpells": [
            {
                "name": "Magical Secrets",
                "known": {
                    "10": [
                        {
                            "choose": "level=0;1;2;3;4;5"
                        },
                        {
                            "choose": "level=0;1;2;3;4;5"
                        }
                    ],
                    "14": [
                        {
                            "choose": "level=0;1;2;3;4;5;6;7"
                        },
                        {
                            "choose": "level=0;1;2;3;4;5;6;7"
                        }
                    ],
                    "18": [
                        {
                            "choose": ""
                        },
                        {
                            "choose": ""
                        }
                    ]
                }
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light"
            ],
            "weapons": [
                "simple",
                "{@item hand crossbow|phb|hand crossbows}",
                "{@item longsword|phb|longswords}",
                "{@item rapier|phb|rapiers}",
                "{@item shortsword|phb|shortswords}"
            ],
            "tools": [
                "three {@item musical instrument|PHB|musical instruments} of your choice"
            ],
            "skills": [
                {
                    "any": 3
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item rapier|phb}, (b) a {@item longsword|phb}, or (c) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
                "(a) a {@item diplomat's pack|phb} or (b) an {@item entertainer's pack|phb}",
                "(a) a {@item lute|phb} or (b) any other {@filter musical instrument|items|miscellaneous=mundane|type=instrument}",
                "{@item Leather armor|phb}, and a {@item dagger|phb}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "rapier|phb"
                    ],
                    "b": [
                        "longsword|phb"
                    ],
                    "c": [
                        {
                            "equipmentType": "weaponSimple"
                        }
                    ]
                },
                {
                    "a": [
                        "diplomat's pack|phb"
                    ],
                    "b": [
                        "entertainer's pack|phb"
                    ]
                },
                {
                    "a": [
                        "lute|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "instrumentMusical"
                        }
                    ]
                },
                {
                    "_": [
                        "Leather armor|phb",
                        "dagger|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "cha": 13
            },
            "proficienciesGained": {
                "armor": [
                    "light"
                ],
                "skills": [
                    {
                        "choose": {
                            "from": [
                                "athletics",
                                "acrobatics",
                                "sleight of hand",
                                "stealth",
                                "arcana",
                                "history",
                                "investigation",
                                "nature",
                                "religion",
                                "animal handling",
                                "insight",
                                "medicine",
                                "perception",
                                "survival",
                                "deception",
                                "intimidation",
                                "performance",
                                "persuasion"
                            ],
                            "count": 1
                        }
                    }
                ],
                "tools": [
                    "one {@item musical instrument|PHB} of your choice"
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Cantrips Known|spells|level=0|class=bard}",
                    "{@filter Spells Known|spells|class=bard}"
                ],
                "rows": [
                    [
                        2,
                        4
                    ],
                    [
                        2,
                        5
                    ],
                    [
                        2,
                        6
                    ],
                    [
                        3,
                        7
                    ],
                    [
                        3,
                        8
                    ],
                    [
                        3,
                        9
                    ],
                    [
                        3,
                        10
                    ],
                    [
                        3,
                        11
                    ],
                    [
                        3,
                        12
                    ],
                    [
                        4,
                        14
                    ],
                    [
                        4,
                        15
                    ],
                    [
                        4,
                        15
                    ],
                    [
                        4,
                        16
                    ],
                    [
                        4,
                        18
                    ],
                    [
                        4,
                        19
                    ],
                    [
                        4,
                        19
                    ],
                    [
                        4,
                        20
                    ],
                    [
                        4,
                        22
                    ],
                    [
                        4,
                        22
                    ],
                    [
                        4,
                        22
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=bard}",
                    "{@filter 2nd|spells|level=2|class=bard}",
                    "{@filter 3rd|spells|level=3|class=bard}",
                    "{@filter 4th|spells|level=4|class=bard}",
                    "{@filter 5th|spells|level=5|class=bard}",
                    "{@filter 6th|spells|level=6|class=bard}",
                    "{@filter 7th|spells|level=7|class=bard}",
                    "{@filter 8th|spells|level=8|class=bard}",
                    "{@filter 9th|spells|level=9|class=bard}"
                ],
                "rowsSpellProgression": [
                    [
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        2,
                        1,
                        1
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Bardic Inspiration|Bard||1",
            "Magical Inspiration|Bard||1|UAClassFeatureVariants",
            "Spellcasting|Bard||1",
            "Spell Versatility|Bard||1|UAClassFeatureVariants",
            "Jack of All Trades|Bard||2",
            "Song of Rest (d6)|Bard||2",
            "Magical Inspiration|Bard||2|TCE",
            {
                "classFeature": "Bard College|Bard||3",
                "gainSubclassFeature": true
            },
            "Expertise|Bard||3",
            "Ability Score Improvement|Bard||4",
            "Proficiency Versatility|Bard||4|UAClassFeatureVariants",
            "Bardic Versatility|Bard||4|TCE",
            "Bardic Inspiration (d8)|Bard||5",
            "Font of Inspiration|Bard||5",
            "Countercharm|Bard||6",
            {
                "classFeature": "Bard College feature|Bard||6",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Bard||8",
            "Proficiency Versatility|Bard||8|UAClassFeatureVariants",
            "Song of Rest (d8)|Bard||9",
            "Bardic Inspiration (d10)|Bard||10",
            "Expertise|Bard||10",
            "Magical Secrets|Bard||10",
            "Ability Score Improvement|Bard||12",
            "Proficiency Versatility|Bard||12|UAClassFeatureVariants",
            "Song of Rest (d10)|Bard||13",
            "Magical Secrets|Bard||14",
            {
                "classFeature": "Bard College feature|Bard||14",
                "gainSubclassFeature": true
            },
            "Bardic Inspiration (d12)|Bard||15",
            "Ability Score Improvement|Bard||16",
            "Proficiency Versatility|Bard||16|UAClassFeatureVariants",
            "Song of Rest (d12)|Bard||17",
            "Magical Secrets|Bard||18",
            "Ability Score Improvement|Bard||19",
            "Proficiency Versatility|Bard||19|UAClassFeatureVariants",
            "Superior Inspiration|Bard||20"
        ],
        "subclassTitle": "Bard College",
        "fluff": [
            {
                "name": "Bard",
                "type": "section",
                "entries": [
                    "Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song—knowledge of the people who constructed the monument and the mythic saga it depicts.",
                    "A stern human warrior bangs his sword rhythmically against his scale mail, setting the tempo for his war chant and exhorting his companions to bravery and heroism. The magic of his song fortifies and emboldens them.",
                    "Laughing as she tunes her cittern, a gnome weaves her subtle magic over the assembled nobles, ensuring that her companions' words will be well received.",
                    "Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.",
                    {
                        "type": "entries",
                        "name": "Music and Magic",
                        "entries": [
                            "In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.",
                            "The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Learning from Experience",
                        "entries": [
                            "True bards are not common in the world. Not every minstrel singing in a tavern or jester cavorting in a royal court is a bard. Discovering the magic hidden in music requires hard study and some measure of natural talent that most troubadours and jongleurs lack. It can be hard to spot the difference between these performers and true bards, though. A bard's life is spent wandering across the land gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But a depth of knowledge, a level of musical skill, and a touch of magic set bards apart from their fellows.",
                            "Only rarely do bards settle in one place for long, and their natural desire to travel—to find new tales to tell, new skills to learn, and new discoveries beyond the horizon—makes an adventuring career a natural calling. Every adventure is an opportunity to learn, practice a variety of skills, enter long-forgotten tombs, discover lost works of magic, decipher old tomes, travel to strange places, or encounter exotic creatures. Bards love to accompany heroes to witness their deeds firsthand. A bard who can tell an awe-inspiring story from personal experience earns renown among other bards. Indeed, after telling so many stories about heroes accomplishing mighty deeds, many bards take these themes to heart and assume heroic roles themselves."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Bard",
                        "entries": [
                            "Bards thrive on stories, whether those stories are true or not. Your character's background and motivations are not as important as the stories that he or she tells about them. Perhaps you had a secure and mundane childhood. There's no good story to be told about that, so you might paint yourself as an orphan raised by a hag in a dismal swamp. Or your childhood might be worthy of a story. Some bards acquire their magical music through extraordinary means, including the inspiration of fey or other supernatural creatures.",
                            "Did you serve an apprenticeship, studying under a master, following the more experienced bard until you were ready to strike out on your own? Or did you attend a college where you studied bardic lore and practiced your musical magic? Perhaps you were a young runaway or orphan, befriended by a wandering bard who became your mentor. Or you might have been a spoiled noble child tutored by a master. Perhaps you stumbled into the clutches of a hag, making a bargain for a musical gift in addition to your life and freedom, but at what cost?",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a bard quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Dexterity. Second, choose the {@background entertainer} background. Third, choose the {@spell dancing lights} and {@spell vicious mockery} cantrips, along with the following 1st-level spells: {@spell charm person}, {@spell detect magic}, {@spell healing word}, and {@spell thunderwave}."
                                ]
                            }
                        ]
                    }
                ],
                "source": "PHB",
                "page": 51
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "Music is the fruit of the divine tree that vibrates with the Words of Creation. But the question I ask you is, can a bard go to the root of this tree? Can one tap into the source of that power? Ah, then what manner of music they would bring to this world!"
                        ],
                        "by": "Fletcher Danairia, master bard"
                    },
                    "Bards bring levity during grave times; they impart wisdom to offset ignorance; and they make the ridiculous seem sublime. Bards are preservers of ancient history, their songs and tales perpetuating the memory of great events down through time—knowledge so important that it is memorized and passed along as oral history, to survive even when no written record remains.",
                    "It is also the bard's role to chronicle smaller and more contemporary events—the stories of today's heroes, including their feats of valor as well as their less than impressive failures.",
                    "Of course, the world has many people who can carry a tune or tell a good story, and there's much more to any adventuring bard than a glib tongue and a melodious voice. Yet what truly sets bards apart from others—and from one another—are the style and substance of their performances.",
                    "To grab and hold the attention of an audience, bards are typically flamboyant and outgoing when they perform. The most famous of them are essentially the D&D world's equivalent of pop stars. If you're playing a bard, consider using one of your favorite musicians as a role model for your character.",
                    "You can add some unique aspects to your bard character by considering the suggestions that follow.",
                    {
                        "type": "entries",
                        "name": "Defining Work",
                        "entries": [
                            "Every successful bard is renowned for at least one piece of performance art, typically a song or a poem that is popular with everyone who hears it. These performances are spoken about for years by those who view them, and some spectators have had their lives forever changed because of the experience.",
                            "If your character is just starting out, your ultimate defining work is likely in the future. But in order to make any sort of living at your profession, chances are you already have a piece or two in your repertoire that have proven to be audience pleasers.",
                            {
                                "type": "table",
                                "caption": "Defining Work",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Defining Work"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "\"The Three Flambinis,\" a ribald song concerning mistaken identities and unfettered desire"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "\"Waltz of the Myconids,\" an upbeat tune that children in particular enjoy"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "\"Asmodeus's Golden Arse,\" a dramatic poem you claim was inspired by your personal visit to Avernus"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "\"The Pirates of Luskan,\" your firsthand account of being kidnapped by sea reavers as a child"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "\"A Hoop, Two Pigeons, and a Hell Hound,\" a subtle parody of an incompetent noble"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "\"A Fool in the Abyss,\" a comedic poem about a jester's travels among demons"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Instrument",
                        "entries": [
                            "In a bard's quest for the ultimate performance and the highest acclaim, one's instrument is at least as important as one's vocal ability. The instrument's quality of manufacture is a critical factor, of course; the best ones make the best music, and some bards are continually on the lookout for an improvement. Perhaps just as important, though, is the instrument's own entertainment value; those that are bizarrely constructed or made of exotic materials are likely to leave a lasting impression on an audience.",
                            "You might have an \"off the rack\" instrument, perhaps because it's all you can afford right now. Or, if your first instrument was gifted to you, it might be of a more elaborate sort. Are you satisfied with the instrument you have, or do you aspire to replace it with something truly distinctive?",
                            {
                                "type": "table",
                                "caption": "Instrument",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Instrument"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "A masterfully crafted halfling fiddle"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "A mithral {@item horn|PHB} made by elves"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "A zither made with drow spider silk"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "An orcish {@item drum|PHB}"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "A wooden bullywug croak box"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "A tinker's harp of gnomish design"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Embarrassment",
                        "entries": [
                            "Almost every bard has suffered at least one bad experience in front of an audience, and chances are you're no exception. No one becomes famous right away, after all; perhaps you had a few small difficulties early in your career, or maybe it took you a while to restore your reputation after one agonizing night when the fates conspired to bring about your theatrical ruin.",
                            "The ways that a performance can go wrong are as varied as the fish in the sea. No matter what sort of disaster might occur, however, a bard has the courage and the confidence to rebound from it—either pressing on with the show (if possible) or promising to come back tomorrow with a new performance that's guaranteed to please.",
                            {
                                "type": "table",
                                "caption": "Embarrassment",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Embarrassment"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "The time when your comedic song, \"Big Tom's Hijinks\"—which, by the way, you thought was brilliant—did not go over well with Big Tom"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "The matinee performance when a circus's owlbear got loose and terrorized the crowd"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "When your opening song was your enthusiastic but universally hated rendition of \"Song of the Froghemoth\""
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "The first and last public performance of \"Mirt, Man about Town\""
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "The time on stage when your wig caught fire and you threw it down—which set fire to the stage"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "When you sat on your {@item lute|PHB} by mistake during the final stanza of \"Starlight Serenade\""
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "A Bard's Muse",
                        "entries": [
                            "Naturally, every bard has a repertoire of songs and stories. Some bards are generalists who can draw from a wide range of topics for each performance, and who take pride in their versatility. Others adopt a more personal approach to their art, driven by their attachment to a muse—a particular concept that inspires much of what those bards do in front of an audience.",
                            "A bard who follows a muse generally does so to gain a deeper understanding of what that muse represents and how to best convey that understanding to others through performance.",
                            "If your bard character has a muse, it could be one of the three described here, or one of your own devising.",
                            {
                                "type": "entries",
                                "entries": [
                                    {
                                        "type": "entries",
                                        "name": "Nature",
                                        "entries": [
                                            "You feel a kinship with the natural world, and its beauty and mystery inspire you. For you, a tree is deeply symbolic, its roots delving into the dark unknown to draw forth the power of the earth, while its branches reach toward the sun to nourish their flowers and fruit. Nature is the ancient witness who has seen every kingdom rise and fall, even those whose names have been forgotten and wait to be rediscovered. The gods of nature share their secrets with druids and sages, opening their hearts and minds to new ways of seeing, and as with those individuals, you find that your creativity blossoms while you wander in an open field of waving grass or walk in silent reverence through a grove of ancient oaks."
                                        ]
                                    },
                                    {
                                        "type": "entries",
                                        "name": "Love",
                                        "entries": [
                                            "You are on a quest to identify the essence of true love. Though you do not disdain the superficial love of flesh and form, the deeper form of love that can inspire thousands or bring joy to one's every moment is what you are interested in. Love of this sort takes on many forms, and you can see its presence everywhere—from the sparkling of a beautiful gem to the song of a simple fisher thanking the sea for its bounty. You are on the trail of love, that most precious and mysterious of emotions, and your search fills your stories and your songs with vitality and passion."
                                        ]
                                    },
                                    {
                                        "type": "entries",
                                        "name": "Conflict",
                                        "entries": [
                                            "Drama embodies conflict, and the best stories have conflict as a key element. From the morning-after tale of a tavern brawl to the saga of an epic battle, from a lover's spat to a rift between powerful dynasties, conflict is what inspires tale-tellers like you to create your best work. Conflict can bring out the best in some people, causing their heroic nature to shine forth and transform the world, but it can cause others to gravitate toward darkness and fall under the sway of evil. You strive to experience or witness all forms of conflict, great and small, so as to study this eternal aspect of life and immortalize it in your words and music."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "source": "XGE",
                "page": 12
            }
        ]
    },
    {
        "name": "Cleric",
        "source": "PHB",
        "page": 56,
        "srd": true,
        "basicRules": true,
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "wis",
            "cha"
        ],
        "spellcastingAbility": "wis",
        "casterProgression": "full",
        "preparedSpells": "<$level$> + <$wis_mod$>",
        "cantripProgression": [
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "history",
                            "insight",
                            "medicine",
                            "persuasion",
                            "religion"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item mace|phb} or (b) a {@item warhammer|phb} (if proficient)",
                "(a) {@item scale mail|phb}, (b) {@item leather armor|phb}, or (c) {@item chain mail|phb} (if proficient)",
                "(a) a {@item light crossbow|phb} and {@item Crossbow Bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
                "(a) a {@item priest's pack|phb} or (b) an {@item explorer's pack|phb}",
                "A {@item shield|phb} and a {@item holy symbol|phb}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "mace|phb"
                    ],
                    "b": [
                        "warhammer|phb"
                    ]
                },
                {
                    "a": [
                        "scale mail|phb"
                    ],
                    "b": [
                        "leather armor|phb"
                    ],
                    "c": [
                        "chain mail|phb"
                    ]
                },
                {
                    "a": [
                        "light crossbow|phb",
                        "Crossbow Bolts (20)|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimple"
                        }
                    ]
                },
                {
                    "a": [
                        "priest's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "_": [
                        "shield|phb",
                        "holy symbol|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "wis": 13
            },
            "proficienciesGained": {
                "armor": [
                    "light",
                    "medium",
                    "{@item shield|phb|shields}"
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Cantrips Known|spells|level=0|class=Cleric}"
                ],
                "rows": [
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Cleric}",
                    "{@filter 2nd|spells|level=2|class=Cleric}",
                    "{@filter 3rd|spells|level=3|class=Cleric}",
                    "{@filter 4th|spells|level=4|class=Cleric}",
                    "{@filter 5th|spells|level=5|class=Cleric}",
                    "{@filter 6th|spells|level=6|class=Cleric}",
                    "{@filter 7th|spells|level=7|class=Cleric}",
                    "{@filter 8th|spells|level=8|class=Cleric}",
                    "{@filter 9th|spells|level=9|class=Cleric}"
                ],
                "rowsSpellProgression": [
                    [
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        2,
                        1,
                        1
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Spellcasting|Cleric||1",
            "Cantrip Versatility|Cleric||1|UAClassFeatureVariants",
            {
                "classFeature": "Divine Domain|Cleric||1",
                "gainSubclassFeature": true
            },
            {
                "classFeature": "Channel Divinity|Cleric||2",
                "tableDisplayName": "Channel Divinity (1/rest)"
            },
            "Channel Divinity: Harness Divine Power|Cleric||2|UAClassFeatureVariants",
            "Channel Divinity: Harness Divine Power|Cleric||2|TCE",
            {
                "classFeature": "Divine Domain feature|Cleric||2",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Cleric||4",
            "Proficiency Versatility|Cleric||4|UAClassFeatureVariants",
            "Cantrip Versatility|Cleric||4|TCE",
            "Destroy Undead (CR 1/2)|Cleric||5",
            {
                "classFeature": "Channel Divinity|Cleric||6",
                "tableDisplayName": "Channel Divinity (2/rest)"
            },
            {
                "classFeature": "Divine Domain feature|Cleric||6",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Cleric||8",
            "Proficiency Versatility|Cleric||8|UAClassFeatureVariants",
            "Destroy Undead (CR 1)|Cleric||8",
            {
                "classFeature": "Divine Domain feature|Cleric||8",
                "gainSubclassFeature": true
            },
            "Divine Intervention|Cleric||10",
            "Destroy Undead (CR 2)|Cleric||11",
            "Ability Score Improvement|Cleric||12",
            "Proficiency Versatility|Cleric||12|UAClassFeatureVariants",
            "Destroy Undead (CR 3)|Cleric||14",
            "Ability Score Improvement|Cleric||16",
            "Proficiency Versatility|Cleric||16|UAClassFeatureVariants",
            "Destroy Undead (CR 4)|Cleric||17",
            {
                "classFeature": "Divine Domain feature|Cleric||17",
                "gainSubclassFeature": true
            },
            {
                "classFeature": "Channel Divinity|Cleric||18",
                "tableDisplayName": "Channel Divinity (3/rest)"
            },
            "Ability Score Improvement|Cleric||19",
            "Proficiency Versatility|Cleric||19|UAClassFeatureVariants",
            "Divine Intervention Improvement|Cleric||20"
        ],
        "subclassTitle": "Divine Domain",
        "fluff": [
            {
                "name": "Cleric",
                "type": "section",
                "entries": [
                    "Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions.",
                    "Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs arrayed against him, shouting praise to the gods with every foe's fall.",
                    "Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours from it to drive back the zombies crowding in on her companions.",
                    "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
                    {
                        "type": "entries",
                        "name": "Healers and Warriors",
                        "entries": [
                            "Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don't grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling.",
                            "Harnessing divine magic doesn't rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity's wishes.",
                            "Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Divine Agents",
                        "entries": [
                            "Not every acolyte or officiant at a temple or shrine is a cleric. Some priests are called to a simple life of temple service, carrying out their gods' will through prayer and sacrifice, not by magic and strength of arms. In some cities, priesthood amounts to a political office, viewed as a stepping stone to higher positions of authority and involving no communion with a god at all. True clerics are rare in most hierarchies.",
                            "When a cleric takes up an adventuring life, it is usually because his or her god demands it. Pursuing the goals of the gods often involves braving dangers beyond the walls of civilization, smiting evil or seeking holy relics in ancient tombs. Many clerics are also expected to protect their deities' worshipers, which can mean fighting rampaging orcs, negotiating peace between warring nations, or sealing a portal that would allow a demon prince to enter the world.",
                            "Most adventuring clerics maintain some connection to established temples and orders of their faiths. A temple might ask for a cleric's aid, or a high priest might be in a position to demand it."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Cleric",
                        "entries": [
                            "As you create a cleric, the most important question to consider is which deity to serve and what principles you want your character to embody. Appendix B includes lists of many of the gods of the multiverse. Check with your DM to learn which deities are in your campaign.",
                            "Once you've chosen a deity, consider your cleric's relationship to that god. Did you enter this service willingly? Or did the god choose you, impelling you into service with no regard for your wishes? How do the temple priests of your faith regard you: as a champion or a troublemaker? What are your ultimate goals? Does your deity have a special task in mind for you? Or are you striving to prove yourself worthy of a great quest?",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a cleric quickly by following these suggestions. First, Wisdom should be your highest ability score, followed by Strength or Constitution. Second, choose the {@background acolyte} background."
                                ]
                            }
                        ]
                    }
                ],
                "source": "PHB",
                "page": 56
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "To become a cleric is to become a messenger of the gods. The power the divine offers is great, but it always comes with tremendous responsibility."
                        ],
                        "by": "Riggby the patriarch"
                    },
                    "Almost all the folk in the world who revere a deity live their lives without ever being directly touched by a divine being. As such, they can never know what it feels like to be a cleric—someone who is not only a devout worshiper, but who has also been invested with a measure of a deity's power.",
                    "The question has long been debated: Does a mortal become a cleric as a consequence of deep devotion to one's deity, thereby attracting the god's favor? Or is it the deity who sees the potential in a person and calls that individual into service? Ultimately, perhaps, the answer doesn't matter. However clerics come into being, the world needs clerics as much as clerics and deities need each other.",
                    "If you're playing a cleric character, the following sections offer ways to add some detail to that character's history and personality.",
                    {
                        "type": "entries",
                        "name": "Temple",
                        "entries": [
                            "Most clerics start their lives of service as priests in an order, then later realize that they have been blessed by their god with the qualities needed to become a cleric. To prepare for this new duty, candidates typically receive instruction from a cleric of a temple or another place of study devoted to their deity.",
                            "Some temples are cut off from the world so that their occupants can focus on devotions, while other temples open their doors to minister to and heal the masses. What is noteworthy about the temple you studied at?",
                            {
                                "type": "table",
                                "caption": "Temple",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Temple"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Your temple is said to be the oldest surviving structure built to honor your god."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Acolytes of several like-minded deities all received instruction together in your temple."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "You come from a temple famed for the brewery it operates. Some say you smell like one of its ales."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Your temple is a fortress and a proving ground that trains warrior-priests."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Your temple is a peaceful, humble place, filled with vegetable gardens and simple priests."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You served in a temple in the Outer Planes."
                                    ]
                                ]
                            },
                            {
                                "type": "entries",
                                "name": "Keepsake",
                                "entries": [
                                    "Many clerics have items among their personal gear that symbolize their faith, remind them of their vows, or otherwise help to keep them on their chosen paths. Even though such an item is not imbued with divine power, it is vitally important to its owner because of what it represents.",
                                    {
                                        "type": "table",
                                        "caption": "Keepsake",
                                        "colLabels": [
                                            "{@dice d6}",
                                            "Keepsake"
                                        ],
                                        "colStyles": [
                                            "col-1 text-center",
                                            "col-11"
                                        ],
                                        "rows": [
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 1
                                                    }
                                                },
                                                "The finger bone of a saint"
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 2
                                                    }
                                                },
                                                "A metal-bound book that tells how to hunt and destroy infernal creatures"
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 3
                                                    }
                                                },
                                                "A pig's whistle that reminds you of your humble and beloved mentor"
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 4
                                                    }
                                                },
                                                "A braid of hair woven from the tail of a unicorn"
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 5
                                                    }
                                                },
                                                "A scroll that describes how best to rid the world of necromancers"
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 6
                                                    }
                                                },
                                                "A runestone said to be blessed by your god"
                                            ]
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "entries",
                                "name": "Secret",
                                "entries": [
                                    "No mortal soul is entirely free of second thoughts or doubt. Even a cleric must grapple with dark desires or the forbidden attraction of turning against the teachings of one's deity.",
                                    "If you haven't considered this aspect of your character yet, see the table entries for some possibilities, or use them for inspiration. Your deep, dark secret might involve something you did (or are doing), or it could be rooted in the way you feel about the world and your role in it.",
                                    {
                                        "type": "table",
                                        "caption": "Secret",
                                        "colLabels": [
                                            "{@dice d6}",
                                            "Secret"
                                        ],
                                        "colStyles": [
                                            "col-1 text-center",
                                            "col-11"
                                        ],
                                        "rows": [
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 1
                                                    }
                                                },
                                                "An imp offers you counsel. You try to ignore the creature, but sometimes its advice is helpful."
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 2
                                                    }
                                                },
                                                "You believe that, in the final analysis, the gods are nothing more than ultrapowerful mortal creatures."
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 3
                                                    }
                                                },
                                                "You acknowledge the power of the gods, but you think that most events are dictated by pure chance."
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 4
                                                    }
                                                },
                                                "Even though you can work divine magic, you have never truly felt the presence of a divine essence within yourself."
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 5
                                                    }
                                                },
                                                "You are plagued by nightmares that you believe are sent by your god as punishment for some unknown transgression."
                                            ],
                                            [
                                                {
                                                    "type": "cell",
                                                    "roll": {
                                                        "exact": 6
                                                    }
                                                },
                                                "In times of despair, you feel that you are but a plaything of the gods, and you resent their remoteness."
                                            ]
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "inset",
                                "name": "Serving a Pantheon, Philosophy, or Force",
                                "entries": [
                                    "The typical cleric is an ordained servant of a particular god and chooses a Divine Domain associated with that deity. The cleric's magic flows from the god or the god's sacred realm, and often the cleric bears a holy symbol that represents that divinity.",
                                    "Some clerics, especially in a world like Eberron, serve a whole pantheon, rather than a single deity. In certain campaigns, a cleric might instead serve a cosmic force, such as life or death, or a philosophy or concept, such as love, peace, or one of the nine alignments. Chapter 1 of the Dungeon Master's Guide explores options like these, in the section \"Gods of Your World.\"",
                                    "Talk with your DM about the divine options available in your campaign, whether they're gods, pantheons, philosophies, or cosmic forces. Whatever being or thing your cleric ends up serving, choose a Divine Domain that is appropriate for it, and if it doesn't have a holy symbol, work with your DM to design one.",
                                    "The cleric's class features often refer to your deity. If you are devoted to a pantheon, cosmic force, or philosophy, your cleric features still work for you as written. Think of the references to a god as references to the divine thing you serve that gives you your magic."
                                ]
                            }
                        ]
                    }
                ],
                "source": "XGE",
                "page": 17
            }
        ]
    },
    {
        "name": "Druid",
        "source": "PHB",
        "page": 64,
        "srd": true,
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "int",
            "wis"
        ],
        "spellcastingAbility": "wis",
        "casterProgression": "full",
        "preparedSpells": "<$level$> + <$wis_mod$>",
        "cantripProgression": [
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                {
                    "proficiency": "{@item shield|phb|shields}",
                    "full": "shields (druids will not wear armor or use shields made of metal)"
                }
            ],
            "weapons": [
                "{@item club|phb|clubs}",
                "{@item dagger|phb|daggers}",
                "{@item dart|phb|darts}",
                "{@item javelin|phb|javelins}",
                "{@item mace|phb|maces}",
                "{@item quarterstaff|phb|quarterstaffs}",
                "{@item scimitar|phb|scimitars}",
                "{@item sickle|phb|sickles}",
                "{@item sling|phb|slings}",
                "{@item spear|phb|spears}"
            ],
            "tools": [
                "{@item Herbalism kit|PHB}"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "arcana",
                            "animal handling",
                            "insight",
                            "medicine",
                            "nature",
                            "perception",
                            "religion",
                            "survival"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a wooden {@item shield|phb} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
                "(a) a {@item scimitar|phb} or (b) any {@filter simple melee weapon|items|source=phb|category=basic|type=simple weapon;melee weapon=sand}",
                "{@item Leather armor|phb}, an {@item explorer's pack|phb}, and a {@item druidic focus|phb}"
            ],
            "goldAlternative": "{@dice 2d4 × 10|2d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "shield|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimple"
                        }
                    ]
                },
                {
                    "a": [
                        "scimitar|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimpleMelee"
                        }
                    ]
                },
                {
                    "_": [
                        "Leather armor|phb",
                        "explorer's pack|phb",
                        "druidic focus|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "wis": 13
            },
            "proficienciesGained": {
                "armor": [
                    "light",
                    "medium",
                    {
                        "proficiency": "{@item shield|phb|shields}",
                        "full": "shields (druids will not wear armor or use shields made of metal)"
                    }
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Cantrips Known|spells|level=0|class=Druid}"
                ],
                "rows": [
                    [
                        2
                    ],
                    [
                        2
                    ],
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Druid}",
                    "{@filter 2nd|spells|level=2|class=Druid}",
                    "{@filter 3rd|spells|level=3|class=Druid}",
                    "{@filter 4th|spells|level=4|class=Druid}",
                    "{@filter 5th|spells|level=5|class=Druid}",
                    "{@filter 6th|spells|level=6|class=Druid}",
                    "{@filter 7th|spells|level=7|class=Druid}",
                    "{@filter 8th|spells|level=8|class=Druid}",
                    "{@filter 9th|spells|level=9|class=Druid}"
                ],
                "rowsSpellProgression": [
                    [
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        2,
                        1,
                        1
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Druidic|Druid||1",
            "Spellcasting|Druid||1",
            "Cantrip Versatility|Druid||1|UAClassFeatureVariants",
            "Wild Shape|Druid||2",
            "Wild Companion|Druid||2|UAClassFeatureVariants",
            "Wild Companion|Druid||2|TCE",
            {
                "classFeature": "Druid Circle|Druid||2",
                "gainSubclassFeature": true
            },
            "Wild Shape Improvement|Druid||4",
            "Ability Score Improvement|Druid||4",
            "Proficiency Versatility|Druid||4|UAClassFeatureVariants",
            "Cantrip Versatility|Druid||4|TCE",
            {
                "classFeature": "Druid Circle feature|Druid||6",
                "gainSubclassFeature": true
            },
            "Wild Shape Improvement|Druid||8",
            "Ability Score Improvement|Druid||8",
            "Proficiency Versatility|Druid||8|UAClassFeatureVariants",
            {
                "classFeature": "Druid Circle feature|Druid||10",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Druid||12",
            "Proficiency Versatility|Druid||12|UAClassFeatureVariants",
            {
                "classFeature": "Druid Circle feature|Druid||14",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Druid||16",
            "Proficiency Versatility|Druid||16|UAClassFeatureVariants",
            "Timeless Body|Druid||18",
            "Beast Spells|Druid||18",
            "Ability Score Improvement|Druid||19",
            "Proficiency Versatility|Druid||19|UAClassFeatureVariants",
            "Archdruid|Druid||20"
        ],
        "subclassTitle": "Druid Circle",
        "fluff": [
            {
                "name": "Druid",
                "type": "section",
                "entries": [
                    "Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest.",
                    "Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultists' activities.",
                    "Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking semblance of life.",
                    "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature's indomitable will.",
                    {
                        "type": "entries",
                        "name": "Power of Nature",
                        "entries": [
                            "Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.",
                            "Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Preserve the Balance",
                        "entries": [
                            "For druids, nature exists in a precarious balance. The four elements that make up a world—air, earth, fire, and water—must remain in equilibrium. If one element were to gain power over the others, the world could be destroyed, drawn into one of the elemental planes and broken apart into its component elements. Thus, druids oppose cults of Elemental Evil and others who promote one element to the exclusion of others.",
                            "Druids are also concerned with the delicate ecological balance that sustains plant and animal life, and the need for civilized folk to live in harmony with nature, not in opposition to it. Druids accept that which is cruel in nature, and they hate that which is unnatural, including aberrations (such as beholders and mind flayers) and undead (such as zombies and vampires). Druids sometimes lead raids against such creatures, especially when the monsters encroach on the druids' territory.",
                            "Druids are often found guarding sacred sites or watching over regions of unspoiled nature. But when a significant danger arises, threatening nature's balance or the lands they protect, druids take on a more active role in combating the threat, as adventurers."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Druid",
                        "entries": [
                            "When making a druid, consider why your character has such a close bond with nature. Perhaps your character lives in a society where the Old Faith still thrives, or was raised by a druid after being abandoned in the depths of a forest. Perhaps your character had a dramatic encounter with the spirits of nature, coming face to face with a giant eagle or dire wolf and surviving the experience. Maybe your character was born during an epic storm or a volcanic eruption, which was interpreted as a sign that becoming a druid was part of your character's destiny.",
                            "Have you always been an adventurer as part of your druidic calling, or did you first spend time as a caretaker of a sacred grove or spring? Perhaps your homeland was befouled by evil, and you took up an adventuring life in hopes of finding a new home or purpose.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a druid quickly by following these suggestions. First, Wisdom should be your highest ability score, followed by Constitution. Second, choose the {@background hermit} background."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "inset",
                        "name": "Sacred Plants and Wood",
                        "entries": [
                            "A druid holds certain plants to be sacred, particularly alder, ash, birch, elder, hazel, holly, juniper, mistletoe, oak, rowan, willow, and yew. Druids often use such plants as part of a spellcasting focus, incorporating lengths of oak or yew or sprigs of mistletoe.",
                            "Similarly, a druid uses such woods to make other objects, such as weapons and shields. Yew is associated with death and rebirth, so weapon handles for scimitars or sickles might be fashioned from it. Ash is associated with life and oak with strength. These woods make excellent hafts or whole weapons, such as clubs or quarterstaffs, as well as shields. Alder is associated with air, and it might be used for thrown weapons, such as darts or javelins.",
                            "Druids from regions that lack the plants described here have chosen other plants to take on similar uses. For instance, a druid of a desert region might value the yucca tree and cactus plants."
                        ]
                    },
                    {
                        "type": "inset",
                        "name": "Druids and the Gods",
                        "entries": [
                            "Some druids venerate the forces of nature themselves, but most druids are devoted to one of the many nature deities worshiped in the multiverse (the lists of gods in appendix B include many such deities). The worship of these deities is often considered a more ancient tradition than the faiths of clerics and urbanized peoples. In fact, in the world of Greyhawk, the druidic faith is called the Old Faith, and it claims many adherents among farmers, foresters, fishers, and others who live closely with nature. This tradition includes the worship of Nature as a primal force beyond personification, but also encompasses the worship of Beory, the Oerth Mother, as well as devotees of Obad-Hai, Ehlonna, and Ulaa.",
                            "In the worlds of Greyhawk and the Forgotten Realms, druidic circles are not usually connected to the faith of a single nature deity. Any given circle in the Forgotten Realms, for example, might include druids who revere Silvanus, Mielikki, Eldath, Chauntea, or even the harsh Gods of Fury: Talos, Malar, Auril, and Umberlee. These nature gods are often called the First Circle, the first among the druids, and most druids count them all (even the violent ones) as worthy of veneration.",
                            "The druids of Eberron hold animistic beliefs completely unconnected to the Sovereign Host, the Dark Six, or any of the other religions of the world. They believe that every living thing and every natural phenomenon—sun, moon, wind, fire, and the world itself—has a spirit. Their spells, then, are a means to communicate with and command these spirits. Different druidic sects, though, hold different philosophies about the proper relationship of these spirits to each other and to the forces of civilization. The Ashbound, for example, believe that arcane magic is an abomination against nature, the Children of Winter venerate the forces of death, and the Gatekeepers preserve ancient traditions meant to protect the world from the incursion of aberrations."
                        ]
                    }
                ],
                "source": "PHB",
                "page": 64
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "Even in death, each creature plays its part in maintaining the Great Balance. But now an imbalance grows, a force that seeks to hold sway over nature. This is the destructive behavior of the mortal races. The farther away from nature their actions take them, the more corrupting their influence becomes. As druids, we seek mainly to protect and educate, to preserve the Great Balance, but there are times when we must rise up against danger and eradicate it."
                        ],
                        "by": "Safhran, archdruid"
                    },
                    "Druids are the caretakers of the natural world, and it is said that in time a druid becomes the voice of nature, speaking the truth that is too subtle for the general populace to hear. Many who become druids find that they naturally gravitate toward nature; its forces, cycles, and movements fill their minds and spirits with wonder and insight. Many sages and wise folk have studied nature, writing volumes about its mystery and power, but druids are a special kind of being: at some point, they begin to embody these natural forces, producing magical phenomena that link them to the spirit of nature and the flow of life. Because of their strange and mysterious power, druids are often revered, shunned, or considered dangerous by the people around them.",
                    "Your druid character might be a true worshiper of nature, one who has always scorned civilization and found solace in the wild. Or your character could be a child of the city who now strives to bring the civilized world into harmony with the wilderness. You can use the sections that follow to flesh out your druid, regardless of how your character came to the profession.",
                    {
                        "type": "entries",
                        "name": "Treasured Item",
                        "entries": [
                            "Some druids carry one or more items that are sacred to them or have deep personal significance. Such items are not necessarily magical, but every one is an object whose meaning connects the druid's mind and heart to a profound concept or spiritual outlook.",
                            "When you decide what your character's treasured item is, think about giving it an origin story: how did you come by the item, and why is it important to you?",
                            {
                                "type": "table",
                                "caption": "Treasured Item",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Treasured Item"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "A twig from the meeting tree that stands in the center of your village"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "A vial of water from the source of a sacred river"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Special herbs tied together in a bundle"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "A small bronze bowl engraved with animal images"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "A rattle made from a dried gourd and holly berries"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "A miniature golden sickle handed down to you by your mentor"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Guiding Aspects",
                        "entries": [
                            "Many druids feel a strong link to a specific aspect of the natural world, such as a body of water, an animal, a type of tree, or some other sort of plant. You identify with your chosen aspect; by its behavior or its very nature, it sets an example that you seek to emulate.",
                            {
                                "type": "table",
                                "caption": "Guiding Aspects",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Guiding Aspects"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Yew trees remind you of renewing your mind and spirit, letting the old die and the new spring forth."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Oak trees represent strength and vitality. Meditating under an oak fills your body and mind with resolve and fortitude."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "The river's endless flow reminds you of the great span of the world. You seek to act with the long-term interests of nature in mind."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "The sea is a constant, churning cauldron of power and chaos. It reminds you that accepting change is necessary to sustain yourself in the world."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "The birds in the sky are evidence that even the smallest creatures can survive if they remain above the fray."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "As demonstrated by the actions of the wolf, an individual's strength is nothing compared to the power of the pack."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Mentors",
                        "entries": [
                            "It's not unusual for would-be druids to seek out (or be sought out by) instructors or elders who teach them the basics of their magical arts. Most druids who learn from a mentor begin their training at a young age, and the mentor has a vital role in shaping a student's attitudes and beliefs.",
                            "If your character received training from someone else, who or what was that individual, and what was the nature of your relationship? Did your mentor imbue you with a particular outlook or otherwise influence your approach to achieving the goals of your chosen path?",
                            {
                                "type": "table",
                                "caption": "Mentors",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Mentors"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Your mentor was a wise treant who taught you to think in terms of years and decades rather than days or months."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "You were tutored by a dryad who watched over a slumbering portal to the Abyss. During your training, you were tasked with watching for hidden threats to the world."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Your tutor always interacted with you in the form of a falcon. You never saw the tutor's humanoid form."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "You were one of several youngsters who were mentored by an old druid, until one of your fellow pupils betrayed your group and killed your master."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Your mentor has appeared to you only in visions. You have yet to meet this person, and you are not sure such a person exists in mortal form."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Your mentor was a werebear who taught you to treat all living things with equal regard."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "section",
                        "name": "Learning Beast Shapes",
                        "entries": [
                            "The Wild Shape feature in the player's handbook lets you transform into a beast that you've seen. That rule gives you a tremendous amount of flexibility, making it easy to amass an array of beast form options for yourself, but you must abide by the limitations in the Beast Shapes table in that book.",
                            "When you gain Wild Shape as a 2nd-level druid, you might wonder which beasts you've already seen. The following tables organize beasts from the monster manual according to the beasts' most likely environments. Consider the environment your druid grew up in, then consult the appropriate table for a list of animals that your druid has probably seen by 2nd level.",
                            "These tables can also help you and your DM determine which animals you might see on your travels. In addition, the tables include each beast's challenge rating and note whether a beast has a flying or swimming speed. This information will help you determine whether you qualify to assume that beast's form.",
                            "The tables include all the individual beasts that are eligible for Wild Shape (up to a challenge rating of 1) or the Circle Forms feature of the Circle of the Moon (up to a challenge rating of 6).",
                            {
                                "type": "table",
                                "caption": "Arctic",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Owl}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Blood hawk}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant owl}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Brown bear}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Polar bear}",
                                        "Swim"
                                    ],
                                    [
                                        "2",
                                        "{@creature Saber-toothed tiger}",
                                        "—"
                                    ],
                                    [
                                        "6",
                                        "{@creature Mammoth}",
                                        "—"
                                    ]
                                ]
                            },
                            {
                                "type": "table",
                                "caption": "Coast",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Crab}",
                                        "Swim"
                                    ],
                                    [
                                        "0",
                                        "{@creature Eagle}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Blood hawk}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Giant crab}",
                                        "Swim"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Stirge}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant lizard}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant wolf spider}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Pteranodon}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant eagle}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant toad}",
                                        "Swim"
                                    ],
                                    [
                                        "2",
                                        "{@creature Plesiosaurus}",
                                        "Swim"
                                    ]
                                ]
                            },
                            {
                                "type": "table",
                                "caption": "Desert",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Cat}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Hyena}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Jackal}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Scorpion}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Vulture}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Camel}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Flying snake}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Mule}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Stirge}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Constrictor snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant lizard}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant wolf spider}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant hyena}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant spider}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant toad}",
                                        "Swim"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant vulture}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Lion}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant constrictor snake}",
                                        "Swim"
                                    ],
                                    [
                                        "3",
                                        "{@creature Giant scorpion}",
                                        "—"
                                    ]
                                ]
                            },
                            {
                                "type": "table",
                                "caption": "Forest",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Baboon}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Badger}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Cat}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Deer}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Hyena}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Owl}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Blood hawk}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Flying snake}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Giant rat}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Giant weasel}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Mastiff}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Stirge}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Boar}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Constrictor snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Elk}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant badger}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant bat}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant frog}",
                                        "Swim"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant lizard}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant owl}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant wolf spider}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Panther}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Wolf}",
                                        "—"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Ape}",
                                        "—"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Black bear}",
                                        "—"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Giant wasp}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Brown bear}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Dire wolf}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant hyena}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant spider}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant toad}",
                                        "Swim"
                                    ],
                                    [
                                        "1",
                                        "{@creature Tiger}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant boar}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant constrictor snake}",
                                        "Swim"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant elk}",
                                        "—"
                                    ]
                                ]
                            },
                            {
                                "type": "table",
                                "caption": "Grassland",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Cat}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Deer}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Eagle}",
                                        "Fly"
                                    ],
                                    [
                                        "0",
                                        "{@creature Goat}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Hyena}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Jackal}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Vulture}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Blood hawk}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Flying snake}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Giant weasel}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Stirge}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Axe beak}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Boar}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Elk}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant wolf spider}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Panther} (leopard)",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Pteranodon}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Riding horse}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Wolf}",
                                        "—"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Giant goat}",
                                        "—"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Giant wasp}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant eagle}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant hyena}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant vulture}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Lion}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Tiger}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Allosaurus}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant boar}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant elk}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Rhinoceros}",
                                        "—"
                                    ],
                                    [
                                        "3",
                                        "{@creature Ankylosaurus}",
                                        "—"
                                    ],
                                    [
                                        "4",
                                        "{@creature Elephant}",
                                        "—"
                                    ],
                                    [
                                        "5",
                                        "{@creature Triceratops}",
                                        "—"
                                    ]
                                ]
                            },
                            {
                                "type": "table",
                                "caption": "Hill",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Baboon}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Eagle}",
                                        "Fly"
                                    ],
                                    [
                                        "0",
                                        "{@creature Goat}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Hyena}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Raven}",
                                        "Fly"
                                    ],
                                    [
                                        "0",
                                        "{@creature Vulture}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Blood hawk}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Giant weasel}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Mastiff}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Mule}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Stirge}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Axe beak}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Boar}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Elk}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant owl}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant wolf spider}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Panther} (cougar)",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Wolf}",
                                        "—"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Giant goat}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Brown bear}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Dire wolf}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant eagle}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant hyena}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Lion}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant boar}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant elk}",
                                        "—"
                                    ]
                                ]
                            },
                            {
                                "type": "table",
                                "caption": "Mountain",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Eagle}",
                                        "Fly"
                                    ],
                                    [
                                        "0",
                                        "{@creature Goat}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Blood hawk}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Stirge}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Pteranodon}",
                                        "Fly"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Giant goat}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant eagle}",
                                        "Fly"
                                    ],
                                    [
                                        "1",
                                        "{@creature Lion}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant elk}",
                                        "—"
                                    ],
                                    [
                                        "2",
                                        "{@creature Saber-toothed tiger}",
                                        "—"
                                    ]
                                ]
                            },
                            {
                                "type": "table",
                                "caption": "Swamp",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Rat}",
                                        "—"
                                    ],
                                    [
                                        "0",
                                        "{@creature Raven}",
                                        "Fly"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Giant rat}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Stirge}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Constrictor snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant frog}",
                                        "Swim"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant lizard}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Crocodile}",
                                        "Swim"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant spider}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant toad}",
                                        "Swim"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant constrictor snake}",
                                        "Swim"
                                    ],
                                    [
                                        "5",
                                        "{@creature Giant crocodile}",
                                        "Swim"
                                    ]
                                ]
                            },
                            {
                                "type": "table",
                                "caption": "Underdark",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Giant fire beetle}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Giant rat}",
                                        "—"
                                    ],
                                    [
                                        "1/8",
                                        "{@creature Stirge}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant bat}",
                                        "Fly"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant centipede}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant lizard}",
                                        "—"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Giant poisonous snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant spider}",
                                        "—"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant toad}",
                                        "Swim"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant constrictor snake}",
                                        "Swim"
                                    ],
                                    [
                                        "2",
                                        "{@creature Polar bear} (cave bear)",
                                        "Swim"
                                    ]
                                ]
                            },
                            {
                                "type": "table",
                                "caption": "Underwater",
                                "colLabels": [
                                    "CR",
                                    "Beast",
                                    "Fly/Swim"
                                ],
                                "colStyles": [
                                    "col-2 text-center",
                                    "col-8",
                                    "col-2"
                                ],
                                "rows": [
                                    [
                                        "0",
                                        "{@creature Quipper}",
                                        "Swim"
                                    ],
                                    [
                                        "1/4",
                                        "{@creature Constrictor snake}",
                                        "Swim"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Giant sea horse}",
                                        "Swim"
                                    ],
                                    [
                                        "1/2",
                                        "{@creature Reef shark}",
                                        "Swim"
                                    ],
                                    [
                                        "1",
                                        "{@creature Giant octopus}",
                                        "Swim"
                                    ],
                                    [
                                        "2",
                                        "{@creature Giant constrictor snake}",
                                        "Swim"
                                    ],
                                    [
                                        "2",
                                        "{@creature Hunter shark}",
                                        "Swim"
                                    ],
                                    [
                                        "2",
                                        "{@creature Plesiosaurus}",
                                        "Swim"
                                    ],
                                    [
                                        "3",
                                        "{@creature Killer whale}",
                                        "Swim"
                                    ],
                                    [
                                        "5",
                                        "{@creature Giant shark}",
                                        "Swim"
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "source": "XGE",
                "page": 21
            }
        ]
    },
    {
        "name": "Fighter",
        "source": "PHB",
        "page": 70,
        "srd": true,
        "basicRules": true,
        "hd": {
            "number": 1,
            "faces": 10
        },
        "proficiency": [
            "str",
            "con"
        ],
        "optionalfeatureProgression": [
            {
                "name": "Fighting Style",
                "featureType": [
                    "FS:F"
                ],
                "progression": {
                    "1": 1
                }
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                "heavy",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple",
                "martial"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "acrobatics",
                            "animal handling",
                            "athletics",
                            "history",
                            "insight",
                            "intimidation",
                            "perception",
                            "survival"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) {@item chain mail|phb} or (b) {@item leather armor|phb}, {@item longbow|phb}, and {@item arrows (20)|phb|20 arrows}",
                "(a) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon} and a {@item shield|phb} or (b) two {@filter martial weapons|items|source=phb|category=basic|type=martial weapon}",
                "(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) two {@item handaxe|phb|handaxes}",
                "(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "chain mail|phb"
                    ],
                    "b": [
                        "leather armor|phb",
                        "longbow|phb",
                        "arrows (20)|phb"
                    ]
                },
                {
                    "a": [
                        {
                            "equipmentType": "weaponMartial"
                        },
                        "shield|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponMartial",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "a": [
                        "light crossbow|phb",
                        "crossbow bolts (20)|phb"
                    ],
                    "b": [
                        {
                            "item": "handaxe|phb",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "a": [
                        "dungeoneer's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "or": [
                    {
                        "str": 13,
                        "dex": 13
                    }
                ]
            },
            "proficienciesGained": {
                "armor": [
                    "light",
                    "medium",
                    "{@item shield|phb|shields}"
                ],
                "weapons": [
                    "simple",
                    "martial"
                ]
            }
        },
        "classFeatures": [
            "Fighting Style|Fighter||1",
            "Martial Versatility|Fighter||1|UAClassFeatureVariants",
            "Second Wind|Fighter||1",
            "Maneuver Versatility|Fighter||1|UAClassFeatureVariants",
            "Action Surge|Fighter||2",
            {
                "classFeature": "Martial Archetype|Fighter||3",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Fighter||4",
            "Proficiency Versatility|Fighter||4|UAClassFeatureVariants",
            "Martial Versatility|Fighter||4|TCE",
            "Extra Attack|Fighter||5",
            "Ability Score Improvement|Fighter||6",
            "Proficiency Versatility|Fighter||6|UAClassFeatureVariants",
            {
                "classFeature": "Martial Archetype feature|Fighter||7",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Fighter||8",
            "Proficiency Versatility|Fighter||8|UAClassFeatureVariants",
            "Indomitable|Fighter||9",
            {
                "classFeature": "Martial Archetype feature|Fighter||10",
                "gainSubclassFeature": true
            },
            "Extra Attack (2)|Fighter||11",
            "Ability Score Improvement|Fighter||12",
            "Proficiency Versatility|Fighter||12|UAClassFeatureVariants",
            "Indomitable (two uses)|Fighter||13",
            "Ability Score Improvement|Fighter||14",
            "Proficiency Versatility|Fighter||14|UAClassFeatureVariants",
            {
                "classFeature": "Martial Archetype feature|Fighter||15",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Fighter||16",
            "Proficiency Versatility|Fighter||16|UAClassFeatureVariants",
            "Action Surge (two uses)|Fighter||17",
            "Indomitable (three uses)|Fighter||17",
            {
                "classFeature": "Martial Archetype feature|Fighter||18",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Fighter||19",
            "Proficiency Versatility|Fighter||19|UAClassFeatureVariants",
            "Extra Attack (3)|Fighter||20"
        ],
        "subclassTitle": "Martial Archetype",
        "fluff": [
            {
                "name": "Fighter",
                "type": "section",
                "entries": [
                    "A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows loosed from his exquisite bow. The half-orc nearby shouts orders, helping the two combatants coordinate their assault to the best advantage.",
                    "A dwarf in chain mail interposes his shield between the ogre's club and his companion, knocking the deadly blow aside. His companion, a half-elf in scale armor, swings two scimitars in a blinding whirl as she circles the ogre, looking for a blind spot in its defenses.",
                    "A gladiator fights for sport in an arena, a master with his trident and net, skilled at toppling foes and moving them around for the crowd's delight—and his own tactical advantage. His opponent's sword flares with blue light an instant before she sends lightning flashing forth to smite him.",
                    "All of these heroes are fighters, perhaps the most diverse class of characters in the worlds of Dungeons & Dragons. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.",
                    {
                        "type": "entries",
                        "name": "Well-Rounded Specialists",
                        "entries": [
                            "Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Trained for Danger",
                        "entries": [
                            "Not every member of the city watch, the village militia, or the queen's army is a fighter. Most of these troops are relatively untrained soldiers with only the most basic combat knowledge. Veteran soldiers, military officers, trained bodyguards, dedicated knights, and similar figures are fighters.",
                            "Some fighters feel drawn to use their training as adventurers. The dungeon delving, monster slaying, and other dangerous work common among adventurers is second nature for a fighter, not all that different from the life he or she left behind. There are greater risks, perhaps, but also much greater rewards—few fighters in the city watch have the opportunity to discover a magic flame tongue sword, for example."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Fighter",
                        "entries": [
                            "As you build your fighter, think about two related elements of your character's background: Where did you get your combat training, and what set you apart from the mundane warriors around you? Were you particularly ruthless? Did you get extra help from a mentor, perhaps because of your exceptional dedication? What drove you to this training in the first place? A threat to your homeland, a thirst for revenge, or a need to prove yourself might all have been factors.",
                            "You might have enjoyed formal training in a noble's army or in a local militia. Perhaps you trained in a war academy, learning strategy, tactics, and military history. Or you might be self-taught—unpolished but well tested. Did you take up the sword as a way to escape the limits of life on a farm, or are you following a proud family tradition? Where did you acquire your weapons and armor? They might have been military issue or family heirlooms, or perhaps you scrimped and saved for years to buy them. Your armaments are now among your most important possessions—the only things that stand between you and death's embrace.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a fighter quickly by following these suggestions. First, make Strength or Dexterity your highest ability score, depending on whether you want to focus on melee weapons or on archery (or finesse weapons). Your next-highest score should be Constitution, or Intelligence if you plan to adopt the Eldritch Knight martial archetype. Second, choose the {@background soldier} background."
                                ]
                            }
                        ]
                    }
                ],
                "source": "PHB",
                "page": 70
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "Let me know when you're all done talking."
                        ],
                        "by": "Tordek"
                    },
                    "Of all the adventurers in the worlds of D&D, the fighter is perhaps the greatest paradox. On the one hand, a singular feature of the class is that no two fighters ply their craft in quite the same way; their weapons, armor, and tactics differ across a vast spectrum. On the other hand, regardless of the tools and methods one uses, at the heart of every fighter's motivation lies the same basic truth: it is better to wound than to be wounded.",
                    "Although some adventuring fighters risk their lives fighting for glory or treasure, others are primarily concerned with the welfare of others. They put more value on the well-being of the society, the village, or the group than on their own safety. Even if there's gold in the offing, the true reward for most fighters comes from sending enemies to their doom.",
                    "The sections below offer ways to add a little depth and a few personal touches to your fighter character.",
                    {
                        "type": "entries",
                        "name": "Heraldic Sign",
                        "entries": [
                            "Fighters typically do battle for a cause. Some fight on behalf of kingdoms besieged by monsters, while others quest only for personal glory. In either case, a fighter often displays a heraldic sign that represents that cause, either adopting the symbol of a nation or a royal line, or creating a crest to represent one's self-interest.",
                            "Your character could be affiliated with an organization or a cause, and thus might already travel under a banner of some sort. If that's not the case, consider devising a heraldic sign that symbolizes an aspect of your nature or speaks to what you see as your purpose in the world.",
                            {
                                "type": "table",
                                "caption": "Heraldic Signs",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Heraldic Signs"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "A rampant golden dragon on a green field, representing valor and a quest for wealth"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "The fist of a storm giant clutching lightning before a storm cloud, symbolizing wrath and power"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Crossed greatswords in front of a castle gate, signifying the defense of a city or kingdom"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "A skull with a dagger through it, representing the doom you bring to your enemies"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "A phoenix in a ring of fire, an expression of an indomitable spirit"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Three drops of blood beneath a horizontal sword blade on a black background, symbolizing three foes you have sworn to kill"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Instructor",
                        "entries": [
                            "Some fighters are natural-born combatants who have a talent for surviving in battle. Others learned the basics of their combat prowess in their formative years from spending time in a military or some other martial organization, when they were taught by the leaders of the group.",
                            "A third type of fighter comes from the ranks of those who received one-on-one instruction from an accomplished veteran of the craft. That instructor was, or perhaps still is, well versed in a certain aspect of combat that relates to the student's background.",
                            "If you decide that your character had an individual instructor, what is that person's specialty? Do you emulate your instructor in how you fight, or did you take the instructor's teachings and adapt them to your own purposes?",
                            {
                                "type": "table",
                                "caption": "Instructor",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Instructor"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Gladiator. Your instructor was a slave who fought for freedom in the arena, or one who willingly chose the gladiator's life to earn money and fame."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Military. Your trainer served with a group of soldiers and knows much about working as a team."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "City Watch. Crowd control and peacekeeping are your instructor's specialties."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Tribal Warrior. Your instructor grew up in a tribe, where fighting for one's life was practically an everyday occurrence."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Street Fighter. Your trainer excels at urban combat, combining close-quarters work with silence and efficiency."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Weapon Master. Your mentor helped you to become one with your chosen weapon, by imparting highly specialized knowledge of how to wield it most effectively."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Style",
                        "entries": [
                            "Many fighters distinguish themselves from their peers by adopting and perfecting a particular style or method of waging combat. Although this style might be a natural outgrowth of a fighter's personality, that's not always the case—someone's approach to the world in general does not necessarily dictate how that person operates when lives are on the line.",
                            "Do you have a combat style that mirrors your outlook on life, or is something else inside you unleashed when weapons are drawn?",
                            {
                                "type": "table",
                                "caption": "Style",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Style"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Elegant. You move with precise grace and total control, never using more energy than you need."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Brutal. Your attacks rain down like hammer blows, meant to splinter bone or send blood flying."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Cunning. You dart in to attack at just the right moment and use small-scale tactics to tilt the odds in your favor."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Effortless. You rarely perspire or display anything other than a stoic expression in battle."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Energetic. You sing and laugh during combat as your spirit soars. You are happiest when you have a foe in front of you and a weapon in hand."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Sinister. You scowl and sneer while fighting, and you enjoy mocking your foes as you defeat them."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "source": "XGE",
                "page": 27
            }
        ]
    },
    {
        "name": "Mage of Lorehold (UA)",
        "shortName": "Lorehold (UA)",
        "source": "UA2021MagesOfStrixhaven",
        "className": "Generic",
        "classSource": "Generic",
        "page": 2,
        "additionalSpells": [
            {
                "known": {
                    "3": [
                        "knock",
                        "locate object"
                    ],
                    "5": [
                        "speak with dead",
                        "spirit guardians"
                    ],
                    "7": [
                        "arcane eye",
                        "stone shape"
                    ],
                    "9": [
                        "destructive wave",
                        "legend lore"
                    ]
                }
            }
        ],
        "subclassFeatures": [
            "Mage of Lorehold|Generic|Generic|Lorehold (UA)|UA2021MagesOfStrixhaven|1",
            "Lessons of the Past|Generic|Generic|Lorehold (UA)|UA2021MagesOfStrixhaven|6",
            "War Echoes|Generic|Generic|Lorehold (UA)|UA2021MagesOfStrixhaven|10",
            "History's Whims|Generic|Generic|Lorehold (UA)|UA2021MagesOfStrixhaven|14"
        ]
    },
    {
        "name": "Mage of Prismari (UA)",
        "shortName": "Prismari (UA)",
        "source": "UA2021MagesOfStrixhaven",
        "className": "Generic",
        "classSource": "Generic",
        "page": 4,
        "subclassFeatures": [
            "Mage of Prismari|Generic|Generic|Prismari (UA)|UA2021MagesOfStrixhaven|1",
            "Favored Medium|Generic|Generic|Prismari (UA)|UA2021MagesOfStrixhaven|6",
            "Focused Expression|Generic|Generic|Prismari (UA)|UA2021MagesOfStrixhaven|10",
            "Impeccable Physicality|Generic|Generic|Prismari (UA)|UA2021MagesOfStrixhaven|14"
        ]
    },
    {
        "name": "Mage of Quandrix (UA)",
        "shortName": "Quandrix (UA)",
        "source": "UA2021MagesOfStrixhaven",
        "className": "Generic",
        "classSource": "Generic",
        "page": 5,
        "additionalSpells": [
            {
                "known": {
                    "3": [
                        "knock",
                        "locate object"
                    ],
                    "5": [
                        "speak with dead",
                        "spirit guardians"
                    ],
                    "7": [
                        "arcane eye",
                        "stone shape"
                    ],
                    "9": [
                        "destructive wave",
                        "legend lore"
                    ]
                }
            }
        ],
        "subclassFeatures": [
            "Mage of Quandrix|Generic|Generic|Quandrix (UA)|UA2021MagesOfStrixhaven|1",
            "Velocity Shift|Generic|Generic|Quandrix (UA)|UA2021MagesOfStrixhaven|6",
            "Null Equation|Generic|Generic|Quandrix (UA)|UA2021MagesOfStrixhaven|10",
            "Quantum Tunneling|Generic|Generic|Quandrix (UA)|UA2021MagesOfStrixhaven|14"
        ]
    },
    {
        "name": "Mage of Silverquill (UA)",
        "shortName": "Silverquill (UA)",
        "source": "UA2021MagesOfStrixhaven",
        "className": "Generic",
        "classSource": "Generic",
        "page": 6,
        "subclassFeatures": [
            "Mage of Silverquill|Generic|Generic|Silverquill (UA)|UA2021MagesOfStrixhaven|1",
            "Inky Shroud|Generic|Generic|Silverquill (UA)|UA2021MagesOfStrixhaven|6",
            "Infusion of Eloquence|Generic|Generic|Silverquill (UA)|UA2021MagesOfStrixhaven|10",
            "Word of Power|Generic|Generic|Silverquill (UA)|UA2021MagesOfStrixhaven|14"
        ]
    },
    {
        "name": "Mage of Witherbloom (UA)",
        "shortName": "Witherbloom (UA)",
        "source": "UA2021MagesOfStrixhaven",
        "className": "Generic",
        "classSource": "Generic",
        "page": 8,
        "additionalSpells": [
            {
                "known": {
                    "3": [
                        "lesser restoration",
                        "ray of enfeeblement"
                    ],
                    "5": [
                        "revivify",
                        "vampiric touch"
                    ],
                    "7": [
                        "blight",
                        "greater restoration"
                    ],
                    "9": [
                        "antilife shell",
                        "mass cure wounds"
                    ]
                }
            }
        ],
        "subclassFeatures": [
            "Mage of Witherbloom|Generic|Generic|Witherbloom (UA)|UA2021MagesOfStrixhaven|1",
            "Witherbloom Brew|Generic|Generic|Witherbloom (UA)|UA2021MagesOfStrixhaven|6",
            "Witherbloom Adept|Generic|Generic|Witherbloom (UA)|UA2021MagesOfStrixhaven|10",
            "Withering Vortex|Generic|Generic|Witherbloom (UA)|UA2021MagesOfStrixhaven|14"
        ]
    },
    {
        "name": "Monk",
        "source": "PHB",
        "page": 76,
        "srd": true,
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "str",
            "dex"
        ],
        "startingProficiencies": {
            "weapons": [
                "simple",
                "{@item shortsword|phb|shortswords}"
            ],
            "tools": [
                "any one type of {@item artisan's tools|PHB} or any one {@item musical instrument|PHB} of your choice"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "acrobatics",
                            "athletics",
                            "history",
                            "insight",
                            "religion",
                            "stealth"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item shortsword|phb} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
                "(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
                "10 {@item dart|phb|darts}"
            ],
            "goldAlternative": "{@dice 5d4|5d4|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "shortsword|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimple"
                        }
                    ]
                },
                {
                    "a": [
                        "dungeoneer's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "_": [
                        {
                            "item": "dart|phb",
                            "quantity": 10
                        }
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "dex": 13,
                "wis": 13
            },
            "proficienciesGained": {
                "weapons": [
                    "simple",
                    "{@item shortsword|phb|shortswords}"
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "Martial Arts",
                    "Ki Points",
                    "Unarmored Movement"
                ],
                "rows": [
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 4
                                }
                            ]
                        },
                        0,
                        {
                            "type": "bonusSpeed",
                            "value": 0
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 4
                                }
                            ]
                        },
                        2,
                        {
                            "type": "bonusSpeed",
                            "value": 10
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 4
                                }
                            ]
                        },
                        3,
                        {
                            "type": "bonusSpeed",
                            "value": 10
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 4
                                }
                            ]
                        },
                        4,
                        {
                            "type": "bonusSpeed",
                            "value": 10
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 6
                                }
                            ]
                        },
                        5,
                        {
                            "type": "bonusSpeed",
                            "value": 10
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 6
                                }
                            ]
                        },
                        6,
                        {
                            "type": "bonusSpeed",
                            "value": 15
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 6
                                }
                            ]
                        },
                        7,
                        {
                            "type": "bonusSpeed",
                            "value": 15
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 6
                                }
                            ]
                        },
                        8,
                        {
                            "type": "bonusSpeed",
                            "value": 15
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 6
                                }
                            ]
                        },
                        9,
                        {
                            "type": "bonusSpeed",
                            "value": 15
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 6
                                }
                            ]
                        },
                        10,
                        {
                            "type": "bonusSpeed",
                            "value": 20
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 8
                                }
                            ]
                        },
                        11,
                        {
                            "type": "bonusSpeed",
                            "value": 20
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 8
                                }
                            ]
                        },
                        12,
                        {
                            "type": "bonusSpeed",
                            "value": 20
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 8
                                }
                            ]
                        },
                        13,
                        {
                            "type": "bonusSpeed",
                            "value": 20
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 8
                                }
                            ]
                        },
                        14,
                        {
                            "type": "bonusSpeed",
                            "value": 25
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 8
                                }
                            ]
                        },
                        15,
                        {
                            "type": "bonusSpeed",
                            "value": 25
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 8
                                }
                            ]
                        },
                        16,
                        {
                            "type": "bonusSpeed",
                            "value": 25
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 10
                                }
                            ]
                        },
                        17,
                        {
                            "type": "bonusSpeed",
                            "value": 25
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 10
                                }
                            ]
                        },
                        18,
                        {
                            "type": "bonusSpeed",
                            "value": 30
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 10
                                }
                            ]
                        },
                        19,
                        {
                            "type": "bonusSpeed",
                            "value": 30
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 10
                                }
                            ]
                        },
                        20,
                        {
                            "type": "bonusSpeed",
                            "value": 30
                        }
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Unarmored Defense|Monk||1",
            "Martial Arts|Monk||1",
            "Monk Weapons|Monk||1|UAClassFeatureVariants",
            "Ki|Monk||2",
            "Ki-Fueled Strike|Monk||2|UAClassFeatureVariants",
            "Ki Features|Monk||2|UAClassFeatureVariants",
            "Dedicated Weapon|Monk||2|TCE",
            "Unarmored Movement|Monk||2",
            "Deflect Missiles|Monk||3",
            {
                "classFeature": "Monastic Tradition|Monk||3",
                "gainSubclassFeature": true
            },
            "Ki-Fueled Attack|Monk||3|TCE",
            "Ability Score Improvement|Monk||4",
            "Proficiency Versatility|Monk||4|UAClassFeatureVariants",
            "Slow Fall|Monk||4",
            "Quickened Healing|Monk||4|TCE",
            "Extra Attack|Monk||5",
            "Stunning Strike|Monk||5",
            "Focused Aim|Monk||5|TCE",
            "Ki-Empowered Strikes|Monk||6",
            {
                "classFeature": "Monastic Tradition feature|Monk||6",
                "gainSubclassFeature": true
            },
            "Evasion|Monk||7",
            "Stillness of Mind|Monk||7",
            "Ability Score Improvement|Monk||8",
            "Proficiency Versatility|Monk||8|UAClassFeatureVariants",
            "Unarmored Movement improvement|Monk||9",
            "Purity of Body|Monk||10",
            {
                "classFeature": "Monastic Tradition feature|Monk||11",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Monk||12",
            "Proficiency Versatility|Monk||12|UAClassFeatureVariants",
            "Tongue of the Sun and Moon|Monk||13",
            "Diamond Soul|Monk||14",
            "Timeless Body|Monk||15",
            "Ability Score Improvement|Monk||16",
            "Proficiency Versatility|Monk||16|UAClassFeatureVariants",
            {
                "classFeature": "Monastic Tradition feature|Monk||17",
                "gainSubclassFeature": true
            },
            "Empty Body|Monk||18",
            "Ability Score Improvement|Monk||19",
            "Proficiency Versatility|Monk||19|UAClassFeatureVariants",
            "Perfect Self|Monk||20"
        ],
        "subclassTitle": "Monastic Tradition",
        "fluff": [
            {
                "name": "Monk",
                "type": "section",
                "entries": [
                    "Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them, knocking their blows aside and sending them reeling, until at last she stands alone.",
                    "Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his foes.",
                    "Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch and emerges from another inky shadow on a balcony a stone's throw away. She slides her blade free of its cloth-wrapped scabbard and peers through the open window at the tyrant prince, so vulnerable in the grip of sleep.",
                    "Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
                    {
                        "type": "entries",
                        "name": "The Magic of Ki",
                        "entries": [
                            "Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies' physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Training and Asceticism",
                        "entries": [
                            "Small walled cloisters dot the landscapes of the worlds of D&D, tiny refuges from the flow of ordinary life, where time seems to stand still. The monks who live there seek personal perfection through contemplation and rigorous training. Many entered the monastery as children, sent to live there when their parents died, when food couldn't be found to support them, or in return for some kindness that the monks had performed for their families.",
                            "Some monks live entirely apart from the surrounding population, secluded from anything that might impede their spiritual progress. Others are sworn to isolation, emerging only to serve as spies or assassins at the command of their leader, a noble patron, or some other mortal or divine power.",
                            "The majority of monks don't shun their neighbors, making frequent visits to nearby towns or villages and exchanging their service for food and other goods. As versatile warriors, monks often end up protecting their neighbors from monsters or tyrants.",
                            "For a monk, becoming an adventurer means leaving a structured, communal lifestyle to become a wanderer. This can be a harsh transition, and monks don't undertake it lightly. Those who leave their cloisters take their work seriously, approaching their adventures as personal tests of their physical and spiritual growth. As a rule, monks care little for material wealth and are driven by a desire to accomplish a greater mission than merely slaying monsters and plundering their treasure."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Monk",
                        "entries": [
                            "As you make your monk character, think about your connection to the monastery where you learned your skills and spent your formative years. Were you an orphan or a child left on the monastery's threshold? Did your parents promise you to the monastery in gratitude for a service performed by the monks? Did you enter this secluded life to hide from a crime you committed? Or did you choose the monastic life for yourself?",
                            "Consider why you left. Did the head of your monastery choose you for a particularly important mission beyond the cloister? Perhaps you were cast out because of some violation of the community's rules. Did you dread leaving, or were you happy to go? Is there something you hope to accomplish outside the monastery? Are you eager to return to your home?",
                            "As a result of the structured life of a monastic community and the discipline required to harness ki, monks are almost always lawful in alignment.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a monk quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. Second, choose the {@background hermit} background."
                                ]
                            }
                        ]
                    }
                ],
                "source": "PHB",
                "page": 76
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "Do not mistake my silence for acceptance of your villainy. While you blustered and threatened, I've planned four different ways to snap your neck with my bare hands."
                        ],
                        "by": "Ember, grand master of flowers"
                    },
                    "Monks walk a path of contradiction. They study their art as a wizard does, and like a wizard, they wear no armor and typically eschew weapons. Yet they are deadly combatants, their abilities on a par with those of a raging barbarian or a superbly trained fighter. Monks embrace this seeming contradiction, for it speaks to the core of all monastic study. By coming to know oneself completely, one learns much of the wider world.",
                    "A monk's focus on inner mastery leads many such individuals to become detached from society, more concerned with their personal experience than with happenings elsewhere. Adventuring monks are a rare breed of an already rare type of character, taking their quest for perfection beyond the walls of the monastery into the world at large.",
                    "Playing a monk character offers many intriguing opportunities to try something different. To distinguish your monk character even further, consider the options in the sections that follow.",
                    {
                        "type": "entries",
                        "name": "Monastery",
                        "entries": [
                            "A monk studies in a monastery in preparation for a life of asceticism. Most of those who enter a monastery make it their home for the rest of their lives, with the exception of adventurers and others who have reason to leave. For those individuals, a monastery might serve as a refuge between excursions to the world or as a source of support in times of need.",
                            "What sort of place was your monastery, and where is it located? Did attending it contribute to your experience in an unusual or distinctive way?",
                            {
                                "type": "table",
                                "caption": "Monastery",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Monastery"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Your monastery is carved out of a mountainside, where it looms over a treacherous pass."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Your monastery is high in the branches of an immense tree in the Feywild."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Your monastery was founded long ago by a cloud giant and is inside a cloud castle that can be reached only by flying."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Your monastery is built beside a volcanic system of hot springs, geysers, and sulfur pools. You regularly received visits from azer traders."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Your monastery was founded by gnomes and is an underground labyrinth of tunnels and rooms."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Your monastery was carved from an iceberg in the frozen reaches of the world."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Icon",
                        "entries": [
                            "Even in the monastic lifestyle, which eschews materialism and personal possessions, symbolism plays an important part in defining the identity of an order. Some monastic orders treat certain creatures with special regard, either because the creature is tied to the order's history or because it serves as an example of a quality the monks seek to emulate.",
                            "If your character's monastery had a special icon, you might wear a crude image of the creature somewhere inconspicuous on your clothing to serve as an identifying mark. Or perhaps your order's icon does not have a physical form but is expressed through a gesture or a posture that you adopt, and which other monks might know how to interpret.",
                            {
                                "type": "table",
                                "caption": "Icon",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Icon"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Monkey. Quick reflexes and the ability to travel through the treetops are two of the reasons why your order admires the monkey."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Dragon Turtle. The monks of your seaside monastery venerate the dragon turtle, reciting ancient prayers and offering garlands of flowers to honor this living spirit of the sea."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Ki-rin. Your monastery sees its main purpose as watching over and protecting the land in the manner of the ki-rin."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Owlbear. The monks of your monastery revere a family of owlbears and have coexisted with them for generations."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Hydra. Your order singles out the hydra for its ability to unleash several attacks simultaneously."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Dragon. A dragon once laired within your monastery. Its influence remains long after its departure."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Master",
                        "entries": [
                            "During your studies, you were likely under the tutelage of a master who imparted to you the precepts of the order. Your master was the one most responsible for shaping your understanding of the martial arts and your attitude toward the world. What sort of person was your master, and how did your relationship with your master affect you?",
                            {
                                "type": "table",
                                "caption": "Master",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Master"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Your master was a tyrant whom you had to defeat in single combat to complete your instruction."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Your master was kindly and taught you to pursue the cause of peace."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Your master was merciless in pushing you to your limits. You nearly lost an eye during one especially brutal practice session."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Your master seemed goodhearted while tutoring you, but betrayed your monastery in the end."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Your master was cold and distant. You suspect that the two of you might be related."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Your master was kind and generous, never critical of your progress. Nevertheless, you feel you never fully lived up to the expectations placed on you."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "source": "XGE",
                "page": 32
            }
        ]
    },
    {
        "name": "Mystic",
        "source": "UATheMysticClass",
        "page": 1,
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "int",
            "wis"
        ],
        "startingProficiencies": {
            "armor": [
                "light"
            ],
            "weapons": [
                "simple"
            ],
            "tools": [
                "None"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "arcana",
                            "history",
                            "insight",
                            "medicine",
                            "nature",
                            "perception",
                            "religion"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item spear|phb} or (b) a {@item mace|phb}",
                "(a) {@item leather armor|phb} or (b) {@item studded leather armor|phb}",
                "(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
                "(a) a {@item scholar's pack|phb} or (b) an {@item explorer's pack|phb}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "spear|phb"
                    ],
                    "b": [
                        "mace|phb"
                    ]
                },
                {
                    "a": [
                        "leather armor|phb"
                    ],
                    "b": [
                        "studded leather armor|phb"
                    ]
                },
                {
                    "a": [
                        "light crossbow|phb",
                        "crossbow bolts (20)|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimple"
                        }
                    ]
                },
                {
                    "a": [
                        "scholar's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                }
            ]
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Talents Known|psionics|type=T}",
                    "{@filter Disciplines Known|psionics|type=D}",
                    "Psi Points",
                    "Psi Limit"
                ],
                "rows": [
                    [
                        1,
                        1,
                        4,
                        2
                    ],
                    [
                        1,
                        1,
                        6,
                        2
                    ],
                    [
                        2,
                        2,
                        14,
                        3
                    ],
                    [
                        2,
                        2,
                        17,
                        3
                    ],
                    [
                        2,
                        3,
                        27,
                        5
                    ],
                    [
                        2,
                        3,
                        32,
                        5
                    ],
                    [
                        2,
                        4,
                        38,
                        6
                    ],
                    [
                        2,
                        4,
                        44,
                        6
                    ],
                    [
                        2,
                        5,
                        57,
                        7
                    ],
                    [
                        3,
                        5,
                        64,
                        7
                    ],
                    [
                        3,
                        5,
                        64,
                        7
                    ],
                    [
                        3,
                        6,
                        64,
                        7
                    ],
                    [
                        3,
                        6,
                        64,
                        7
                    ],
                    [
                        3,
                        6,
                        64,
                        7
                    ],
                    [
                        3,
                        7,
                        64,
                        7
                    ],
                    [
                        3,
                        7,
                        64,
                        7
                    ],
                    [
                        4,
                        7,
                        64,
                        7
                    ],
                    [
                        4,
                        8,
                        71,
                        7
                    ],
                    [
                        4,
                        8,
                        71,
                        7
                    ],
                    [
                        4,
                        8,
                        71,
                        7
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Psionics|Mystic|UATheMysticClass|1",
            "Psionic Disciplines and Talents|Mystic|UATheMysticClass|1",
            "Using a Discipline|Mystic|UATheMysticClass|1",
            {
                "classFeature": "Mystic Order|Mystic|UATheMysticClass|1",
                "gainSubclassFeature": true
            },
            "Mystical Recovery|Mystic|UATheMysticClass|2",
            "Telepathy|Mystic|UATheMysticClass|2",
            {
                "classFeature": "Mystic Order feature|Mystic|UATheMysticClass|3",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Mystic|UATheMysticClass|4",
            "Proficiency Versatility|Mystic|UATheMysticClass|4|UAClassFeatureVariants",
            "Strength of Mind|Mystic|UATheMysticClass|4",
            {
                "classFeature": "Mystic Order feature|Mystic|UATheMysticClass|6",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Mystic|UATheMysticClass|8",
            "Proficiency Versatility|Mystic|UATheMysticClass|8|UAClassFeatureVariants",
            "Potent Psionics (1d8)|Mystic|UATheMysticClass|8",
            "Consumptive Power|Mystic|UATheMysticClass|10",
            "Psionic Mastery (1/Day)|Mystic|UATheMysticClass|11",
            "Ability Score Improvement|Mystic|UATheMysticClass|12",
            "Proficiency Versatility|Mystic|UATheMysticClass|12|UAClassFeatureVariants",
            "Psionic Mastery (2/Day)|Mystic|UATheMysticClass|13",
            {
                "classFeature": "Mystic Order feature|Mystic|UATheMysticClass|14",
                "gainSubclassFeature": true
            },
            "Potent Psionics (2d8)|Mystic|UATheMysticClass|14",
            "Psionic Mastery (3/Day)|Mystic|UATheMysticClass|15",
            "Ability Score Improvement|Mystic|UATheMysticClass|16",
            "Proficiency Versatility|Mystic|UATheMysticClass|16|UAClassFeatureVariants",
            "Psionic Mastery (4/Day)|Mystic|UATheMysticClass|17",
            "Ability Score Improvement|Mystic|UATheMysticClass|19",
            "Proficiency Versatility|Mystic|UATheMysticClass|19|UAClassFeatureVariants",
            "Psionic Body|Mystic|UATheMysticClass|20"
        ],
        "subclassTitle": "Mystic Order",
        "fluff": [
            {
                "type": "section",
                "name": "Mystic",
                "entries": [
                    "A human clad in simple robes walks along a forest path. A gang of goblins emerges from the brush, arrows trained on him, their smiles wide at their good fortune of finding such easy prey for the legion's slave pens. Their smiles turn to shrieks of terror as the traveler grows to giant size and leaps at them, his staff now a deadly cudgel.",
                    "The militia forms in ranks to prepare for the orcs' charge. The growling brutes howl their battle cries and surge forward. To their surprise, the human rabble holds its ground and fights with surprising ferocity. Suddenly, mindless fear clings to the orcs' minds and they, despite facing a far inferior foe, turn and run, never noticing the calm half-elf standing amid the militia and directing its efforts.",
                    "Baron von Ludwig was always proud of his grand library. Little did he know that each evening, a gnome laden with blank scrolls slipped past his guards each night and dutifully copied his most heavily guarded archives. When the duke's men arrived to arrest him for dealing with demons, he never guessed that the gnome scribe traveling with them had spent more time in his keep than he had over the past year.",
                    "These heroes are all mystics, followers of a strange and mysterious form of power. Mystics shun the world to turn their eyes inward, mastering the full potential of their minds and exploring their psyches before turning to face the world. Mystics are incredibly rare, and most prefer to keep the nature of their abilities secret. Using their inner, psychic strength, they can read minds, fade into invisibility, transform their bodies into living iron, and seize control of the physical world and bend it to their will.",
                    {
                        "type": "entries",
                        "name": "Hermits and Outcasts",
                        "entries": [
                            "Mystics are loners. Most discover the secrets of their power through vague references in tomes of lore or by ingratiating themselves to a master of the power.",
                            "In order to master their power, mystics must first master themselves. They spend months and years in quiet contemplation, exploring their minds and leaving nothing uncovered. During this time, they shun society and typically live as hermits at the edge of society. A mystic who studied under a master worked as a virtual slave, toiling away at mundane tasks in return for the occasional lesson or cryptic insight.",
                            "When mystics finally master their power, they return to the world to broaden their horizons and practice their craft. Some mystics prefer to remain isolated, but those who become adventurers aren't content to remain on the fringe of the world."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Eccentric Minds",
                        "entries": [
                            "In order to maintain the strict discipline and intense self-knowledge needed to tap into their power, mystics develop a variety of practices to keep their focus sharp.",
                            "These practices are reflected in taboos and quirks, strange little behaviors that govern a mystic's actions. These quirks are oaths or behavioral tics that help keep mystics in the proper frame of mind while maintaining perfect control over their minds and bodies.",
                            "While these taboos are harmless, they help cast mystics as outsiders. Few feel accepted by society, and fewer still care to become integrated with it. To mystics, the life of the mind is where they feel most at home.",
                            {
                                "type": "entries",
                                "name": "Selecting Quirks",
                                "entries": [
                                    "To add some texture to your mystic, consider the quirks your character has acquired. These behaviors have no game effect, but your character might become irritated or upset if forced to break them. They're a great roleplaying tool to add character to the game. You can roll on or pick from the table below, or create your own quirks. Aim to create two quirks, to give them more of a chance to come into play. Finally, consider why your character chose these behaviors. What do they say about your character's personality or background? Are they based on a specific incident or a belief?",
                                    {
                                        "type": "table",
                                        "caption": "Mystic Quirks",
                                        "colLabels": [
                                            "d20",
                                            "Quirk"
                                        ],
                                        "colStyles": [
                                            "col-2 text-center",
                                            "col-10"
                                        ],
                                        "rows": [
                                            [
                                                1,
                                                "You never cut your hair."
                                            ],
                                            [
                                                2,
                                                "You refuse to wear clothes of a specific color."
                                            ],
                                            [
                                                3,
                                                "You never say your name."
                                            ],
                                            [
                                                4,
                                                "You never wear footwear."
                                            ],
                                            [
                                                5,
                                                "You always wear a mask."
                                            ],
                                            [
                                                6,
                                                "You dye your hair bright blue or green."
                                            ],
                                            [
                                                7,
                                                "You pick a new name each day."
                                            ],
                                            [
                                                8,
                                                "You never immerse yourself in water."
                                            ],
                                            [
                                                9,
                                                "You sleep on bare earth."
                                            ],
                                            [
                                                10,
                                                "You never consume alcohol."
                                            ],
                                            [
                                                11,
                                                "You wear a veil to conceal your face."
                                            ],
                                            [
                                                12,
                                                "You always wear a specific piece of clothing."
                                            ],
                                            [
                                                13,
                                                "You refuse to light fires."
                                            ],
                                            [
                                                14,
                                                "You refuse to write things down, instead using pictograms."
                                            ],
                                            [
                                                15,
                                                "You never sit on a chair, preferring to stand or sit on the floor."
                                            ],
                                            [
                                                16,
                                                "You never answer to any name but your own."
                                            ],
                                            [
                                                17,
                                                "You write down the name of each creature you slay, and name ones that are unnamed."
                                            ],
                                            [
                                                18,
                                                "You consume only water and raw vegetables."
                                            ],
                                            [
                                                19,
                                                "You spend any money you earn within 1 week of gaining it."
                                            ],
                                            [
                                                20,
                                                "You often speak to an imaginary companion, and act only with its blessing."
                                            ]
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Mystic",
                        "entries": [
                            "When creating a mystic, consider your character's background. How did you become a mystic? What first drew you to this practice? Are you self-taught, or did you have a master? If you had a master, what is that relationship like?",
                            "Consider also why you returned to the world from your hermitage. Did you leave someone or something behind when you took up your studies? Are you driven by revenge or some other motivation?",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a mystic quickly by following these suggestions. First, make Intelligence your highest ability score, followed by Dexterity or Constitution. Second, choose the {@background hermit} background."
                                ]
                            }
                        ]
                    }
                ],
                "source": "UATheMysticClass",
                "page": 1
            }
        ]
    },
    {
        "name": "Paladin",
        "source": "PHB",
        "page": 82,
        "srd": true,
        "hd": {
            "number": 1,
            "faces": 10
        },
        "proficiency": [
            "wis",
            "cha"
        ],
        "spellcastingAbility": "cha",
        "casterProgression": "1/2",
        "preparedSpells": "<$level$> / 2 + <$cha_mod$>",
        "optionalfeatureProgression": [
            {
                "name": "Fighting Style",
                "featureType": [
                    "FS:P"
                ],
                "progression": {
                    "2": 1
                }
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                "heavy",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple",
                "martial"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "athletics",
                            "insight",
                            "intimidation",
                            "medicine",
                            "persuasion",
                            "religion"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon} and a {@item shield|phb} or (b) two {@filter martial weapons|items|source=phb|category=basic|type=martial weapon}",
                "(a) five {@item javelin|phb|javelins} or (b) any {@filter simple melee weapon|items|source=phb|category=basic|type=simple weapon;melee weapon=sand}",
                "(a) a {@item priest's pack|phb} or (b) an {@item explorer's pack|phb}",
                "{@item Chain mail|phb} and a {@item holy symbol|phb}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        {
                            "equipmentType": "weaponMartial"
                        },
                        "shield|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponMartial",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "a": [
                        {
                            "item": "javelin|phb",
                            "quantity": 5
                        }
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimpleMelee"
                        }
                    ]
                },
                {
                    "a": [
                        "priest's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "_": [
                        "Chain mail|phb",
                        "holy symbol|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "str": 13,
                "cha": 13
            },
            "proficienciesGained": {
                "armor": [
                    "light",
                    "medium",
                    "{@item shield|phb|shields}"
                ],
                "weapons": [
                    "simple",
                    "martial"
                ]
            }
        },
        "classTableGroups": [
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Paladin}",
                    "{@filter 2nd|spells|level=2|class=Paladin}",
                    "{@filter 3rd|spells|level=3|class=Paladin}",
                    "{@filter 4th|spells|level=4|class=Paladin}",
                    "{@filter 5th|spells|level=5|class=Paladin}"
                ],
                "rowsSpellProgression": [
                    [
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Divine Sense|Paladin||1",
            "Lay on Hands|Paladin||1",
            "Divine Smite|Paladin||2",
            "Fighting Style|Paladin||2",
            "Martial Versatility|Paladin||2|UAClassFeatureVariants",
            "Spellcasting|Paladin||2",
            "Divine Health|Paladin||3",
            {
                "classFeature": "Sacred Oath|Paladin||3",
                "gainSubclassFeature": true,
                "gainSubclassFeatureHasContent": true
            },
            "Ability Score Improvement|Paladin||4",
            "Proficiency Versatility|Paladin||4|UAClassFeatureVariants",
            "Martial Versatility|Paladin||4|TCE",
            "Extra Attack|Paladin||5",
            "Aura of Protection|Paladin||6",
            {
                "classFeature": "Sacred Oath feature|Paladin||7",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Paladin||8",
            "Proficiency Versatility|Paladin||8|UAClassFeatureVariants",
            "Aura of Courage|Paladin||10",
            "Improved Divine Smite|Paladin||11",
            "Ability Score Improvement|Paladin||12",
            "Proficiency Versatility|Paladin||12|UAClassFeatureVariants",
            "Cleansing Touch|Paladin||14",
            {
                "classFeature": "Sacred Oath feature|Paladin||15",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Paladin||16",
            "Proficiency Versatility|Paladin||16|UAClassFeatureVariants",
            "Aura improvements|Paladin||18",
            "Ability Score Improvement|Paladin||19",
            "Proficiency Versatility|Paladin||19|UAClassFeatureVariants",
            {
                "classFeature": "Sacred Oath feature|Paladin||20",
                "gainSubclassFeature": true
            }
        ],
        "subclassTitle": "Sacred Oath",
        "fluff": [
            {
                "name": "Paladin",
                "type": "section",
                "entries": [
                    "Clad in plate armor that gleams in the sunlight despite the dust and grime of long travel, a human lays down her sword and shield and places her hands on a mortally wounded man. Divine radiance shines from her hands, the man's wounds knit closed, and his eyes open wide with amazement.",
                    "A dwarf crouches behind an outcrop, his black cloak making him nearly invisible in the night, and watches an orc war band celebrating its recent victory. Silently, he stalks into their midst and whispers an oath, and two orcs are dead before they even realize he is there.",
                    "Silver hair shining in a shaft of light that seems to illuminate only him, an elf laughs with exultation. His spear flashes like his eyes as he jabs again and again at a twisted giant, until at last his light overcomes its hideous darkness.",
                    "Whatever their origin and their mission, paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.",
                    {
                        "type": "entries",
                        "name": "The Cause of Righteousness",
                        "entries": [
                            "A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin's power comes as much from a commitment to justice itself as it does from a god.",
                            "Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Beyond the Mundane Life",
                        "entries": [
                            "Almost by definition, the life of a paladin is an adventuring life. Unless a lasting injury has taken him or her away from adventuring for a time, every paladin lives on the front lines of the cosmic struggle against evil. Fighters are rare enough among the ranks of the militias and armies of the world, but even fewer people can claim the true calling of a paladin. When they do receive the call, these warriors turn from their former occupations and take up arms to fight evil. Sometimes their oaths lead them into the service of the crown as leaders of elite groups of knights, but even then their loyalty is first to the cause of righteousness, not to crown and country.",
                            "Adventuring paladins take their work seriously. A delve into an ancient ruin or dusty crypt can be a quest driven by a higher purpose than the acquisition of treasure. Evil lurks in dungeons and primeval forests, and even the smallest victory against it can tilt the cosmic balance away from oblivion."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Paladin",
                        "entries": [
                            "The most important aspect of a paladin character is the nature of his or her holy quest. Although the class features related to your oath don't appear until you reach 3rd level, plan ahead for that choice by reading the oath descriptions at the end of the class. Are you a devoted servant of good, loyal to the gods of justice and honor, a holy knight in shining armor venturing forth to smite evil? Are you a glorious champion of the light, cherishing everything beautiful that stands against the shadow, a knight whose oath descends from traditions older than many of the gods? Or are you an embittered loner sworn to take vengeance on those who have done great evil, sent as an angel of death by the gods or driven by your need for revenge? Appendix B lists many deities worshiped by paladins throughout the multiverse, such as Torm, Tyr, Heironeous, Paladine, Kiri-Jolith, Dol Arrah, the Silver Flame, Bahamut, Athena, Re-Horakhty, and Heimdall.",
                            "How did you experience your call to serve as a paladin? Did you hear a whisper from an unseen god or angel while you were at prayer? Did another paladin sense the potential within you and decide to train you as a squire? Or did some terrible event—the destruction of your home, perhaps—drive you to your quests? Perhaps you stumbled into a sacred grove or a hidden elven enclave and found yourself called to protect all such refuges of goodness and beauty. Or you might have known from your earliest memories that the paladin's life was your calling, almost as if you had been sent into the world with that purpose stamped on your soul.",
                            "As guardians against the forces of wickedness, paladins are rarely of any evil alignment. Most of them walk the paths of charity and justice. Consider how your alignment colors the way you pursue your holy quest and the manner in which you conduct yourself before gods and mortals. Your oath and alignment might be in harmony, or your oath might represent standards of behavior that you have not yet attained.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a paladin quickly by following these suggestions. First, Strength should be your highest ability score, followed by Charisma. Second, choose the {@background noble} background."
                                ]
                            }
                        ]
                    }
                ],
                "page": 82,
                "source": "PHB"
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "The true worth of a paladin is measured not in foes defeated or dungeons plundered. It is measured in lives saved and hearts turned to the causes of mercy and justice."
                        ],
                        "by": "Isteval"
                    },
                    "A paladin is a living embodiment of an oath—a promise or a vow made manifest in the person of a holy warrior who has the skill and the determination to see the cause through to the end. Some paladins devote themselves expressly to protecting the innocent and spreading justice in the world, while others resolve to attain that goal by conquering those who stand defiant and bringing them under the rule of law.",
                    "Although no paladin in the world could be described as typical, a number of them are narrow-minded do-gooders who refuse to tolerate even the smallest deviation from their own outlook. Paladins who take up the adventuring life, however, rarely remain so rigid in their attitudes—if only to keep from alienating their companions.",
                    "You can flesh out your paladin character by using the suggestions below. It's important to keep in mind that most paladins aren't robots. They have doubts and prejudices and harbor contradictory thoughts just as any other character does. Some are compelled by an internal motivation that might sometimes be at odds with the principles of their oaths.",
                    {
                        "type": "entries",
                        "name": "Personal Goal",
                        "entries": [
                            "The precepts of a paladin's oath provide purpose to the character and dictate an ultimate goal or an overall intent that the paladin abides by and advances. Aside from that, some paladins are driven by a personal goal that either complements or transcends the dictates of their oaths. Paladins who swear different oaths might have the same personal goal, differing only in how they apply that goal to their actions when upholding their oaths.",
                            "If your paladin character has a personal goal, it might be drawn from some life event and thus not directly tied to the oath.",
                            {
                                "type": "table",
                                "caption": "Personal Goal",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Personal Goal"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Peace. You fight so that future generations will not have to."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Revenge. Your oath is the vehicle through which you will right an ancient wrong."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Duty. You will live up to what you have sworn to do, or die trying."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Leadership. You will win a great battle that bards will sing about, and in so doing, you will become an example to inspire others."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Faith. You know your path is righteous, or else the gods would not have set you upon it."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Glory. You will lead the world into a grand new era, one that will be branded with your name."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Symbol",
                        "entries": [
                            "Paladins are mindful of the influence of symbols, and many of them adopt or design an artistic device that bears a distinctive image. Your symbol exemplifies the oath you have taken and communicates that message to those around you, friend and foe alike.",
                            "Your symbol might be displayed on a banner, a flag, or your clothing for all to see. Or it could be less obvious, such as a trinket or a token that you carry concealed on your person.",
                            {
                                "type": "table",
                                "caption": "Symbol",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Symbol"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "A dragon, emblematic of your nobility in peace and your ferocity in combat"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "A clenched fist, because you are always ready to fight for your beliefs"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "An upraised open hand, indicating your preference for diplomacy over combat"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "A red heart, showing the world your commitment to justice"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "A black heart, signifying that emotions such as pity do not sway your dedication to your oath"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "An unblinking eye, meaning that you are ever alert to all threats against your cause"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Nemesis",
                        "entries": [
                            "Their adherence to a sacred oath demands that paladins take an active stance in carrying their beliefs into the world. This activity naturally leads to conflict with creatures or entities that oppose those beliefs. Among those opponents, one often stands out as a paladin's most persistent or most formidable foe—a nemesis whose presence or influence is a constant factor in a paladin's life.",
                            "Your paladin character might have an enemy that dates from the days before you took up your path. Or you could be a target because when you became a paladin, you immediately attracted the attention of those that would do you in. If you have a nemesis, who or what is it? Whom among your enemies do you consider to be the biggest threat to achieving your goals?",
                            {
                                "type": "table",
                                "caption": "Nemesis",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Nemesis"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "A mighty orc war chief who threatens to overrun and destroy everything you hold sacred"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "A fiend or a celestial, the agent of a power of the Outer Planes, who has been charged with corrupting or redeeming you, as appropriate"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "A dragon whose servants dog your steps"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "A high priest who sees you as a misguided fool and wants you to abandon your religion"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "A rival paladin who trained with you but became an oath-breaker and holds you responsible"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "A vampire who has sworn revenge against all paladins after being defeated by one"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Temptation",
                        "entries": [
                            "Although paladins are dedicated to their oaths, they are mortals, and thus they are flawed. Many of them exhibit a type of behavior or hold to an attitude that is not in keeping with the highest ideals of their calling.",
                            "What is the temptation that your character succumbs to or finds it difficult to resist?",
                            {
                                "type": "table",
                                "caption": "Temptation",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Temptation"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Fury. When your anger is roused, you have trouble thinking straight, and you fear you might do something you'll regret."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Pride. Your deeds are noteworthy, and no one takes note of them more often than you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Lust. You can't resist an attractive face and a pleasant smile."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Envy. You are mindful of what some famous folk have accomplished, and you feel inadequate when your deeds don't compare to theirs."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Despair. You consider the great strength of the enemies you must defeat, and at times you see no way to achieve final victory."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Greed. Regardless of how much glory and treasure you amass, it's never enough for you."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "source": "XGE",
                "page": 36
            }
        ]
    },
    {
        "name": "Ranger",
        "source": "PHB",
        "page": 89,
        "srd": true,
        "hd": {
            "number": 1,
            "faces": 10
        },
        "proficiency": [
            "str",
            "dex"
        ],
        "spellcastingAbility": "wis",
        "casterProgression": "1/2",
        "spellsKnownProgression": [
            0,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            8,
            8,
            9,
            9,
            10,
            10,
            11,
            11
        ],
        "optionalfeatureProgression": [
            {
                "name": "Fighting Style",
                "featureType": [
                    "FS:R"
                ],
                "progression": {
                    "2": 1
                }
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple",
                "martial"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "animal handling",
                            "athletics",
                            "insight",
                            "investigation",
                            "nature",
                            "perception",
                            "stealth",
                            "survival"
                        ],
                        "count": 3
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) {@item scale mail|phb} or (b) {@item leather armor|phb}",
                "(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=sand}",
                "(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
                "A {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "scale mail|phb"
                    ],
                    "b": [
                        "leather armor|phb"
                    ]
                },
                {
                    "a": [
                        {
                            "item": "shortsword|phb",
                            "quantity": 2
                        }
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimpleMelee",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "a": [
                        "dungeoneer's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "_": [
                        "longbow|phb",
                        "arrows (20)|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "dex": 13,
                "wis": 13
            },
            "proficienciesGained": {
                "armor": [
                    "light",
                    "medium",
                    "{@item shield|phb|shields}"
                ],
                "skills": [
                    {
                        "choose": {
                            "from": [
                                "animal handling",
                                "athletics",
                                "insight",
                                "investigation",
                                "nature",
                                "perception",
                                "stealth",
                                "survival"
                            ],
                            "count": 1
                        }
                    }
                ],
                "weapons": [
                    "simple",
                    "martial"
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Spells Known|spells|class=ranger}"
                ],
                "rows": [
                    [
                        0
                    ],
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        6
                    ],
                    [
                        6
                    ],
                    [
                        7
                    ],
                    [
                        7
                    ],
                    [
                        8
                    ],
                    [
                        8
                    ],
                    [
                        9
                    ],
                    [
                        9
                    ],
                    [
                        10
                    ],
                    [
                        10
                    ],
                    [
                        11
                    ],
                    [
                        11
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Ranger}",
                    "{@filter 2nd|spells|level=2|class=Ranger}",
                    "{@filter 3rd|spells|level=3|class=Ranger}",
                    "{@filter 4th|spells|level=4|class=Ranger}",
                    "{@filter 5th|spells|level=5|class=Ranger}"
                ],
                "rowsSpellProgression": [
                    [
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Favored Enemy|Ranger||1",
            "Favored Foe|Ranger||1|UAClassFeatureVariants",
            "Favored Foe|Ranger||1|TCE",
            "Natural Explorer|Ranger||1",
            "Deft Explorer|Ranger||1|UAClassFeatureVariants",
            "Deft Explorer|Ranger||1|TCE",
            "Fighting Style|Ranger||2",
            "Martial Versatility|Ranger||2|UAClassFeatureVariants",
            "Spellcasting|Ranger||2",
            "Spell Versatility|Ranger||2|UAClassFeatureVariants",
            "Spellcasting Focus|Ranger||2|UAClassFeatureVariants",
            "Spellcasting Focus|Ranger||2|TCE",
            {
                "classFeature": "Ranger Archetype|Ranger||3",
                "gainSubclassFeature": true
            },
            "Primeval Awareness|Ranger||3",
            "Primal Awareness|Ranger||3|UAClassFeatureVariants",
            "Primal Awareness|Ranger||3|TCE",
            "Ability Score Improvement|Ranger||4",
            "Proficiency Versatility|Ranger||4|UAClassFeatureVariants",
            "Martial Versatility|Ranger||4|TCE",
            "Extra Attack|Ranger||5",
            "Favored Enemy and Natural Explorer improvements|Ranger||6",
            "Deft Explorer Improvement|Ranger||6|TCE",
            {
                "classFeature": "Ranger Archetype feature|Ranger||7",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger||8",
            "Proficiency Versatility|Ranger||8|UAClassFeatureVariants",
            "Land's Stride|Ranger||8",
            "Hide in Plain Sight|Ranger||10",
            "Fade Away|Ranger||10|UAClassFeatureVariants",
            "Nature's Veil|Ranger||10|TCE",
            "Natural Explorer improvement|Ranger||10",
            "Deft Explorer Improvement|Ranger||10|TCE",
            {
                "classFeature": "Ranger Archetype feature|Ranger||11",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger||12",
            "Proficiency Versatility|Ranger||12|UAClassFeatureVariants",
            "Vanish|Ranger||14",
            "Favored Enemy improvement|Ranger||14",
            {
                "classFeature": "Ranger Archetype feature|Ranger||15",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger||16",
            "Proficiency Versatility|Ranger||16|UAClassFeatureVariants",
            "Feral Senses|Ranger||18",
            "Ability Score Improvement|Ranger||19",
            "Proficiency Versatility|Ranger||19|UAClassFeatureVariants",
            "Foe Slayer|Ranger||20"
        ],
        "subclassTitle": "Ranger Archetype",
        "fluff": [
            {
                "name": "Ranger",
                "type": "section",
                "entries": [
                    "Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.",
                    "After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon's thick scales.",
                    "Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he's been tracking and sends the hawk to distract the creature while he readies his bow.",
                    "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
                    {
                        "type": "entries",
                        "name": "Deadly Hunters",
                        "entries": [
                            "Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.",
                            "Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of protecting the borderlands."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Independent Adventurers",
                        "entries": [
                            "Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger's true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first—and possibly the last—line of defense.",
                            "This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Ranger",
                        "entries": [
                            "As you create your ranger character, consider the nature of the training that gave you your particular capabilities. Did you train with a single mentor, wandering the wilds together until you mastered the ranger's ways? Did you leave your apprenticeship, or was your mentor slain—perhaps by the same kind of monster that became your favored enemy? Or perhaps you learned your skills as part of a band of rangers affiliated with a druidic circle, trained in mystic paths as well as wilderness lore. You might be self-taught, a recluse who learned combat skills, tracking, and even a magical connection to nature through the necessity of surviving in the wilds.",
                            "What's the source of your particular hatred of a certain kind of enemy? Did a monster kill someone you loved or destroy your home village? Or did you see too much of the destruction these monsters cause and commit yourself to reining in their depredations? Is your adventuring career a continuation of your work in protecting the borderlands, or a significant change? What made you join up with a band of adventurers? Do you find it challenging to teach new allies the ways of the wild, or do you welcome the relief from solitude that they offer?",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a ranger quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. (Some rangers who focus on two-weapon fighting make Strength higher than Dexterity.) Second, choose the {@background outlander} background."
                                ]
                            }
                        ]
                    }
                ],
                "source": "PHB",
                "page": 89
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "I spend a lot of my life away from civilization, keeping to its fringes to protect it. Don't assume that because I don't bend the knee to your king that I haven't done more to protect him than all his knights put together."
                        ],
                        "by": "Soveliss"
                    },
                    "Rangers are free-minded wanderers and seekers who patrol the edges of civilized territory, turning back the denizens of the wild lands beyond. It is a thankless job, since their efforts are rarely understood and almost never rewarded. Yet rangers persist in their duties, never doubting that their work makes the world a safer place.",
                    "A relationship with civilization informs every ranger's personality and history. Some rangers see themselves as enforcers of the law and bringers of justice on civilization's frontier, answering to no sovereign power. Others are survivalists who eschew civilization altogether. They vanquish monsters to keep themselves safe while they live in and travel through the perilous wild areas of the world. If their efforts also benefit the kingdoms and other civilized realms that they avoid, so be it.",
                    "If you're creating or playing a ranger character, the following sections offer ideas for embellishing the character and enhancing your roleplaying experience.",
                    {
                        "type": "entries",
                        "name": "View of the World",
                        "entries": [
                            "A ranger's view of the world begins (and sometimes ends) with that character's outlook toward civilized folk and the places they occupy. Some rangers have an attitude toward civilization that's deeply rooted in disdain, while others pity the people they have sworn to protect—though on the battlefield, it's impossible to tell the difference between one ranger and another. Indeed, to those who have seen them operate and been the beneficiaries of their prowess, it scarcely matters why rangers do what they do. That said, no two rangers are likely to express their opinions on any matter in the same way.",
                            "If you haven't yet thought about the details of your character's worldview, consider putting a finer point on things by summarizing that viewpoint in a short statement (such as the entries on the following table). How might that feeling affect the way you conduct yourself?",
                            {
                                "type": "table",
                                "caption": "View of the World",
                                "colLabels": [
                                    "{@dice d6}",
                                    "View"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Towns and cities are the best places for those who can't survive on their own."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "The advancement of civilization is the best way to thwart chaos, but its reach must be monitored."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Towns and cities are a necessary evil, but once the wilderness is purged of supernatural threats, we will need them no more."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Walls are for cowards, who huddle behind them while others do the work of making the world safe."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Visiting a town is not unpleasant, but after a few days I feel the irresistible call to return to the wild."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Cities breed weakness by isolating folk from the harsh lessons of the wild."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Homelands",
                        "entries": [
                            "All rangers, regardless of how they came to take up the profession, have a strong connection to the natural world and its various terrains. For some rangers, the wilderness is where they grew up, either as a result of being born there or moving there at a young age. For other rangers, civilization was originally home, but the wilderness became a second homeland.",
                            "Think of your character's backstory and decide what terrain feels most like home, whether or not you were born there. What does that terrain say about your personality? Does it influence which spells you choose to learn? Have your experiences there shaped who your favored enemies are?",
                            {
                                "type": "table",
                                "caption": "Homelands",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Homeland"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "You patrolled an ancient forest, darkened and corrupted by several crossings to the Shadowfell."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "As part of a group of nomads, you acquired the skills for surviving in the desert."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Your early life in the Underdark prepared you for the challenges of combating its denizens."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "You dwelled on the edge of a swamp, in an area imperiled by land creatures as well as aquatic ones."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Because you grew up among the peaks, finding the best path through the mountains is second nature to you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You wandered the far north, learning how to protect yourself and prosper in a realm overrun by ice."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Sworn Enemy",
                        "entries": [
                            "Every ranger begins with a favored enemy (or two). The determination of a favored enemy might be tied to a specific event in the character's early life, or it might be entirely a matter of choice.",
                            "What spurred your character to select a particular enemy? Was the choice made because of tradition or curiosity, or do you have a grudge to settle?",
                            {
                                "type": "table",
                                "caption": "Sworn Enemies",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Enemy"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "You seek revenge on nature's behalf for the great transgressions your foe has committed."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Your forebears or predecessors fought these creatures, and so shall you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "You bear no enmity toward your foe. You stalk such creatures as a hunter tracks down a wild animal."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "You find your foe fascinating, and you collect books of tales and history concerning it."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "You collect tokens of your fallen enemies to remind you of each kill."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You respect your chosen enemy, and you see your battles as a test of respective skills."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "page": 40,
                "source": "XGE"
            }
        ]
    },
    {
        "name": "Ranger (Spell-less)",
        "source": "UAModifyingClasses",
        "page": 5,
        "hd": {
            "number": 1,
            "faces": 10
        },
        "proficiency": [
            "str",
            "dex"
        ],
        "optionalfeatureProgression": [
            {
                "name": "Fighting Style",
                "featureType": [
                    "FS:R"
                ],
                "progression": {
                    "2": 1
                }
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple",
                "martial"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "animal handling",
                            "athletics",
                            "insight",
                            "investigation",
                            "nature",
                            "perception",
                            "stealth",
                            "survival"
                        ],
                        "count": 3
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) {@item scale mail|phb} or (b) {@item leather armor|phb}",
                "(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=sand}",
                "(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
                "A {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "scale mail|phb"
                    ],
                    "b": [
                        "leather armor|phb"
                    ]
                },
                {
                    "a": [
                        {
                            "item": "shortsword|phb",
                            "quantity": 2
                        }
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimpleMelee",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "a": [
                        "dungeoneer's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "_": [
                        "longbow|phb",
                        "arrows (20)|phb"
                    ]
                }
            ]
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "Maneuvers Known"
                ],
                "rows": [
                    [
                        0
                    ],
                    [
                        2
                    ],
                    [
                        2
                    ],
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        6
                    ],
                    [
                        6
                    ],
                    [
                        6
                    ],
                    [
                        6
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Favored Enemy|Ranger (Spell-less)|UAModifyingClasses|1",
            "Favored Foe|Ranger (Spell-less)|UAModifyingClasses|1|UAClassFeatureVariants",
            "Favored Foe|Ranger (Spell-less)|UAModifyingClasses|1|TCE",
            "Natural Explorer|Ranger (Spell-less)|UAModifyingClasses|1",
            "Deft Explorer|Ranger (Spell-less)|UAModifyingClasses|1|UAClassFeatureVariants",
            "Deft Explorer|Ranger (Spell-less)|UAModifyingClasses|1|TCE",
            "Fighting Style|Ranger (Spell-less)|UAModifyingClasses|2",
            "Martial Versatility|Ranger (Spell-less)|UAModifyingClasses|2|UAClassFeatureVariants",
            "Combat Superiority|Ranger (Spell-less)|UAModifyingClasses|2",
            {
                "classFeature": "Ranger Archetype|Ranger (Spell-less)|UAModifyingClasses|3",
                "gainSubclassFeature": true
            },
            "Primeval Awareness|Ranger (Spell-less)|UAModifyingClasses|3",
            "Primal Awareness|Ranger (Spell-less)|UAModifyingClasses|3|UAClassFeatureVariants",
            "Primal Awareness|Ranger (Spell-less)|UAModifyingClasses|3|TCE",
            "Poultices|Ranger (Spell-less)|UAModifyingClasses|3",
            "Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|4",
            "Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|4|UAClassFeatureVariants",
            "Martial Versatility|Ranger (Spell-less)|UAModifyingClasses|4|TCE",
            "Extra Attack|Ranger (Spell-less)|UAModifyingClasses|5",
            "Additional Maneuvers|Ranger (Spell-less)|UAModifyingClasses|5",
            "Favored Enemy and Natural Explorer improvements|Ranger (Spell-less)|UAModifyingClasses|6",
            "Deft Explorer Improvement|Ranger (Spell-less)|UAModifyingClasses|6|TCE",
            {
                "classFeature": "Ranger Archetype feature|Ranger (Spell-less)|UAModifyingClasses|7",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|8",
            "Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|8|UAClassFeatureVariants",
            "Land's Stride|Ranger (Spell-less)|UAModifyingClasses|8",
            "Natural Antivenom|Ranger (Spell-less)|UAModifyingClasses|9",
            "Additional Maneuvers|Ranger (Spell-less)|UAModifyingClasses|9",
            "Hide in Plain Sight|Ranger (Spell-less)|UAModifyingClasses|10",
            "Fade Away|Ranger (Spell-less)|UAModifyingClasses|10|UAClassFeatureVariants",
            "Nature's Veil|Ranger (Spell-less)|UAModifyingClasses|10|TCE",
            "Natural Explorer improvement|Ranger (Spell-less)|UAModifyingClasses|10",
            "Deft Explorer Improvement|Ranger (Spell-less)|UAModifyingClasses|10|TCE",
            {
                "classFeature": "Ranger Archetype feature|Ranger (Spell-less)|UAModifyingClasses|11",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|12",
            "Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|12|UAClassFeatureVariants",
            "Call Natural Allies|Ranger (Spell-less)|UAModifyingClasses|13",
            "Additional Maneuvers|Ranger (Spell-less)|UAModifyingClasses|13",
            "Vanish|Ranger (Spell-less)|UAModifyingClasses|14",
            "Favored Enemy improvement|Ranger (Spell-less)|UAModifyingClasses|14",
            {
                "classFeature": "Ranger Archetype feature|Ranger (Spell-less)|UAModifyingClasses|15",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|16",
            "Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|16|UAClassFeatureVariants",
            "Relentless|Ranger (Spell-less)|UAModifyingClasses|17",
            "Additional Maneuvers|Ranger (Spell-less)|UAModifyingClasses|17",
            "Feral Senses|Ranger (Spell-less)|UAModifyingClasses|18",
            "Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|19",
            "Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|19|UAClassFeatureVariants",
            "Foe Slayer|Ranger (Spell-less)|UAModifyingClasses|20"
        ],
        "subclassTitle": "Ranger Archetype",
        "fluff": [
            {
                "name": "Ranger",
                "type": "section",
                "entries": [
                    "Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.",
                    "After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon's thick scales.",
                    "Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he's been tracking and sends the hawk to distract the creature while he readies his bow.",
                    "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
                    {
                        "type": "entries",
                        "name": "Deadly Hunters",
                        "entries": [
                            "Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.",
                            "Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of protecting the borderlands."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Independent Adventurers",
                        "entries": [
                            "Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger's true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first—and possibly the last—line of defense.",
                            "This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Ranger",
                        "entries": [
                            "As you create your ranger character, consider the nature of the training that gave you your particular capabilities. Did you train with a single mentor, wandering the wilds together until you mastered the ranger's ways? Did you leave your apprenticeship, or was your mentor slain—perhaps by the same kind of monster that became your favored enemy? Or perhaps you learned your skills as part of a band of rangers affiliated with a druidic circle, trained in mystic paths as well as wilderness lore. You might be self-taught, a recluse who learned combat skills, tracking, and even a magical connection to nature through the necessity of surviving in the wilds.",
                            "What's the source of your particular hatred of a certain kind of enemy? Did a monster kill someone you loved or destroy your home village? Or did you see too much of the destruction these monsters cause and commit yourself to reining in their depredations? Is your adventuring career a continuation of your work in protecting the borderlands, or a significant change? What made you join up with a band of adventurers? Do you find it challenging to teach new allies the ways of the wild, or do you welcome the relief from solitude that they offer?",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a ranger quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. (Some rangers who focus on two-weapon fighting make Strength higher than Dexterity.) Second, choose the {@background outlander} background."
                                ]
                            }
                        ]
                    }
                ],
                "source": "PHB",
                "page": 89
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "I spend a lot of my life away from civilization, keeping to its fringes to protect it. Don't assume that because I don't bend the knee to your king that I haven't done more to protect him than all his knights put together."
                        ],
                        "by": "Soveliss"
                    },
                    "Rangers are free-minded wanderers and seekers who patrol the edges of civilized territory, turning back the denizens of the wild lands beyond. It is a thankless job, since their efforts are rarely understood and almost never rewarded. Yet rangers persist in their duties, never doubting that their work makes the world a safer place.",
                    "A relationship with civilization informs every ranger's personality and history. Some rangers see themselves as enforcers of the law and bringers of justice on civilization's frontier, answering to no sovereign power. Others are survivalists who eschew civilization altogether. They vanquish monsters to keep themselves safe while they live in and travel through the perilous wild areas of the world. If their efforts also benefit the kingdoms and other civilized realms that they avoid, so be it.",
                    "If you're creating or playing a ranger character, the following sections offer ideas for embellishing the character and enhancing your roleplaying experience.",
                    {
                        "type": "entries",
                        "name": "View of the World",
                        "entries": [
                            "A ranger's view of the world begins (and sometimes ends) with that character's outlook toward civilized folk and the places they occupy. Some rangers have an attitude toward civilization that's deeply rooted in disdain, while others pity the people they have sworn to protect—though on the battlefield, it's impossible to tell the difference between one ranger and another. Indeed, to those who have seen them operate and been the beneficiaries of their prowess, it scarcely matters why rangers do what they do. That said, no two rangers are likely to express their opinions on any matter in the same way.",
                            "If you haven't yet thought about the details of your character's worldview, consider putting a finer point on things by summarizing that viewpoint in a short statement (such as the entries on the following table). How might that feeling affect the way you conduct yourself?",
                            {
                                "type": "table",
                                "caption": "View of the World",
                                "colLabels": [
                                    "{@dice d6}",
                                    "View"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Towns and cities are the best places for those who can't survive on their own."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "The advancement of civilization is the best way to thwart chaos, but its reach must be monitored."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Towns and cities are a necessary evil, but once the wilderness is purged of supernatural threats, we will need them no more."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Walls are for cowards, who huddle behind them while others do the work of making the world safe."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Visiting a town is not unpleasant, but after a few days I feel the irresistible call to return to the wild."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Cities breed weakness by isolating folk from the harsh lessons of the wild."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Homelands",
                        "entries": [
                            "All rangers, regardless of how they came to take up the profession, have a strong connection to the natural world and its various terrains. For some rangers, the wilderness is where they grew up, either as a result of being born there or moving there at a young age. For other rangers, civilization was originally home, but the wilderness became a second homeland.",
                            "Think of your character's backstory and decide what terrain feels most like home, whether or not you were born there. What does that terrain say about your personality? Does it influence which spells you choose to learn? Have your experiences there shaped who your favored enemies are?",
                            {
                                "type": "table",
                                "caption": "Homelands",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Homeland"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "You patrolled an ancient forest, darkened and corrupted by several crossings to the Shadowfell."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "As part of a group of nomads, you acquired the skills for surviving in the desert."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Your early life in the Underdark prepared you for the challenges of combating its denizens."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "You dwelled on the edge of a swamp, in an area imperiled by land creatures as well as aquatic ones."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Because you grew up among the peaks, finding the best path through the mountains is second nature to you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You wandered the far north, learning how to protect yourself and prosper in a realm overrun by ice."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Sworn Enemy",
                        "entries": [
                            "Every ranger begins with a favored enemy (or two). The determination of a favored enemy might be tied to a specific event in the character's early life, or it might be entirely a matter of choice.",
                            "What spurred your character to select a particular enemy? Was the choice made because of tradition or curiosity, or do you have a grudge to settle?",
                            {
                                "type": "table",
                                "caption": "Sworn Enemies",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Enemy"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "You seek revenge on nature's behalf for the great transgressions your foe has committed."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Your forebears or predecessors fought these creatures, and so shall you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "You bear no enmity toward your foe. You stalk such creatures as a hunter tracks down a wild animal."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "You find your foe fascinating, and you collect books of tales and history concerning it."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "You collect tokens of your fallen enemies to remind you of each kill."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You respect your chosen enemy, and you see your battles as a test of respective skills."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "page": 40,
                "source": "XGE"
            }
        ]
    },
    {
        "name": "Ranger (Ambuscade)",
        "source": "UARanger",
        "page": 2,
        "hd": {
            "number": 2,
            "faces": 6
        },
        "proficiency": [
            "dex",
            "wis"
        ],
        "optionalfeatureProgression": [
            {
                "name": "Fighting Style",
                "featureType": [
                    "FS:R"
                ],
                "progression": {
                    "2": 1
                }
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple",
                "martial"
            ],
            "tools": [
                "{@item herbalism kit|PHB}"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "animal handling",
                            "athletics",
                            "insight",
                            "investigation",
                            "nature",
                            "perception",
                            "stealth",
                            "survival"
                        ],
                        "count": 3
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "{@item leather armor|phb}",
                "(a) two {@item shortsword|phb|shortswords} or (b) two {@filter martial melee weapons|items|source=phb|category=basic|type=martial weapon;melee weapon=sand} or (c) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon} and a {@item shield|phb}",
                "(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
                "(a) a {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows} or (b) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon}"
            ],
            "defaultData": [
                {
                    "_": [
                        "leather armor|phb"
                    ]
                },
                {
                    "a": [
                        {
                            "item": "shortsword|phb",
                            "quantity": 2
                        }
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponMartialMelee",
                            "quantity": 2
                        }
                    ],
                    "c": [
                        {
                            "equipmentType": "weaponMartial"
                        },
                        "shield|phb"
                    ]
                },
                {
                    "a": [
                        "dungeoneer's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "a": [
                        "longbow|phb",
                        "arrows (20)|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponMartial"
                        }
                    ]
                }
            ]
        },
        "classFeatures": [
            "Ambuscade|Ranger (Ambuscade)|UARanger|1",
            "Natural Explorer|Ranger||1",
            "Fighting Style|Ranger||2",
            "Skirmisher's Stealth|Ranger (Ambuscade)|UARanger|2",
            "Primeval Awareness|Ranger||3",
            {
                "classFeature": "Spirit Path|Ranger (Ambuscade)|UARanger|3",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger||4",
            "Extra Attack|Ranger||5"
        ],
        "subclassTitle": "Ranger Path"
    },
    {
        "name": "Ranger (Revised)",
        "source": "UATheRangerRevised",
        "page": 1,
        "hd": {
            "number": 1,
            "faces": 10
        },
        "proficiency": [
            "str",
            "dex"
        ],
        "spellcastingAbility": "wis",
        "casterProgression": "1/2",
        "spellsKnownProgression": [
            0,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            8,
            8,
            9,
            9,
            10,
            10,
            11,
            11
        ],
        "optionalfeatureProgression": [
            {
                "name": "Fighting Style",
                "featureType": [
                    "FS:R"
                ],
                "progression": {
                    "2": 1
                }
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light",
                "medium",
                "{@item shield|phb|shields}"
            ],
            "weapons": [
                "simple",
                "martial"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "animal handling",
                            "athletics",
                            "insight",
                            "investigation",
                            "nature",
                            "perception",
                            "stealth",
                            "survival"
                        ],
                        "count": 3
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) {@item scale mail|phb} or (b) {@item leather armor|phb}",
                "(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=sand}",
                "(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
                "A {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows}"
            ],
            "goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "scale mail|phb"
                    ],
                    "b": [
                        "leather armor|phb"
                    ]
                },
                {
                    "a": [
                        {
                            "item": "shortsword|phb",
                            "quantity": 2
                        }
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimpleMelee",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "a": [
                        "dungeoneer's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "_": [
                        "longbow|phb",
                        "arrows (20)|phb"
                    ]
                }
            ]
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Spells Known|spells|class=ranger}"
                ],
                "rows": [
                    [
                        0
                    ],
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        6
                    ],
                    [
                        6
                    ],
                    [
                        7
                    ],
                    [
                        7
                    ],
                    [
                        8
                    ],
                    [
                        8
                    ],
                    [
                        9
                    ],
                    [
                        9
                    ],
                    [
                        10
                    ],
                    [
                        10
                    ],
                    [
                        11
                    ],
                    [
                        11
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Ranger}",
                    "{@filter 2nd|spells|level=2|class=Ranger}",
                    "{@filter 3rd|spells|level=3|class=Ranger}",
                    "{@filter 4th|spells|level=4|class=Ranger}",
                    "{@filter 5th|spells|level=5|class=Ranger}"
                ],
                "rowsSpellProgression": [
                    [
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Favored Enemy|Ranger (Revised)|UATheRangerRevised|1",
            "Natural Explorer|Ranger (Revised)|UATheRangerRevised|1",
            "Spellcasting|Ranger (Revised)|UATheRangerRevised|2",
            "Fighting Style|Ranger (Revised)|UATheRangerRevised|2",
            "Martial Versatility|Ranger (Revised)|UATheRangerRevised|2|UAClassFeatureVariants",
            "Primeval Awareness|Ranger (Revised)|UATheRangerRevised|3",
            {
                "classFeature": "Ranger Conclave|Ranger (Revised)|UATheRangerRevised|3",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|4",
            "Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|4|UAClassFeatureVariants",
            "Martial Versatility|Ranger (Revised)|UATheRangerRevised|4|TCE",
            {
                "classFeature": "Ranger Conclave feature|Ranger (Revised)|UATheRangerRevised|5",
                "gainSubclassFeature": true
            },
            "Greater Favored Enemy|Ranger (Revised)|UATheRangerRevised|6",
            {
                "classFeature": "Ranger Conclave feature|Ranger (Revised)|UATheRangerRevised|7",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|8",
            "Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|8|UAClassFeatureVariants",
            "Fleet of Foot|Ranger (Revised)|UATheRangerRevised|8",
            "Hide in Plain Sight|Ranger (Revised)|UATheRangerRevised|10",
            {
                "classFeature": "Ranger Conclave feature|Ranger (Revised)|UATheRangerRevised|11",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|12",
            "Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|12|UAClassFeatureVariants",
            "Vanish|Ranger (Revised)|UATheRangerRevised|14",
            {
                "classFeature": "Ranger Conclave feature|Ranger (Revised)|UATheRangerRevised|15",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|16",
            "Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|16|UAClassFeatureVariants",
            "Feral Senses|Ranger (Revised)|UATheRangerRevised|18",
            "Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|19",
            "Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|19|UAClassFeatureVariants",
            "Foe Slayer|Ranger (Revised)|UATheRangerRevised|20"
        ],
        "subclassTitle": "Ranger Conclave",
        "fluff": [
            {
                "name": "Ranger",
                "type": "section",
                "entries": [
                    "Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.",
                    "After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon's thick scales.",
                    "Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he's been tracking and sends the hawk to distract the creature while he readies his bow.",
                    "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
                    {
                        "type": "entries",
                        "name": "Deadly Hunters",
                        "entries": [
                            "Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.",
                            "Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of protecting the borderlands."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Independent Adventurers",
                        "entries": [
                            "Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger's true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first—and possibly the last—line of defense.",
                            "This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Ranger",
                        "entries": [
                            "As you create your ranger character, consider the nature of the training that gave you your particular capabilities. Did you train with a single mentor, wandering the wilds together until you mastered the ranger's ways? Did you leave your apprenticeship, or was your mentor slain—perhaps by the same kind of monster that became your favored enemy? Or perhaps you learned your skills as part of a band of rangers affiliated with a druidic circle, trained in mystic paths as well as wilderness lore. You might be self-taught, a recluse who learned combat skills, tracking, and even a magical connection to nature through the necessity of surviving in the wilds.",
                            "What's the source of your particular hatred of a certain kind of enemy? Did a monster kill someone you loved or destroy your home village? Or did you see too much of the destruction these monsters cause and commit yourself to reining in their depredations? Is your adventuring career a continuation of your work in protecting the borderlands, or a significant change? What made you join up with a band of adventurers? Do you find it challenging to teach new allies the ways of the wild, or do you welcome the relief from solitude that they offer?",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a ranger quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. (Some rangers who focus on two-weapon fighting make Strength higher than Dexterity.) Second, choose the {@background outlander} background."
                                ]
                            }
                        ]
                    }
                ],
                "source": "PHB",
                "page": 89
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "I spend a lot of my life away from civilization, keeping to its fringes to protect it. Don't assume that because I don't bend the knee to your king that I haven't done more to protect him than all his knights put together."
                        ],
                        "by": "Soveliss"
                    },
                    "Rangers are free-minded wanderers and seekers who patrol the edges of civilized territory, turning back the denizens of the wild lands beyond. It is a thankless job, since their efforts are rarely understood and almost never rewarded. Yet rangers persist in their duties, never doubting that their work makes the world a safer place.",
                    "A relationship with civilization informs every ranger's personality and history. Some rangers see themselves as enforcers of the law and bringers of justice on civilization's frontier, answering to no sovereign power. Others are survivalists who eschew civilization altogether. They vanquish monsters to keep themselves safe while they live in and travel through the perilous wild areas of the world. If their efforts also benefit the kingdoms and other civilized realms that they avoid, so be it.",
                    "If you're creating or playing a ranger character, the following sections offer ideas for embellishing the character and enhancing your roleplaying experience.",
                    {
                        "type": "entries",
                        "name": "View of the World",
                        "entries": [
                            "A ranger's view of the world begins (and sometimes ends) with that character's outlook toward civilized folk and the places they occupy. Some rangers have an attitude toward civilization that's deeply rooted in disdain, while others pity the people they have sworn to protect—though on the battlefield, it's impossible to tell the difference between one ranger and another. Indeed, to those who have seen them operate and been the beneficiaries of their prowess, it scarcely matters why rangers do what they do. That said, no two rangers are likely to express their opinions on any matter in the same way.",
                            "If you haven't yet thought about the details of your character's worldview, consider putting a finer point on things by summarizing that viewpoint in a short statement (such as the entries on the following table). How might that feeling affect the way you conduct yourself?",
                            {
                                "type": "table",
                                "caption": "View of the World",
                                "colLabels": [
                                    "{@dice d6}",
                                    "View"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Towns and cities are the best places for those who can't survive on their own."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "The advancement of civilization is the best way to thwart chaos, but its reach must be monitored."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Towns and cities are a necessary evil, but once the wilderness is purged of supernatural threats, we will need them no more."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Walls are for cowards, who huddle behind them while others do the work of making the world safe."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Visiting a town is not unpleasant, but after a few days I feel the irresistible call to return to the wild."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Cities breed weakness by isolating folk from the harsh lessons of the wild."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Homelands",
                        "entries": [
                            "All rangers, regardless of how they came to take up the profession, have a strong connection to the natural world and its various terrains. For some rangers, the wilderness is where they grew up, either as a result of being born there or moving there at a young age. For other rangers, civilization was originally home, but the wilderness became a second homeland.",
                            "Think of your character's backstory and decide what terrain feels most like home, whether or not you were born there. What does that terrain say about your personality? Does it influence which spells you choose to learn? Have your experiences there shaped who your favored enemies are?",
                            {
                                "type": "table",
                                "caption": "Homelands",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Homeland"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "You patrolled an ancient forest, darkened and corrupted by several crossings to the Shadowfell."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "As part of a group of nomads, you acquired the skills for surviving in the desert."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Your early life in the Underdark prepared you for the challenges of combating its denizens."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "You dwelled on the edge of a swamp, in an area imperiled by land creatures as well as aquatic ones."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Because you grew up among the peaks, finding the best path through the mountains is second nature to you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You wandered the far north, learning how to protect yourself and prosper in a realm overrun by ice."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Sworn Enemy",
                        "entries": [
                            "Every ranger begins with a favored enemy (or two). The determination of a favored enemy might be tied to a specific event in the character's early life, or it might be entirely a matter of choice.",
                            "What spurred your character to select a particular enemy? Was the choice made because of tradition or curiosity, or do you have a grudge to settle?",
                            {
                                "type": "table",
                                "caption": "Sworn Enemies",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Enemy"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "You seek revenge on nature's behalf for the great transgressions your foe has committed."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Your forebears or predecessors fought these creatures, and so shall you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "You bear no enmity toward your foe. You stalk such creatures as a hunter tracks down a wild animal."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "You find your foe fascinating, and you collect books of tales and history concerning it."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "You collect tokens of your fallen enemies to remind you of each kill."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You respect your chosen enemy, and you see your battles as a test of respective skills."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "page": 40,
                "source": "XGE"
            }
        ]
    },
    {
        "name": "Rogue",
        "source": "PHB",
        "page": 94,
        "srd": true,
        "basicRules": true,
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "dex",
            "int"
        ],
        "startingProficiencies": {
            "armor": [
                "light"
            ],
            "weapons": [
                "simple",
                "{@item hand crossbow|phb|hand crossbows}",
                "{@item longsword|phb|longswords}",
                "{@item rapier|phb|rapiers}",
                "{@item shortsword|phb|shortswords}"
            ],
            "tools": [
                "{@item thieves' tools|PHB}"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "acrobatics",
                            "athletics",
                            "deception",
                            "insight",
                            "intimidation",
                            "investigation",
                            "perception",
                            "performance",
                            "persuasion",
                            "sleight of hand",
                            "stealth"
                        ],
                        "count": 4
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item rapier|phb} or (b) a {@item shortsword|phb}",
                "(a) a {@item shortbow|phb} and {@item quiver|phb} of {@item arrows (20)|phb|20 arrows} or (b) a {@item shortsword|phb}",
                "(a) a {@item burglar's pack|phb}, (b) a {@item dungeoneer's pack|phb}, or (c) an {@item explorer's pack|phb}",
                "{@item Leather armor|phb}, two {@item dagger|phb|daggers}, and {@item thieves' tools|phb}"
            ],
            "goldAlternative": "{@dice 4d4 × 10|4d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "rapier|phb"
                    ],
                    "b": [
                        "shortsword|phb"
                    ]
                },
                {
                    "a": [
                        "shortbow|phb",
                        "arrows (20)|phb"
                    ],
                    "b": [
                        "shortsword|phb"
                    ]
                },
                {
                    "a": [
                        "burglar's pack|phb"
                    ],
                    "b": [
                        "dungeoneer's pack|phb"
                    ],
                    "c": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "_": [
                        "Leather armor|phb",
                        {
                            "item": "dagger|phb",
                            "quantity": 2
                        },
                        "thieves' tools|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "dex": 13
            },
            "proficienciesGained": {
                "armor": [
                    "light"
                ],
                "skills": [
                    {
                        "choose": {
                            "from": [
                                "acrobatics",
                                "athletics",
                                "deception",
                                "insight",
                                "intimidation",
                                "investigation",
                                "perception",
                                "performance",
                                "persuasion",
                                "sleight of hand",
                                "stealth"
                            ],
                            "count": 1
                        }
                    }
                ],
                "tools": [
                    "{@item thieves' tools|PHB}"
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "Sneak Attack"
                ],
                "rows": [
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 1,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 2,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 2,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 3,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 3,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 4,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 4,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 5,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 5,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 6,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 6,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 7,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 7,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 8,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 8,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 9,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 9,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 10,
                                    "faces": 6
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "type": "dice",
                            "toRoll": [
                                {
                                    "number": 10,
                                    "faces": 6
                                }
                            ]
                        }
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Expertise|Rogue||1",
            "Sneak Attack|Rogue||1",
            "Thieves' Cant|Rogue||1",
            "Cunning Action|Rogue||2",
            "Cunning Action: Aim|Rogue||2|UAClassFeatureVariants",
            {
                "classFeature": "Roguish Archetype|Rogue||3",
                "gainSubclassFeature": true
            },
            "Steady Aim|Rogue||3|TCE",
            "Ability Score Improvement|Rogue||4",
            "Proficiency Versatility|Rogue||4|UAClassFeatureVariants",
            "Uncanny Dodge|Rogue||5",
            "Expertise|Rogue||6",
            "Evasion|Rogue||7",
            "Ability Score Improvement|Rogue||8",
            "Proficiency Versatility|Rogue||8|UAClassFeatureVariants",
            {
                "classFeature": "Roguish Archetype feature|Rogue||9",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Rogue||10",
            "Proficiency Versatility|Rogue||10|UAClassFeatureVariants",
            "Reliable Talent|Rogue||11",
            "Ability Score Improvement|Rogue||12",
            "Proficiency Versatility|Rogue||12|UAClassFeatureVariants",
            {
                "classFeature": "Roguish Archetype feature|Rogue||13",
                "gainSubclassFeature": true
            },
            "Blindsense|Rogue||14",
            "Slippery Mind|Rogue||15",
            "Ability Score Improvement|Rogue||16",
            "Proficiency Versatility|Rogue||16|UAClassFeatureVariants",
            {
                "classFeature": "Roguish Archetype feature|Rogue||17",
                "gainSubclassFeature": true
            },
            "Elusive|Rogue||18",
            "Ability Score Improvement|Rogue||19",
            "Proficiency Versatility|Rogue||19|UAClassFeatureVariants",
            "Stroke of Luck|Rogue||20"
        ],
        "subclassTitle": "Roguish Archetype",
        "fluff": [
            {
                "name": "Rogue",
                "type": "section",
                "entries": [
                    "Signaling for her companions to wait, a halfling creeps forward through the dungeon hall. She presses an ear to the door, then pulls out a set of tools and picks the lock in the blink of an eye. Then she disappears into the shadows as her fighter friend moves forward to kick the door open.",
                    "A human lurks in the shadows of an alley while his accomplice prepares for her part in the ambush. When their target—a notorious slaver—passes the alleyway, the accomplice cries out, the slaver comes to investigate, and the assassin's blade cuts his throat before he can make a sound.",
                    "Suppressing a giggle, a gnome waggles her fingers and magically lifts the key ring from the guard's belt. In a moment, the keys are in her hand, the cell door is open, and she and her companions are free to make their escape.",
                    "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
                    {
                        "type": "entries",
                        "name": "Skill and Precision",
                        "entries": [
                            "Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.",
                            "When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "A Shady Living",
                        "entries": [
                            "Every town and city has its share of rogues. Most of them live up to the worst stereotypes of the class, making a living as burglars, assassins, cutpurses, and con artists. Often, these scoundrels are organized into thieves' guilds or crime families. Plenty of rogues operate independently, but even they sometimes recruit apprentices to help them in their scams and heists. A few rogues make an honest living as locksmiths, investigators, or exterminators, which can be a dangerous job in a world where dire rats—and wererats—haunt the sewers.",
                            "As adventurers, rogues fall on both sides of the law. Some are hardened criminals who decide to seek their fortune in treasure hoards, while others take up a life of adventure to escape from the law. Some have learned and perfected their skills with the explicit purpose of infiltrating ancient ruins and hidden crypts in search of treasure."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Rogue",
                        "entries": [
                            "As you create your rogue character, consider the character's relationship to the law. Do you have a criminal past—or present? Are you on the run from the law or from an angry thieves' guild master? Or did you leave your guild in search of bigger risks and bigger rewards? Is it greed that drives you in your adventures, or some other desire or ideal?",
                            "What was the trigger that led you away from your previous life? Did a great con or heist gone terribly wrong cause you to reevaluate your career? Maybe you were lucky and a successful robbery gave you the coin you needed to escape the squalor of your life. Did wanderlust finally call you away from your home? Perhaps you suddenly found yourself cut off from your family or your mentor, and you had to find a new means of support. Or maybe you made a new friend—another member of your adventuring party—who showed you new possibilities for earning a living and employing your particular talents.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a rogue quickly by following these suggestions. First, Dexterity should be your highest ability score. Make Intelligence your next-highest if you want to excel at Investigation or plan to take up the Arcane Trickster archetype. Choose Charisma instead if you plan to emphasize deception and social interaction. Second, choose the {@background charlatan} background."
                                ]
                            }
                        ]
                    }
                ],
                "page": 94,
                "source": "PHB"
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "People forget that the entire point of venturing down into a dusty tomb is to bring back the prizes hidden away there. Fighting is for fools. Dead men can't spend their fortunes."
                        ],
                        "by": "Barnabas Bladecutter"
                    },
                    "When brute force won't get the job done, or when magic isn't available or appropriate, the rogue rises to the fore. With skills tied to stealth, subterfuge, and trickery, rogues can get into and out of trouble in ways that few other characters can emulate.",
                    "Some rogues who turn to adventuring are former criminals who have decided that dodging monsters is preferable to remaining one step ahead of the law. Others are professional killers in search of a profitable application of their talents between contracts. Some simply love the thrill of overcoming any challenge that stands in their way.",
                    "On adventures, a rogue is likely to mix an outwardly cautious approach—few rogues enjoy combat—with a ravenous hunger for loot. Most of the time, in a rogue's mind, taking up arms against a creature is not about killing the creature but about becoming the new owner of its treasure.",
                    "The following sections explore certain facets of what it means to be a rogue, which you can use to add depth to your character.",
                    {
                        "type": "entries",
                        "name": "Guilty Pleasures",
                        "entries": [
                            "Most of what rogues do revolves around obtaining treasure and preventing others from doing the same. Little gets in the way of attaining those goals, except that many rogues are enticed away from that path by a compulsion that clouds their thinking—an irresistible need that must be satisfied, even if doing so is risky.",
                            "A rogue's guilty pleasure could be the acquisition of a physical item, something to be experienced, or a way of conducting oneself at certain times. One rogue might not be able to pass up any loot made of silver, for instance, even if said loot is hanging around the neck of a castle guard. Another one can't go through a day in the city without lifting a purse or two, just to keep in practice.",
                            "What's the one form of temptation that your rogue character can't resist when the opportunity presents itself, even if giving into it might mean trouble for you and your companions?",
                            {
                                "type": "table",
                                "caption": "Guilty Pleasures",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Pleasure"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Large gems"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "A smile from a pretty face"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "A new ring for your finger"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "The chance to deflate someone's ego"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "The finest food and drink"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Adding to your collection of exotic coins"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Adversaries",
                        "entries": [
                            "Naturally, those who enforce the law are bound to come up against those who break it, and it's the rare rogue who isn't featured on at least one wanted poster. Beyond that, it's in the nature of their profession that rogues often come into contact with criminal elements, whether out of choice or necessity. Some of those people can be adversaries too, and they're likely to be harder to deal with than the average member of the city watch.",
                            "If your character's backstory doesn't already include a personage of this sort, you could work with your DM to come up with a reason why an adversary has appeared in your life. Perhaps you've been the subject of scrutiny for a while from someone who wants to use you for nefarious purposes and has just now become known to you. Such an incident could be the basis for an upcoming adventure.",
                            "Does your rogue character have an adversary who also happens to be a criminal? If so, how is this relationship affecting your life?",
                            {
                                "type": "table",
                                "caption": "Adversaries",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Adversary"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "The pirate captain on whose ship you once served; what you call moving on, the captain calls mutiny"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "A master spy to whom you unwittingly fed bad information, which led to the assassination of the wrong target"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "The master of the local thieves' guild, who wants you to join the organization or leave town"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "An art collector who uses illegal means to acquire masterpieces"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "A fence who uses you as a messenger to set up illicit meetings"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "The proprietor of an illegal pit fighting arena where you once took bets"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Benefactor",
                        "entries": [
                            "Few rogues make it far in life before needing someone's help, which means thereafter owing that benefactor a significant debt.",
                            "If your character's backstory doesn't already include a personage of this sort, you could work with your DM to determine why a benefactor has appeared in your life. Perhaps you benefited from something your benefactor did for you without realizing who was responsible, and that person has now just become known to you. Who helped you in the past, whether or not you knew it at the time, and what do you owe that person as recompense?",
                            {
                                "type": "table",
                                "caption": "Benefactors",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Benefactor"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "A smuggler kept you from getting caught but lost a valuable shipment in doing so. Now you owe that person an equally valuable favor."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "The Beggar King has hidden you from your pursuers many times, in return for future considerations."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "A magistrate once kept you out of jail in return for information on a powerful crime lord."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Your parents used their savings to bail you out of trouble in your younger days and are now destitute."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "A dragon didn't eat you when it had a chance, and in return you promised to set aside choice pieces of treasure for it."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "A druid once helped you out of a tight spot; now any random animal you see could be that benefactor, perhaps come to claim a return favor."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "page": 44,
                "source": "XGE"
            }
        ]
    },
    {
        "name": "Prestige Class: Rune Scribe",
        "source": "UAPrestigeClassesRunMagic",
        "page": 2,
        "requirements": {
            "entries": [
                "{@b Dexterity 13.} Rune scribes need agile fingers to master the intricate patterns of a rune.",
                "{@b Intelligence 13.} Rune lore requires intense study and knowledge.",
                "{@b Proficiency in the {@skill Arcana} skill.} Rune mastery requires an understanding of arcane lore.",
                "{@b Character level 5th.} Rune magic awakens only for powerful souls, and you must be a 5th-level character before you can gain levels in the rune scribe prestige class.",
                "{@b Complete a special task.} You must find a rune and present it to an NPC rune scribe who accepts it in return for tutoring you in the ways of rune magic. You cannot gain more levels in this prestige class than your tutor has. You might need to seek out additional runes and present them to more skilled rune scribes in order to reach 5th level in this prestige class."
            ]
        },
        "hd": {
            "number": 1,
            "faces": 8
        },
        "casterProgression": "full",
        "startingProficiencies": {
            "tools": [
                "{@item calligrapher's supplies|PHB}",
                "{@item mason's tools|PHB}",
                "{@item woodcarver's tools|PHB}"
            ]
        },
        "classTableGroups": [
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "1st",
                    "2nd",
                    "3rd"
                ],
                "rowsSpellProgression": [
                    [
                        2,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        0
                    ],
                    [
                        4,
                        3,
                        2
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Rune Lore|Prestige Class: Rune Scribe|UAPrestigeClassesRunMagic|1",
            "Runic Magic|Prestige Class: Rune Scribe|UAPrestigeClassesRunMagic|1",
            "Runic Discovery|Prestige Class: Rune Scribe|UAPrestigeClassesRunMagic|2",
            "Runic Discovery|Prestige Class: Rune Scribe|UAPrestigeClassesRunMagic|3",
            "Living Rune|Prestige Class: Rune Scribe|UAPrestigeClassesRunMagic|4",
            "Rune Mastery|Prestige Class: Rune Scribe|UAPrestigeClassesRunMagic|5",
            "Runic Discovery|Prestige Class: Rune Scribe|UAPrestigeClassesRunMagic|5"
        ],
        "fluff": [
            {
                "name": "Rune Scribe",
                "type": "section",
                "entries": [
                    "A rune scribe masters the secrets of the runes of power—ancient sigils that embody the fundamental magic of creation. The giants were the first to master rune magic, though many other races eventually stole away or traded for that power.",
                    "Rune magic is exceedingly rare. Some of its secrets have been lost, and what lore remains is jealously guarded. Few rune scribes share their lore with others. Indeed, most rune scribes take on new students only if doing so allows them to gain access to a forgotten or missing rune. The rune scribe prestige class uses the rules for rune magic presented at the end of this article."
                ],
                "source": "UAPrestigeClassesRunMagic",
                "page": 2
            }
        ]
    },
    {
        "name": "Expert Sidekick",
        "source": "UASidekicks",
        "page": 3,
        "isSidekick": true,
        "classFeatures": [
            "Sidekick Class|Expert Sidekick|UASidekicks|1",
            "Bonus Proficiencies|Expert Sidekick|UASidekicks|1",
            "Expertise|Expert Sidekick|UASidekicks|1",
            "Helpful|Expert Sidekick|UASidekicks|1",
            "Cunning Action|Expert Sidekick|UASidekicks|2",
            "Jack of Many Trades|Expert Sidekick|UASidekicks|3",
            "Ability Score Improvement|Expert Sidekick|UASidekicks|4",
            "Proficiency Versatility|Expert Sidekick|UASidekicks|4|UAClassFeatureVariants",
            "Extra Attack|Expert Sidekick|UASidekicks|5",
            "Expertise|Expert Sidekick|UASidekicks|6",
            "Evasion|Expert Sidekick|UASidekicks|7",
            "Ability Score Improvement|Expert Sidekick|UASidekicks|8",
            "Proficiency Versatility|Expert Sidekick|UASidekicks|8|UAClassFeatureVariants",
            "Inspiring Help (1d6)|Expert Sidekick|UASidekicks|9",
            "Ability Score Improvement|Expert Sidekick|UASidekicks|10",
            "Proficiency Versatility|Expert Sidekick|UASidekicks|10|UAClassFeatureVariants",
            "Reliable Talent|Expert Sidekick|UASidekicks|11",
            "Ability Score Improvement|Expert Sidekick|UASidekicks|12",
            "Proficiency Versatility|Expert Sidekick|UASidekicks|12|UAClassFeatureVariants",
            "Bonus Proficiencies|Expert Sidekick|UASidekicks|13",
            "Ability Score Improvement|Expert Sidekick|UASidekicks|14",
            "Proficiency Versatility|Expert Sidekick|UASidekicks|14|UAClassFeatureVariants",
            "Sharp Mind|Expert Sidekick|UASidekicks|15",
            "Ability Score Improvement|Expert Sidekick|UASidekicks|16",
            "Proficiency Versatility|Expert Sidekick|UASidekicks|16|UAClassFeatureVariants",
            "Expertise|Expert Sidekick|UASidekicks|17",
            "Inspiring Help (2d6)|Expert Sidekick|UASidekicks|18",
            "Ability Score Improvement|Expert Sidekick|UASidekicks|19",
            "Proficiency Versatility|Expert Sidekick|UASidekicks|19|UAClassFeatureVariants",
            "Stroke of Luck|Expert Sidekick|UASidekicks|20"
        ],
        "fluff": [
            {
                "name": "Expert Sidekick",
                "type": "section",
                "entries": [
                    "The expert is a master of certain tasks or knowledge. This sidekick follows a path that favors cunning over brawn or spellcasting. It might be a scout, a musician, a librarian, a clever street kid, a wily merchant, or a burglar."
                ],
                "source": "UASidekicks",
                "page": 3
            }
        ]
    },
    {
        "name": "Spellcaster Sidekick",
        "source": "UASidekicks",
        "page": 4,
        "isSidekick": true,
        "cantripProgression": [
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ],
        "spellsKnownProgression": [
            3,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            12,
            13,
            13,
            14,
            14,
            15,
            15,
            16,
            16
        ],
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Cantrips Known|spells|level=0}"
                ],
                "rows": [
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ]
                ]
            },
            {
                "colLabels": [
                    "{@filter Spells Known|spells|level=!0}"
                ],
                "rows": [
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        6
                    ],
                    [
                        7
                    ],
                    [
                        8
                    ],
                    [
                        9
                    ],
                    [
                        10
                    ],
                    [
                        11
                    ],
                    [
                        12
                    ],
                    [
                        12
                    ],
                    [
                        13
                    ],
                    [
                        13
                    ],
                    [
                        14
                    ],
                    [
                        14
                    ],
                    [
                        15
                    ],
                    [
                        15
                    ],
                    [
                        16
                    ],
                    [
                        16
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1}",
                    "{@filter 2nd|spells|level=2}",
                    "{@filter 3rd|spells|level=3}",
                    "{@filter 4th|spells|level=4}",
                    "{@filter 5th|spells|level=5}",
                    "{@filter 6th|spells|level=6}",
                    "{@filter 7th|spells|level=7}",
                    "{@filter 8th|spells|level=8}",
                    "{@filter 9th|spells|level=9}"
                ],
                "rows": [
                    [
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        2,
                        1,
                        1
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Sidekick Class|Spellcaster Sidekick|UASidekicks|1",
            "Bonus Proficiencies|Spellcaster Sidekick|UASidekicks|1",
            "Spellcasting|Spellcaster Sidekick|UASidekicks|1",
            "Magical Recovery|Spellcaster Sidekick|UASidekicks|2",
            "Ability Score Improvement|Spellcaster Sidekick|UASidekicks|4",
            "Proficiency Versatility|Spellcaster Sidekick|UASidekicks|4|UAClassFeatureVariants",
            "Potent Cantrips|Spellcaster Sidekick|UASidekicks|6",
            "Ability Score Improvement|Spellcaster Sidekick|UASidekicks|8",
            "Proficiency Versatility|Spellcaster Sidekick|UASidekicks|8|UAClassFeatureVariants",
            "Empowered Spells|Spellcaster Sidekick|UASidekicks|10",
            "Ability Score Improvement|Spellcaster Sidekick|UASidekicks|12",
            "Proficiency Versatility|Spellcaster Sidekick|UASidekicks|12|UAClassFeatureVariants",
            "Focused Casting|Spellcaster Sidekick|UASidekicks|14",
            "Ability Score Improvement|Spellcaster Sidekick|UASidekicks|16",
            "Proficiency Versatility|Spellcaster Sidekick|UASidekicks|16|UAClassFeatureVariants",
            "Ability Score Improvement|Spellcaster Sidekick|UASidekicks|18",
            "Proficiency Versatility|Spellcaster Sidekick|UASidekicks|18|UAClassFeatureVariants",
            "Signature Spells|Spellcaster Sidekick|UASidekicks|20"
        ],
        "fluff": [
            {
                "name": "Spellcaster Sidekick",
                "type": "section",
                "entries": [
                    "A sidekick who becomes a spellcaster walks the paths of magic. The sidekick might be a hedge wizard, a priest, a soothsayer, a spell-wielding performer, or a person with magic in their veins."
                ],
                "source": "UASidekicks",
                "page": 4
            }
        ]
    },
    {
        "name": "Warrior Sidekick",
        "source": "UASidekicks",
        "page": 2,
        "isSidekick": true,
        "classFeatures": [
            "Sidekick Class|Warrior Sidekick|UASidekicks|1",
            "Bonus Proficiencies|Warrior Sidekick|UASidekicks|1",
            "Second Wind|Warrior Sidekick|UASidekicks|1",
            "Danger Sense|Warrior Sidekick|UASidekicks|2",
            "Improved Critical|Warrior Sidekick|UASidekicks|3",
            "Ability Score Improvement|Warrior Sidekick|UASidekicks|4",
            "Proficiency Versatility|Warrior Sidekick|UASidekicks|4|UAClassFeatureVariants",
            "Extra Attack (1 extra)|Warrior Sidekick|UASidekicks|5",
            "Ability Score Improvement|Warrior Sidekick|UASidekicks|6",
            "Proficiency Versatility|Warrior Sidekick|UASidekicks|6|UAClassFeatureVariants",
            "Battle Readiness|Warrior Sidekick|UASidekicks|7",
            "Ability Score Improvement|Warrior Sidekick|UASidekicks|8",
            "Proficiency Versatility|Warrior Sidekick|UASidekicks|8|UAClassFeatureVariants",
            "Indomitable (1 use)|Warrior Sidekick|UASidekicks|9",
            "Improved Defense|Warrior Sidekick|UASidekicks|10",
            "Extra Attack (2 extra)|Warrior Sidekick|UASidekicks|11",
            "Ability Score Improvement|Warrior Sidekick|UASidekicks|12",
            "Proficiency Versatility|Warrior Sidekick|UASidekicks|12|UAClassFeatureVariants",
            "Indomitable (2 uses)|Warrior Sidekick|UASidekicks|13",
            "Ability Score Improvement|Warrior Sidekick|UASidekicks|14",
            "Proficiency Versatility|Warrior Sidekick|UASidekicks|14|UAClassFeatureVariants",
            "Superior Critical|Warrior Sidekick|UASidekicks|15",
            "Ability Score Improvement|Warrior Sidekick|UASidekicks|16",
            "Proficiency Versatility|Warrior Sidekick|UASidekicks|16|UAClassFeatureVariants",
            "Indomitable (3 uses)|Warrior Sidekick|UASidekicks|17",
            "Second Wind (2 uses)|Warrior Sidekick|UASidekicks|18",
            "Ability Score Improvement|Warrior Sidekick|UASidekicks|19",
            "Proficiency Versatility|Warrior Sidekick|UASidekicks|19|UAClassFeatureVariants",
            "Extra Attack (3 extra)|Warrior Sidekick|UASidekicks|20"
        ],
        "fluff": [
            {
                "name": "Warrior Sidekick",
                "type": "section",
                "entries": [
                    "A warrior sidekick grows in martial prowess as it fights by your side. It might be a soldier, a town guard, a battle-trained beast, or any other creature honed for combat."
                ],
                "source": "UASidekicks",
                "page": 2
            }
        ]
    },
    {
        "name": "Expert Sidekick",
        "source": "TCE",
        "page": 142,
        "isSidekick": true,
        "classFeatures": [
            "Sidekick Class|Expert Sidekick|TCE|1",
            "Bonus Proficiencies|Expert Sidekick|TCE|1",
            "Helpful|Expert Sidekick|TCE|1",
            "Cunning Action|Expert Sidekick|TCE|2",
            "Expertise|Expert Sidekick|TCE|3",
            "Ability Score Improvement|Expert Sidekick|TCE|4",
            "Coordinated Strike|Expert Sidekick|TCE|6",
            "Evasion|Expert Sidekick|TCE|7",
            "Ability Score Improvement|Expert Sidekick|TCE|8",
            "Ability Score Improvement|Expert Sidekick|TCE|10",
            "Inspiring Help|Expert Sidekick|TCE|11",
            "Ability Score Improvement|Expert Sidekick|TCE|12",
            "Reliable Talent|Expert Sidekick|TCE|14",
            "Expertise|Expert Sidekick|TCE|15",
            "Ability Score Improvement|Expert Sidekick|TCE|16",
            "Sharp Mind|Expert Sidekick|TCE|18",
            "Ability Score Improvement|Expert Sidekick|TCE|19",
            "Inspiring Help Improvement|Expert Sidekick|TCE|20"
        ],
        "fluff": [
            {
                "name": "Expert Sidekick",
                "type": "section",
                "entries": [
                    "The Expert is a master of certain tasks or knowledge, favoring cunning over brawn. It might be a scout, a musician, a librarian, a clever street kid, a wily merchant, or a burglar."
                ],
                "source": "TCE"
            }
        ]
    },
    {
        "name": "Spellcaster Sidekick",
        "source": "TCE",
        "page": 144,
        "isSidekick": true,
        "casterProgression": "artificer",
        "cantripProgression": [
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4
        ],
        "spellsKnownProgression": [
            1,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            8,
            8,
            9,
            9,
            10,
            10,
            11,
            11
        ],
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Cantrips Known|spells|level=0}"
                ],
                "rows": [
                    [
                        2
                    ],
                    [
                        2
                    ],
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ]
                ]
            },
            {
                "colLabels": [
                    "{@filter Spells Known|spells|level=!0}"
                ],
                "rows": [
                    [
                        1
                    ],
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        6
                    ],
                    [
                        6
                    ],
                    [
                        7
                    ],
                    [
                        7
                    ],
                    [
                        8
                    ],
                    [
                        8
                    ],
                    [
                        9
                    ],
                    [
                        9
                    ],
                    [
                        10
                    ],
                    [
                        10
                    ],
                    [
                        11
                    ],
                    [
                        11
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1}",
                    "{@filter 2nd|spells|level=2}",
                    "{@filter 3rd|spells|level=3}",
                    "{@filter 4th|spells|level=4}",
                    "{@filter 5th|spells|level=5}"
                ],
                "rows": [
                    [
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Sidekick Class|Spellcaster Sidekick|TCE|1",
            "Bonus Proficiencies|Spellcaster Sidekick|TCE|1",
            "Spellcasting|Spellcaster Sidekick|TCE|1",
            "Ability Score Improvement|Spellcaster Sidekick|TCE|4",
            "Potent Cantrips|Spellcaster Sidekick|TCE|6",
            "Ability Score Improvement|Spellcaster Sidekick|TCE|8",
            "Ability Score Improvement|Spellcaster Sidekick|TCE|12",
            "Empowered Spells|Spellcaster Sidekick|TCE|14",
            "Ability Score Improvement|Spellcaster Sidekick|TCE|16",
            "Ability Score Improvement|Spellcaster Sidekick|TCE|18",
            "Focused Casting|Spellcaster Sidekick|TCE|20"
        ],
        "fluff": [
            {
                "name": "Spellcaster Sidekick",
                "type": "section",
                "entries": [
                    "A sidekick who becomes a Spellcaster walks the paths of magic. The sidekick might be a hedge wizard, a priest, a soothsayer, a magical performer, or a person with magic in their veins."
                ],
                "source": "TCE"
            }
        ]
    },
    {
        "name": "Warrior Sidekick",
        "source": "TCE",
        "page": 146,
        "isSidekick": true,
        "classFeatures": [
            "Sidekick Class|Warrior Sidekick|TCE|1",
            "Bonus Proficiencies|Warrior Sidekick|TCE|1",
            "Martial Role|Warrior Sidekick|TCE|1",
            "Second Wind|Warrior Sidekick|TCE|2",
            "Improved Critical|Warrior Sidekick|TCE|3",
            "Ability Score Improvement|Warrior Sidekick|TCE|4",
            "Extra Attack|Warrior Sidekick|TCE|6",
            "Battle Readiness|Warrior Sidekick|TCE|7",
            "Ability Score Improvement|Warrior Sidekick|TCE|8",
            "Improved Defense|Warrior Sidekick|TCE|10",
            "Indomitable|Warrior Sidekick|TCE|11",
            "Ability Score Improvement|Warrior Sidekick|TCE|12",
            "Ability Score Improvement|Warrior Sidekick|TCE|14",
            "Extra Attack Improvement|Warrior Sidekick|TCE|15",
            "Ability Score Improvement|Warrior Sidekick|TCE|16",
            "Indomitable Improvement|Warrior Sidekick|TCE|18",
            "Ability Score Improvement|Warrior Sidekick|TCE|19",
            "Second Wind Improvement|Warrior Sidekick|TCE|20"
        ],
        "fluff": [
            {
                "name": "Warrior Sidekick",
                "type": "section",
                "entries": [
                    "A Warrior sidekick grows in martial prowess as it fights by your side. It might be a soldier, a town guard, a battle-trained beast, or any other creature honed for combat."
                ],
                "source": "TCE"
            }
        ]
    },
    {
        "name": "Sorcerer",
        "source": "PHB",
        "page": 99,
        "srd": true,
        "hd": {
            "number": 1,
            "faces": 6
        },
        "proficiency": [
            "con",
            "cha"
        ],
        "spellcastingAbility": "cha",
        "casterProgression": "full",
        "cantripProgression": [
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            5,
            5,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6
        ],
        "spellsKnownProgression": [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            12,
            13,
            13,
            14,
            14,
            15,
            15,
            15,
            15
        ],
        "optionalfeatureProgression": [
            {
                "name": "Metamagic",
                "featureType": [
                    "MM"
                ],
                "progression": {
                    "3": 2,
                    "10": 3,
                    "17": 4
                }
            }
        ],
        "startingProficiencies": {
            "weapons": [
                "{@item dagger|phb|daggers}",
                "{@item dart|phb|darts}",
                "{@item sling|phb|slings}",
                "{@item quarterstaff|phb|quarterstaffs}",
                "{@item light crossbow|phb|light crossbows}"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "arcana",
                            "deception",
                            "insight",
                            "intimidation",
                            "persuasion",
                            "religion"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
                "(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}",
                "(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
                "Two {@item dagger|phb|daggers}"
            ],
            "goldAlternative": "{@dice 3d4 × 10|3d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "light crossbow|phb",
                        "crossbow bolts (20)|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimple"
                        }
                    ]
                },
                {
                    "a": [
                        "component pouch|phb"
                    ],
                    "b": [
                        "arcane focus|phb"
                    ]
                },
                {
                    "a": [
                        "dungeoneer's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "_": [
                        {
                            "item": "dagger|phb",
                            "quantity": 2
                        }
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "cha": 13
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "Sorcery Points"
                ],
                "rows": [
                    [
                        0
                    ],
                    [
                        2
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        6
                    ],
                    [
                        7
                    ],
                    [
                        8
                    ],
                    [
                        9
                    ],
                    [
                        10
                    ],
                    [
                        11
                    ],
                    [
                        12
                    ],
                    [
                        13
                    ],
                    [
                        14
                    ],
                    [
                        15
                    ],
                    [
                        16
                    ],
                    [
                        17
                    ],
                    [
                        18
                    ],
                    [
                        19
                    ],
                    [
                        20
                    ]
                ]
            },
            {
                "colLabels": [
                    "{@filter Cantrips Known|spells|level=0|class=Sorcerer}",
                    "{@filter Spells Known|spells|class=Sorcerer}"
                ],
                "rows": [
                    [
                        4,
                        2
                    ],
                    [
                        4,
                        3
                    ],
                    [
                        4,
                        4
                    ],
                    [
                        5,
                        5
                    ],
                    [
                        5,
                        6
                    ],
                    [
                        5,
                        7
                    ],
                    [
                        5,
                        8
                    ],
                    [
                        5,
                        9
                    ],
                    [
                        5,
                        10
                    ],
                    [
                        6,
                        11
                    ],
                    [
                        6,
                        12
                    ],
                    [
                        6,
                        12
                    ],
                    [
                        6,
                        13
                    ],
                    [
                        6,
                        13
                    ],
                    [
                        6,
                        14
                    ],
                    [
                        6,
                        14
                    ],
                    [
                        6,
                        15
                    ],
                    [
                        6,
                        15
                    ],
                    [
                        6,
                        15
                    ],
                    [
                        6,
                        15
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Sorcerer}",
                    "{@filter 2nd|spells|level=2|class=Sorcerer}",
                    "{@filter 3rd|spells|level=3|class=Sorcerer}",
                    "{@filter 4th|spells|level=4|class=Sorcerer}",
                    "{@filter 5th|spells|level=5|class=Sorcerer}",
                    "{@filter 6th|spells|level=6|class=Sorcerer}",
                    "{@filter 7th|spells|level=7|class=Sorcerer}",
                    "{@filter 8th|spells|level=8|class=Sorcerer}",
                    "{@filter 9th|spells|level=9|class=Sorcerer}"
                ],
                "rowsSpellProgression": [
                    [
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        2,
                        1,
                        1
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Spellcasting|Sorcerer||1",
            {
                "classFeature": "Sorcerous Origin|Sorcerer||1",
                "gainSubclassFeature": true
            },
            "Spell Versatility|Sorcerer||1|UAClassFeatureVariants",
            "Font of Magic|Sorcerer||2",
            "Font of Magic Options|Sorcerer||2|UAClassFeatureVariants",
            "Metamagic|Sorcerer||3",
            "Metamagic Options|Sorcerer||3|UAClassFeatureVariants",
            "Metamagic Options|Sorcerer||3|TCE",
            "Ability Score Improvement|Sorcerer||4",
            "Proficiency Versatility|Sorcerer||4|UAClassFeatureVariants",
            "Sorcerous Versatility|Sorcerer||4|TCE",
            "Magical Guidance|Sorcerer||5|TCE",
            {
                "classFeature": "Sorcerous Origin feature|Sorcerer||6",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Sorcerer||8",
            "Proficiency Versatility|Sorcerer||8|UAClassFeatureVariants",
            "Metamagic|Sorcerer||10",
            "Ability Score Improvement|Sorcerer||12",
            "Proficiency Versatility|Sorcerer||12|UAClassFeatureVariants",
            {
                "classFeature": "Sorcerous Origin feature|Sorcerer||14",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Sorcerer||16",
            "Proficiency Versatility|Sorcerer||16|UAClassFeatureVariants",
            "Metamagic|Sorcerer||17",
            {
                "classFeature": "Sorcerous Origin feature|Sorcerer||18",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Sorcerer||19",
            "Proficiency Versatility|Sorcerer||19|UAClassFeatureVariants",
            "Sorcerous Restoration|Sorcerer||20"
        ],
        "subclassTitle": "Sorcerous Origin",
        "fluff": [
            {
                "name": "Sorcerer",
                "type": "section",
                "entries": [
                    "Golden eyes flashing, a human stretches out her hand and unleashes the dragonfire that burns in her veins. As an inferno rages around her foes, leathery wings spread from her back and she takes to the air.",
                    "Long hair whipped by a conjured wind, a half-elf spreads his arms wide and throws his head back. Lifting him momentarily off the ground, a wave of magic surges up in him, through him, and out from him in a mighty blast of lightning.",
                    "Crouching behind a stalagmite, a halfling points a finger at a charging troglodyte. A blast of fire springs from her finger to strike the creature. She ducks back behind the rock formation with a grin, unaware that her wild magic has turned her skin bright blue.",
                    "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can't study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.",
                    {
                        "type": "entries",
                        "name": "Raw Magic",
                        "entries": [
                            "Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways.",
                            "The appearance of sorcerous powers is wildly unpredictable. Some draconic bloodlines produce exactly one sorcerer in every generation, but in other lines of descent every individual is a sorcerer. Most of the time, the talents of sorcery appear as apparent flukes. Some sorcerers can't name the origin of their power, while others trace it to strange events in their own lives. The touch of a demon, the blessing of a dryad at a baby's birth, or a taste of the water from a mysterious spring might spark the gift of sorcery. So too might the gift of a deity of magic, exposure to the elemental forces of the Inner Planes or the maddening chaos of Limbo, or a glimpse into the inner workings of reality.",
                            "Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Unexplained Powers",
                        "entries": [
                            "Sorcerers are rare in the world, and it's unusual to find a sorcerer who is not involved in the adventuring life in some way. People with magical power seething in their veins soon discover that the power doesn't like to stay quiet. A sorcerer's magic wants to be wielded, and it has a tendency to spill out in unpredictable ways if it isn't called on.",
                            "Sorcerers often have obscure or quixotic motivations driving them to adventure. Some seek a greater understanding of the magical force that infuses them, or the answer to the mystery of its origin. Others hope to find a way to get rid of it, or to unleash its full potential. Whatever their goals, sorcerers are every bit as useful to an adventuring party as wizards, making up for a comparative lack of breadth in their magical knowledge with enormous flexibility in using the spells they know."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Sorcerer",
                        "entries": [
                            "The most important question to consider when creating your sorcerer is the origin of your power. As a starting character, you'll choose an origin that ties to a draconic bloodline or the influence of wild magic, but the exact source of your power is up to you to decide. Is it a family curse, passed down to you from distant ancestors? Or did some extraordinary event leave you blessed with inherent magic but perhaps scarred as well?",
                            "How do you feel about the magical power coursing through you? Do you embrace it, try to master it, or revel in its unpredictable nature? Is it a blessing or a curse? Did you seek it out, or did it find you? Did you have the option to refuse it, and do you wish you had? What do you intend to do with it? Perhaps you feel like you've been given this power for some lofty purpose. Or you might decide that the power gives you the right to do what you want, to take what you want from those who lack such power. Perhaps your power links you to a powerful individual in the world—the fey creature that blessed you at birth, the dragon who put a drop of its blood into your veins, the lich who created you as an experiment, or the deity who chose you to carry this power.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a sorcerer quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Constitution. Second, choose the hermit background. Third, choose the {@spell light}, {@spell prestidigitation}, {@spell ray of frost}, and {@spell shocking grasp} cantrips, along with the 1st-level spells {@spell shield} and {@spell magic missile}."
                                ]
                            }
                        ]
                    }
                ],
                "page": 99,
                "source": "PHB"
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "Practice and study are for amateurs. True power is a birthright."
                        ],
                        "by": "Hennet, scion of Tiamat"
                    },
                    "When it comes to drawing forth their abilities in times of need, sorcerers have it easy compared to other characters. Their power not only rests within them, but it likely takes some effort to keep it at bay. Every sorcerer is born to the role, or stumbles into it through cosmic chance. Unlike other characters, who must actively learn, embrace, and pursue their talents, sorcerers have their power thrust upon them.",
                    "Because the idea of an innately magical being traveling among them does not sit well with many folk, sorcerers tend to breed mistrust and suspicion in others they come across. Nonetheless, many sorcerers succeed in overcoming that prejudice through deeds that benefit their less magically gifted contemporaries.",
                    "Sorcerers are often defined by the events surrounding the manifestation of their power. For those who receive it as an expected birthright, its appearance is a cause for celebration. Other sorcerers are treated as outcasts, banished from their homes after the sudden, terrifying arrival of their abilities.",
                    "Playing a sorcerer character can be as rewarding as it is challenging. The sections below offer suggestions on how to flesh out and personalize your persona.",
                    {
                        "type": "entries",
                        "name": "Arcane Origins",
                        "entries": [
                            "Some sorcerers understand where their power came from, based on how their abilities manifested. Others can only speculate, since their powers came to them in a way that suggests no particular cause.",
                            "Does your character know the source of your magical power? Does it tie back to some distant relative, a cosmic event, or blind chance? If your sorcerer doesn't know where their power arose from, your DM can use this table (or select an origin) and reveal it to you when the information plays a role in the campaign.",
                            {
                                "type": "table",
                                "caption": "Arcane Origins",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Origin"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Your power arises from your family's bloodline. You are related to some powerful creature, or you inherited a blessing or a curse."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "You are the reincarnation of a being from another plane of existence."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "A powerful entity entered the world. Its magic changed you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Your birth was prophesied in an ancient text, and you are foretold to use your power for terrible ends."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "You are the product of generations of careful, selective breeding."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You were made in a vat by an alchemist."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Reaction",
                        "entries": [
                            "When a new sorcerer enters the world, either at birth or later when one's power becomes evident, the consequences of that event depend greatly on how its witnesses react to what they have seen.",
                            "When your sorcerer's powers appeared, how did the world around you respond? Were other people supportive, fearful, or somewhere in between?",
                            {
                                "type": "table",
                                "caption": "Reactions",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Reaction"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Your powers are seen as a great blessing by those around you, and you are expected to use them in service to your community."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Your powers caused destruction and even a death when they became evident, and you were treated as a criminal."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Your neighbors hate and fear your power, causing them to shun you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "You came to the attention of a sinister cult that plans on exploiting your abilities."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "People around you believe that your powers are a curse levied on your family for a past transgression."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Your powers are believed to be tied to an ancient line of mad kings that supposedly ended in a bloody revolt over a century ago."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Supernatural Mark",
                        "entries": [
                            "A sorcerer at rest is almost indistinguishable from a normal person; it's only when their magic flies forth that sorcerers reveal their true nature. Even so, many sorcerers have a subtle but telling physical trait that sets them apart from other folk.",
                            "If your sorcerer has a supernatural mark, it might be one that's easily concealed, or it could be a source of pride that you keep on constant display.",
                            {
                                "type": "table",
                                "caption": "Supernatural Marks",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Mark"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Your eyes are an unusual color, such as red."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "You have an extra toe on one foot."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "One of your ears is noticeably larger than the other."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Your hair grows at a prodigious rate."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "You wrinkle your nose repeatedly while you are chewing."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "A red splotch appears on your neck once a day, then vanishes after an hour."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Signs of Sorcery",
                        "entries": [
                            "As the world well knows, some sorcerers are better than others at controlling their spellcasting. Sometimes a wild display of magic gone awry emanates from a sorcerer who casts a spell. But even when one's magic goes off as planned, the act of casting is often accompanied by a telltale sign that makes it clear where that magical energy came from.",
                            "When your sorcerer character casts a spell, does the effort reveal itself in a sign of sorcery? Is this sign tied to your origin or some other aspect of who you are, or is it a seemingly random phenomenon?",
                            {
                                "type": "table",
                                "caption": "Signs of Sorcery",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Sign"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "You deliver the verbal components of your spells in the booming voice of a titan."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "For a moment after you cast a spell, the area around you grows dark and gloomy."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "You sweat profusely while casting a spell and for a few seconds thereafter."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Your hair and garments are briefly buffeted about, as if by a breeze, whenever you call forth a spell."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "If you are standing when you cast a spell, you rise six inches into the air and gently float back down."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Illusory blue flames wreathe your head as you begin your casting, then abruptly disappear."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "page": 48,
                "source": "XGE"
            }
        ]
    },
    {
        "name": "Warlock",
        "source": "PHB",
        "page": 105,
        "srd": true,
        "hd": {
            "number": 1,
            "faces": 8
        },
        "proficiency": [
            "wis",
            "cha"
        ],
        "spellcastingAbility": "cha",
        "casterProgression": "pact",
        "cantripProgression": [
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4
        ],
        "spellsKnownProgression": [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            10,
            11,
            11,
            12,
            12,
            13,
            13,
            14,
            14,
            15,
            15
        ],
        "spellsKnownProgressionFixedByLevel": {
            "11": {
                "6": 1
            },
            "13": {
                "7": 1
            },
            "15": {
                "8": 1
            },
            "17": {
                "9": 1
            }
        },
        "optionalfeatureProgression": [
            {
                "name": "Eldritch Invocations",
                "featureType": [
                    "EI"
                ],
                "progression": [
                    0,
                    2,
                    2,
                    2,
                    3,
                    3,
                    4,
                    4,
                    5,
                    5,
                    5,
                    6,
                    6,
                    6,
                    7,
                    7,
                    7,
                    8,
                    8,
                    8
                ]
            },
            {
                "name": "Pact Boon",
                "featureType": [
                    "PB"
                ],
                "progression": {
                    "3": 1
                }
            }
        ],
        "startingProficiencies": {
            "armor": [
                "light"
            ],
            "weapons": [
                "simple"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "arcana",
                            "deception",
                            "history",
                            "intimidation",
                            "investigation",
                            "nature",
                            "religion"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
                "(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}",
                "(a) a {@item scholar's pack|phb} or (b) a {@item dungeoneer's pack|phb}",
                "{@item Leather armor|phb}, any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}, and two {@item dagger|phb|daggers}"
            ],
            "goldAlternative": "{@dice 4d4 × 10|4d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "light crossbow|phb",
                        "crossbow bolts (20)|phb"
                    ],
                    "b": [
                        {
                            "equipmentType": "weaponSimple"
                        }
                    ]
                },
                {
                    "a": [
                        "component pouch|phb"
                    ],
                    "b": [
                        "arcane focus|phb"
                    ]
                },
                {
                    "a": [
                        "scholar's pack|phb"
                    ],
                    "b": [
                        "dungeoneer's pack|phb"
                    ]
                },
                {
                    "_": [
                        "Leather armor|phb",
                        {
                            "equipmentType": "weaponSimple"
                        },
                        {
                            "item": "dagger|phb",
                            "quantity": 2
                        }
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "cha": 13
            },
            "proficienciesGained": {
                "armor": [
                    "light"
                ],
                "weapons": [
                    "simple"
                ]
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Cantrips Known|spells|level=0|class=Warlock}",
                    "{@filter Spells Known|spells|class=Warlock}",
                    "Spell Slots",
                    "Slot Level",
                    "{@filter Invocations Known|optionalfeatures|feature type=ei}"
                ],
                "rows": [
                    [
                        2,
                        2,
                        1,
                        "{@filter 1st|spells|level=1|class=Warlock}",
                        0
                    ],
                    [
                        2,
                        3,
                        2,
                        "{@filter 1st|spells|level=1|class=Warlock}",
                        2
                    ],
                    [
                        2,
                        4,
                        2,
                        "{@filter 2nd|spells|level=2|class=Warlock}",
                        2
                    ],
                    [
                        3,
                        5,
                        2,
                        "{@filter 2nd|spells|level=2|class=Warlock}",
                        2
                    ],
                    [
                        3,
                        6,
                        2,
                        "{@filter 3rd|spells|level=3|class=Warlock}",
                        3
                    ],
                    [
                        3,
                        7,
                        2,
                        "{@filter 3rd|spells|level=3|class=Warlock}",
                        3
                    ],
                    [
                        3,
                        8,
                        2,
                        "{@filter 4th|spells|level=4|class=Warlock}",
                        4
                    ],
                    [
                        3,
                        9,
                        2,
                        "{@filter 4th|spells|level=4|class=Warlock}",
                        4
                    ],
                    [
                        3,
                        10,
                        2,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        5
                    ],
                    [
                        4,
                        10,
                        2,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        5
                    ],
                    [
                        4,
                        11,
                        3,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        5
                    ],
                    [
                        4,
                        11,
                        3,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        6
                    ],
                    [
                        4,
                        12,
                        3,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        6
                    ],
                    [
                        4,
                        12,
                        3,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        6
                    ],
                    [
                        4,
                        13,
                        3,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        7
                    ],
                    [
                        4,
                        13,
                        3,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        7
                    ],
                    [
                        4,
                        14,
                        4,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        7
                    ],
                    [
                        4,
                        14,
                        4,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        8
                    ],
                    [
                        4,
                        15,
                        4,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        8
                    ],
                    [
                        4,
                        15,
                        4,
                        "{@filter 5th|spells|level=5|class=Warlock}",
                        8
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Pact Magic|Warlock||1",
            "Spell Versatility|Warlock||1|UAClassFeatureVariants",
            {
                "classFeature": "Otherworldly Patron|Warlock||1",
                "gainSubclassFeature": true
            },
            "Eldritch Invocations|Warlock||2",
            "Pact Boon|Warlock||3",
            "Ability Score Improvement|Warlock||4",
            "Proficiency Versatility|Warlock||4|UAClassFeatureVariants",
            "Eldritch Versatility|Warlock||4|TCE",
            {
                "classFeature": "Otherworldly Patron feature|Warlock||6",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Warlock||8",
            "Proficiency Versatility|Warlock||8|UAClassFeatureVariants",
            {
                "classFeature": "Otherworldly Patron feature|Warlock||10",
                "gainSubclassFeature": true
            },
            "Mystic Arcanum (6th level)|Warlock||11",
            "Ability Score Improvement|Warlock||12",
            "Proficiency Versatility|Warlock||12|UAClassFeatureVariants",
            "Mystic Arcanum (7th level)|Warlock||13",
            {
                "classFeature": "Otherworldly Patron feature|Warlock||14",
                "gainSubclassFeature": true
            },
            "Mystic Arcanum (8th level)|Warlock||15",
            "Ability Score Improvement|Warlock||16",
            "Proficiency Versatility|Warlock||16|UAClassFeatureVariants",
            "Mystic Arcanum (9th level)|Warlock||17",
            "Ability Score Improvement|Warlock||19",
            "Proficiency Versatility|Warlock||19|UAClassFeatureVariants",
            "Eldritch Master|Warlock||20"
        ],
        "subclassTitle": "Otherworldly Patron",
        "fluff": [
            {
                "name": "Warlock",
                "type": "section",
                "entries": [
                    "With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will.",
                    "As flames spring to life in her hands, a wizened human whispers the secret name of her demonic patron, infusing her spell with fiendish magic.",
                    "Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world.",
                    "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.",
                    {
                        "type": "entries",
                        "name": "Sworn and Beholden",
                        "entries": [
                            "A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf.",
                            "The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock's being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Delvers into Secrets",
                        "entries": [
                            "Warlocks are driven by an insatiable need for knowledge and power, which compels them into their pacts and shapes their lives. This thirst drives warlocks into their pacts and shapes their later careers as well.",
                            "Stories of warlocks binding themselves to fiends are widely known. But many warlocks serve patrons that are not fiendish. Sometimes a traveler in the wilds comes to a strangely beautiful tower, meets its fey lord or lady, and stumbles into a pact without being fully aware of it. And sometimes, while poring over tomes of forbidden lore, a brilliant but crazed student's mind is opened to realities beyond the material world and to the alien beings that dwell in the outer void.",
                            "Once a pact is made, a warlock's thirst for knowledge and power can't be slaked with mere study and research. No one makes a pact with such a mighty patron if he or she doesn't intend to use the power thus gained. Rather, the vast majority of warlocks spend their days in active pursuit of their goals, which typically means some kind of adventuring. Furthermore, the demands of their patrons drive warlocks toward adventure."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Warlock",
                        "entries": [
                            "As you make your warlock character, spend some time thinking about your patron and the obligations that your pact imposes upon you. What led you to make the pact, and how did you make contact with your patron? Were you seduced into summoning a devil, or did you seek out the ritual that would allow you to make contact with an alien elder god? Did you search for your patron, or did your patron find and choose you? Do you chafe under the obligations of your pact or serve joyfully in anticipation of the rewards promised to you?",
                            "Work with your DM to determine how big a part your pact will play in your character's adventuring career. Your patron's demands might drive you into adventures, or they might consist entirely of small favors you can do between adventures.",
                            "What kind of relationship do you have with your patron? Is it friendly, antagonistic, uneasy, or romantic? How important does your patron consider you to be? What part do you play in your patron's plans? Do you know other servants of your patron?",
                            "How does your patron communicate with you? If you have a familiar, it might occasionally speak with your patron's voice. Some warlocks find messages from their patrons etched on trees, mingled among tea leaves, or adrift in the clouds—messages that only the warlock can see. Other warlocks converse with their patrons in dreams or waking visions, or deal only with intermediaries.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a warlock quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Constitution. Second, choose the {@background charlatan} background. Third, choose the {@spell eldritch blast} and {@spell chill touch} cantrips, along with the 1st-level spells {@spell charm person} and {@spell witch bolt}."
                                ]
                            }
                        ]
                    }
                ],
                "page": 105,
                "source": "PHB"
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "You think me mad? I think true insanity is being content to live a life of mortal drudgery when knowledge and power is there for the taking in the realm beyond."
                        ],
                        "by": "Xarren, herald of Acamar"
                    },
                    "Warlocks are finders and keepers of secrets. They push at the edge of our understanding of the world, always seeking to expand their expertise. Where sages or wizards might heed a clear sign of danger and end their research, a warlock plunges ahead, heedless of the cost. Thus, it takes a peculiar mixture of intelligence, curiosity, and recklessness to produce a warlock. Many folk would describe that combination as evidence of madness. Warlocks see it as a demonstration of bravery.",
                    "Warlocks are defined by two elements that work in concert to forge their path into this class. The first element is the event or circumstances that led to a warlock's entering into a pact with a planar entity. The second one is the nature of the entity a warlock is bound to. Unlike clerics, who typically embrace a deity and that god's ethos, a warlock might have no love for a patron, or vice versa.",
                    "The sections that follow provide ways to embellish a warlock character that could generate some intriguing story and roleplaying opportunities.",
                    {
                        "type": "entries",
                        "name": "Patron's Attitude",
                        "entries": [
                            "Every relationship is a two-way street, but in the case of warlocks and their patrons it's not necessarily true that both sides of the street are the same width or made of the same stuff. The feeling that a warlock holds for their patron, whether positive or negative, might be reciprocated by the patron, or the two participants in the pact might view one another with opposing emotions.",
                            "When you determine the attitude your warlock character holds toward your patron, also consider how things look from the patron's perspective. How does your patron behave toward you? Is your patron a friend and ally, or an enemy that grants you power only because you forced a pact upon it?",
                            {
                                "type": "table",
                                "caption": "Patron Attitudes",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Attitude"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "Your patron has guided and helped your family for generations and is kindly toward you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Each interaction with your capricious patron is a surprise, whether pleasant or painful."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "Your patron is the spirit of a long-dead hero who sees your pact as a way for it to continue to influence the world."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Your patron is a strict disciplinarian but treats you with a measure of respect."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Your patron tricked you into a pact and treats you as a slave."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You are mostly left to your own devices with no interference from your patron. Sometimes you dread the demands it will make when it does appear."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Special Terms of the Pact",
                        "entries": [
                            "A pact can range from a loose agreement to a formal contract with lengthy, detailed clauses and lists of requirements. The terms of a pact—what a warlock must do to receive a patron's favor—are always dictated by the patron. On occasion, those terms include a special proviso that might seem odd or whimsical, but warlocks take these dictates as seriously as they do the other requirements of their pacts.",
                            "Does your character have a pact that requires you to change your behavior in an unusual or seemingly frivolous way? Even if your patron hasn't imposed such a duty on you already, that's not to say it couldn't still happen.",
                            {
                                "type": "table",
                                "caption": "Special Terms",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Term"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "When directed, you must take immediate action against a specific enemy of your patron."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Your pact tests your willpower; you are required to abstain from alcohol and other intoxicants."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "At least once a day, you must inscribe or carve your patron's name or symbol on the wall of a building."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "You must occasionally conduct bizarre rituals to maintain your pact."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "You can never wear the same outfit twice, since your patron finds such predictability to be boring."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "When you use an eldritch invocation, you must speak your patron's name aloud or risk incurring its displeasure."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Binding Mark",
                        "entries": [
                            "Some patrons make a habit of, and often enjoy, marking the warlocks under their sway in some fashion. A binding mark makes it clear—to those who know about such things—that the individual in question is bound to the patron's service. A warlock might take advantage of such a mark, claiming it as proof of one's pact, or might want to keep it under wraps (if possible) to avoid the difficulties it might bring.",
                            "If your warlock's pact comes with a binding mark, how you feel about displaying it probably depends on the nature of your relationship with the one who gave it to you. Is the mark a source of pride or something you are secretly ashamed of?",
                            {
                                "type": "table",
                                "caption": "Binding Marks",
                                "colLabels": [
                                    "d6",
                                    "Mark"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        "1",
                                        "One of your eyes looks the same as one of your patron's eyes."
                                    ],
                                    [
                                        "2",
                                        "Each time you wake up, the small blemish on your face appears in a different place."
                                    ],
                                    [
                                        "3",
                                        "You display outward symptoms of a disease but suffer no ill effects from it."
                                    ],
                                    [
                                        "4",
                                        "Your tongue is an unnatural color."
                                    ],
                                    [
                                        "5",
                                        "You have a vestigial tail."
                                    ],
                                    [
                                        "6",
                                        "Your nose glows in the dark."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "page": 53,
                "source": "XGE"
            }
        ]
    },
    {
        "name": "Wizard",
        "source": "PHB",
        "page": 112,
        "srd": true,
        "basicRules": true,
        "hd": {
            "number": 1,
            "faces": 6
        },
        "proficiency": [
            "int",
            "wis"
        ],
        "spellcastingAbility": "int",
        "casterProgression": "full",
        "preparedSpells": "<$level$> + <$int_mod$>",
        "cantripProgression": [
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ],
        "spellsKnownProgressionFixed": [
            6,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ],
        "spellsKnownProgressionFixedAllowLowerLevel": true,
        "startingProficiencies": {
            "weapons": [
                "{@item dagger|phb|daggers}",
                "{@item dart|phb|darts}",
                "{@item sling|phb|slings}",
                "{@item quarterstaff|phb|quarterstaffs}",
                "{@item light crossbow|phb|light crossbows}"
            ],
            "skills": [
                {
                    "choose": {
                        "from": [
                            "arcana",
                            "history",
                            "insight",
                            "investigation",
                            "medicine",
                            "religion"
                        ],
                        "count": 2
                    }
                }
            ]
        },
        "startingEquipment": {
            "additionalFromBackground": true,
            "default": [
                "(a) a {@item quarterstaff|phb} or (b) a {@item dagger|phb}",
                "(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}",
                "(a) a {@item scholar's pack|phb} or (b) an {@item explorer's pack|phb}",
                "A {@item spellbook|phb}"
            ],
            "goldAlternative": "{@dice 4d4 × 10|4d4 × 10|Starting Gold}",
            "defaultData": [
                {
                    "a": [
                        "quarterstaff|phb"
                    ],
                    "b": [
                        "dagger|phb"
                    ]
                },
                {
                    "a": [
                        "component pouch|phb"
                    ],
                    "b": [
                        "arcane focus|phb"
                    ]
                },
                {
                    "a": [
                        "scholar's pack|phb"
                    ],
                    "b": [
                        "explorer's pack|phb"
                    ]
                },
                {
                    "_": [
                        "spellbook|phb"
                    ]
                }
            ]
        },
        "multiclassing": {
            "requirements": {
                "int": 13
            }
        },
        "classTableGroups": [
            {
                "colLabels": [
                    "{@filter Cantrips Known|spells|level=0|class=Wizard}"
                ],
                "rows": [
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        3
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        4
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ],
                    [
                        5
                    ]
                ]
            },
            {
                "title": "Spell Slots per Spell Level",
                "colLabels": [
                    "{@filter 1st|spells|level=1|class=Wizard}",
                    "{@filter 2nd|spells|level=2|class=Wizard}",
                    "{@filter 3rd|spells|level=3|class=Wizard}",
                    "{@filter 4th|spells|level=4|class=Wizard}",
                    "{@filter 5th|spells|level=5|class=Wizard}",
                    "{@filter 6th|spells|level=6|class=Wizard}",
                    "{@filter 7th|spells|level=7|class=Wizard}",
                    "{@filter 8th|spells|level=8|class=Wizard}",
                    "{@filter 9th|spells|level=9|class=Wizard}"
                ],
                "rowsSpellProgression": [
                    [
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        1,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        0,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        0
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        1,
                        1,
                        1
                    ],
                    [
                        4,
                        3,
                        3,
                        3,
                        3,
                        2,
                        2,
                        1,
                        1
                    ]
                ]
            }
        ],
        "classFeatures": [
            "Arcane Recovery|Wizard||1",
            "Spellcasting|Wizard||1",
            "Cantrip Versatility|Wizard||1|UAClassFeatureVariants",
            {
                "classFeature": "Arcane Tradition|Wizard||2",
                "gainSubclassFeature": true
            },
            "Cantrip Formulas|Wizard||3|TCE",
            "Ability Score Improvement|Wizard||4",
            "Proficiency Versatility|Wizard||4|UAClassFeatureVariants",
            {
                "classFeature": "Arcane Tradition feature|Wizard||6",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Wizard||8",
            "Proficiency Versatility|Wizard||8|UAClassFeatureVariants",
            {
                "classFeature": "Arcane Tradition feature|Wizard||10",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Wizard||12",
            "Proficiency Versatility|Wizard||12|UAClassFeatureVariants",
            {
                "classFeature": "Arcane Tradition feature|Wizard||14",
                "gainSubclassFeature": true
            },
            "Ability Score Improvement|Wizard||16",
            "Proficiency Versatility|Wizard||16|UAClassFeatureVariants",
            "Spell Mastery|Wizard||18",
            "Ability Score Improvement|Wizard||19",
            "Proficiency Versatility|Wizard||19|UAClassFeatureVariants",
            "Signature Spells|Wizard||20"
        ],
        "subclassTitle": "Arcane Tradition",
        "fluff": [
            {
                "name": "Wizard",
                "type": "section",
                "entries": [
                    "Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire toward the enemy ranks, where it erupts into a conflagration that engulfs the soldiers.",
                    "Checking and rechecking his work, a human scribes an intricate magic circle in chalk on the bare stone floor, then sprinkles powdered iron along every line and graceful curve. When the circle is complete, he drones a long incantation. A hole opens in space inside the circle, bringing a whiff of brimstone from the otherworldly plane beyond.",
                    "Crouching on the floor in a dungeon intersection, a gnome tosses a handful of small bones inscribed with mystic symbols, muttering a few words of power over them. Closing his eyes to see the visions more clearly, he nods slowly, then opens his eyes and points down the passage to his left.",
                    "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.",
                    {
                        "type": "entries",
                        "name": "Scholars of the Arcane",
                        "entries": [
                            "Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.",
                            "Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "The Lure of Knowledge",
                        "entries": [
                            "Wizards' lives are seldom mundane. The closest a wizard is likely to come to an ordinary life is working as a sage or lecturer in a library or university, teaching others the secrets of the multiverse. Other wizards sell their services as diviners, serve in military forces, or pursue lives of crime or domination.",
                            "But the lure of knowledge and power calls even the most unadventurous wizards out of the safety of their libraries and laboratories and into crumbling ruins and lost cities. Most wizards believe that their counterparts in ancient civilizations knew secrets of magic that have been lost to the ages, and discovering those secrets could unlock the path to a power greater than any magic available in the present age."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Creating a Wizard",
                        "entries": [
                            "Creating a wizard character demands a backstory dominated by at least one extraordinary event. How did your character first come into contact with magic? How did you discover you had an aptitude for it? Do you have a natural talent, or did you simply study hard and practice incessantly? Did you encounter a magical creature or an ancient tome that taught you the basics of magic?",
                            "What drew you forth from your life of study? Did your first taste of magical knowledge leave you hungry for more? Have you received word of a secret repository of knowledge not yet plundered by any other wizard? Perhaps you're simply eager to put your newfound magical skills to the test in the face of danger.",
                            {
                                "type": "entries",
                                "name": "Quick Build",
                                "entries": [
                                    "You can make a wizard quickly by following these suggestions. First, Intelligence should be your highest ability score, followed by Constitution or Dexterity. If you plan to join the School of Enchantment, make Charisma your next-best score. Second, choose the {@background sage} background. Third, choose the {@spell mage hand}, {@spell light}, and {@spell ray of frost} cantrips, along with the following 1st-level spells for your spellbook: {@spell burning hands}, {@spell charm person}, {@spell feather fall}, {@spell mage armor}, {@spell magic missile}, and {@spell sleep}."
                                ]
                            }
                        ]
                    }
                ],
                "page": 112,
                "source": "PHB"
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "quote",
                        "entries": [
                            "Wizardry requires understanding. The knowledge of how and why magic works, and our efforts to broaden that understanding, have brought about the key advances in civilization over the centuries."
                        ],
                        "by": "Gimble the illusionist"
                    },
                    "Only a select few people in the world are wielders of magic. Of all those, wizards stand at the pinnacle of the craft. Even the least of them can manipulate forces that flout the laws of nature, and the most accomplished among them can cast spells with world-shaking effects.",
                    "The price that wizards pay for their mastery is that most valuable of commodities: time. It takes years of study, instruction, and experimentation to learn how to harness magical energy and carry spells around in one's own mind. For adventuring wizards and other spellcasters who aspire to the highest echelons of the profession, the studying never ends, nor does the quest for knowledge and power.",
                    "If you're playing a wizard, take advantage of the opportunity to make your character more than just a stereotypical spell-slinger. Use the advice that follows to add some intriguing details to how your wizard interacts with the world.",
                    {
                        "type": "entries",
                        "name": "Spellbook",
                        "entries": [
                            "Your wizard character's most prized possession—your spellbook—might be an innocuous-looking volume whose covers show no hint of what's inside. Or you might display some flair, as many wizards do, by carrying a spellbook of an unusual sort. If you don't own such an item already, one of your goals might be to find a spellbook that sets you apart by its appearance or its means of manufacture.",
                            {
                                "type": "table",
                                "caption": "Spellbooks",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Spellbook"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "A tome with pages that are thin sheets of metal, spells etched into them with acid"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Long straps of leather on which spells are written, wrapped around a staff for ease of transport"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "A battered tome filled with pictographs that only you can understand"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Small stones inscribed with spells and kept in a cloth bag"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "A scorched book, ravaged by dragon fire, with the script of your spells barely visible on its pages"
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "A tome full of black pages whose writing is visible only in dim light or darkness"
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Ambition",
                        "entries": [
                            "Few aspiring wizards undertake the study of magic without some personal goal in mind. Many wizards use their spells as a tool to produce a tangible benefit, in material goods or in status, for themselves or their companions. For others, the theoretical aspect of magic might have a strong appeal, pushing those wizards to seek out knowledge that supports new theories of the arcane or confirms old ones.",
                            "Beyond the obvious, why does your wizard character study magic, and what do you want to achieve? If you haven't given these questions much thought, you can do so now, and the answers you come up with will likely affect how your future unfolds.",
                            {
                                "type": "table",
                                "caption": "Ambitions",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Ambition"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "You will prove that the gods aren't as powerful as folk believe."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Immortality is the end goal of your studies."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "If you can fully understand magic, you can unlock its use for all and usher in an era of equality."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Magic is a dangerous tool. You use it to protect what you treasure."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "Arcane power must be taken away from those who would abuse it."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "You will become the greatest wizard the world has seen in generations."
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Eccentricity",
                        "entries": [
                            "Endless hours of solitary study and research can have a negative effect on anyone's social skills. Wizards, who are a breed apart to begin with, are no exception. An odd mannerism or two is not necessarily a drawback, though; an eccentricity of this sort is usually harmless and could provide a source of amusement or serve as a calling card of sorts.",
                            "If your character has an eccentricity, is it a physical tic or a mental one? Are you well known in some circles because of it? Do you fight to overcome it, or do you embrace this minor claim to fame of yours?",
                            {
                                "type": "table",
                                "caption": "Eccentricities",
                                "colLabels": [
                                    "{@dice d6}",
                                    "Eccentricity"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 1
                                            }
                                        },
                                        "You have the habit of tapping your foot incessantly, which often annoys those around you."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 2
                                            }
                                        },
                                        "Your memory is quite good, but you have no trouble pretending to be absentminded when it suits your purposes."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 3
                                            }
                                        },
                                        "You never enter a room without looking to see what's hanging from the ceiling."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 4
                                            }
                                        },
                                        "Your most prized possession is a dead worm that you keep inside a potion vial."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 5
                                            }
                                        },
                                        "When you want people to leave you alone, you start talking to yourself. That usually does the trick."
                                    ],
                                    [
                                        {
                                            "type": "cell",
                                            "roll": {
                                                "exact": 6
                                            }
                                        },
                                        "Your fashion sense and grooming, or more accurately lack thereof, sometimes cause others to assume you are a beggar."
                                    ]
                                ]
                            }
                        ]
                    }
                ],
                "page": 58,
                "source": "XGE"
            }
        ]
    }
]
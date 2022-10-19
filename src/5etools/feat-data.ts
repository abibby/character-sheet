export default [
    {
        "name": "Aberrant Dragonmark",
        "source": "ERLW",
        "page": 52,
        "otherSources": [
            {
                "source": "UAWGE",
                "page": 112
            }
        ],
        "prerequisite": [
            {
                "other": "No other dragonmark"
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "additionalSpells": [
            {
                "ability": "con",
                "innate": {
                    "_": {
                        "rest": {
                            "1": [
                                {
                                    "choose": "level=1|class=Sorcerer"
                                }
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Sorcerer"
                        }
                    ]
                }
            }
        ],
        "entries": [
            "You have manifested an aberrant dragonmark. Determine its appearance and the flaw associated with it. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn a {@filter cantrip of your choice from the sorcerer spell list|spells|level=0|class=Sorcerer}. In addition, choose a {@filter 1st-level spell from the sorcerer spell list|spells|level=1|class=Sorcerer}. You learn that spell and can cast it through your mark. Once you cast it, you must finish a short or long rest before you can cast it again through the mark. Constitution is your spellcasting ability for these spells.",
                    "When you cast the 1st-level spell through your mark, you can expend one of your Hit Dice and roll it. If you roll an even number, you gain a number of temporary hit points equal to the number rolled. If you roll an odd number, one random creature within 30 feet of you (not including you) takes force damage equal to the number rolled. If no other creatures are in range, you take the damage."
                ]
            },
            "You also develop a random flaw from the Aberrant Dragonmark Flaws table.",
            {
                "type": "table",
                "caption": "Aberrant Dragonmark Flaws",
                "colLabels": [
                    "d8",
                    "Flaw"
                ],
                "colStyles": [
                    "col-2 text-center",
                    "col-10"
                ],
                "rows": [
                    [
                        "1",
                        "Your mark is a source of constant physical pain."
                    ],
                    [
                        "2",
                        "Your mark whispers to you. Its meaning can be unclear."
                    ],
                    [
                        "3",
                        "When you're stressed, the mark hisses audibly."
                    ],
                    [
                        "4",
                        "The skin around the mark is burned, scaly, or withered."
                    ],
                    [
                        "5",
                        "Animals are uneasy around you."
                    ],
                    [
                        "6",
                        "You have a mood swing any time you use your mark."
                    ],
                    [
                        "7",
                        "Your looks change slightly whenever you use the mark."
                    ],
                    [
                        "8",
                        "You have horrific nightmares after you use your mark."
                    ]
                ]
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "entries",
                        "entries": [
                            {
                                "type": "entries",
                                "name": "Option: Greater Aberrant Powers",
                                "entries": [
                                    "At the DM's option, a character who has the Aberrant Dragonmark feat has a chance of manifesting greater power. Upon reaching 10th level, such a character has a {@chance 10|10 percent} chance of gaining an {@filter epic boon|rewards|type=boon} from among the options in chapter 7 of the {@book Dungeon Master's Guide|DMG}. If the character fails to gain a boon, they have a {@chance 10|10 percent} chance the next time they gain a level.",
                                    "If the character gains a boon, the DM chooses it or determines it randomly. The character also permanently loses one of their Hit Dice, and their hit point maximum is reduced by an amount equal to a roll of that die plus their Constitution modifier (minimum reduction of 1). This reduction can't be reversed by any means."
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Acrobat",
        "source": "UAFeatsForSkills",
        "page": 1,
        "ability": [
            {
                "dex": 1
            }
        ],
        "skillProficiencies": [
            {
                "acrobatics": true
            }
        ],
        "entries": [
            "You become more nimble, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Acrobatics} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "As a bonus action, you can make a DC 15 Dexterity ({@skill Acrobatics}) check. If you succeed, {@quickref difficult terrain||3} doesn't cost you extra movement until the end of the current turn."
                ]
            }
        ]
    },
    {
        "name": "Actor",
        "source": "PHB",
        "page": 165,
        "ability": [
            {
                "cha": 1
            }
        ],
        "entries": [
            "Skilled at mimicry and dramatics, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on Charisma ({@skill Deception}) and Charisma ({@skill Performance}) checks when trying to pass yourself off as a different person.",
                    "You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom ({@skill Insight}) check contested by your Charisma ({@skill Deception}) check allows a listener to determine that the effect is faked."
                ]
            }
        ]
    },
    {
        "name": "Adept of the Black Robes",
        "source": "UA2022HeroesOfKrynn",
        "page": 5,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "initiate of high sorcery|ua2022heroesofkrynn"
                ],
                "alignment": [
                    "L",
                    "NX",
                    "C",
                    "NY",
                    "E"
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=2|school=V;N"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "Your ambition and loyalty to the Order of the Black Robes has been recognized, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Ambitious Magic",
                        "entries": [
                            "You learn one 2nd-level spell of your choice. The {@filter 2nd-level spell|spells|level=2|school=V;N} must be from the evocation or necromancy school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the {@feat Initiate of High Sorcery|UA2022HeroesOfKrynn} feat."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Life Channel",
                        "entries": [
                            "You can channel your lifeforce into the power of your magic. When a creature you can see within 60 feet of you fails on a saving throw against a spell you cast, you can expend a number of Hit Dice equal to the level of the spell. Roll a number of Hit Die equal to half the number of Hit Dice expended (rounded up) and the damage the triggering creature takes increases by an amount equal to the total rolled of those dice."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Adept of the Black Robes",
        "source": "UA2022HeroesOfKrynnRevisited",
        "page": 4,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "initiate of high sorcery|ua2022heroesofkrynnrevisited"
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=2|school=E;N"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You chose the moon Nuitari to influence your magic, and your ambition and loyalty to the Order of the Black Robes has been recognized, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Ambitious Magic",
                        "entries": [
                            "You learn one 2nd-level spell of your choice. The {@filter 2nd-level spell|spells|level=2|school=E;N} must be from the enchantment or necromancy school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the {@feat Initiate of High Sorcery|UA2022HeroesOfKrynnRevisited} feat."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Life Channel",
                        "entries": [
                            "You can channel your lifeforce into the power of your magic. When a creature you can see within 60 feet of you fails a saving throw against a spell that deals damage that you cast, you can expend a number of Hit Dice equal to the level of the spell. Roll the expended Hit Dice and add them together. The damage that the creature takes increases by an amount equal to that total."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Adept of the Red Robes",
        "source": "UA2022HeroesOfKrynn",
        "page": 5,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "initiate of high sorcery|ua2022heroesofkrynn"
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=2|school=D;T"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "Your pursuit of truth and dedication to maintaining the balance between all things has been recognized by the Order of the Red Robes, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Insightful Magic",
                        "entries": [
                            "You learn one 2nd-level spell of your choice. The {@filter 2nd-level spell|spells|level=2|school=D;T} must be from the divination or transmutation school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the {@feat Initiate of High Sorcery|UA2022HeroesOfKrynn} feat."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Magical Balance",
                        "entries": [
                            "When you make an attack roll, an ability check, or a saving throw, and roll a 9 or lower on the {@dice d20}, you can use your reaction to balance fate and treat the roll as a 10. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Adept of the Red Robes",
        "source": "UA2022HeroesOfKrynnRevisited",
        "page": 4,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "initiate of high sorcery|ua2022heroesofkrynnrevisited"
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=2|school=I;T"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You chose the moon Lunitari to influence your magic, and your dedication to maintaining the balance between all things has been recognized by the Order of the Red Robes, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Insightful Magic",
                        "entries": [
                            "You learn one 2nd-level spell of your choice. The {@filter 2nd-level spell|spells|level=2|school=I;T} must be from the illusion or transmutation school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the {@feat Initiate of High Sorcery|UA2022HeroesOfKrynnRevisited} feat."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Magical Balance",
                        "entries": [
                            "When you make an attack roll or an ability check and roll a 9 or lower on the {@dice d20}, you can balance fate and treat the roll as a 10. You can balance fate in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Adept of the White Robes",
        "source": "UA2022HeroesOfKrynn",
        "page": 5,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "initiate of high sorcery|ua2022heroesofkrynn"
                ],
                "alignment": [
                    "L",
                    "NX",
                    "C",
                    "NY",
                    "G"
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=2|school=A;C"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "Your oath to use magic to make the world a better place has been recognized by the Order of the White Robes, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Protective Magic",
                        "entries": [
                            "You learn one 2nd-level spell of your choice. The {@filter 2nd-level spell|spells|level=2|school=A;C} must be from the abjuration or conjuration school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the {@feat Initiate of High Sorcery|UA2022HeroesOfKrynn} feat."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Protective Ward",
                        "entries": [
                            "When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to expend a spell slot and weave protective magic around the target. Roll a number of d4s equal to the level of the spell slot expended and reduce the damage the target takes by the total rolled on those dice + your spellcasting ability modifier."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Adept of the White Robes",
        "source": "UA2022HeroesOfKrynnRevisited",
        "page": 4,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "initiate of high sorcery|ua2022heroesofkrynnrevisited"
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=2|school=A;D"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You chose the moon Solinari to influence your magic, and your oath to use magic to make the world a better place has been recognized by the Order of the White Robes, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Protective Magic",
                        "entries": [
                            "You learn one 2nd-level spell of your choice. The {@filter 2nd-level spell|spells|level=2|school=A;D} must be from the abjuration or divination school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the {@feat Initiate of High Sorcery|UA2022HeroesOfKrynnRevisited} feat."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Protective Ward",
                        "entries": [
                            "When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to expend a spell slot and weave protective magic around the target. Roll a number of d6s equal to the level of the spell slot expended and reduce the damage the target takes by the total rolled on those dice + your spellcasting ability modifier."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Agent Of Order",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 6,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "scion of the outer planes|ua2022wondersofthemultiverse|scion of the outer planes (lawful outer plane)"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You can channel cosmic forces of order that lock the multiverse into patterns. Your actions are your own to choose, but these forces grant you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Stasis Strike",
                        "entries": [
                            "Once per turn when you damage a creature you can see within 60 feet of yourself, you can deal an extra {@damage 1d8} force damage to the target, and it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + the modifier of the ability score increased by this feat) or be {@condition restrained} by spectral bindings until the start of your next turn. These bindings manifest as chains, gears, encasing stone, or some other symbol of stasis. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Alchemist",
        "source": "UAFeats",
        "page": 4,
        "ability": [
            {
                "int": 1
            }
        ],
        "toolProficiencies": [
            {
                "alchemist's supplies": true
            }
        ],
        "entries": [
            "You have studied the secrets of alchemy and are an expert in its practice, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with {@item alchemist's supplies|phb}. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.",
                    "As an action, you can identify one potion within 5 feet of you, as if you had tasted it. You must see the liquid for this benefit to work.",
                    "Over the course of any short rest, you can temporarily improve the potency of one {@item potion of healing} of any rarity. To use this benefit, you must have {@item alchemist's supplies|phb} with you, and the potion must be within reach. If the potion is drunk no more than 1 hour after the short rest ends, the creature drinking the potion can forgo the potion's die roll and regains the maximum number of hit points that the potion can restore."
                ]
            }
        ]
    },
    {
        "name": "Alert",
        "source": "PHB",
        "page": 165,
        "entries": [
            "Always on the lookout for danger, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain a +5 bonus to initiative.",
                    "You can't be {@quickref Surprise|PHB|3|0|surprised} while you are conscious.",
                    "Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you."
                ]
            }
        ]
    },
    {
        "name": "Animal Handler",
        "source": "UAFeatsForSkills",
        "page": 1,
        "ability": [
            {
                "wis": 1
            }
        ],
        "skillProficiencies": [
            {
                "animal handling": true
            }
        ],
        "entries": [
            "You master the techniques needed to train and handle animals. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Animal Handling} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You can use a bonus action on your turn to command one friendly beast within 60 feet of you that can hear you and that isn't currently following the command of someone else. You decide now what action the beast will take and where it will move during its next turn, or you issue a general command that lasts for 1 minute, such as to guard a particular area."
                ]
            }
        ]
    },
    {
        "name": "Arcanist",
        "source": "UAFeatsForSkills",
        "page": 1,
        "ability": [
            {
                "int": 1
            }
        ],
        "skillProficiencies": [
            {
                "arcana": true
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "detect magic"
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        "prestidigitation#c"
                    ]
                }
            }
        ],
        "entries": [
            "You study the arcane arts, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Arcana} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell prestidigitation} and {@spell detect magic} spells. You can cast {@spell detect magic} once without expending a spell slot, and you regain the ability to do so when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Artificer Initiate",
        "source": "TCE",
        "page": 79,
        "toolProficiencies": [
            {
                "anyArtisansTool": true
            }
        ],
        "additionalSpells": [
            {
                "ability": "int",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Artificer"
                                }
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Artificer"
                        }
                    ]
                }
            }
        ],
        "entries": [
            "You've learned some of an artificer's inventiveness:",
            {
                "type": "list",
                "items": [
                    "You learn one cantrip of your choice from the {@filter artificer spell list|spells|level=0;1|class=artificer}, and you learn one 1st-level spell of your choice from {@filter that list|spells|level=0;1|class=artificer}. Intelligence is your spellcasting ability for these spells.",
                    "You can cast this feat's 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.",
                    "You gain proficiency with one type of {@filter artisan's tools|items|type=artisan's tools} of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability."
                ]
            }
        ]
    },
    {
        "name": "Artificer Initiate",
        "source": "UA2020Feats",
        "page": 1,
        "toolProficiencies": [
            {
                "anyArtisansTool": true
            }
        ],
        "additionalSpells": [
            {
                "ability": "int",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Artificer"
                                }
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Artificer"
                        }
                    ]
                }
            }
        ],
        "entries": [
            "You've learned some of an artificer's inventiveness, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn one cantrip of your choice from the {@filter artificer spell list|spells|level=0;1|class=artificer}, and you learn one 1st-level spell of your choice from {@filter that list|spells|level=0;1|class=artificer}. Intelligence is your spellcasting ability for these spells. Whenever you gain a level, you can replace one of these spells with another spell of the same level from the artificer spell list.",
                    "You can cast this feat's 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.",
                    "You gain proficiency with one type of {@filter artisan's tools|items|type=artisan's tools} of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability"
                ]
            }
        ]
    },
    {
        "name": "Athlete",
        "source": "PHB",
        "page": 165,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have undergone extensive physical training to gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you are {@condition prone}, standing up uses only 5 feet of your movement.",
                    "Climbing doesn't cost you extra movement.",
                    "You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."
                ]
            }
        ]
    },
    {
        "name": "Baleful Scion",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 6,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "scion of the outer planes|ua2022wondersofthemultiverse|scion of the outer planes (evil outer plane)"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You can channel cosmic forces of evil that cause pain but invigorate your being. You can choose your own actions despite this malign connection. You gain the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Life-Draining Grasp",
                        "entries": [
                            "Once per turn, when you hit a creature with a melee weapon attack, you can also deal necrotic damage to it. The damage equals {@dice 1d6} + your proficiency bonus, and you regain a number of hit points equal to this necrotic damage dealt. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Barbed Hide",
        "source": "UAFeatsForRaces",
        "page": 1,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "skillProficiencies": [
            {
                "intimidation": true
            }
        ],
        "entries": [
            "One of your ancestors was a barbed devil or other spiky fiend. Barbs protrude from your head. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "As a bonus action, you can cause small barbs to protrude all over your body or cause them to retract. At the start of each of your turns while the barbs are out, you deal {@damage 1d6} piercing damage to any creature grappling you or any creature {@condition grappled} by you.",
                    "You gain proficiency in the {@skill Intimidation} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it."
                ]
            }
        ]
    },
    {
        "name": "Blade Mastery",
        "source": "UAFeats",
        "page": 2,
        "entries": [
            "You master the {@item shortsword|phb}, {@item longsword|phb}, {@item scimitar|phb}, {@item rapier|phb}, and {@item greatsword|phb}. You gain the following benefits when using any of them:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to attack rolls you make with the weapon.",
                    "On your turn, you can use your reaction to assume a parrying stance, provided you have the weapon in hand. Doing so grants you a +1 bonus to your AC until the start of your next turn or until you're not holding the weapon.",
                    "When you make an opportunity attack with the weapon, you have advantage on the attack roll."
                ]
            }
        ]
    },
    {
        "name": "Bountiful Luck",
        "source": "UAFeatsForRaces",
        "page": 1,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "entries": [
            "Whenever an ally you can see within 30 feet of you rolls a 1 on the {@dice d20} for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll."
        ]
    },
    {
        "name": "Bountiful Luck",
        "source": "XGE",
        "page": 73,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "entries": [
            "Your people have extraordinary luck, which you have learned to mystically lend to your companions when you see them falter. You're not sure how you do it; you just wish it, and it happens. Surely a sign of fortune's favor!",
            "When an ally you can see within 30 feet of you rolls a 1 on the {@dice d20} for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll.",
            "When you use this ability, you can't use your Lucky racial trait before the end of your next turn."
        ]
    },
    {
        "name": "Brawny",
        "source": "UAFeatsForSkills",
        "page": 1,
        "ability": [
            {
                "str": 1
            }
        ],
        "skillProficiencies": [
            {
                "athletics": true
            }
        ],
        "entries": [
            "You become stronger, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Athletics} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You count as if you were one size larger for the purpose of determining your carrying capacity."
                ]
            }
        ]
    },
    {
        "name": "Burglar",
        "source": "UAFeats",
        "page": 4,
        "ability": [
            {
                "dex": 1
            }
        ],
        "toolProficiencies": [
            {
                "thieves' tools": true
            }
        ],
        "entries": [
            "You pride yourself on your quickness and your close study of certain clandestine activities. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with {@item thieves' tools|phb}. If you are already proficient with them, you add double your proficiency bonus to checks you make with them."
                ]
            }
        ]
    },
    {
        "name": "Cartomancer",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 6,
        "prerequisite": [
            {
                "level": {
                    "level": 4
                },
                "other": "Sorcerer, Warlock, or Wizard Class"
            }
        ],
        "additionalSpells": [
            {
                "known": {
                    "_": [
                        "prestidigitation#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have learned to channel your magic through a deck of playing cards, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Card Focus",
                        "entries": [
                            "You can use a deck of cards as your spellcasting focus. When you use the deck as a focus to cast a spell that deals damage, roll a {@dice d4}. You gain a bonus to one damage roll of the spell equal to the number rolled. This bonus applies to one creature of your choice that you can see damaged by the spell; you can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Card Tricks",
                        "entries": [
                            "You learn the {@spell prestidigitation} cantrip and can use it to create illusions that duplicate the effects of stage magic. When you use prestidigitation in this way, you can conceal the verbal and somatic components of the spell as mundane conversation and card-handling."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Hidden Ace",
                        "entries": [
                            "When you finish a long rest, you can choose one spell you know and imbue it into a card; the chosen spell must have a casting time of 1 action, and its level must be less than or equal to your proficiency bonus. While the card is imbued with the spell, you can use your bonus action to flourish the card and cast the spell within. The card then immediately loses its magic."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Charger",
        "source": "PHB",
        "page": 165,
        "entries": [
            "When you use your action to {@action Dash}, you can use a bonus action to make one melee weapon attack or to {@action shove} a creature.",
            "If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
        ]
    },
    {
        "name": "Chef",
        "source": "TCE",
        "page": 79,
        "ability": [
            {
                "choose": {
                    "from": [
                        "con",
                        "wis"
                    ],
                    "amount": 1
                }
            }
        ],
        "toolProficiencies": [
            {
                "cook's utensils": true
            }
        ],
        "entries": [
            "Time spent mastering the culinary arts has paid off, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with {@item cook's utensils|phb} if you don't already have it.",
                    "As part of a short rest, you can cook special food, provided you have ingredients and {@item cook's utensils|phb} on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra {@dice 1d8} hit points.",
                    "With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus."
                ]
            }
        ]
    },
    {
        "name": "Chef",
        "source": "UA2020Feats",
        "page": 1,
        "ability": [
            {
                "choose": {
                    "from": [
                        "con",
                        "wis"
                    ],
                    "amount": 1
                }
            }
        ],
        "toolProficiencies": [
            {
                "cook's utensils": true
            }
        ],
        "entries": [
            "Time and effort spent mastering the culinary arts has paid off. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with {@item cook's utensils|phb} if you don't already have it.",
                    "As part of a short rest, you can cook special food, provided you have ingredients and {@item cook's utensils|phb} on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra {@dice 1d8} hit points.",
                    "With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus."
                ]
            }
        ]
    },
    {
        "name": "Cohort Of Chaos",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 6,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "scion of the outer planes|ua2022wondersofthemultiverse|scion of the outer planes (chaotic outer plane)"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You can channel the cosmic forces of chaos that drive the multiverse toward both freedom and disarray. Your actions are still yours to choose, but you gain these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Chaotic Flare",
                        "entries": [
                            "When you roll a 1 or a 20 on an attack roll or a saving throw, the magic of chaos flows through you. Roll on the Chaotic Flares table to determine what happens. A flare lasts until the end of your next turn, and a new flare can't occur until after the first flare ends.",
                            {
                                "type": "table",
                                "caption": "Chaotic Flares",
                                "colLabels": [
                                    "d4",
                                    "Flare"
                                ],
                                "colStyles": [
                                    "col-1 text-center",
                                    "col-11"
                                ],
                                "rows": [
                                    [
                                        "1",
                                        "{@b Disruption Field.} Waves of energy ripple in a 10-foot sphere centered on you. Every creature other than you that starts its turn in that area, or that moves into that area for the first time on a turn, takes {@dice 1d8} force damage."
                                    ],
                                    [
                                        "2",
                                        "{@b Battle Fury.} A creature of your choice that you can see is filled with reckless fury. The creature has advantage on attack rolls and disadvantage on ability checks."
                                    ],
                                    [
                                        "3",
                                        "{@b Unbound.} When you move, you can use some or all of your walking speed to teleport once, along with any equipment you're wearing or carrying, up to the distance used to an unoccupied space that you can see."
                                    ],
                                    [
                                        "4",
                                        "{@b Wailing Winds.} Howling winds swirl around you in a 60-foot radius. You and any creature in that radius has disadvantage on Wisdom saving throws."
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            },
            "You can also forcibly release a chaotic flare as a bonus action, rolling on the table as normal to determine the effects. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
        ]
    },
    {
        "name": "Critter Friend",
        "source": "UAFeatsForRaces",
        "page": 1,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome",
                        "subrace": "forest"
                    }
                ]
            }
        ],
        "skillProficiencies": [
            {
                "animal handling": true
            }
        ],
        "additionalSpells": [
            {
                "ability": "int",
                "innate": {
                    "_": {
                        "will": [
                            "speak with animals"
                        ],
                        "daily": {
                            "1": [
                                "animal friendship"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "Your friendship with animals mystically deepens. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Animal Handling} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell speak with animals} spell and can cast it at will, without expending a spell slot. You also learn the {@spell animal friendship} spell, and you can cast it once with this feat, without expending a spell slot. You regain the ability to cast it in this way when you finish a long rest. Intelligence is your spellcasting ability for these spells."
                ]
            }
        ]
    },
    {
        "name": "Crossbow Expert",
        "source": "PHB",
        "page": 165,
        "entries": [
            "Thanks to extensive practice with the crossbow, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You ignore the loading quality of crossbows with which you are proficient.",
                    "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
                    "When you use the {@action Attack} action and attack with a one-handed weapon, you can use a bonus action to attack with a {@item hand crossbow|phb} you are holding."
                ]
            }
        ]
    },
    {
        "name": "Crusher",
        "source": "TCE",
        "page": 79,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are practiced in the art of crushing your enemies, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.",
                    "When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the start of your next turn."
                ]
            }
        ]
    },
    {
        "name": "Crusher",
        "source": "UA2020Feats",
        "page": 1,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are practiced in the art of crushing your enemies, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.",
                    "When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the end of your next turn."
                ]
            }
        ]
    },
    {
        "name": "Defensive Duelist",
        "source": "PHB",
        "page": 165,
        "prerequisite": [
            {
                "ability": [
                    {
                        "dex": 13
                    }
                ]
            }
        ],
        "entries": [
            "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
        ]
    },
    {
        "name": "Diplomat",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "cha": 1
            }
        ],
        "skillProficiencies": [
            {
                "persuasion": true
            }
        ],
        "entries": [
            "You master the arts of diplomacy, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Persuasion} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "If you spend 1 minute talking to someone who can understand what you say, you can make a Charisma ({@skill Persuasion}) check contested by the creature's Wisdom ({@skill Insight}) check. If you or your companions are fighting the creature, your check automatically fails. If your check succeeds, the target is {@condition charmed} by you as long as it remains within 60 feet of you and for 1 minute thereafter."
                ]
            }
        ]
    },
    {
        "name": "Divine Communications",
        "source": "UA2022HeroesOfKrynn",
        "page": 5,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "divinely favored|ua2022heroesofkrynn"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                },
                "hidden": true
            }
        ],
        "languageProficiencies": [
            {
                "celestial": true,
                "any": 2
            }
        ],
        "entries": [
            "Your connection to your god deepens, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Ability Score Increase",
                        "entries": [
                            "Increase the ability score of the spellcasting ability chosen when you gained the Divinely Favored feat by 1, to a maximum of 20."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Celestial Tongues",
                        "entries": [
                            "You learn to speak, read, and write Celestial, and two other languages of your choice."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Divine Omens",
                        "entries": [
                            "You can cast the {@spell augury} and {@spell commune} spell without a spell slot, and you must finish {@dice 1d4} long rests before you can cast it in this way again. You can also cast the spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the Divinely Favored feat."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Divinely Favored",
        "source": "UA2022HeroesOfKrynn",
        "page": 5,
        "additionalSpells": [
            {
                "name": "Evil",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "thaumaturgy#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=1|class=wizard;warlock"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Good",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "thaumaturgy#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=1|class=wizard;cleric"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Neutral",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "thaumaturgy#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=1|class=wizard;druid"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "A god has chosen you to carry a spark of their divine power.",
            "You learn the {@spell thaumaturgy} cantrip and one 1st-level spell based on the alignment of your character, as specified in the Alignment Spells table.",
            "You can cast the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.",
            "Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
            {
                "type": "table",
                "caption": "Alignment Spells",
                "colLabels": [
                    "Alignment",
                    "1st-level Spell"
                ],
                "colStyles": [
                    "col-2",
                    "col-10"
                ],
                "rows": [
                    [
                        "Evil",
                        "Choose one {@filter 1st-level warlock or wizard spell|spells|level=1|class=wizard;warlock}."
                    ],
                    [
                        "Good",
                        "Choose one {@filter 1st-level cleric or wizard spell|spells|level=1|class=wizard;cleric}."
                    ],
                    [
                        "Neutral",
                        "Choose one {@filter 1st-level druid or wizard spell|spells|level=1|class=wizard;druid}."
                    ]
                ]
            },
            "In addition, you can use a holy symbol as a spellcasting focus for any spell you cast that uses the spellcasting ability you choose when you select this feat."
        ]
    },
    {
        "name": "Divinely Favored",
        "source": "UA2022HeroesOfKrynnRevisited",
        "page": 4,
        "additionalSpells": [
            {
                "name": "Evil",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Cleric",
                            "count": 1
                        }
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "augury",
                                {
                                    "choose": "level=1|class=warlock"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Good",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Cleric",
                            "count": 1
                        }
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "augury",
                                {
                                    "choose": "level=1|class=cleric"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Neutral",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Cleric",
                            "count": 1
                        }
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "augury",
                                {
                                    "choose": "level=1|class=druid"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "A god has chosen you to carry a spark of their divine power.",
            "You learn one cantrip of your choice from the cleric spell list and one 1st-level spell based on the alignment of your character, as specified in the Alignment Spells table below. You also learn the {@spell augury} spell.",
            "You can cast the chosen 1st-level spell and the {@spell augury} spell without a spell slot, and you must finish a long rest before you can cast either of these spells in this way again. You can also cast these spells using spell slots you have of the appropriate level.",
            "Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
            {
                "type": "table",
                "caption": "Alignment Spells",
                "colLabels": [
                    "Alignment",
                    "1st-level Spell"
                ],
                "colStyles": [
                    "col-2",
                    "col-10"
                ],
                "rows": [
                    [
                        "Evil",
                        "Choose one {@filter 1st-level warlock spell|spells|level=1|class=warlock}."
                    ],
                    [
                        "Good",
                        "Choose one {@filter 1st-level cleric spell|spells|level=1|class=cleric}."
                    ],
                    [
                        "Neutral",
                        "Choose one {@filter 1st-level druid spell|spells|level=1|class=druid}."
                    ]
                ]
            },
            "In addition, you can use a holy symbol as a spellcasting focus for any spell you cast that uses the spellcasting ability you choose when you select this feat."
        ]
    },
    {
        "name": "Dragon Fear",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "When angered, you radiate menace. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Instead of exhaling destructive energy, you can roar and expend a use of your breath weapon to force each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds if it can't hear or see you. On a failed save, a target becomes {@condition frightened} for 1 minute. If the {@condition frightened} target takes any damage, it can repeat the saving throw, ending the effect on itself on a success."
                ]
            }
        ]
    },
    {
        "name": "Dragon Fear",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "When angered, you radiate menace. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Instead of exhaling destructive energy, you can expend a use of your Breath Weapon trait to roar, forcing each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds on the save if it can't hear or see you. On a failed save, a target becomes {@condition frightened} of you for 1 minute. If the {@condition frightened} target takes any damage, it can repeat the saving throw, ending the effect on itself on a success."
                ]
            }
        ]
    },
    {
        "name": "Dragon Hide",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You inherited the might and majesty of your dragon ancestors. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@dice 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
                    "Your scales harden; you gain a +1 bonus to AC while you aren't wearing armor."
                ]
            }
        ]
    },
    {
        "name": "Dragon Hide",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You manifest scales and claws reminiscent of your draconic ancestors. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.",
                    "You grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@dice 1d4} + your Strength modifier, instead of the normal bludgeoning damage for an unarmed strike."
                ]
            }
        ]
    },
    {
        "name": "Dragon Wings",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "entries": [
            "You sprout draconic wings. With your wings, you have a flying speed of 20 feet if you aren't wearing heavy armor and aren't exceeding your carrying capacity."
        ]
    },
    {
        "name": "Dragonmark of Detection",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "detect thoughts"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "clairvoyance"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "detect magic"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "mage hand#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Detection, the dragonmark of House Medani, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell detect magic}, {@spell mage hand}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell detect thoughts}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell clairvoyance}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Finding",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-orc"
                    },
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "locate object"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "clairvoyance"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "identify"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "mage hand#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Finding, the dragonmark of House Tharashk, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell identify}, {@spell mage hand}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell locate object}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell clairvoyance}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Handling",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "beast sense"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "conjure animals"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "speak with animals"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "druidcraft#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Handling, the dragonmark of House Vadalis, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell druidcraft}, {@spell speak with animals}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell beast sense}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell conjure animals}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Healing",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "lesser restoration"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "revivify"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "cure wounds"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "spare the dying#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Healing, the dragonmark of House Jorasco, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell cure wounds}, {@spell spare the dying}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell lesser restoration}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell revivify}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Hospitality",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "rope trick"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "Leomund's tiny hut"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "unseen servant"
                            ]
                        }
                    }
                },
                "ability": "cha",
                "known": {
                    "_": [
                        "friends#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Hospitality, the dragonmark of House Ghallanda, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Charisma as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell friends}, {@spell unseen servant}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell rope trick}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell Leomund's tiny hut}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Making",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "magic weapon"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "fabricate"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "identify"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "mending#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Making, the dragonmark of House Cannith, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell identify}, {@spell mending}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell magic weapon}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell fabricate}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Passage",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "misty step"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "teleportation circle"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "expeditious retreat"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "light#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Passage, the dragonmark of House Orien, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell expeditious retreat}, {@spell light}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell misty step}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell teleportation circle}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Scribing",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "sending"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "tongues"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "comprehend languages"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "message#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Scribing, the dragonmark of House Sivis, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell comprehend languages}, {@spell message}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell sending}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell tongues}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Sentinel",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "blur"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "protection from energy"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "compelled duel"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "blade ward#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Sentinel, the dragonmark of House Deneith, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell blade ward}, {@spell compelled duel}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell blur}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell protection from energy}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Shadow",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "darkness"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "nondetection"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "dancing lights#c"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "disguise self"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Shadow, the dragonmark of House Phiarlan and House Thuranni, and are a member of one of those houses.",
            "You gain the ability to innately cast spells and cantrips, using Charisma as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell dancing lights}, {@spell disguise self}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell darkness}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell nondetection}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Storm",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "gust of wind"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "sleet storm"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "fog cloud"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "shocking grasp#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Storm, the dragonmark of House Lyrander, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell fog cloud}, {@spell shocking grasp}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell gust of wind}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell sleet storm}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Warding",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "5": {
                        "daily": {
                            "1": [
                                "arcane lock"
                            ]
                        }
                    },
                    "9": {
                        "daily": {
                            "1": [
                                "magic circle"
                            ]
                        }
                    },
                    "_": {
                        "daily": {
                            "1": [
                                "alarm"
                            ]
                        }
                    }
                },
                "ability": "wis",
                "known": {
                    "_": [
                        "resistance#c"
                    ]
                }
            }
        ],
        "entries": [
            "You have the magical mark of Warding, the dragonmark of House Kundarak, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell alarm}, {@spell resistance}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell arcane lock}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell magic circle}"
                ]
            }
        ]
    },
    {
        "name": "Drow High Magic",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "drow"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": "cha",
                "innate": {
                    "_": {
                        "will": [
                            "detect magic"
                        ],
                        "daily": {
                            "1e": [
                                "levitate",
                                "dispel magic"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You learn more of the spells typical for your people. You learn {@spell detect magic} and can cast it at will, without expending a spell slot. You also learn {@spell levitate} and {@spell dispel magic}, each of which you can cast once without expending a spell slot. You regain the ability to cast the spell in this way when you finish a long rest. Charisma is your spellcasting ability for these spells."
        ]
    },
    {
        "name": "Drow High Magic",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "drow"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": "cha",
                "innate": {
                    "_": {
                        "will": [
                            "detect magic"
                        ],
                        "daily": {
                            "1e": [
                                "levitate",
                                "dispel magic"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You learn more of the magic typical of dark elves. You learn the {@spell detect magic} spell and can cast it at will, without expending a spell slot. You also learn {@spell levitate} and {@spell dispel magic}, each of which you can cast once without expending a spell slot. You regain the ability to cast those two spells in this way when you finish a long rest. Charisma is your spellcasting ability for all three spells."
        ]
    },
    {
        "name": "Dual Wielder",
        "source": "PHB",
        "page": 165,
        "entries": [
            "You master fighting with two weapons, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.",
                    "You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren't light.",
                    "You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one."
                ]
            }
        ]
    },
    {
        "name": "Dungeon Delver",
        "source": "PHB",
        "page": 166,
        "entries": [
            "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on Wisdom ({@skill Perception}) and Intelligence ({@skill Investigation}) checks made to detect the presence of secret doors.",
                    "You have advantage on saving throws made to avoid or resist traps.",
                    "You have resistance to the damage dealt by traps.",
                    "Traveling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom ({@skill Perception}) score."
                ]
            }
        ]
    },
    {
        "name": "Durable",
        "source": "PHB",
        "page": 166,
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "Hardy and resilient, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
                ]
            }
        ]
    },
    {
        "name": "Dwarf Resilience",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "You have the blood of dwarf heroes flowing through your veins. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Whenever you take the {@action Dodge} action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1)."
                ]
            }
        ]
    },
    {
        "name": "Dwarven Fortitude",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "You have the blood of dwarf heroes flowing through your veins. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Whenever you take the {@action Dodge} action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1)."
                ]
            }
        ]
    },
    {
        "name": "Eldritch Adept",
        "source": "TCE",
        "page": 79,
        "prerequisite": [
            {
                "spellcasting2020": true
            }
        ],
        "optionalfeatureProgression": [
            {
                "name": "Eldritch Invocations",
                "featureType": [
                    "EI"
                ],
                "progression": {
                    "*": 1
                }
            }
        ],
        "entries": [
            "Studying occult lore, you learn one {@filter Eldritch Invocation|optionalfeatures|Feature Type=EI} option of your choice from the warlock class. Your spellcasting ability for the invocation is Intelligence, Wisdom, or Charisma (choose when you select this feat). If the invocation has a prerequisite of any kind, you can choose that invocation only if you're a warlock who meets the prerequisite.",
            "Whenever you gain a level, you can replace the invocation with another one from the warlock class."
        ]
    },
    {
        "name": "Eldritch Adept",
        "source": "UA2020Feats",
        "page": 1,
        "prerequisite": [
            {
                "spellcasting2020": true
            }
        ],
        "entries": [
            "Studying occult lore, you have unlocked eldritch power within yourself: you learn one {@filter Eldritch Invocation|optionalfeatures|Feature Type=EI} option of your choice from the warlock class. If the invocation has a prerequisite, you can choose that invocation only if you're a warlock and only if you meet the prerequisite.",
            "Whenever you gain a level, you can replace the invocation with another one from the warlock class."
        ]
    },
    {
        "name": "Elemental Adept",
        "source": "PHB",
        "page": 166,
        "prerequisite": [
            {
                "spellcasting": true
            }
        ],
        "entries": [
            "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.",
            "Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.",
            "You can select this feat multiple times. Each time you do so, you must choose a different damage type."
        ]
    },
    {
        "name": "Elemental Touched",
        "source": "UA2022GiantOptions",
        "page": 4,
        "entries": [
            "You've been exposed to the primordial magic of the Elemental Planes, granting you a measure of control over the natural world around you. You learn the either the druidcraft or {@spell thaumaturgy} cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you gain this feat).",
            "Whenever you finish a long rest, you can choose which element you are attuned to: Air, Earth, Fire, or Water. Depending on your choice, you can use a bonus action to cause one of the following effects:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Air",
                        "entries": [
                            "You gain a fly speed equal to your walking speed until the end of your turn. If you are airborne at the end of your turn after using this movement and aren't held aloft by other means, you fall."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Earth",
                        "entries": [
                            "You cause the ground within 30 feet of you to become {@quickref difficult terrain||3} for 1 minute or until you create this effect again. During that time, you can move across ground that is {@quickref difficult terrain||3} without spending extra movement."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Fire",
                        "entries": [
                            "You surround yourself in a cloud of ash and smoke. Until the end of your turn, your movement doesn't provoke opportunity attacks."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Water",
                        "entries": [
                            "You can create a forceful surge of water directed at a creature within 15 feet of you that you can see. The creature must succeed on a Strength saving throw (which it can choose to fail) against a DC equal to 8 + your spellcasting ability modifier + your proficiency bonus or be pushed up to 10 feet away from you. The water vanishes immediately after the creature succeeds or fails."
                        ]
                    }
                ]
            },
            "You can create this effect a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
        ]
    },
    {
        "name": "Elven Accuracy",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf"
                    },
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "dex": 1
            }
        ],
        "entries": [
            "You have uncanny aim. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Whenever you have advantage on an attack roll, you can reroll one of the dice once."
                ]
            }
        ]
    },
    {
        "name": "Elven Accuracy",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf"
                    },
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "The accuracy of elves is legendary, especially that of elf archers and spellcasters. You have uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once."
                ]
            }
        ]
    },
    {
        "name": "Ember of the Fire Giant",
        "source": "UA2022GiantOptions",
        "page": 5,
        "prerequisite": [
            {
                "level": 8
            }
        ],
        "resist": [
            "fire"
        ],
        "entries": [
            "You've manifested the fiery combat emblematic of fire giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Born of Flame",
                        "entries": [
                            "You have resistance to fire damage."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Searing Ignition",
                        "entries": [
                            "When you take the {@action Attack} action on your turn, you can replace one of your attacks with a magical burst of flame. Each creature of your choice within 15 feet of you that can see you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + your Constitution modifier). On a failed save, a creature takes fire damage equal to {@dice 2d6} + your proficiency bonus and is {@condition blinded} until the start of your next turn; on a successful save, the creature takes half as much damage with no additional effects. You can use your Searing Ignition a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Ember Of The Fire Giant",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 7,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "strike of the giants|ua2022wondersofthemultiverse|strike of the giants (fire giant)"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con",
                        "wis"
                    ],
                    "amount": 1
                }
            }
        ],
        "resist": [
            "fire"
        ],
        "entries": [
            "You've manifested the fiery combat emblematic of fire giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Born of Flame",
                        "entries": [
                            "You have resistance to fire damage."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Searing Ignition",
                        "entries": [
                            "When you take the {@action Attack} action on your turn, you can replace a single attack with a magical burst of flame. Each creature of your choice within 15 feet of you that can see you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, a creature takes fire damage equal to {@dice 1d8} + your proficiency bonus, and it is {@condition blinded} until the start of your next turn. On a successful save, the creature takes half as much damage and isn't {@condition blinded}. You can use your Searing Ignition a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Empathic",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "wis": 1
            }
        ],
        "skillProficiencies": [
            {
                "insight": true
            }
        ],
        "entries": [
            "You possess keen insight into how other people think and feel. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Insight} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You can use your action to try to get uncanny insight about one humanoid you can see within 30 feet of you. Make a Wisdom ({@skill Insight}) check contested by the target's Charisma ({@skill Deception}) check. If your check succeeds, you have advantage on attack rolls and ability checks against the target until the end of your next turn."
                ]
            }
        ]
    },
    {
        "name": "Everybody's Friend",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "cha": 1
            }
        ],
        "skillProficiencies": [
            {
                "deception": true,
                "persuasion": true
            }
        ],
        "entries": [
            "You develop your magnetic personality to ease your way through the world. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Deception} and {@skill Persuasion} skills. If you're already proficient in either skill, your proficiency bonus is doubled for any check you make with that skill."
                ]
            }
        ]
    },
    {
        "name": "Fade Away",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome"
                    }
                ]
            }
        ],
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You can draw on your magical heritage to escape danger. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you take damage, you can use a reaction to magically become {@condition invisible} until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can't do so again until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Fade Away",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "int"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Your people are clever, with a knack for illusion magic. You have learned a magical trick for fading away when you suffer harm. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Immediately after you take damage, you can use a reaction to magically become {@condition invisible} until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can't do so again until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Fell Handed",
        "source": "UAFeats",
        "page": 2,
        "entries": [
            "You master the {@item handaxe|phb}, {@item battleaxe|phb}, {@item greataxe|phb}, {@item warhammer|phb}, and {@item maul|phb}. You gain the following benefits when using any of them:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to attack rolls you make with the weapon.",
                    "Whenever you have advantage on a melee attack roll you make with the weapon and hit, you can knock the target {@condition prone} if the lower of the two {@dice d20} rolls would also hit the target.",
                    "Whenever you have disadvantage on a melee attack roll you make with the weapon, the target takes bludgeoning damage equal to your Strength modifier (minimum of 0) if the attack misses but the higher of the two {@dice d20} rolls would have hit.",
                    "If you use the {@action Help} action to aid an ally's melee attack while you're wielding the weapon, you knock the target's shield aside momentarily. In addition to the ally gaining advantage on the attack roll, the ally gains a +2 bonus to the roll if the target is using a shield."
                ]
            }
        ]
    },
    {
        "name": "Fey Teleportation",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "high"
                    }
                ]
            }
        ],
        "ability": [
            {
                "int": 1
            }
        ],
        "additionalSpells": [
            {
                "ability": "int",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "misty step"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "Drawing on your fey ancestry, you have learned how to teleport. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell misty step} spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a short or long rest. Intelligence is your spellcasting ability for this spell."
                ]
            }
        ]
    },
    {
        "name": "Fey Teleportation",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "high"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "languageProficiencies": [
            {
                "sylvan": true
            }
        ],
        "additionalSpells": [
            {
                "ability": "int",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "misty step"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "Your study of high elven lore has unlocked fey power that few other elves possess, except your eladrin cousins. Drawing on your fey ancestry, you can momentarily stride through the Feywild to shorten your path from one place to another. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn to speak, read, and write {@language Sylvan}.",
                    "You learn the {@spell misty step} spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a short or long rest. Intelligence is your spellcasting ability for this spell."
                ]
            }
        ]
    },
    {
        "name": "Fey Touched",
        "source": "TCE",
        "page": 79,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "additionalSpells": [
            {
                "ability": "inherit",
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "misty step",
                                {
                                    "choose": "level=1|school=E;D"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "Your exposure to the Feywild's magic has changed you, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell misty step} spell and one {@filter 1st-level spell|spells|level=1|school=E;D} of your choice. The {@filter 1st-level spell|spells|level=1|school=E;D} must be from the divination or enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat."
                ]
            }
        ]
    },
    {
        "name": "Fey Touched",
        "source": "UA2020Feats",
        "page": 2,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "additionalSpells": [
            {
                "ability": "inherit",
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "misty step",
                                {
                                    "choose": "level=1|school=E;D"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "Your exposure to the Feywild or one of its denizens has left a magical mark on you. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell misty step} spell and one {@filter 1st-level spell|spells|level=1|school=E;D} of your choice. The {@filter 1st-level spell|spells|level=1|school=E;D} must be from the divination or enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat."
                ]
            }
        ]
    },
    {
        "name": "Fighting Initiate",
        "source": "TCE",
        "page": 80,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "weapon": "martial"
                    }
                ]
            }
        ],
        "optionalfeatureProgression": [
            {
                "name": "Fighting Style",
                "featureType": [
                    "FS:F"
                ],
                "progression": {
                    "*": 1
                }
            }
        ],
        "entries": [
            "Your martial training has helped you develop a particular style of fighting. As a result, you learn one {@filter Fighting Style|optionalfeatures|Feature Type=FS:F} option of your choice from the fighter class. If you already have a style, the one you choose must be different.",
            "Whenever you reach a level that grants the Ability Score Improvement feature, you can replace this feat's fighting style with another one from the fighter class that you don't have."
        ]
    },
    {
        "name": "Fighting Initiate",
        "source": "UA2020Feats",
        "page": 2,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "weapon": "martial"
                    }
                ]
            }
        ],
        "entries": [
            "Your martial training has helped you develop a particular style of fighting. As a result, you learn one {@filter Fighting Style|optionalfeatures|Feature Type=FS:F} option of your choice from the fighter class. If you already have a style, the one you choose must be different.",
            "Whenever you gain a level, you can replace this feat's fighting style with another one from the fighter class that you don't have."
        ]
    },
    {
        "name": "Flail Mastery",
        "source": "UAFeats",
        "page": 3,
        "entries": [
            "The {@item flail|phb} is a tricky weapon to use, but you have spent countless hours mastering it. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to attack rolls you make with a flail.",
                    "As a bonus action on your turn, you can prepare yourself to extend your flail to sweep over targets' {@item shield|phb|shields}. Until the end of this turn, your attack rolls with a flail gain a +2 bonus against any target using a {@item shield|phb}.",
                    "When you hit with an opportunity attack using a flail, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked {@condition prone}."
                ]
            }
        ]
    },
    {
        "name": "Flames of Phlegethos",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You learn to call on hellfire to serve your commands. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.",
                    "Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes {@damage 1d4} fire damage."
                ]
            }
        ]
    },
    {
        "name": "Flames of Phlegethos",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You learn to call on hellfire to serve your commands. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.",
                    "Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes {@damage 1d4} fire damage."
                ]
            }
        ]
    },
    {
        "name": "Fury of the Frost Giant",
        "source": "UA2022GiantOptions",
        "page": 4,
        "prerequisite": [
            {
                "level": 4
            }
        ],
        "resist": [
            "cold"
        ],
        "entries": [
            "You've manifested the icy might emblematic of frost giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Born of Ice",
                        "entries": [
                            "You have resistance to cold damage."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Frigid Vengeance",
                        "entries": [
                            "When a creature hits you with an attack roll, you can use your reaction to retaliate with a burst of magical ire. The creature must succeed on a Wisdom saving throw (DC equals 8 + your proficiency bonus + your Constitution modifier) or be {@condition frightened} of you until the start of its next turn. You can use your reaction in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Fury Of The Frost Giant",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 7,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "strike of the giants|ua2022wondersofthemultiverse|strike of the giants (frost giant)"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con",
                        "wis"
                    ],
                    "amount": 1
                }
            }
        ],
        "resist": [
            "cold"
        ],
        "entries": [
            "You've manifested the icy might emblematic of frost giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Born of Ice",
                        "entries": [
                            "You have resistance to cold damage."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Frigid Retaliation",
                        "entries": [
                            "Immediately after a creature you can see within 30 feet of you hits you with an attack roll and deals damage, you can use your reaction to retaliate with a conjured blast of ice. The creature must make a Constitution saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, it takes {@damage 1d8} + your proficiency bonus cold damage, and its speed is halved until the end of its next turn. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Gift of the Chromatic Dragon",
        "source": "FTD",
        "page": 17,
        "entries": [
            "You've manifested some of the power of chromatic dragons, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Chromatic Infusion",
                        "entries": [
                            "As a bonus action, you can touch a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon} and infuse it with one of the following damage types: acid, cold, fire, lightning, or poison. For the next minute, the weapon deals an extra {@damage 1d4} damage of the chosen type when it hits. After you use this bonus action, you can't do so again until you finish a long rest."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Reactive Resistance",
                        "entries": [
                            "When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Gift of the Chromatic Dragon",
        "source": "UA2021DraconicOptions",
        "page": 4,
        "entries": [
            "You've manifested some of the power of chromatic dragons, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "As a bonus action, you can touch a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon} and infuse it with one of the following damage types: acid, cold, fire, lightning, or poison. For the next minute, the weapon deals an extra {@dice 1d4} damage of the chosen type when it hits. After you use this ability, you can't do so again until you finish a long rest.",
                    "When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Gift of the Gem Dragon",
        "source": "FTD",
        "page": 17,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You've manifested some of the power of gem dragons, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Telekinetic Reprisal",
                        "entries": [
                            "When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate telekinetic energy. The creature that dealt damage to you must make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature takes {@damage 2d8} force damage and is pushed up to 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Gift of the Gem Dragon",
        "source": "UA2021DraconicOptions",
        "page": 5,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You've manifested some of the power of gem dragons, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate telekinetic energy. The creature that dealt damage to you must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or take {@dice 2d8} force damage and be pushed 10 feet away from you. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Gift of the Metallic Dragon",
        "source": "FTD",
        "page": 17,
        "additionalSpells": [
            {
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "cure wounds"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You've manifested some of the power of metallic dragons, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Draconic Healing",
                        "entries": [
                            "You learn the {@spell cure wounds} spell. You can cast this spell without expending a spell slot. Once you cast this spell in this way, you can't do so again until you finish a long rest. You can also cast this spell using spell slots you have. The spell's spellcasting ability is Intelligence, Wisdom, or Charisma when you cast it with this feat (choose when you gain the feat)."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Protective Wings",
                        "entries": [
                            "You can manifest protective wings that can shield you or others. When you or another creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to manifest spectral wings from your back for a moment. You grant a bonus to the target's AC equal to your proficiency bonus against that attack roll, potentially causing it to miss. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Gift of the Metallic Dragon",
        "source": "UA2021DraconicOptions",
        "page": 4,
        "additionalSpells": [
            {
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "cure wounds"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You've manifested some of the power of metallic dragons, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell cure wounds} spell. You can cast this spell without expending a spell slot. Once you cast this spell in this way, you can't do so again until you finish a long rest. You can also cast this spell using spell slots you have. The spell's spellcasting ability is Intelligence, Wisdom, or Charisma when you cast it with this feat (choose when you gain this feat).",
                    "You can manifest protective wings that can shield you or others from attacks. When you or another creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to manifest spectral wings from your back for a moment. Roll a {@dice d4} and grant a bonus to the target's AC equal to the number rolled against that attack roll, potentially causing it to miss. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Gourmand",
        "source": "UAFeats",
        "page": 4,
        "ability": [
            {
                "con": 1
            }
        ],
        "toolProficiencies": [
            {
                "cook's utensils": true
            }
        ],
        "entries": [
            "You have mastered a variety of special recipes, allowing you to prepare exotic dishes with useful effects. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with {@item cook's utensils|phb}. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.",
                    "As an action, you can inspect a drink or plate of food within 5 feet of you and determine whether it is {@condition poisoned}, provided that you can see and smell it.",
                    "During a long rest, you can prepare and serve a meal that helps you and your allies recover from the rigors of adventuring, provided you have suitable food, {@item cook's utensils|phb}, and other supplies on hand. The meal serves up to six people, and each person who eats it regains two additional Hit Dice at the end of the long rest. In addition, those who partake of the meal have advantage on Constitution saving throws against disease for the next 24 hours."
                ]
            }
        ]
    },
    {
        "name": "Grappler",
        "source": "PHB",
        "page": 167,
        "srd": true,
        "prerequisite": [
            {
                "ability": [
                    {
                        "str": 13
                    }
                ]
            }
        ],
        "entries": [
            "You've developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on attack rolls against a creature you are grappling.",
                    "You can use your action to try to pin a creature {@condition grappled} by you. To do so, make another grapple check. If you succeed, you and the creature are both {@condition restrained} until the grapple ends."
                ]
            }
        ]
    },
    {
        "name": "Great Weapon Master",
        "source": "PHB",
        "page": 167,
        "entries": [
            "You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.",
                    "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
                ]
            }
        ]
    },
    {
        "name": "Grudge-Bearer",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con",
                        "wis"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have a deep hatred for a particular kind of creature. Choose your foes, a type of creature to bear the burden of your wrath: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoid (such as gnolls and orcs). You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "During the first round of any combat against your chosen foes, your attack rolls against any of them have advantage.",
                    "When any of your chosen foes makes an opportunity attack against you, it makes the attack roll with disadvantage.",
                    "Whenever you make an Intelligence ({@skill Arcana}, {@skill History}, {@skill Nature}, or {@skill Religion}) check to recall information about your chosen foes, you add double your proficiency bonus to the check, even if you're not normally proficient."
                ]
            }
        ]
    },
    {
        "name": "Guile of the Cloud Giant",
        "source": "UA2022GiantOptions",
        "page": 4,
        "prerequisite": [
            {
                "level": 8
            }
        ],
        "entries": [
            "You've manifested the airy speech and magic emblematic of cloud giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Misty Form",
                        "entries": [
                            "You can cast the {@spell blur} spell without using a spell slot or material components. When you cast the spell in this way, the spell doesn't require you to maintain concentration on it. Once you cast the spell in this way, you can't do so again until you finish a long rest. You can also cast this spell in the normal way using spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat)."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Silver Tongue",
                        "entries": [
                            "You gain proficiency in either the {@skill Deception} or {@skill Persuasion} skill. Your proficiency bonus is doubled for any ability check you make using this skill."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Guile Of The Cloud Giant",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 7,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "strike of the giants|ua2022wondersofthemultiverse|strike of the giants (cloud giant)"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You've manifested the airy speech and magic emblematic of cloud giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Cloudy Escape",
                        "entries": [
                            "When a creature you can see hits you with an attack roll, you can use your reaction to give yourself resistance to that attack's damage. You then teleport to an unoccupied space that you can see within 30 feet of yourself. You can use this reaction a number of times equal to half your proficiency bonus (rounded up), and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Gunner",
        "source": "TCE",
        "page": 80,
        "ability": [
            {
                "dex": 1
            }
        ],
        "weaponProficiencies": [
            {
                "firearms": true
            }
        ],
        "entries": [
            "You have a quick hand and keen eye when employing firearms, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with firearms (see \"{@variantrule Firearms|DMG}\" in the Dungeon Master's Guide).",
                    "You ignore the loading property of firearms.",
                    "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls."
                ]
            }
        ]
    },
    {
        "name": "Gunner",
        "source": "UA2020Feats",
        "page": 2,
        "ability": [
            {
                "dex": 1
            }
        ],
        "weaponProficiencies": [
            {
                "firearms": true
            }
        ],
        "entries": [
            "You have a quick hand and keen eye when employing firearms, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with firearms (see \"{@variantrule Firearms|DMG}\" in the Dungeon Master's Guide).",
                    "You ignore the loading property of firearms.",
                    "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls."
                ]
            }
        ]
    },
    {
        "name": "Healer",
        "source": "PHB",
        "page": 167,
        "entries": [
            "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you use a {@item healer's kit|phb} to stabilize a dying creature, that creature also regains 1 hit point.",
                    "As an action, you can spend one use of a {@item healer's kit|phb} to tend to a creature and restore {@dice 1d6 + 4} hit points to it, plus additional hit points equal to the creature's maximum number of Hit Dice. The creature can't regain hit points from this feat again until it finishes a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Heavily Armored",
        "source": "PHB",
        "page": 167,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "armor": "medium"
                    }
                ]
            }
        ],
        "ability": [
            {
                "str": 1
            }
        ],
        "armorProficiencies": [
            {
                "heavy": true
            }
        ],
        "entries": [
            "You have trained to master the use of heavy armor, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with heavy armor."
                ]
            }
        ]
    },
    {
        "name": "Heavy Armor Master",
        "source": "PHB",
        "page": 167,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "armor": "heavy"
                    }
                ]
            }
        ],
        "ability": [
            {
                "str": 1
            }
        ],
        "entries": [
            "You can use your armor to deflect strikes that would kill others. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical attacks is reduced by 3."
                ]
            }
        ]
    },
    {
        "name": "Historian",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "int": 1
            }
        ],
        "skillProficiencies": [
            {
                "history": true
            }
        ],
        "entries": [
            "Your study of history rewards you with the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill History} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "When you take the {@action Help} action to aid another creature's ability check, you can make a DC 15 Intelligence ({@skill History}) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying."
                ]
            }
        ]
    },
    {
        "name": "Human Determination",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are filled with a determination that can draw the unreachable within your reach. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Infernal Constitution",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "Fiendish blood runs strong in you. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have resistance to cold and poison damage.",
                    "You have advantage on saving throws against being {@condition poisoned}."
                ]
            }
        ]
    },
    {
        "name": "Infernal Constitution",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "Fiendish blood runs strong in you, unlocking a resilience akin to that possessed by some fiends. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have resistance to cold and poison damage.",
                    "You have advantage on saving throws against being {@condition poisoned}."
                ]
            }
        ]
    },
    {
        "name": "Initiate of High Sorcery",
        "source": "UA2022HeroesOfKrynn",
        "page": 6,
        "prerequisite": [
            {
                "other": "Apprentice of High Sorcery"
            }
        ],
        "additionalSpells": [
            {
                "name": "Nuitari",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        {
                            "choose": {
                                "from": [
                                    "chill touch#c",
                                    "mage hand#c",
                                    "vicious mockery#c"
                                ]
                            }
                        }
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=1|class=wizard|school=V;N"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Lunitari",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        {
                            "choose": {
                                "from": [
                                    "guidance#c",
                                    "message#c",
                                    "prestidigitation#c"
                                ]
                            }
                        }
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=1|class=wizard|school=D;T"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Solinari",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        {
                            "choose": {
                                "from": [
                                    "produce flame#c",
                                    "resistance#c",
                                    "spare the dying#c"
                                ]
                            }
                        }
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": "level=1|class=wizard|school=A;C"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You've received training from magic-users affiliated with the Mages of High Sorcery. Choose one of the three moons of Krynn, each of which is associated with a distinct type of magic: the black moon, Nuitari; the red moon, Lunitari; or the white moon Solinari. You learn one cantrip and one 1st-level spell based on the moon you choose, as specified in the Lunar Spells table.",
            "You can cast the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.",
            "Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
            {
                "type": "table",
                "caption": "Lunar Spells",
                "colLabels": [
                    "Moon",
                    "Cantrips",
                    "1st-level Spell"
                ],
                "colStyles": [
                    "col-1",
                    "col-5",
                    "col-6"
                ],
                "rows": [
                    [
                        "Nuitari",
                        "Choose one from {@spell chill touch}, {@spell mage hand}, and {@spell vicious mockery}",
                        "Choose one {@filter 1st-level wizard spell from the evocation or necromancy school of magic|spells|level=1|class=wizard|school=V;N}."
                    ],
                    [
                        "Lunitari",
                        "Choose one from {@spell guidance}, {@spell message}, and {@spell prestidigitation}",
                        "Choose one {@filter 1st-level wizard spell from the school of divination or transmutation|spells|level=1|class=wizard|school=D;T}."
                    ],
                    [
                        "Solinari",
                        "Choose one from {@spell produce flame}, {@spell resistance}, and {@spell spare the dying}",
                        "Choose one {@filter 1st-level wizard spell from the abjuration or conjuration school of magic|spells|level=1|class=wizard|school=A;C}."
                    ]
                ]
            }
        ]
    },
    {
        "name": "Initiate of High Sorcery",
        "source": "UA2022HeroesOfKrynnRevisited",
        "page": 4,
        "prerequisite": [
            {
                "level": {
                    "level": 1,
                    "class": {
                        "name": "Sorcerer",
                        "visible": true
                    }
                }
            },
            {
                "level": {
                    "level": 1,
                    "class": {
                        "name": "Wizard",
                        "visible": true
                    }
                }
            },
            {
                "background": [
                    {
                        "name": "Mage of High Sorcery",
                        "displayEntry": "{@background Mage of High Sorcery|UA2022HeroesOfKrynnRevisited}"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "name": "Nuitari",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": {
                                        "from": [
                                            "dissonant whispers",
                                            "false life",
                                            "hex",
                                            "ray of sickness"
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Lunitari",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": {
                                        "from": [
                                            "color spray",
                                            "disguise self",
                                            "feather fall",
                                            "longstrider"
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Solinari",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                {
                                    "choose": {
                                        "from": [
                                            "comprehend languages",
                                            "detect evil and good",
                                            "protection from evil and good",
                                            "shield"
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You've received training from magic-users affiliated with the Mages of High Sorcery.",
            "Choose one of the three moons of Krynn to influence your magic: the black moon, Nuitari; the red moon, Lunitari; or the white moon Solinari. You learn one cantrip of your choice from the wizard spell list and two 1st-level spells based on the moon you choose, as specified in the Lunar Spells table.",
            "You can cast each of the chosen 1st-level spells without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spells using any spell slots you have.",
            "Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
            {
                "type": "table",
                "caption": "Lunar Spells",
                "colLabels": [
                    "Moon",
                    "1st-level Spell"
                ],
                "colStyles": [
                    "col-2",
                    "col-10"
                ],
                "rows": [
                    [
                        "Nuitari",
                        "Choose two from {@spell dissonant whispers}, {@spell false life}, {@spell hex}, and {@spell ray of sickness}."
                    ],
                    [
                        "Lunitari",
                        "Choose two from {@spell color spray}, {@spell disguise self}, {@spell feather fall}, and {@spell longstrider}."
                    ],
                    [
                        "Solinari",
                        "Choose two from {@spell comprehend languages}, {@spell detect evil and good}, {@spell protection from evil and good}, and {@spell shield}."
                    ]
                ]
            }
        ]
    },
    {
        "name": "Inspiring Leader",
        "source": "PHB",
        "page": 167,
        "prerequisite": [
            {
                "ability": [
                    {
                        "cha": 13
                    }
                ]
            }
        ],
        "entries": [
            "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can't gain temporary hit points from this feat again until it has finished a short or long rest."
        ]
    },
    {
        "name": "Investigator",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "int": 1
            }
        ],
        "skillProficiencies": [
            {
                "investigation": true
            }
        ],
        "entries": [
            "You have an eye for detail and can pick out the smallest clues. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Investigation} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You can take the {@action Search} action as a bonus action."
                ]
            }
        ]
    },
    {
        "name": "Keen Mind",
        "source": "PHB",
        "page": 167,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You always know which way is north.",
                    "You always know the number of hours left before the next sunrise or sunset.",
                    "You can accurately recall anything you have seen or heard within the past month."
                ]
            }
        ]
    },
    {
        "name": "Keenness of the Stone Giant",
        "source": "UA2022GiantOptions",
        "page": 5,
        "prerequisite": [
            {
                "level": 4
            }
        ],
        "entries": [
            "You've manifested the protection and spellcasting emblematic of stone giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Dreamer's Magic",
                        "entries": [
                            "You learn the {@spell detect thoughts} spell and one {@filter 1st-level spell|spells|level=1|school=A;D} of your choice. The 1st-level spell must be from the abjuration or the divination school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat)."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Mountain Sight",
                        "entries": [
                            "You gain {@sense darkvision} out to a range of 60 feet. If you already have {@sense darkvision} from another source, its range increases by 30 feet."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Keenness Of The Stone Giant",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 7,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "strike of the giants|ua2022wondersofthemultiverse|strike of the giants (stone giant)"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con",
                        "wis"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You've manifested the physical talents emblematic of stone giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Stone Throw",
                        "entries": [
                            "As a bonus action, you can touch a rock that can fit in the palm of your hand and imbue it with magic. While the rock is imbued with magic and you are wielding it, the rock is a magic ranged weapon with which you're proficient, and it has the thrown property with a normal range of 60 feet and a long range of 180 feet. On a hit, the rock deals {@damage 1d10} bludgeoning damage, and if the target is a creature, it must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat) or be knocked {@condition prone}. The magic remains in the rock until you hit with it or finish a long rest. You can imbue a number of rocks equal to your proficiency bonus with this bonus action, and you regain all expended uses when you finish a long rest."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Cavernous Sight",
                        "entries": [
                            "You gain {@sense darkvision} out to a range of 60 feet. If you already have {@sense darkvision} from another source, its range increases by 60 feet."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Knight of the Crown",
        "source": "UA2022HeroesOfKrynn",
        "page": 6,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "squire of solamnia|ua2022heroesofkrynn"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are a Knight of Solamnia aligned with the Order of the Crown, a group that extols the virtues of cooperation, loyalty, and obedience. You excel in group combat and gain these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Tactical Teamwork",
                        "entries": [
                            "When a creature you can see within 30 feet of you makes an attack roll against another creature that is within 5 feet of you, you can use your reaction to grant advantage on the attack roll. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            },
            {
                "type": "inset",
                "name": "Membership in Multiple Knightly Orders",
                "entries": [
                    "Knights of Solamnia are only ever members of one of their organization's orders. In the course of their training, most knights begin as members of the Knights of the Crown and then move on to join other orders. Whether a character follows this path or another, they retain what they learned as a member of an order even if they join another. Characters can change what knightly order they're a part of, but they always have access to any Knight of Solamnia feats they've acquired."
                ]
            }
        ]
    },
    {
        "name": "Knight of the Crown",
        "source": "UA2022HeroesOfKrynnRevisited",
        "page": 5,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "squire of solamnia|ua2022heroesofkrynnrevisited"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are a Knight of Solamnia aligned with the Order of the Crown, a group that extols the virtues of cooperation, loyalty, and obedience. You excel in group combat and gain these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Crown Maneuvers",
                        "entries": [
                            "You learn the {@optfeature Distracting Strike} or the {@optfeature Goading Attack} maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). If the maneuver requires a saving throw, the save's DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with the other maneuver offered by it."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Superiority Dice",
                        "entries": [
                            "You gain two superiority dice, which you add to the dice you have from the Squire of Solamnia feat. All the dice are now d8s."
                        ]
                    }
                ]
            },
            {
                "type": "inset",
                "name": "Membership in Multiple Knightly Orders",
                "entries": [
                    "Knights of Solamnia are only ever members of one of their organization's orders. In the course of their training, most knights begin as members of the Knights of the Crown and then move on to join other orders. Whether a character follows this path or another, they retain what they learned as a member of an order even if they join another. Characters can change what knightly order they're a part of, but they always have access to any Knight of Solamnia feats they've acquired."
                ]
            }
        ]
    },
    {
        "name": "Knight of the Rose",
        "source": "UA2022HeroesOfKrynn",
        "page": 6,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "squire of solamnia|ua2022heroesofkrynn"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are a Knight of Solamnia aligned with the Order of the Rose, a group known for leadership, justice, and wisdom. Your resolve grants you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Bolstering Rally",
                        "entries": [
                            "When you roll initiative, you can choose up to three other creatures you can see within 30 of you. Each creature can gain temporary hit points equal to a roll of your Hit Die + your proficiency bonus + the ability modifier of the ability score increased by this feat. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            },
            {
                "type": "inset",
                "name": "Membership in Multiple Knightly Orders",
                "entries": [
                    "Knights of Solamnia are only ever members of one of their organization's orders. In the course of their training, most knights begin as members of the Knights of the Crown and then move on to join other orders. Whether a character follows this path or another, they retain what they learned as a member of an order even if they join another. Characters can change what knightly order they're a part of, but they always have access to any Knight of Solamnia feats they've acquired."
                ]
            }
        ]
    },
    {
        "name": "Knight of the Rose",
        "source": "UA2022HeroesOfKrynnRevisited",
        "page": 5,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "squire of solamnia|ua2022heroesofkrynnrevisited"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are a Knight of Solamnia aligned with the Order of the Rose, a group known for leadership, justice, and wisdom. Your resolve grants you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Rose Maneuvers",
                        "entries": [
                            "You learn the {@optfeature Commander's Strike} or {@optfeature Rally} maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with the other maneuver offered by it."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Superiority Dice",
                        "entries": [
                            "You gain two superiority dice, which you add to the dice you have from the Squire of Solamnia feat. All the dice are now d8s."
                        ]
                    }
                ]
            },
            {
                "type": "inset",
                "name": "Membership in Multiple Knightly Orders",
                "entries": [
                    "Knights of Solamnia are only ever members of one of their organization's orders. In the course of their training, most knights begin as members of the Knights of the Crown and then move on to join other orders. Whether a character follows this path or another, they retain what they learned as a member of an order even if they join another. Characters can change what knightly order they're a part of, but they always have access to any Knight of Solamnia feats they've acquired."
                ]
            }
        ]
    },
    {
        "name": "Knight of the Sword",
        "source": "UA2022HeroesOfKrynn",
        "page": 6,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "squire of solamnia|ua2022heroesofkrynn"
                ]
            }
        ],
        "savingThrowProficiencies": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ]
                }
            }
        ],
        "entries": [
            "You are a Knight of Solamnia aligned with the Order of the Sword, a group devoted to heroism and courage. Bravery steels your spirit, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Disciplined Spirit",
                        "entries": [
                            "You gain proficiency in Intelligence, Wisdom, or Charisma saving throws (your choice when you take this feat)."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Willpower",
                        "entries": [
                            "Immediately after you or a creature you can see within 30 feet of you fail an Intelligence, Wisdom, or Charisma saving throw, you can expend a Hit Die. The saving throw increases by an amount equal to a roll of that Hit Die, potentially turning a failure into a success. Once you turn a failed saving throw into a successful one using this feat, you can't do so again until you finish a long rest."
                        ]
                    }
                ]
            },
            {
                "type": "inset",
                "name": "Membership in Multiple Knightly Orders",
                "entries": [
                    "Knights of Solamnia are only ever members of one of their organization's orders. In the course of their training, most knights begin as members of the Knights of the Crown and then move on to join other orders. Whether a character follows this path or another, they retain what they learned as a member of an order even if they join another. Characters can change what knightly order they're a part of, but they always have access to any Knight of Solamnia feats they've acquired."
                ]
            }
        ]
    },
    {
        "name": "Knight of the Sword",
        "source": "UA2022HeroesOfKrynnRevisited",
        "page": 5,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "squire of solamnia|ua2022heroesofkrynnrevisited"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "savingThrowProficiencies": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ]
                }
            }
        ],
        "entries": [
            "You are a Knight of Solamnia aligned with the Order of the Sword, a group devoted to heroism and courage. Bravery steels your spirit, granting you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Sword Maneuvers",
                        "entries": [
                            "You learn the {@optfeature Maneuvering Attack} or the {@optfeature Menacing Attack} maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). If the maneuver requires a saving throw, the save's DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with the other maneuver offered by it."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Superiority Dice",
                        "entries": [
                            "You gain two superiority dice, which you add to the dice you have from the Squire of Solamnia feat. All the dice are now d8s."
                        ]
                    }
                ]
            },
            {
                "type": "inset",
                "name": "Membership in Multiple Knightly Orders",
                "entries": [
                    "Knights of Solamnia are only ever members of one of their organization's orders. In the course of their training, most knights begin as members of the Knights of the Crown and then move on to join other orders. Whether a character follows this path or another, they retain what they learned as a member of an order even if they join another. Characters can change what knightly order they're a part of, but they always have access to any Knight of Solamnia feats they've acquired."
                ]
            }
        ]
    },
    {
        "name": "Lightly Armored",
        "source": "PHB",
        "page": 167,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "armorProficiencies": [
            {
                "light": true
            }
        ],
        "entries": [
            "You have trained to master the use of light armor, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with light armor."
                ]
            }
        ]
    },
    {
        "name": "Linguist",
        "source": "PHB",
        "page": 167,
        "ability": [
            {
                "int": 1
            }
        ],
        "languageProficiencies": [
            {
                "any": 3
            }
        ],
        "entries": [
            "You have studied languages and codes, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn three languages of your choice.",
                    "You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
                ]
            }
        ]
    },
    {
        "name": "Lucky",
        "source": "PHB",
        "page": 167,
        "entries": [
            "You have inexplicable luck that seems to kick in at just the right moment.",
            "You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional {@dice d20}. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the {@dice d20}s is used for the attack roll, ability check, or saving throw.",
            "You can also spend one luck point when an attack roll is made against you. Roll a {@dice d20}, and then choose whether the attack uses the attacker's roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.",
            "You regain your expended luck points when you finish a long rest."
        ]
    },
    {
        "name": "Mage Slayer",
        "source": "PHB",
        "page": 168,
        "entries": [
            "You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.",
                    "When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.",
                    "You have advantage on saving throws against spells cast by creatures within 5 feet of you."
                ]
            }
        ]
    },
    {
        "name": "Magic Initiate",
        "source": "PHB",
        "page": 168,
        "additionalSpells": [
            {
                "name": "Bard Spells",
                "ability": "cha",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Bard"
                                }
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Bard",
                            "count": 2
                        }
                    ]
                }
            },
            {
                "name": "Cleric Spells",
                "ability": "wis",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Cleric"
                                }
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Cleric",
                            "count": 2
                        }
                    ]
                }
            },
            {
                "name": "Druid Spells",
                "ability": "wis",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Druid"
                                }
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Druid",
                            "count": 2
                        }
                    ]
                }
            },
            {
                "name": "Sorcerer Spells",
                "ability": "cha",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Sorcerer"
                                }
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Sorcerer",
                            "count": 2
                        }
                    ]
                }
            },
            {
                "name": "Warlock Spells",
                "ability": "cha",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Warlock"
                                }
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Warlock",
                            "count": 2
                        }
                    ]
                }
            },
            {
                "name": "Wizard Spells",
                "ability": "int",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Wizard"
                                }
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Wizard",
                            "count": 2
                        }
                    ]
                }
            }
        ],
        "entries": [
            "Choose a class: {@filter bard|spells|level=0;1|class=bard}, {@filter cleric|spells|level=0;1|class=cleric}, {@filter druid|spells|level=0;1|class=druid}, {@filter sorcerer|spells|level=0;1|class=sorcerer}, {@filter warlock|spells|level=0;1|class=warlock}, or {@filter wizard|spells|level=0;1|class=wizard}. You learn two cantrips of your choice from that class's spell list.",
            "In addition, choose one 1st-level spell to learn from that same list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again.",
            "Your spellcasting ability for these spells depends on the class you chose: Charisma for {@filter bard|spells|level=0;1|class=bard}, {@filter sorcerer|spells|level=0;1|class=sorcerer}, or {@filter warlock|spells|level=0;1|class=warlock}; Wisdom for {@filter cleric|spells|level=0;1|class=cleric} or {@filter druid|spells|level=0;1|class=druid}; or Intelligence for {@filter wizard|spells|level=0;1|class=wizard}."
        ]
    },
    {
        "name": "Martial Adept",
        "source": "PHB",
        "page": 168,
        "optionalfeatureProgression": [
            {
                "name": "Maneuvers",
                "featureType": [
                    "MV:B"
                ],
                "progression": {
                    "*": 2
                }
            }
        ],
        "entries": [
            "You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn two {@filter maneuvers|optionalfeatures|feature type=MV:B} of your choice from among those available to the {@class fighter|phb|Battle Master|Battle Master|phb|2-0} archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
                    "You gain one superiority die, which is a {@dice d6} (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Master of Disguise",
        "source": "UAFeats",
        "page": 4,
        "ability": [
            {
                "cha": 1
            }
        ],
        "toolProficiencies": [
            {
                "disguise kit": true
            }
        ],
        "entries": [
            "You have honed your ability to shape your personality and to read the personalities of others. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with the {@item disguise kit|phb}. If you are already proficient with it, you add double your proficiency bonus to checks you make with it.",
                    "If you spend 1 hour observing a creature, you can then spend 8 hours crafting a disguise you can quickly don to mimic that creature. Making the disguise requires a {@item disguise kit|PHB}. You must make checks as normal to disguise yourself, but you can assume the disguise as an action."
                ]
            }
        ]
    },
    {
        "name": "Medic",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "wis": 1
            }
        ],
        "skillProficiencies": [
            {
                "medicine": true
            }
        ],
        "entries": [
            "You master the physician's arts, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Medicine} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "During a short rest, you can clean and bind the wounds of up to six willing beasts and humanoids. Make a DC 15 Wisdom ({@skill Medicine}) check for each creature. On a success, if a creature spends a Hit Die during this rest, that creature can forgo the roll and instead regain the maximum number of hit points the die can restore. A creature can do so only once per rest, regardless of how many Hit Dice it spends."
                ]
            }
        ]
    },
    {
        "name": "Medium Armor Master",
        "source": "PHB",
        "page": 168,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "armor": "medium"
                    }
                ]
            }
        ],
        "entries": [
            "You have practiced moving in medium armor to gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Wearing medium armor doesn't impose disadvantage on your Dexterity ({@skill Stealth}) checks.",
                    "When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher."
                ]
            }
        ]
    },
    {
        "name": "Menacing",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "cha": 1
            }
        ],
        "skillProficiencies": [
            {
                "intimidation": true
            }
        ],
        "entries": [
            "You become fearsome to others, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Intimidation} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "When you take the {@action Attack} action on your turn, you can replace one attack with an attempt to demoralize one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma ({@skill Intimidation}) check contested by the target's Wisdom ({@skill Insight}) check. If your check succeeds, the target is {@condition frightened} until the end of your next turn. If your check fails, the target can't be {@condition frightened} by you in this way for 1 hour."
                ]
            }
        ]
    },
    {
        "name": "Metabolic Control",
        "source": "UA2020PsionicOptionsRevisited",
        "page": 8,
        "prerequisite": [
            {
                "psionics": true
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have refined psionic control over your body's functions.",
            {
                "type": "list",
                "items": [
                    "If your Psionic Talent die is available, you can take an action to channel your psionic power to nourish yourself for the next 24 hours, as if you consumed sufficient food and water for a day. When you take this action, your Psionic Talent die decreases by one die size.",
                    "If your Psionic Talent die is available, you can meditate for 1 minute, at the end of which you gain the benefits of finishing a short rest, and your Psionic Talent die decreases by one die size. You can't meditate in this way again until you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Metamagic Adept",
        "source": "TCE",
        "page": 80,
        "prerequisite": [
            {
                "spellcasting2020": true
            }
        ],
        "optionalfeatureProgression": [
            {
                "name": "Metamagic",
                "featureType": [
                    "MM"
                ],
                "progression": {
                    "*": 2
                }
            }
        ],
        "entries": [
            "You've learned how to exert your will on your spells to alter how they function:",
            {
                "type": "list",
                "items": [
                    "You learn two {@filter Metamagic|optionalfeatures|Feature Type=MM} options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace one of these Metamagic options with another one from the sorcerer class.",
                    "You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Metamagic Adept",
        "source": "UA2020Feats",
        "page": 2,
        "prerequisite": [
            {
                "spellcasting2020": true
            }
        ],
        "entries": [
            "You've learned how to exert your will on your spells to alter how they function. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn two {@filter Metamagic|optionalfeatures|Feature Type=MM} options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise. Whenever you gain a level, you can replace one of your Metamagic options with another one from the sorcerer class.",
                    "You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Mobile",
        "source": "PHB",
        "page": 168,
        "entries": [
            "You are exceptionally speedy and agile. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Your speed increases by 10 feet.",
                    "When you use the {@action Dash} action, {@quickref difficult terrain||3} doesn't cost you extra movement on that turn.",
                    "When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not."
                ]
            }
        ]
    },
    {
        "name": "Moderately Armored",
        "source": "PHB",
        "page": 168,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "armor": "light"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "armorProficiencies": [
            {
                "medium": true,
                "shield|phb": true
            }
        ],
        "entries": [
            "You have trained to master the use of medium armor and shields, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with medium armor and shields."
                ]
            }
        ]
    },
    {
        "name": "Mounted Combatant",
        "source": "PHB",
        "page": 168,
        "entries": [
            "You are a dangerous foe to face while mounted. While you are mounted and aren't {@condition incapacitated}, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.",
                    "You can force an attack targeted at your mount to target you instead.",
                    "If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
                ]
            }
        ]
    },
    {
        "name": "Naturalist",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "int": 1
            }
        ],
        "skillProficiencies": [
            {
                "nature": true
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "detect poison and disease"
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        "druidcraft#c"
                    ]
                }
            }
        ],
        "entries": [
            "Your extensive study of nature rewards you with the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Nature} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell druidcraft} and {@spell detect poison and disease} spells. You can cast {@spell detect poison and disease} once without expending a spell slot, and you regain the ability to do so when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Observant",
        "source": "PHB",
        "page": 168,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Quick to notice details of your environment, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.",
                    "You have a +5 bonus to your passive Wisdom ({@skill Perception}) and passive Intelligence ({@skill Investigation}) scores."
                ]
            }
        ]
    },
    {
        "name": "Orcish Aggression",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-orc"
                    }
                ]
            }
        ],
        "entries": [
            "As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started."
        ]
    },
    {
        "name": "Orcish Fury",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-orc"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Your fury burns tirelessly. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you hit with an attack made with a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.",
                    "Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack."
                ]
            }
        ]
    },
    {
        "name": "Orcish Fury",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-orc"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Your fury burns tirelessly. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you hit with an attack using a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.",
                    "Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack."
                ]
            }
        ]
    },
    {
        "name": "Outlands Envoy",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 7,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "scion of the outer planes|ua2022wondersofthemultiverse"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "misty step",
                                "tongues"
                            ]
                        }
                    }
                },
                "ability": "inherit"
            }
        ],
        "entries": [
            "You have spent significant time in Sigil or elsewhere in the Outlands, the crossroads of the multiverse. Being steeped in converging planar energies grants you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Crossroads Emissary",
                        "entries": [
                            "You learn the {@spell misty step} and {@spell tongues} spells. You can cast each spell once using this feat without a spell slot, and you must finish a long rest before you can cast that spell in this way again. When you cast tongues using this feat, you require no material components. You can also cast these spells using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the Scion of the Outer Planes feat."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Outsized Might",
        "source": "UA2022GiantOptions",
        "page": 5,
        "entries": [
            "You have absorbed primeval magic that allows you, despite your relatively small stature, to embody the might of titanic creatures. This grants you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Little but Mighty",
                        "entries": [
                            "You gain proficiency in either the {@skill Athletics} or {@skill Acrobatics} skill."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Powerful Build",
                        "entries": [
                            "You count as one size larger when determining your carrying capacity and the amount you can push, drag, or lift."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Stalwart",
                        "entries": [
                            "You have advantage on saving throws against being moved or knocked {@condition prone}."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Perceptive",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "wis": 1
            }
        ],
        "skillProficiencies": [
            {
                "perception": true
            }
        ],
        "entries": [
            "You hone your senses until they become razor sharp. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Perception} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "Being in a lightly obscured area doesn't impose disadvantage on your Wisdom ({@skill Perception}) checks if you can both see and hear."
                ]
            }
        ]
    },
    {
        "name": "Performer",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "cha": 1
            }
        ],
        "skillProficiencies": [
            {
                "performance": true
            }
        ],
        "entries": [
            "You master performance so that you can command any stage. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Performance} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "While performing, you can try to distract one humanoid you can see who can see and hear you. Make a Charisma ({@skill Performance}) check contested by the humanoid's Wisdom ({@skill Insight}) check. If your check succeeds, you grab the humanoid's attention enough that it makes Wisdom ({@skill Perception}) and Intelligence ({@skill Investigation}) checks with disadvantage until you stop performing."
                ]
            }
        ]
    },
    {
        "name": "Piercer",
        "source": "TCE",
        "page": 80,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have achieved a penetrating precision in combat, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "Once per turn, when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack's damage dice, and you must use the new roll.",
                    "When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes."
                ]
            }
        ]
    },
    {
        "name": "Piercer",
        "source": "UA2020Feats",
        "page": 2,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have achieved a penetrating precision in combat, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "Once per turn, when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack's damage dice, and you must use the new roll.",
                    "When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes."
                ]
            }
        ]
    },
    {
        "name": "Planar Wanderer",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 7,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "scion of the outer planes|ua2022wondersofthemultiverse"
                ]
            }
        ],
        "entries": [
            "You can draw on the forces of the multiverse to survive cosmic extremes and to traverse its infinite realms. You gain these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Planar Adaptation",
                        "entries": [
                            "When you finish a long rest, you gain resistance to either acid, cold, or fire damage (your choice) until you finish your next long rest."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Portal Cracker",
                        "entries": [
                            "Your experience with portals allows you to operate them without the proper portal key. As an action, you can concentrate on a portal you're aware of that is within 5 feet of you and make a DC 20 Wisdom ({@skill Survival}) check. On a failure, you take {@damage 3d8} force damage and you can't use this feature on that portal again until you finish a long rest. On a success, you can force the portal open or closed for 1 hour. For that duration, a portal closed in this way doesn't respond to its portal key unless a creature employing the key succeeds on a DC 20 Intelligence ({@skill Arcana}) check as an action."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Portal Sense",
                        "entries": [
                            "You know the direction to the last planar portal you used while you and the portal are on the same plane. Moreover, as an action, you can detect the location of any portals within 30 feet of you that aren't behind total cover. Once you detect a portal with this action, you can't use the action again until you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Poisoner",
        "source": "TCE",
        "page": 80,
        "toolProficiencies": [
            {
                "poisoner's kit": true
            }
        ],
        "entries": [
            "You can prepare and deliver deadly poisons, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you make a damage roll that deals poison damage, it ignores resistance to poison damage.",
                    "You can apply poison to a weapon or piece of ammunition as a bonus action, instead of an action.",
                    "You gain proficiency with the {@item poisoner's kit|phb} if you don't already have it. With one hour of work using a {@item poisoner's kit|phb} and expending 50 gp worth of materials, you can create a number of doses of potent poison equal to your proficiency bonus. Once applied to a weapon or piece of ammunition, the poison retains its potency for 1 minute or until you hit with the weapon or ammunition. When a creature takes damage from the coated weapon or ammunition, that creature must succeed on a DC 14 Constitution saving throw or take {@damage 2d8} poison damage and become {@condition poisoned} until the end of your next turn."
                ]
            }
        ]
    },
    {
        "name": "Poisoner",
        "source": "UA2020Feats",
        "page": 2,
        "toolProficiencies": [
            {
                "poisoner's kit": true
            }
        ],
        "entries": [
            "You can prepare and deliver deadly poisons, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you make a damage roll, you ignore resistance to poison damage.",
                    "You can coat a weapon in poison as a bonus action, instead of an action.",
                    "You gain proficiency with the {@item poisoner's kit|phb} if you don't already have it. With one hour of work using a {@item poisoner's kit|PHB} and expending 50 gp worth of materials, you can create a number of doses of potent poison equal to your proficiency bonus. Once applied, the poison retains potency for 1 minute, or until you hit with the weapon. When a weapon coated in this poison deals damage to a creature, that creature must succeed on a DC 14 Constitution saving throw or take {@damage 2d8} poison damage and become {@condition poisoned} until the end of your next turn."
                ]
            }
        ]
    },
    {
        "name": "Polearm Master",
        "source": "PHB",
        "page": 168,
        "entries": [
            "You can keep your enemies at bay with reach weapons. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you take the {@action Attack} action and attack with only a {@item glaive|phb}, {@item halberd|phb}, {@item quarterstaff|phb}, or {@item spear|phb}, you can use a bonus action to make a melee attack with the opposite end of the weapon; this attack uses the same ability modifier as the primary attack. The weapon's damage die for this attack is a {@dice d4}, and the attack deals bludgeoning damage.",
                    "While you are wielding a {@item glaive|phb}, {@item halberd|phb}, {@item pike|phb}, {@item quarterstaff|phb}, or {@item spear|phb}, other creatures provoke an opportunity attack from you when they enter the reach you have with that weapon."
                ]
            }
        ]
    },
    {
        "name": "Practiced Expert",
        "source": "UA2020Feats",
        "page": 3,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "skillToolLanguageProficiencies": [
            {
                "choose": [
                    {
                        "from": [
                            "anySkill",
                            "anyTool"
                        ]
                    }
                ]
            }
        ],
        "entries": [
            "You have honed your proficiency with particular skills or tools, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with one {@table skills|phb|skill} or {@filter tool|items|type=tool;artisan's tools} of your choice.",
                    "Choose one of your skill or tool proficiencies. Your proficiency bonus is doubled for any ability check you make that uses the chosen proficiency."
                ]
            }
        ]
    },
    {
        "name": "Prodigy",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    },
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "skillProficiencies": [
            {
                "any": 1
            }
        ],
        "languageProficiencies": [
            {
                "any": 1
            }
        ],
        "toolProficiencies": [
            {
                "any": 1
            }
        ],
        "entries": [
            "You have a knack for learning new things. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain one {@table skills|phb|skill proficiency} of your choice, one {@filter tool proficiency|items|type=tool;artisan's tools} of your choice, and fluency in one language of your choice."
                ]
            }
        ]
    },
    {
        "name": "Prodigy",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    },
                    {
                        "name": "half-orc"
                    },
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "skillProficiencies": [
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
                    ]
                }
            }
        ],
        "languageProficiencies": [
            {
                "any": 1
            }
        ],
        "toolProficiencies": [
            {
                "any": 1
            }
        ],
        "entries": [
            "You have a knack for learning new things. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain one {@table skills|phb|skill proficiency} of your choice, one {@filter tool proficiency|items|type=tool;artisan's tools} of your choice, and fluency in one language of your choice.",
                    "Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus."
                ]
            }
        ]
    },
    {
        "name": "Quick-Fingered",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "dex": 1
            }
        ],
        "skillProficiencies": [
            {
                "sleight of hand": true
            }
        ],
        "entries": [
            "Your nimble fingers and agility let you perform sleight of hand. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Sleight of Hand} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "As a bonus action, you can make a Dexterity ({@skill Sleight of Hand}) check to plant something on someone else, conceal an object on a creature, lift a purse, or take something from a pocket."
                ]
            }
        ]
    },
    {
        "name": "Quicksmithing",
        "source": "PSK",
        "page": 13,
        "prerequisite": [
            {
                "ability": [
                    {
                        "int": 13
                    }
                ]
            }
        ],
        "toolProficiencies": [
            {
                "anyArtisansTool": true
            }
        ],
        "entries": [
            "You have mastered the art of on-the-fly invention, improvement, and jury-rigging. You can use your talents to create immediate, short-term magical effects similar to spells, given time and an adequate supply of aether.",
            "When you choose this feat, you master two magical effects, each of which recreates the effect of a 1st-level spell that has the ritual tag. These spells can come from any class list, but Intelligence is your spellcasting ability for them.",
            "If you come across a schematic geared toward quicksmithing or study with another quicksmith, you might be able to add another spell to the effects you have mastered. The spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of mastering the spell takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents aether you use as you experiment with the spell effect to master it.",
            "In addition, you have proficiency with {@item artisan's tools|PHB} (quicksmith's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours unless you spend 1 hour repairing it to keep it functioning. You can use your action to dismantle the device, at which point you can reclaim the materials used to create it. You can have up to three such devices active at a time.",
            "When you create a device, choose one of the following options:",
            {
                "type": "entries",
                "name": "Clockwork Toy",
                "entries": [
                    "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents."
                ]
            },
            {
                "type": "entries",
                "name": "Fire Starter",
                "entries": [
                    "This device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action."
                ]
            },
            {
                "type": "entries",
                "name": "Music Box",
                "entries": [
                    "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
                ]
            }
        ]
    },
    {
        "name": "Resilient",
        "source": "PHB",
        "page": 168,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1,
                    "entry": "Increase the chosen ability score by 1, to a maximum of 20."
                }
            }
        ],
        "entries": [
            "Choose one ability score. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in saving throws using the chosen ability."
                ]
            }
        ]
    },
    {
        "name": "Revenant Blade",
        "source": "ERLW",
        "page": 22,
        "otherSources": [
            {
                "source": "UAWGE",
                "page": 74
            }
        ],
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are descended from a master of the {@item double-bladed scimitar|ERLW}, and some of that mastery has passed on to you. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "While you are holding a double-bladed scimitar with two hands, you gain a +1 bonus to Armor Class.",
                    "A double-bladed scimitar has the finesse property when you wield it."
                ]
            }
        ]
    },
    {
        "name": "Righteous Heritor",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 8,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "scion of the outer planes|ua2022wondersofthemultiverse|scion of the outer planes (good outer plane)"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You can channel the cosmic forces of good that foster serenity and fellowship. You are still free to choose your own actions, but gain these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Soothe Pain",
                        "entries": [
                            "When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to dull its suffering and reduce the damage it takes by {@dice 1d10} + your proficiency bonus. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Ritual Caster",
        "source": "PHB",
        "page": 169,
        "prerequisite": [
            {
                "ability": [
                    {
                        "int": 13
                    },
                    {
                        "wis": 13
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "name": "Bard Spells",
                "ability": "cha",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Bard|components & miscellaneous=ritual",
                                    "count": 2
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Cleric Spells",
                "ability": "wis",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Cleric|components & miscellaneous=ritual",
                                    "count": 2
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Druid Spells",
                "ability": "wis",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Druid|components & miscellaneous=ritual",
                                    "count": 2
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Sorcerer Spells",
                "ability": "cha",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Sorcerer|components & miscellaneous=ritual",
                                    "count": 2
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Warlock Spells",
                "ability": "cha",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Warlock|components & miscellaneous=ritual",
                                    "count": 2
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Wizard Spells",
                "ability": "int",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=Wizard|components & miscellaneous=ritual",
                                    "count": 2
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them.",
            "When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: {@filter bard|spells|level=1|class=bard|components & miscellaneous=ritual}, {@filter cleric|spells|level=1|class=cleric|components & miscellaneous=ritual}, {@filter druid|spells|level=1|class=druid|components & miscellaneous=ritual}, {@filter sorcerer|spells|level=1|class=sorcerer|components & miscellaneous=ritual}, {@filter warlock|spells|level=1|class=warlock|components & miscellaneous=ritual}, or {@filter wizard|spells|level=1|class=wizard|components & miscellaneous=ritual}. You must choose your spells from that class's spell list, and the spells you choose must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.",
            "If you come across a spell in written form, such as a magical {@item spell scroll} or a wizard's spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it."
        ]
    },
    {
        "name": "Rune Carver Adept",
        "source": "UA2022GiantOptions",
        "page": 5,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "rune carver apprentice|ua2022giantoptions"
                ]
            }
        ],
        "entries": [
            "Your skill with the art of runecraft has increased.",
            "Whenever you finish a long rest, you can now mark a number of objects equal to your proficiency bonus with a rune from the Rune Carver Apprentice feat. An object can have only one rune at a time, and you must inscribe a different rune on each object."
        ]
    },
    {
        "name": "Rune Carver Adept",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 8,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "rune carver apprentice|ua2022wondersofthemultiverse"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                },
                "hidden": true
            }
        ],
        "entries": [
            "Your ability to draw out power from runes has grown.",
            "Increase the ability score of the spellcasting ability chosen when you gained the Rune Carver Apprentice feat by 1, to a maximum of 20.",
            "Whenever you cast a spell from the Rune Spells table, or a spell of a school of magic associated with the spell you marked on an object from your Rune Carver Apprentice feat, you can invoke runic power, granting you one of these benefits of your choice:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Battle Runes",
                        "entries": [
                            "Choose one creature you can see within 30 feet of yourself. Until the end of that creature's next turn, it has advantage on the next attack roll it makes."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Healing Runes",
                        "entries": [
                            "Choose one creature you can see within 30 feet of yourself. That creature gains temporary hit points equal to your level."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Runic Winds",
                        "entries": [
                            "Choose one creature you can see within 30 feet of yourself. Until the end of that creature's turn, its movement doesn't provoke opportunity attacks, and its walking speed increases by 10 feet."
                        ]
                    }
                ]
            },
            "You can invoke runic power a number of times equal to your proficiency bonus, but no more than once per spell you cast. You regain all expended uses when you finish a long rest."
        ]
    },
    {
        "name": "Rune Carver Apprentice",
        "source": "UA2022GiantOptions",
        "page": 5,
        "entries": [
            "You've begun studying the art of runecraft, which allows you to temporarily mark your items and imbue them with magic.",
            "Whenever you finish a long rest, you can mark one nonmagical weapon, armor, piece of clothing, or other object you can touch with a rune of your choice. You temporarily learn one 1st-level spell based on the rune you choose, as specified in the Rune Spells table, and you know the spell until you finish a long rest, when the rune fades.",
            {
                "type": "table",
                "caption": "Rune Spells",
                "colLabels": [
                    "Rune",
                    "Spell"
                ],
                "colStyles": [
                    "col-2",
                    "col-10"
                ],
                "rows": [
                    [
                        "Blood",
                        "{@spell False life}"
                    ],
                    [
                        "Cloud",
                        "{@spell Fog cloud}"
                    ],
                    [
                        "Death",
                        "{@spell Ray of sickness}"
                    ],
                    [
                        "Dragon",
                        "{@spell Chromatic orb}"
                    ],
                    [
                        "Enemy",
                        "{@spell Bane}"
                    ],
                    [
                        "Fire",
                        "{@spell Burning hands}"
                    ],
                    [
                        "Friend",
                        "{@spell Bless}"
                    ],
                    [
                        "Frost",
                        "{@spell Armor of Agathys}"
                    ],
                    [
                        "Hill",
                        "{@spell Goodberry}"
                    ],
                    [
                        "Journey",
                        "{@spell Longstrider}"
                    ],
                    [
                        "King",
                        "{@spell Command}"
                    ],
                    [
                        "Light",
                        "{@spell Guiding bolt}"
                    ],
                    [
                        "Life",
                        "{@spell Cure wounds}"
                    ],
                    [
                        "Mountain",
                        "{@spell Jump}"
                    ],
                    [
                        "Shield",
                        "{@spell Shield}"
                    ],
                    [
                        "Stone",
                        "{@spell Sanctuary}"
                    ],
                    [
                        "Storm",
                        "{@spell Thunderwave}"
                    ],
                    [
                        "War",
                        "{@spell Heroism}"
                    ],
                    [
                        "Wind",
                        "{@spell Feather fall}"
                    ]
                ]
            },
            "While you are wearing or carrying the rune-marked object, you can cast the chosen spell associated with the rune once without using a spell slot or material components, and you can also cast the spell using any spell slots you have.",
            "Your spellcasting ability for this feat is Intelligence, Wisdom, or Charisma (choose when you gain this feat)"
        ]
    },
    {
        "name": "Rune Carver Apprentice",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 8,
        "entries": [
            "You've begun studying the art of runecraft.",
            "You learn the comprehend languages spell. You can cast this spell without expending a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using any spell slots you have.",
            "You know two runes of your choice from the Rune Spells table. Whenever you finish a long rest, you can mark one nonmagical weapon, armor, piece of clothing, or other object you touch with a rune you know. You temporarily learn one 1st-level spell based on the rune you inscribed, as specified in the Rune Spells table, and you know the spell until you finish a long rest, when the rune fades.",
            {
                "type": "table",
                "caption": "Rune Spells",
                "colLabels": [
                    "Rune",
                    "Spell"
                ],
                "colStyles": [
                    "col-4",
                    "col-8"
                ],
                "rows": [
                    [
                        "Death",
                        "{@spell Ray of sickness}"
                    ],
                    [
                        "Dragon",
                        "{@spell Chromatic orb}"
                    ],
                    [
                        "Enemy",
                        "{@spell Disguise self}"
                    ],
                    [
                        "Friend",
                        "{@spell Speak with animals}"
                    ],
                    [
                        "Journey",
                        "{@spell Longstrider}"
                    ],
                    [
                        "King",
                        "{@spell Command}"
                    ],
                    [
                        "Mountain",
                        "{@spell Entangle}"
                    ],
                    [
                        "Sacred",
                        "{@spell Sanctuary}"
                    ]
                ]
            },
            "While you are wearing or carrying the rune-marked object, you can cast the spell associated with the chosen rune once without using a spell slot or material components, and you can also cast the spell using any spell slots you have.",
            "Your spellcasting ability for this feat is Intelligence, Wisdom, or Charisma (choose when you select this feat)",
            "Each time you gain a level, you can replace one of the runes you know with a different one from the Rune Spells table."
        ]
    },
    {
        "name": "Savage Attacker",
        "source": "PHB",
        "page": 169,
        "entries": [
            "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total."
        ]
    },
    {
        "name": "Scion Of Elemental Air",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 8,
        "additionalSpells": [
            {
                "known": {
                    "_": [
                        "minor illusion#c"
                    ]
                }
            }
        ],
        "entries": [
            "You've been exposed to the primordial magic of the Elemental Plane of Air, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Elemental Magic",
                        "entries": [
                            "You learn the {@spell minor illusion} cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you select this feat)."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Wind's Glide",
                        "entries": [
                            "You can use a bonus action to gain a flying speed equal to your walking speed until the end of your turn. If you are airborne at the end of your turn after using this movement and aren't held aloft by other means, you fall. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Scion Of Elemental Earth",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 8,
        "additionalSpells": [
            {
                "known": {
                    "_": [
                        "druidcraft#c"
                    ]
                }
            }
        ],
        "entries": [
            "You've been exposed to the primordial magic of the Elemental Plane of Earth, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Elemental Magic",
                        "entries": [
                            "You learn the {@spell druidcraft} cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you select this feat)."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Earthen Shield",
                        "entries": [
                            "You can use a bonus action to conjure a bulwark of earth that provides half cover to you or a creature of your choice within 30 feet of yourself. The bulwark remains until the start of your next turn. You can create this bulwark a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Scion Of Elemental Fire",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 9,
        "additionalSpells": [
            {
                "known": {
                    "_": [
                        "dancing lights#c",
                        "produce flame#c"
                    ]
                }
            }
        ],
        "entries": [
            "You've been exposed to the primordial magic of the Elemental Plane of Fire, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Elemental Magic",
                        "entries": [
                            "You learn the {@spell dancing lights} cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you select this feat)."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Fervent Blaze",
                        "entries": [
                            "You learn the {@spell produce flame} cantrip, using the same spellcasting ability chosen for this feat's Elemental Magic benefit. You can cast produce flame as normal, and you can also cast it as a bonus action a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Scion Of Elemental Water",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 9,
        "additionalSpells": [
            {
                "known": {
                    "_": [
                        "thaumaturgy#c"
                    ]
                }
            }
        ],
        "entries": [
            "You've been exposed to the primordial magic of the Elemental Plane of Water, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Elemental Magic",
                        "entries": [
                            "You learn the thaumaturgy cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you select this feat)."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Wave Surge",
                        "entries": [
                            "You can use a bonus action to create a forceful surge of water directed at a creature within 15 feet of you that you can see. The target must make a Strength saving throw; the DC for this save is equal to 8 + your proficiency bonus + the spellcasting ability modifier chosen for this feat, and a creature can choose to fail this saving throw. On a failure, the target is pushed up to 10 feet away from you or pulled up to 10 feet toward you (your choice). The water vanishes immediately after the creature succeeds or fails. You can create this effect a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Scion Of The Outer Planes",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 9,
        "additionalSpells": [
            {
                "name": "Astral Plane",
                "known": {
                    "_": [
                        "message#c"
                    ]
                }
            },
            {
                "name": "Chaotic Outer Plane",
                "known": {
                    "_": [
                        "minor illusion#c"
                    ]
                }
            },
            {
                "name": "Evil Outer Plane",
                "known": {
                    "_": [
                        "chill touch#c"
                    ]
                }
            },
            {
                "name": "Good Outer Plane",
                "known": {
                    "_": [
                        "sacred flame#c"
                    ]
                }
            },
            {
                "name": "Lawful Outer Plane",
                "known": {
                    "_": [
                        "guidance#c"
                    ]
                }
            },
            {
                "name": "The Outlands",
                "known": {
                    "_": [
                        "mage hand#c"
                    ]
                }
            }
        ],
        "entries": [
            "You are influenced by and adept at navigating planar pathways and the strange realities of the Outer Planes.",
            "Whether planar essence infuses you or you have extraplanar ancestry, your connection to a plane infuses you with the energies found there. Choose a type of plane listed in the Planar Infusion table below. Your choice gives you resistance to a damage type and the ability to cast a cantrip, as specified in the table. You can cast this cantrip without material components, and your spellcasting ability for it is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
            {
                "type": "table",
                "caption": "Planar Infusion",
                "colLabels": [
                    "Plane",
                    "Damage Resistance",
                    "Cantrip"
                ],
                "colStyles": [
                    "col-4",
                    "col-4",
                    "col-4"
                ],
                "rows": [
                    [
                        "Astral Plane",
                        "Psychic",
                        "{@spell Message}"
                    ],
                    [
                        "Chaotic Outer Plane",
                        "Necrotic",
                        "{@spell Minor illusion}"
                    ],
                    [
                        "Evil Outer Plane",
                        "Necrotic",
                        "{@spell Chill touch}"
                    ],
                    [
                        "Good Outer Plane",
                        "Radiant",
                        "{@spell Sacred flame}"
                    ],
                    [
                        "Lawful Outer Plane",
                        "Radiant",
                        "{@spell Guidance}"
                    ],
                    [
                        "The Outlands",
                        "Psychic",
                        "{@spell Mage hand}"
                    ]
                ]
            }
        ]
    },
    {
        "name": "Second Chance",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have a knack for learning new things. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can't do so again until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Second Chance",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Fortune favors you when someone tries to strike you. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can't use it again until you roll initiative at the start of combat or until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Sentinel",
        "source": "PHB",
        "page": 169,
        "entries": [
            "You have mastered techniques to take advantage of every drop in any enemy's guard, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn.",
                    "Creatures provoke opportunity attacks from you even if they take the {@action Disengage} action before leaving your reach.",
                    "When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature."
                ]
            }
        ]
    },
    {
        "name": "Servo Crafting",
        "source": "PSK",
        "page": 13,
        "prerequisite": [
            {
                "ability": [
                    {
                        "int": 13
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "_": {
                        "ritual": [
                            "find familiar"
                        ]
                    }
                }
            }
        ],
        "entries": [
            "You are skilled in the creation of {@creature servo|psk|servos}—tiny constructs that function as personal assistants. You can cast the {@spell find familiar} spell as a ritual, creating a {@creature servo|psk} to serve as your familiar instead of an animal. A {@creature servo|psk}'s statistics appear in the \"Artifact Creatures\" section of this document. In every other way, a servo familiar functions as described in the {@spell find familiar} spell.",
            "You can communicate telepathically with your servo familiar and perceive through its senses as long as you are on the same plane of existence. You can speak through your servo in your own voice.",
            "Additionally, when you take the {@action Attack} action, you can forgo one of your own attacks to allow your servo familiar to make one attack of its own."
        ]
    },
    {
        "name": "Shadow Touched",
        "source": "TCE",
        "page": 80,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "additionalSpells": [
            {
                "ability": "inherit",
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "invisibility",
                                {
                                    "choose": "level=1|school=I;N"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "Your exposure to the Shadowfell's magic has changed you, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell invisibility} spell and one {@filter 1st-level spell|spells|level=1|school=I;N} of your choice. The {@filter 1st-level spell|spells|level=1|school=I;N} must be from the illusion or necromancy school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat."
                ]
            }
        ]
    },
    {
        "name": "Shadow Touched",
        "source": "UA2020Feats",
        "page": 3,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "additionalSpells": [
            {
                "ability": "inherit",
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "invisibility",
                                {
                                    "choose": "level=1|school=I;N"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You learn how to bend shadows from your experience with the Shadowfell. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell darkness} spell and one {@filter 1st-level spell|spells|level=1|school=I;N} of your choice. The {@filter 1st-level spell|spells|level=1|school=I;N} must be from the illusion or necromancy school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat."
                ]
            }
        ]
    },
    {
        "name": "Sharpshooter",
        "source": "PHB",
        "page": 170,
        "entries": [
            "You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.",
                    "Your ranged weapon attacks ignore half cover and three-quarters cover.",
                    "Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
                ]
            }
        ]
    },
    {
        "name": "Shield Master",
        "source": "PHB",
        "page": 170,
        "entries": [
            "You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a {@item shield|phb}:",
            {
                "type": "list",
                "items": [
                    "If you take the {@action Attack} action on your turn, you can use a bonus action to try to {@action shove} a creature within 5 feet of you with your shield.",
                    "If you aren't {@condition incapacitated}, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.",
                    "If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
                ]
            }
        ]
    },
    {
        "name": "Shield Training",
        "source": "UA2020Feats",
        "page": 3,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con"
                    ],
                    "amount": 1
                }
            }
        ],
        "armorProficiencies": [
            {
                "shield|phb": true
            }
        ],
        "entries": [
            "You've trained in the effective use of shields. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with {@item shield|phb|shields}.",
                    "In combat, you can don or doff a shield as the free object interaction on your turn.",
                    "If you have the Spellcasting or Pact Magic feature, you can use a shield as a spellcasting focus."
                ]
            }
        ]
    },
    {
        "name": "Silver-Tongued",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "cha": 1
            }
        ],
        "skillProficiencies": [
            {
                "deception": true
            }
        ],
        "entries": [
            "You develop your conversational skill to better deceive others. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Deception} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "When you take the {@action Attack} action on your turn, you can replace one attack with an attempt to deceive one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma ({@skill Deception}) check contested by the target's Wisdom ({@skill Insight}) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 1 hour."
                ]
            }
        ]
    },
    {
        "name": "Skill Expert",
        "source": "TCE",
        "page": 80,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "skillProficiencies": [
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
                    ]
                }
            }
        ],
        "expertise": [
            {
                "anyProficientSkill": 1
            }
        ],
        "entries": [
            "You have honed your proficiency with particular skills, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in one {@table skills|phb|skill} of your choice.",
                    "Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus."
                ]
            }
        ]
    },
    {
        "name": "Skilled",
        "source": "PHB",
        "page": 170,
        "skillToolLanguageProficiencies": [
            {
                "choose": [
                    {
                        "from": [
                            "anySkill",
                            "anyTool"
                        ],
                        "count": 3
                    }
                ]
            }
        ],
        "entries": [
            "You gain proficiency in any combination of three {@table skills|phb} or {@filter tools|items|type=tools;artisan's tools;instrument;gaming set;vehicle (land);vehicle (water)} of your choice."
        ]
    },
    {
        "name": "Skulker",
        "source": "PHB",
        "page": 170,
        "prerequisite": [
            {
                "ability": [
                    {
                        "dex": 13
                    }
                ]
            }
        ],
        "entries": [
            "You are expert at slinking through shadows. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You can try to hide when you are lightly obscured from the creature from which you are hiding.",
                    "When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.",
                    "Dim light doesn't impose disadvantage on your Wisdom ({@skill Perception}) checks relying on sight."
                ]
            }
        ]
    },
    {
        "name": "Slasher",
        "source": "TCE",
        "page": 81,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You've learned where to cut to have the greatest results, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce the speed of the target by 10 feet until the start of your next turn.",
                    "When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls."
                ]
            }
        ]
    },
    {
        "name": "Slasher",
        "source": "UA2020Feats",
        "page": 3,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You've learned where to cut to have the greatest results, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce the speed of the target by 10 feet until the start of your next turn.",
                    "When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls."
                ]
            }
        ]
    },
    {
        "name": "Soul of the Storm Giant",
        "source": "UA2022GiantOptions",
        "page": 5,
        "prerequisite": [
            {
                "level": 8
            }
        ],
        "entries": [
            "You've manifested divination abilities and tempest magic emblematic of storm giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Maelstrom Aura",
                        "entries": [
                            "As a bonus action, you surround yourself in an aura of magical wind and lightning that extends 10 feet from you in every direction but not through total cover. The aura lasts for 1 minute or until you are {@condition incapacitated}. While the aura is active, attack rolls against you have disadvantage, and whenever a creature starts its turn within the sphere, you can force the creature's speed to be halved until the start of its next turn. Once you use this bonus action, you can't do so again until you finish a long rest."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Storm's Oracle",
                        "entries": [
                            "You can cast the {@spell divination} spell as a ritual, without needing material components. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat). Once you cast the spell in this way, you can't do so again until you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Soul Of The Storm Giant",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 9,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "strike of the giants|ua2022wondersofthemultiverse|strike of the giants (storm giant)"
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You've manifested divination abilities and tempest magic emblematic of storm giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Maelstrom Aura",
                        "entries": [
                            "As a bonus action, you surround yourself in an aura of magical wind and lightning that extends 10 feet from you in every direction but not through total cover. The aura lasts until the start of your next turn or until you are {@condition incapacitated}. While the aura is active, attack rolls against you have disadvantage, and whenever a creature starts its turn within the aura, you can force the creature to make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature's speed is halved until the start of its next turn. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Spear Mastery",
        "source": "UAFeats",
        "page": 3,
        "entries": [
            "Though the {@item spear|phb} is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to attack rolls you make with a spear.",
                    "When you use a spear, its damage die changes from a {@dice d6} to a {@dice d8}, and from a {@dice d8} to a {@dice d10} when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.)",
                    "You can set your spear to receive a charge. As a bonus action, choose a creature you can see that is at least 20 feet away from you. If that creature moves within your spear's reach on its next turn, you can make a melee attack against it with your spear as a reaction. If the attack hits, the target takes an extra {@damage 1d8} piercing damage, or an extra {@damage 1d10} piercing damage if you wield the spear with two hands. You can't use this ability if the creature used the {@action Disengage} action before moving.",
                    "As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn."
                ]
            }
        ]
    },
    {
        "name": "Spell Sniper",
        "source": "PHB",
        "page": 170,
        "prerequisite": [
            {
                "spellcasting": true
            }
        ],
        "additionalSpells": [
            {
                "name": "Bard Spells",
                "ability": "cha",
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Bard|spell attack=m;r;o",
                            "count": 1
                        }
                    ]
                }
            },
            {
                "name": "Cleric Spells",
                "ability": "wis",
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Cleric|spell attack=m;r;o",
                            "count": 1
                        }
                    ]
                }
            },
            {
                "name": "Druid Spells",
                "ability": "wis",
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Druid|spell attack=m;r;o",
                            "count": 1
                        }
                    ]
                }
            },
            {
                "name": "Sorcerer Spells",
                "ability": "cha",
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Sorcerer|spell attack=m;r;o",
                            "count": 1
                        }
                    ]
                }
            },
            {
                "name": "Warlock Spells",
                "ability": "cha",
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Warlock|spell attack=m;r;o",
                            "count": 1
                        }
                    ]
                }
            },
            {
                "name": "Wizard Spells",
                "ability": "int",
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Wizard|spell attack=m;r;o",
                            "count": 1
                        }
                    ]
                }
            }
        ],
        "entries": [
            "You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you cast a spell that requires you to make an attack roll, the spell's range is doubled.",
                    "Your ranged spell attacks ignore half cover and three-quarters cover.",
                    "You learn one cantrip that requires an attack roll. Choose the cantrip from the {@filter bard|spells|level=0|class=bard|spell attack=m;r;o}, {@filter cleric|spells|level=0|class=cleric|spell attack=m;r;o}, {@filter druid|spells|level=0|class=druid|spell attack=m;r;o}, {@filter sorcerer|spells|level=0|class=sorcerer|spell attack=m;r;o}, {@filter warlock|spells|level=0|class=warlock|spell attack=m;r;o}, or {@filter wizard|spells|level=0|class=wizard|spell attack=m;r;o} spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
                ]
            }
        ]
    },
    {
        "name": "Squat Nimbleness",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    },
                    {
                        "name": "gnome"
                    },
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "skillProficiencies": [
            {
                "choose": {
                    "from": [
                        "athletics",
                        "acrobatics"
                    ]
                }
            }
        ],
        "entries": [
            "You are uncommonly nimble for your race. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Increase your walking speed by 5 feet.",
                    "You gain proficiency in the {@skill Acrobatics} or {@skill Athletics} skill. If you're already proficient in the skill, your proficiency bonus is doubled for any check you make with it."
                ]
            }
        ]
    },
    {
        "name": "Squat Nimbleness",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    },
                    {
                        "name": "small race",
                        "displayEntry": "a Small race"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "skillProficiencies": [
            {
                "choose": {
                    "from": [
                        "acrobatics",
                        "athletics"
                    ]
                }
            }
        ],
        "entries": [
            "You are uncommonly nimble for your race. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Increase your walking speed by 5 feet.",
                    "You gain proficiency in the {@skill Acrobatics} or {@skill Athletics} skill (your choice).",
                    "You have advantage on any Strength ({@skill Athletics}) or Dexterity ({@skill Acrobatics}) check you make to escape from being {@condition grappled}."
                ]
            }
        ]
    },
    {
        "name": "Squire of Solamnia",
        "source": "UA2022HeroesOfKrynn",
        "page": 6,
        "prerequisite": [
            {
                "other": "Squireship in the Knights of Solamnia"
            }
        ],
        "weaponProficiencies": [
            {
                "martial": true
            }
        ],
        "armorProficiencies": [
            {
                "medium": true
            }
        ],
        "entries": [
            "Your training in the ways of the Knights of Solamnia grants you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Martial Training",
                        "entries": [
                            "You gain proficiency with medium armor and martial weapons."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Defensive Rider",
                        "entries": [
                            "You have advantage on saving throws made to avoid falling off a mount."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Encouraging Rally",
                        "entries": [
                            "When another creature you can see within 30 feet of you makes a saving throw, you can use your reaction to inspire them. If the target can hear you and understand you, it gains advantage on the saving throw. Once you use this reaction, you can't do so again until you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Squire of Solamnia",
        "source": "UA2022HeroesOfKrynnRevisited",
        "page": 5,
        "prerequisite": [
            {
                "level": {
                    "level": 1,
                    "class": {
                        "name": "Fighter",
                        "visible": true
                    }
                }
            },
            {
                "level": {
                    "level": 1,
                    "class": {
                        "name": "Paladin",
                        "visible": true
                    }
                }
            },
            {
                "background": [
                    {
                        "name": "Knight of Solamnia",
                        "displayEntry": "{@background Knight of Solamnia|UA2022HeroesOfKrynnRevisited}"
                    }
                ]
            }
        ],
        "entries": [
            "Your training in the ways of the Knights of Solamnia grants you these benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Mount Up",
                        "entries": [
                            "Mounting or dismounting costs you only 5 feet of movement."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Squire Maneuvers",
                        "entries": [
                            "You learn the {@optfeature Lunging Attack}, {@optfeature Precision Attack}, or {@optfeature Pushing Attack} maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). If the maneuver requires a saving throw, the save's DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with another one from the list above."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Superiority Dice",
                        "entries": [
                            "You gain a number of superiority dice equal to your proficiency bonus. These dice are d6s, and you can use them only with the maneuver you gain from this feat and with any maneuvers you gain from feats that have this feat as a prerequisite. A superiority die is expended when you use it, and you regain all expended superiority dice when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Stealthy",
        "source": "UAFeatsForSkills",
        "page": 4,
        "ability": [
            {
                "dex": 1
            }
        ],
        "skillProficiencies": [
            {
                "stealth": true
            }
        ],
        "entries": [
            "You know how best to hide. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Stealth} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "If you are hidden, you can move up to 10 feet in the open without revealing yourself if you end the move in a position where you're not clearly visible."
                ]
            }
        ]
    },
    {
        "name": "Strike Of The Giants",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 9,
        "entries": [
            "You have absorbed primeval magic that gives you an echo of the might of giants. Choose one of the kinds of giants listed below. As a bonus action, you can call on the power of your giant magic to imbue your attacks with additional power. The next time you hit a target with a melee or thrown weapon attack within the next minute, the attack has an additional effect depending on the origin of your giant magic:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Hill Giant",
                        "entries": [
                            "The target takes an extra {@damage 1d6} damage of the weapon's type. If the target is a creature, it must succeed on a Strength saving throw or be knocked {@condition prone}."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Stone Giant",
                        "entries": [
                            "The target takes an extra {@damage 1d6} force damage. If the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you in a straight line."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Frost Giant",
                        "entries": [
                            "The target takes an extra {@damage 1d6} cold damage. If the target is a creature, it must succeed on a Constitution saving throw, or its speed is reduced to 0 until the start of your next turn."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Fire Giant",
                        "entries": [
                            "The target takes an extra {@damage 1d8} fire damage."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Cloud Giant",
                        "entries": [
                            "The target takes an extra {@damage 1d4} thunder damage. If the target is a creature, it must succeed on a Wisdom saving throw, or you become {@condition invisible} to it until the start of your next turn."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Storm Giant",
                        "entries": [
                            "The target takes an extra {@damage 1d6} lightning damage. If the target is a creature, it must succeed on a Constitution saving throw, or it has disadvantage on attack rolls until the start of your next turn."
                        ]
                    }
                ]
            },
            "The saving throw DC for these effects equals 8 + your proficiency bonus + your Strength or Constitution modifier.",
            "You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
        ]
    },
    {
        "name": "Strixhaven Initiate",
        "source": "SCC",
        "page": 36,
        "additionalSpells": [
            {
                "name": "Lorehold 1",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "light#c",
                        "sacred flame#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=cleric;wizard"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Lorehold 2",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "light#c",
                        "thaumaturgy#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=cleric;wizard"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Lorehold 3",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "sacred flame#c",
                        "thaumaturgy#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=cleric;wizard"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Prismari 1",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "fire bolt#c",
                        "prestidigitation#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=bard;sorcerer"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Prismari 2",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "fire bolt#c",
                        "ray of frost#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=bard;sorcerer"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Prismari 3",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "prestidigitation#c",
                        "ray of frost#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=bard;sorcerer"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Quandrix 1",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "druidcraft#c",
                        "guidance#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=druid;wizard"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Quandrix 2",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "druidcraft#c",
                        "mage hand#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=druid;wizard"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Quandrix 3",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "guidance#c",
                        "mage hand#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=druid;wizard"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Silverquill 1",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "sacred flame#c",
                        "thaumaturgy#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=bard;cleric"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Silverquill 2",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "sacred flame#c",
                        "vicious mockery#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=bard;cleric"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Silverquill 3",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "thaumaturgy#c",
                        "vicious mockery#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=bard;cleric"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Witherbloom 1",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "chill touch#c",
                        "druidcraft#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=druid;wizard"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Witherbloom 2",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "chill touch#c",
                        "spare the dying#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=druid;wizard"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "name": "Witherbloom 3",
                "ability": {
                    "choose": [
                        "int",
                        "wis",
                        "cha"
                    ]
                },
                "known": {
                    "_": [
                        "druidcraft#c",
                        "spare the dying#c"
                    ]
                },
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                {
                                    "choose": "level=1|class=druid;wizard"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You have studied some magical theory and have learned a few spells associated with Strixhaven University.",
            "Choose one of Strixhaven's colleges: Lorehold, Prismari, Quandrix, Silverquill, or Witherbloom. You learn two cantrips and one 1st-level spell based on the college you choose, as specified in the Strixhaven Spells table.",
            "You can cast the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.",
            "Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
            {
                "type": "table",
                "caption": "Strixhaven Spells",
                "colLabels": [
                    "College",
                    "Cantrips",
                    "1st-Level Spell"
                ],
                "colStyles": [
                    "col-2",
                    "col-5",
                    "col-5"
                ],
                "rows": [
                    [
                        "Lorehold",
                        "Choose two from {@spell light}, {@spell sacred flame}, and {@spell thaumaturgy}.",
                        "Choose one 1st-level {@filter cleric or wizard spell|spells|level=1|class=cleric;wizard}."
                    ],
                    [
                        "Prismari",
                        "Choose two from {@spell fire bolt}, {@spell prestidigitation}, and {@spell ray of frost}.",
                        "Choose one 1st-level {@filter bard or sorcerer spell|spells|level=1|class=bard;sorcerer}."
                    ],
                    [
                        "Quandrix",
                        "Choose two from {@spell druidcraft}, {@spell guidance}, and {@spell mage hand}.",
                        "Choose one 1st-level {@filter druid or wizard spell|spells|level=1|class=druid;wizard}."
                    ],
                    [
                        "Silverquill",
                        "Choose two from {@spell sacred flame}, {@spell thaumaturgy}, and {@spell vicious mockery}.",
                        "Choose one 1st-level {@filter bard or cleric spell|spells|level=1|class=bard;cleric}."
                    ],
                    [
                        "Witherbloom",
                        "Choose two from {@spell chill touch}, {@spell druidcraft}, and {@spell spare the dying}.",
                        "Choose one 1st-level {@filter druid or wizard spell|spells|level=1|class=druid;wizard}."
                    ]
                ]
            }
        ]
    },
    {
        "name": "Strixhaven Mascot",
        "source": "SCC",
        "page": 37,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "strixhaven initiate|scc"
                ]
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "_": {
                        "ritual": [
                            "find familiar"
                        ]
                    }
                }
            }
        ],
        "entries": [
            "You have learned how to summon a Strixhaven mascot to assist you, granting you these benefits:",
            {
                "type": "list",
                "items": [
                    "You can cast the {@spell find familiar} spell as a ritual. Your familiar can take the form of the mascot associated with the college you chose for the Strixhaven Initiate feat: a {@creature spirit statue mascot|scc} (Lorehold), an {@creature art elemental mascot|scc} (Prismari), a {@creature fractal mascot|scc} (Quandrix), an {@creature inkling mascot|scc} (Silverquill), or a {@creature pest mascot|scc} (Witherbloom).",
                    "When you take the {@action Attack} action on your turn, you can forgo one attack to allow your mascot familiar to make one attack of its own with its reaction.",
                    "If your mascot familiar is within 60 feet of you, you can teleport as an action, swapping places with the familiar. If your destination space is too small for you to occupy, the teleportation fails and is wasted. Once you teleport in this way, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to do it again."
                ]
            }
        ]
    },
    {
        "name": "Survivalist",
        "source": "UAFeatsForSkills",
        "page": 4,
        "ability": [
            {
                "wis": 1
            }
        ],
        "skillProficiencies": [
            {
                "survival": true
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "alarm"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You master wilderness lore, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Survival} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell alarm} spell. You can cast it once without expending a spell slot, and you regain the ability to do so when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Svirfneblin Magic",
        "source": "MTF",
        "page": 114,
        "additionalSources": [
            {
                "source": "EEPC",
                "page": 7
            },
            {
                "source": "SCAG",
                "page": 115
            }
        ],
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome",
                        "subrace": "deep"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": "int",
                "innate": {
                    "_": {
                        "will": [
                            "nondetection"
                        ],
                        "daily": {
                            "1e": [
                                "blindness/deafness",
                                "blur",
                                "disguise self"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You have inherited the innate spellcasting ability of your ancestors. This ability allows you to cast {@spell nondetection} on yourself at will, without needing a material component. You can also cast each of the following spells once with this ability: {@spell blindness/deafness}, {@spell blur}, and {@spell disguise self}. You regain the ability to cast these spells when you finish a long rest.",
            "Intelligence is your spellcasting ability for these spells, and you cast them at their lowest possible levels."
        ]
    },
    {
        "name": "Tandem Tactician",
        "source": "UA2020Feats",
        "page": 3,
        "entries": [
            "Your presence in a scrap tends to elevate your comrades. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You can use the {@action Help} action as a bonus action.",
                    "When you use the {@action Help} action to aid an ally in attacking a creature, increase the range of the {@action Help} action by 10 feet. Additionally, you can help two allies targeting the same creature within range when you use the {@action Help} action this way."
                ]
            }
        ]
    },
    {
        "name": "Tavern Brawler",
        "source": "PHB",
        "page": 170,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You are proficient with improvised weapons.",
                    "Your unarmed strike uses a {@damage d4} for damage.",
                    "When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."
                ]
            }
        ]
    },
    {
        "name": "Telekinetic",
        "source": "TCE",
        "page": 81,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "additionalSpells": [
            {
                "ability": "inherit",
                "known": {
                    "_": [
                        "mage hand#c"
                    ]
                }
            }
        ],
        "entries": [
            "You learn to move things with your mind, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell mage hand} cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand {@condition invisible}. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat.",
                    "As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. A creature can willingly fail this save."
                ]
            }
        ]
    },
    {
        "name": "Telekinetic",
        "source": "UA2020PsionicOptionsRevisited",
        "page": 8,
        "prerequisite": [
            {
                "psionics": true
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "additionalSpells": [
            {
                "ability": "inherit",
                "known": {
                    "_": [
                        "mage hand#c"
                    ]
                }
            }
        ],
        "entries": [
            "You learn to move things with your mind. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell mage hand} cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand {@condition invisible}. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat.",
                    "As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, roll your Psionic Talent die, and the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved toward you or away from you a number of feet equal to 5 times the number you rolled. A creature can willingly fail this save."
                ]
            }
        ]
    },
    {
        "name": "Telekinetic",
        "source": "UAFighterRogueWizard",
        "page": 8,
        "ability": [
            {
                "int": 1
            }
        ],
        "additionalSpells": [
            {
                "known": {
                    "_": [
                        "mage hand#c"
                    ]
                }
            }
        ],
        "entries": [
            "You learn to move things with your mind. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell mage hand} cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible.",
                    "As a bonus action, you can try to shove one creature you can see within 5 feet of the spectral hand created by your {@spell mage hand} spell. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Intelligence modifier) or be pushed 5 feet away from you."
                ]
            }
        ]
    },
    {
        "name": "Telepathic",
        "source": "TCE",
        "page": 81,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "additionalSpells": [
            {
                "ability": "inherit",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "detect thoughts"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You awaken the ability to mentally connect with others, granting you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You can speak telepathically to any creature you can see within 60 feet of you. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn't give the creature the ability to respond to you telepathically.",
                    "You can cast the {@spell detect thoughts} spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them."
                ]
            }
        ]
    },
    {
        "name": "Telepathic",
        "source": "UA2020PsionicOptionsRevisited",
        "page": 8,
        "prerequisite": [
            {
                "psionics": true
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "additionalSpells": [
            {
                "ability": "inherit",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "detect thoughts"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You awaken the ability to mentally connect with others. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You can speak telepathically to any creature you can see within 30 feet of you. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn't give the creature the ability to respond to you telepathically.",
                    "If your Psionic Talent die is available, you can cast the {@spell detect thoughts} spell, requiring no components. When you start casting the spell, your Psionic Talent die decreases by one die size. Your spellcasting ability for the spell is the ability increased by this feat."
                ]
            }
        ]
    },
    {
        "name": "Telepathic",
        "source": "UAFighterRogueWizard",
        "page": 8,
        "ability": [
            {
                "int": 1
            }
        ],
        "skillProficiencies": [
            {
                "choose": {
                    "from": [
                        "insight",
                        "deception",
                        "intimidation",
                        "persuasion"
                    ]
                }
            }
        ],
        "entries": [
            "You awaken the ability to mentally connect with others. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in one skill of your choice from the following list: {@skill Deception}, {@skill Insight}, {@skill Intimidation}, or {@skill Persuasion}.",
                    "You can communicate telepathically with any creature you can see within 30 feet of you. If it understands at least one language, it can respond to you telepathically."
                ]
            }
        ]
    },
    {
        "name": "Theologian",
        "source": "UAFeatsForSkills",
        "page": 4,
        "ability": [
            {
                "int": 1
            }
        ],
        "skillProficiencies": [
            {
                "religion": true
            }
        ],
        "additionalSpells": [
            {
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "detect evil and good"
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        "thaumaturgy#c"
                    ]
                }
            }
        ],
        "entries": [
            "Your extensive study of religion rewards you with the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Religion} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell thaumaturgy} and {@spell detect evil and good} spells. You can cast {@spell detect evil and good} once without expending a spell slot, and you regain the ability to do so when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Tough",
        "source": "PHB",
        "page": 170,
        "entries": [
            "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
        ]
    },
    {
        "name": "Tower of Iron Will",
        "source": "UA2020PsionicOptionsRevisited",
        "page": 9,
        "prerequisite": [
            {
                "psionics": true
            }
        ],
        "entries": [
            "Your mind's defenses are formidable. After you or another creature you can see within 30 feet of you fails a saving throw, you can use your reaction to roll your Psionic Talent die and add the number rolled to the saving throw, potentially causing it to succeed."
        ]
    },
    {
        "name": "Tracker",
        "source": "UA2020Feats",
        "page": 3,
        "ability": [
            {
                "wis": 1
            }
        ],
        "additionalSpells": [
            {
                "ability": "wis",
                "innate": {
                    "_": {
                        "daily": {
                            "1": [
                                "hunter's mark"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You have spent time hunting creatures and honed your skills, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell hunter's mark} spell. You can cast it once without expending a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have. Wisdom is your spellcasting ability for this spell.",
                    "You have advantage on Wisdom ({@skill Survival}) checks to track creatures"
                ]
            }
        ]
    },
    {
        "name": "Vampiric Exultation",
        "source": "PSX",
        "page": 14,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "Vampire (Ixalan)"
                    }
                ]
            }
        ],
        "entries": [
            "As an action, you can transform the lower half of your body into an inky black vapor, allowing you to float through the air. While transformed, you have a flying speed of 30 feet. You can maintain this form for up to 10 minutes. Once you use this ability, you can't use it again until you finish a short or long rest."
        ]
    },
    {
        "name": "Vigor of the Hill Giant",
        "source": "UA2022GiantOptions",
        "page": 5,
        "prerequisite": [
            {
                "level": 4
            }
        ],
        "entries": [
            "You've manifested the resilience emblematic of hill giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Bulwark",
                        "entries": [
                            "When you are subjected to an effect that would move you at least 5 feet or knock you {@condition prone}, you can use your reaction to steady yourself. You are then neither moved nor knocked {@condition prone}."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Hearty Health",
                        "entries": [
                            "When you are subjected to a spell that restores your hit points, you can regain additional hit points equal to your Constitution modifier. You can regain these additional hit points a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Vigor Of The Hill Giant",
        "source": "UA2022WondersOfTheMultiverse",
        "page": 10,
        "prerequisite": [
            {
                "level": 4,
                "feat": [
                    "strike of the giants|ua2022wondersofthemultiverse|strike of the giants (hill giant)"
                ]
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "You've manifested the resilience emblematic of hill giants, granting you the following benefits:",
            {
                "type": "list",
                "style": "list-hang-notitle",
                "items": [
                    {
                        "type": "item",
                        "name": "Bulwark",
                        "entries": [
                            "When you are subjected to an effect that would move you at least 5 feet or knock you {@condition prone}, you can use your reaction to steady yourself. You are then neither moved nor knocked {@condition prone}."
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Iron Stomach",
                        "entries": [
                            "Whenever you eat food as part of a short rest and spend one or more Hit Dice to regain hit points, you regain additional hit points equal to your Constitution modifier + your proficiency bonus."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "War Caster",
        "source": "PHB",
        "page": 170,
        "prerequisite": [
            {
                "spellcasting": true
            }
        ],
        "entries": [
            "You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.",
                    "You can perform the somatic components of spells even when you have weapons or a {@item shield|phb} in one or both hands.",
                    "When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature."
                ]
            }
        ]
    },
    {
        "name": "Warhammer Master",
        "source": "UAFeats",
        "page": 2,
        "entries": [
            "{@note This feat is presented as an illustrative example of a poorly-designed feat, and is not intended to be used in play. The {@feat Fell Handed|UAFeats} feat is presented as a well-designed implementation of the same ideas, and should be used instead.}",
            "When you hit a creature with a {@item warhammer|phb}, the  creature must succeed on a Strength saving  throw (DC 8 + your proficiency bonus + your  Strength modifier) or be knocked {@condition prone}.",
            "In addition, you can use your warhammer to  knock away a foe's shield. If you hit a creature  that's using a shield, you can have the attack deal  no damage and force the creature to drop its  shield."
        ]
    },
    {
        "name": "Weapon Master",
        "source": "PHB",
        "page": 170,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "weaponProficiencies": [
            {
                "choose": {
                    "fromFilter": "type=martial weapon;mundane weapon|miscellaneous=mundane",
                    "count": 4
                }
            }
        ],
        "entries": [
            "You have practiced extensively with a variety of weapons, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with four weapons of your choice. Each one must be a simple or a martial weapon."
                ]
            }
        ]
    },
    {
        "name": "Wild Talent",
        "source": "UA2020PsionicOptionsRevisited",
        "page": 9,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                },
                "hidden": true
            }
        ],
        "entries": [
            "You awaken to your psionic potential, which enhances your mind or body. Increase one ability score of your choice by 1, to a maximum of 20, to represent this enhancement.",
            "You also harbor a wellspring of psionic power within yourself, an energy that ebbs and flows as you channel it in various ways. This power is represented by your Psionic Talent die, the starting size of which is a {@dice d6}.",
            {
                "type": "entries",
                "name": "Psionic Talent Options",
                "entries": [
                    "You can use your Psionic Talent die in the following ways:",
                    {
                        "type": "list",
                        "style": "list-hang-notitle",
                        "items": [
                            {
                                "type": "item",
                                "name": "Psi-Boosted Ability",
                                "entry": "When you make an ability check with the ability increased by this feat, you can roll your Psionic Talent die and add the number rolled to the check. You can choose to do so before or after rolling the {@dice d20}, but before you know whether the check succeeded or failed."
                            },
                            {
                                "type": "item",
                                "name": "Psi-Guided Strike",
                                "entry": "Once on each of your turns when you hit with an attack roll that uses the ability increased by this feat, you can roll your Psionic Talent die after you make the damage roll and then replace one of the damage dice with the number rolled on the Psionic Talent die."
                            }
                        ]
                    }
                ]
            },
            {
                "type": "entries",
                "name": "Changing the Die's Size",
                "entries": [
                    "If you roll the highest number on your Psionic Talent die, it decreases by one die size after the roll. This represents you burning through your psionic energy. For example, if the die is a {@dice d6} and you roll a 6, it becomes a {@dice d4}. If it's a {@dice d4} and you roll a 4, it becomes unusable until you finish a long rest.",
                    "Conversely, if you roll a 1 on your Psionic Talent die, it increases by one die size after the roll, up to its starting size. This represents you conserving psionic energy for later use. For example, if you roll a 1 on a {@dice d4}, the die then becomes a {@dice d6}.",
                    "Whenever you finish a long rest, your Psionic Talent die resets to its starting size. When you reach certain levels, the starting size of your Psionic Talent die increases: at 5th level ({@dice d8}), 11th level ({@dice d10}), and 17th level ({@dice d12}). If you have a Psionic Talent die from another source, such as a class feature, you don't get more than one die; use only the one with the largest starting size."
                ]
            },
            {
                "type": "entries",
                "name": "Psi Replenishment",
                "entries": [
                    "As a bonus action, you can calm your mind for a moment and restore your Psionic Talent die to its starting size. You then can't use Psi Replenishment again until you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Wonder Maker",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome",
                        "subrace": "rock"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "int"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You master the tinker techniques of your people. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you make a check using your proficiency with {@item tinker's tools|phb}, you add double your proficiency bonus to the check.",
                    "When you make a device with your Tinker trait, you have the following additional options for what you make:",
                    {
                        "type": "entries",
                        "name": "Alarm",
                        "entries": [
                            "This device senses when a creature moves to within 15 feet of it without speaking aloud a password chosen when you create it. One round after a creature moves into range, the alarm makes a shrill ringing that lasts for 1 minute and can be heard from up to 300 feet away."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Calculator",
                        "entries": [
                            "This device makes doing sums easy."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Lifter",
                        "entries": [
                            "This device can be used as a {@item block and tackle|PHB}, allowing its user to hoist five times the weight the user can normally lift."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Timekeeper",
                        "entries": [
                            "This pocket watch keeps accurate time."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Weather Sensor",
                        "entries": [
                            "When used as an action, this device predicts weather conditions in a 1-mile radius over the next 4 hours, showing one symbol (clouds, sun/moon, rain, or snow) for each hour."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Wood Elf Magic",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "wood"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": "wis",
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "longstrider",
                                "pass without trace"
                            ]
                        }
                    }
                }
            }
        ],
        "entries": [
            "You learn the magic of the primeval woods. You learn one druid cantrip of your choice. You also learn {@spell longstrider} and {@spell pass without trace}, each of which you can cast once without expending a spell slot. You regain the ability to cast the spell in this way when you finish a long rest. Wisdom is your spellcasting ability for these spells."
        ]
    },
    {
        "name": "Wood Elf Magic",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "wood"
                    }
                ]
            }
        ],
        "additionalSpells": [
            {
                "ability": "wis",
                "innate": {
                    "_": {
                        "daily": {
                            "1e": [
                                "longstrider",
                                "pass without trace"
                            ]
                        }
                    }
                },
                "known": {
                    "_": [
                        {
                            "choose": "level=0|class=Druid"
                        }
                    ]
                }
            }
        ],
        "entries": [
            "You learn the magic of the primeval woods, which are revered and protected by your people. You learn one druid cantrip of your choice. You also learn the {@spell longstrider} and {@spell pass without trace} spells, each of which you can cast once without expending a spell slot. You regain the ability to cast these two spells in this way when you finish a long rest. Wisdom is your spellcasting ability for all three spells."
        ]
    }
]
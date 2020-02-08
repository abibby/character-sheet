declare const _default: ({
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
        "condition": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r": boolean;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "entries": string[];
        "by": string;
    })[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "m": string;
        "r": boolean;
        "v"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r": boolean;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "entries": string[];
        "by": string;
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "entries": string[];
        "by": string;
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "classes"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "damageInflict": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": ({
        "name": string;
        "source": string;
        "baseName"?: undefined;
        "baseSource"?: undefined;
    } | {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    })[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": string[][];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageResist": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageResist": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "damageResist": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": ((string | {
            "type": string;
            "roll": {
                "exact": number;
            };
        })[] | (string | {
            "type": string;
            "roll": {
                "min": number;
                "max": number;
            };
        })[])[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "conditionInflict": string[];
    "spellAttack": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": string[][];
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
        "condition": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": string[][];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": ({
        "name": string;
        "source": string;
        "baseName"?: undefined;
        "baseSource"?: undefined;
    } | {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    })[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": ({
        "name": string;
        "source": string;
        "baseName"?: undefined;
        "baseSource"?: undefined;
    } | {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    })[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "spellAttack": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance"?: undefined;
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "name": string;
        "type": string;
        "entries": string[];
    })[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
            "upTo": boolean;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
        "condition": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "damageResist": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "damageResist": string[];
    "damageInflict": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": ({
        "name": string;
        "source": string;
        "baseName"?: undefined;
        "baseSource"?: undefined;
    } | {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    })[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "damageInflict": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "s": boolean;
        "m": string;
        "v"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": ({
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    } | {
        "name": string;
        "source": string;
        "baseName"?: undefined;
        "baseSource"?: undefined;
    })[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
    })[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": ({
        "name": string;
        "source": string;
        "baseName"?: undefined;
        "baseSource"?: undefined;
    } | {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    })[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "damageResist": string[];
    "damageVulnerable": string[];
    "savingThrow": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
        "condition": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "damageImmune": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "opposedCheck": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "m": string;
        "v"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "v"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": ({
        "name": string;
        "source": string;
        "baseName"?: undefined;
        "baseSource"?: undefined;
    } | {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    })[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "savingThrow": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": ({
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    } | {
        "name": string;
        "source": string;
        "baseName"?: undefined;
        "baseSource"?: undefined;
    })[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "opposedCheck": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "damageImmune": string[];
    "damageInflict": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "m": string;
        "v"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "opposedCheck": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "damageInflict": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageImmune": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "spellAttack": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
            "upTo": boolean;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": string[];
    "opposedCheck": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageResist": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "consume": boolean;
            "cost"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "damageResist": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "spellAttack": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "spellAttack": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": ((string | {
            "type": string;
            "roll": {
                "min": number;
                "max": number;
                "pad": boolean;
            };
        })[] | (string | {
            "type": string;
            "roll": {
                "min": number;
                "max": number;
            };
        })[])[];
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": string[][];
    })[];
    "savingThrow": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
        "condition": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "opposedCheck": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageResist": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": ({
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    } | {
        "name": string;
        "source": string;
        "baseName"?: undefined;
        "baseSource"?: undefined;
    })[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "conditionInflict": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": string[][];
        "name"?: undefined;
        "entries"?: undefined;
    } | {
        "type": string;
        "name": string;
        "entries": string[];
        "caption"?: undefined;
        "colLabels"?: undefined;
        "colStyles"?: undefined;
        "rows"?: undefined;
    })[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
            "upTo": boolean;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        })[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageImmune": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": ({
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass": string;
            };
        } | {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
                "subSubclass"?: undefined;
            };
        })[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "damageResist": string[];
    "damageInflict": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "scalingLevelDice": ({
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    } | {
        "label": string;
        "scaling": {
            "5": string;
            "11": string;
            "17": string;
            "1"?: undefined;
        };
    })[];
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": ({
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    } | {
        "label": string;
        "scaling": {
            "5": string;
            "11": string;
            "17": string;
            "1"?: undefined;
        };
    })[];
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "page"?: undefined;
    "components"?: undefined;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "page"?: undefined;
    "components"?: undefined;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "page"?: undefined;
    "components"?: undefined;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
        "condition": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "name": string;
        "type": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "name": string;
        "type": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "damageInflict": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "opposedCheck": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": ((string | {
            "type": string;
            "roll": {
                "exact": number;
            };
        })[] | (string | {
            "type": string;
            "roll": {
                "min": number;
                "max": number;
            };
        })[])[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "savingThrow": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "savingThrow": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "condition": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": (string | {
            "type": string;
            "roll": {
                "exact": number;
            };
        })[][];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "entries": string[];
    "miscTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    };
    "damageInflict": string[];
    "spellAttack": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "consume": boolean;
            "cost"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "entries": string[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "entries": string[];
    "scalingLevelDice": {
        "label": string;
        "scaling": {
            "1": string;
            "5": string;
            "11": string;
            "17": string;
        };
    }[];
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "entries": string[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
            "upTo": boolean;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
        "condition": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageResist": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "m": string;
        "v"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": (string | {
            "type": string;
            "roll": {
                "exact": number;
            };
        })[][];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "otherSources": {
        "source": string;
    }[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": ({
        "type": string;
        "duration"?: undefined;
    } | {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "consume": boolean;
            "cost"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
        "items"?: undefined;
    } | {
        "type": string;
        "items": string[];
        "name"?: undefined;
        "entries"?: undefined;
    })[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass": {
            "class": {
                "name": string;
                "source": string;
            };
            "subclass": {
                "name": string;
                "source": string;
            };
        }[];
        "fromClassListVariant"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
        "items"?: undefined;
    } | {
        "type": string;
        "items": string[];
        "name"?: undefined;
        "entries"?: undefined;
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "m": string;
        "v"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "spellAttack": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "damageImmune": string[];
    "damageInflict": string[];
    "damageResist": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "damageResist": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume": boolean;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageImmune": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "damageImmune": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "damageResist": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": ({
        "type": string;
        "duration"?: undefined;
    } | {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    })[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "consume": boolean;
            "cost"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "opposedCheck": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
        "condition": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "m": string;
        "v"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "spellAttack": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "savingThrow": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": (string | {
            "type": string;
            "roll": {
                "min": number;
                "max": number;
            };
        })[][];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": {
            "text": string;
            "cost": number;
            "consume"?: undefined;
        };
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "s": boolean;
        "v"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "ends": string[];
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageImmune": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "spellAttack": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "races": {
        "name": string;
        "source": string;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "m": string;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "m": string;
        "s"?: undefined;
        "r"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount": number;
        };
    };
    "components": {
        "v": boolean;
        "s": boolean;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "spellAttack": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
    "range": {
        "type": string;
        "distance": {
            "type": string;
            "amount"?: undefined;
        };
    };
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "duration": {
        "type": string;
        "duration": {
            "type": string;
            "amount": number;
        };
        "concentration": boolean;
    }[];
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "srd"?: undefined;
    "scalingLevelDice"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
})[];
export default _default;

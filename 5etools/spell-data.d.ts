declare const _default: ({
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "page": number;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "page": number;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "conditionInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "page": number;
    "entries": (string | {
        "type": string;
        "entries": string[];
        "by": string;
    })[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "page": number;
    "entries": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "page": number;
    "entries": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "page": number;
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
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "page": number;
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
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "page": number;
    "classes"?: undefined;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "areaTags": string[];
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
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageInflict": string[];
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
    "miscTags"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "savingThrow": string[];
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
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
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
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "page": number;
    "damageInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageResist": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageResist": string[];
    "areaTags": string[];
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
    "meta"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "conditionInflict": string[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "page": number;
    "damageInflict": string[];
    "opposedCheck": string[];
    "spellAttack": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageResist": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
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
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
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
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "spellAttack": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": string[][];
    })[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
    }[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "opposedCheck": string[];
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
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "opposedCheck": string[];
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
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
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
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "name": string;
        "type": string;
        "entries": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
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
    "conditionInflict": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "opposedCheck": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageResist": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
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
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
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
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "damageResist": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
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
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
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
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
    })[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
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
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageResist": string[];
    "damageVulnerable": string[];
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "opposedCheck": string[];
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "damageImmune": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "opposedCheck": string[];
    "areaTags": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "areaTags": string[];
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
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
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
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "miscTags": string[];
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
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "opposedCheck": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "conditionInflict": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "damageImmune": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
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
    "source": string;
    "entries": string[];
    "page": number;
    "opposedCheck": string[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "conditionInflict": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageImmune": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
    };
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "miscTags": string[];
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
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
    }[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
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
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "opposedCheck": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "opposedCheck": string[];
    "conditionInflict": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageResist": string[];
    "areaTags": string[];
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
    "meta"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageResist": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "areaTags": string[];
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
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
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
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
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
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
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
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": string[][];
    })[];
    "page": number;
    "savingThrow": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
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
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
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
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "opposedCheck": string[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageResist": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
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
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
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
    "page": number;
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "miscTags": string[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "entriesHigherLevel"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
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
    "source": string;
    "entries": string[];
    "page": number;
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
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
    "miscTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageImmune": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": string[];
    "page": number;
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant": {
            "name": string;
            "source": string;
        }[];
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
    "races": {
        "name": string;
        "source": string;
        "baseName": string;
        "baseSource": string;
    }[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "page": number;
    "damageInflict": string[];
    "damageResist": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "page": number;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "conditionInflict": string[];
    "entriesHigherLevel"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
        "unit": string;
    }[];
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
    "source": string;
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "backgrounds": {
        "name": string;
        "source": string;
    }[];
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "spellAttack": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "areaTags": string[];
    "components"?: undefined;
    "page"?: undefined;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "components"?: undefined;
    "page"?: undefined;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "source": string;
    "entries": string[];
    "components"?: undefined;
    "page"?: undefined;
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
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
    "source": string;
    "entries": string[];
    "entriesHigherLevel": {
        "type": string;
        "name": string;
        "entries": string[];
    }[];
    "page": number;
    "damageInflict": string[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
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
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "savingThrow": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "meta": {
        "technomagic": boolean;
        "ritual"?: undefined;
    };
    "entries": string[];
    "savingThrow": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
} | {
    "name": string;
    "level": number;
    "school": string;
    "time": {
        "number": number;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "source": string;
    "page": number;
    "components": {
        "v": boolean;
        "s"?: undefined;
        "r"?: undefined;
        "m"?: undefined;
    };
    "damageInflict": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
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
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "damageInflict": string[];
    "spellAttack": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "backgrounds"?: undefined;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "savingThrow": string[];
    "opposedCheck": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
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
    "classes": {
        "fromClassList": {
            "name": string;
            "source": string;
        }[];
        "fromClassListVariant"?: undefined;
        "fromSubclass"?: undefined;
    };
    "entries": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "savingThrow": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "meta": {
        "ritual": boolean;
        "technomagic"?: undefined;
    };
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "savingThrow"?: undefined;
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "entries": string[];
    "page": number;
    "savingThrow": string[];
    "areaTags": string[];
    "miscTags": string[];
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "entriesHigherLevel"?: undefined;
    "conditionInflict"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "opposedCheck"?: undefined;
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "entries": string[];
    "page": number;
    "damageInflict": string[];
    "savingThrow": string[];
    "conditionInflict": string[];
    "areaTags": string[];
    "entriesHigherLevel"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "damageInflict"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
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
    "areaTags"?: undefined;
    "miscTags"?: undefined;
    "backgrounds"?: undefined;
    "races"?: undefined;
    "meta"?: undefined;
    "damageResist"?: undefined;
    "opposedCheck"?: undefined;
    "spellAttack"?: undefined;
    "damageVulnerable"?: undefined;
    "damageImmune"?: undefined;
    "otherSources"?: undefined;
})[];
export default _default;

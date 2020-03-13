declare const _default: ({
    "name": string;
    "source": string;
    "page": number;
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "prerequisite": {
        "other": string;
    }[];
    "ability": {
        "con": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
        "caption"?: undefined;
        "colLabels"?: undefined;
        "colStyles"?: undefined;
        "rows"?: undefined;
        "entries"?: undefined;
    } | {
        "type": string;
        "caption": string;
        "colLabels": string[];
        "colStyles": string[];
        "rows": string[][];
        "items"?: undefined;
        "entries"?: undefined;
    } | {
        "type": string;
        "entries": {
            "type": string;
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[];
        "items"?: undefined;
        "caption"?: undefined;
        "colLabels"?: undefined;
        "colStyles"?: undefined;
        "rows"?: undefined;
    })[];
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "ability": {
        "dex": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "prerequisite"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "ability": {
        "cha": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "prerequisite"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "ability": {
        "int": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "prerequisite"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "prerequisite"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "ability": {
        "wis": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "prerequisite"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "ability": {
        "choose": {
            "from": string[];
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "prerequisite"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "ability": {
        "str": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "prerequisite"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": {
            "name": string;
            "subrace": string;
        }[];
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": {
            "name": string;
        }[];
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "ability": {
        "con": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "prerequisite"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": {
            "name": string;
        }[];
    }[];
    "ability": {
        "con": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": {
            "name": string;
        }[];
    }[];
    "ability": {
        "dex": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": {
            "name": string;
        }[];
    }[];
    "ability": {
        "cha": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": {
            "name": string;
        }[];
    }[];
    "ability": {
        "int": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": {
            "name": string;
            "subrace": string;
        }[];
    }[];
    "ability": {
        "int": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "prerequisite": {
        "ability": {
            "str": number;
        }[];
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "proficiency": {
            "armor": string;
        }[];
    }[];
    "ability": {
        "str": number;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "ability": {
            "cha": number;
        }[];
    }[];
    "entries": string[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "proficiency": {
            "armor": string;
        }[];
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "proficiency": {
            "armor": string;
        }[];
    }[];
    "ability": {
        "choose": {
            "from": string[];
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": {
            "name": string;
        }[];
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "ability": {
            "int": number;
        }[];
    }[];
    "entries": (string | {
        "type": string;
        "name": string;
        "entries": string[];
    })[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "ability": {
        "choose": {
            "from": string[];
            "amount": number;
            "textreference": boolean;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "prerequisite"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "otherSources": {
        "source": string;
        "page": number;
    }[];
    "prerequisite": {
        "race": {
            "name": string;
        }[];
    }[];
    "ability": {
        "choose": {
            "from": string[];
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "ability": ({
            "int": number;
            "wis"?: undefined;
        } | {
            "wis": number;
            "int"?: undefined;
        })[];
    }[];
    "entries": string[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "ability": {
            "dex": number;
        }[];
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "spellcasting": boolean;
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": ({
            "name": string;
            "displayEntry"?: undefined;
        } | {
            "name": string;
            "displayEntry": string;
        })[];
    }[];
    "ability": {
        "choose": {
            "from": string[];
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": string[];
    })[];
    "otherSources"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "additionalSources": {
        "source": string;
        "page": number;
    }[];
    "prerequisite": {
        "race": {
            "name": string;
            "subrace": string;
        }[];
    }[];
    "entries": string[];
    "otherSources"?: undefined;
    "ability"?: undefined;
    "srd"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "prerequisite": {
        "race": {
            "name": string;
            "subrace": string;
        }[];
    }[];
    "ability": {
        "choose": {
            "from": string[];
            "amount": number;
        };
    }[];
    "entries": (string | {
        "type": string;
        "items": (string | {
            "type": string;
            "name": string;
            "entries": string[];
        })[];
    })[];
    "otherSources"?: undefined;
    "srd"?: undefined;
    "additionalSources"?: undefined;
})[];
export default _default;

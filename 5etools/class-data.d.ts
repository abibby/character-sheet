declare const _default: ({
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative"?: undefined;
    };
    "classFeatures": (({
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "gainSubclassFeature"?: undefined;
    })[] | {
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
    }[])[];
    "subclassTitle": string;
    "subclasses": {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    }[];
    "page": number;
    "multiclassing"?: undefined;
    "fluff"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "multiclassing": {
        "requirements": {
            "int": number;
            "str"?: undefined;
            "cha"?: undefined;
            "wis"?: undefined;
            "or"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "tools": string[];
            "weapons"?: undefined;
            "skills"?: undefined;
        };
    };
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "fluff": {
        "page": number;
        "source": string;
        "type": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
    }[];
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
    })[] | ({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": string[];
        })[];
        "gainSubclassFeature": boolean;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature"?: undefined;
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                    "caption"?: undefined;
                    "colLabels"?: undefined;
                    "colStyles"?: undefined;
                    "rows"?: undefined;
                } | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                    "name"?: undefined;
                    "entries"?: undefined;
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            }[];
        }[])[];
        "shortName": string;
        "page": number;
        "source": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "shortName": string;
        "page": number;
        "source": string;
    })[];
    "page": number;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "classTableGroups": {
        "colLabels": string[];
        "rows": (string | {
            "type": string;
            "value": number;
        })[][];
    }[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "str": number;
            "int"?: undefined;
            "cha"?: undefined;
            "wis"?: undefined;
            "or"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "weapons": string[];
            "tools"?: undefined;
            "skills"?: undefined;
        };
    };
    "classFeatures": ({
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
    }[] | ({
        "name": string;
        "entries": string[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
    })[] | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    }[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "spellcastingAbility"?: undefined;
    } | {
        "name": string;
        "spellcastingAbility": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": (string | number)[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "spellcastingAbility"?: undefined;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "source": string;
        "page": number;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "source": string;
        "page": number;
    })[];
    "page": number;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "cha": number;
            "int"?: undefined;
            "str"?: undefined;
            "wis"?: undefined;
            "or"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "skills": {
                "choose": number;
                "from": string[];
            };
            "tools": string[];
            "weapons"?: undefined;
        };
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": string[];
        })[];
        "source": string;
        "page": number;
    })[] | ({
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature"?: undefined;
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "source": string;
        "page": number;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        } | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "entries": {
                    "type": string;
                    "name": string;
                    "entries": string[];
                }[];
            })[];
            "by"?: undefined;
        })[];
        "source": string;
        "page": number;
    })[];
    "page": number;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "wis": number;
            "int"?: undefined;
            "str"?: undefined;
            "cha"?: undefined;
            "or"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "tools"?: undefined;
            "weapons"?: undefined;
            "skills"?: undefined;
        };
    };
    "classFeatures": ({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": string[];
        })[];
        "gainSubclassFeature": boolean;
        "source"?: undefined;
        "page"?: undefined;
    })[][];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
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
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            }[];
        }[] | {
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
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
        }[] | {
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
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
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[] | {
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
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
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[] | {
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        }[])[];
        "source": string;
        "shortName": string;
        "page": number;
    })[];
    "fluff": {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
                "name"?: undefined;
                "entries"?: undefined;
            } | {
                "type": string;
                "name": string;
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
                "caption"?: undefined;
                "colLabels"?: undefined;
                "colStyles"?: undefined;
                "rows"?: undefined;
            })[];
            "by"?: undefined;
        })[];
        "source": string;
        "page": number;
    }[];
    "page": number;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "wis": number;
            "int"?: undefined;
            "str"?: undefined;
            "cha"?: undefined;
            "or"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "tools"?: undefined;
            "weapons"?: undefined;
            "skills"?: undefined;
        };
    };
    "classFeatures": ({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
    }[] | ({
        "name": string;
        "entries": (string | {
            "type": string;
            "caption": string;
            "colLabels": string[];
            "colStyles": string[];
            "rows": string[][];
            "items"?: undefined;
        } | {
            "type": string;
            "items": string[];
            "caption"?: undefined;
            "colLabels"?: undefined;
            "colStyles"?: undefined;
            "rows"?: undefined;
        })[];
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                    "name"?: undefined;
                    "entries"?: undefined;
                } | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                    "items"?: undefined;
                })[];
            })[];
        }[] | {
            "entries": {
                "name": string;
                "type": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page": number;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "source": string;
        "page": number;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "source": string;
        "page": number;
    })[];
    "page": number;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "or": {
                "str": number;
                "dex": number;
            }[];
            "int"?: undefined;
            "str"?: undefined;
            "cha"?: undefined;
            "wis"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "weapons": string[];
            "tools"?: undefined;
            "skills"?: undefined;
        };
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": {
                "type": string;
                "entries": {
                    "type": string;
                    "name": string;
                    "entries": string[];
                }[];
            }[];
        })[];
        "source": string;
        "page": number;
    })[] | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    }[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": (string | {
                            "type": string;
                            "name": string;
                            "attributes": string[];
                        })[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "subclassTableGroups"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassTableGroups": ({
            "subclasses": {
                "name": string;
                "source": string;
            }[];
            "colLabels": string[];
            "rows": number[][];
            "title"?: undefined;
        } | {
            "title": string;
            "subclasses": {
                "name": string;
                "source": string;
            }[];
            "colLabels": string[];
            "rows": number[][];
        })[];
        "spellcastingAbility": string;
        "casterProgression": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                } | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": (string | {
                            "type": string;
                            "name": string;
                            "attributes": string[];
                        })[];
                    }[];
                    "name"?: undefined;
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "spellcastingAbility": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": (string | {
                            "type": string;
                            "items": string[];
                        })[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "subclassTableGroups"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": (string | {
                            "type": string;
                            "items": string[];
                        })[];
                    }[];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "subclassTableGroups"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "attributes": string[];
                    "entries"?: undefined;
                } | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                    "name"?: undefined;
                    "attributes"?: undefined;
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "subclassTableGroups"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassTableGroups": {
            "subclasses": {
                "name": string;
                "source": string;
            }[];
            "colLabels": string[];
            "rows": number[][];
        }[];
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": (string | {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    })[];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": (string | number)[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": (string | {
                        "type": string;
                        "name": string;
                        "attributes": string[];
                    })[];
                } | {
                    "type": string;
                    "name": string;
                    "entries": (string | {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    })[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "spellcastingAbility": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": (string | {
                        "type": string;
                        "name": string;
                        "attributes": string[];
                    })[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "subclassTableGroups"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": (string | number)[][];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "subclassTableGroups"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "subclassTableGroups"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page": number;
        "subclassTableGroups"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "source": string;
        "page": number;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "source": string;
        "page": number;
    })[];
    "page": number;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "classTableGroups"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "classTableGroups": {
        "colLabels": string[];
        "rows": (number | {
            "type": string;
            "toRoll": {
                "number": number;
                "faces": number;
            }[];
            "value"?: undefined;
        } | {
            "type": string;
            "value": number;
            "toRoll"?: undefined;
        })[][];
    }[];
    "startingProficiencies": {
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "armor"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "dex": number;
            "wis": number;
            "int"?: undefined;
            "str"?: undefined;
            "cha"?: undefined;
            "or"?: undefined;
        };
        "proficienciesGained": {
            "weapons": string[];
            "armor"?: undefined;
            "tools"?: undefined;
            "skills"?: undefined;
        };
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
        "source": string;
        "page": number;
    })[] | ({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "attributes": string[];
            "entries"?: undefined;
        } | {
            "type": string;
            "name": string;
            "entries": string[];
            "attributes"?: undefined;
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": string[];
        })[];
        "source": string;
        "page": number;
    })[] | ({
        "name": string;
        "entries": string[];
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "spellcastingAbility": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": (string | {
                        "type": string;
                        "caption": string;
                        "colLabels": string[];
                        "colStyles": string[];
                        "rows": (string | number)[][];
                    })[];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": (string | {
                            "type": string;
                            "items": string[];
                        })[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "spellcastingAbility"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "spellcastingAbility"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "spellcastingAbility"?: undefined;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "source": string;
        "page": number;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "source": string;
        "page": number;
    })[];
    "page": number;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "classTableGroups": {
        "colLabels": string[];
        "rows": number[][];
    }[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    })[] | {
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
    }[])[];
    "subclassTitle": string;
    "subclasses": {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    }[];
    "page": number;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "multiclassing"?: undefined;
    "fluff"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "classTableGroups": {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    }[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "str": number;
            "cha": number;
            "int"?: undefined;
            "wis"?: undefined;
            "or"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "weapons": string[];
            "tools"?: undefined;
            "skills"?: undefined;
        };
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    })[] | ({
        "name": string;
        "entries": string[];
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "name": string;
            "entries": string[];
            "type"?: undefined;
            "source"?: undefined;
            "page"?: undefined;
        } | {
            "type": string;
            "name": string;
            "entries": string[];
            "source": string;
            "page": number;
        } | {
            "name": string;
            "type": string;
            "entries": string[];
            "source"?: undefined;
            "page"?: undefined;
        })[];
        "gainSubclassFeature": boolean;
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            }[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "page": number;
        "source": string;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "source": string;
        "page": number;
    })[];
    "page": number;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "dex": number;
            "wis": number;
            "int"?: undefined;
            "str"?: undefined;
            "cha"?: undefined;
            "or"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "skills": {
                "choose": number;
                "from": string[];
            };
            "weapons": string[];
            "tools"?: undefined;
        };
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": {
                "name": string;
                "entries": string[];
                "type": string;
            }[];
        })[];
        "source": string;
        "page": number;
    })[] | ({
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    })[] | ({
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature"?: undefined;
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "caption": string;
            "colLabels": string[];
            "colStyles": string[];
            "rows": string[][];
        })[];
        "source": string;
        "page": number;
        "gainSubclassFeature"?: undefined;
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "source": string;
        "page": number;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "page": number;
        "source": string;
    })[];
    "page": number;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "classFeatures": ({
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
    }[] | ({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
    })[] | ({
        "name": string;
        "entries": string[];
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "source": string;
        "page": number;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "page": number;
        "source": string;
    })[];
    "page": number;
    "multiclassing"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "classTableGroups": {
        "colLabels": string[];
        "rows": number[][];
    }[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": {
                "name": string;
                "entries": string[];
                "type": string;
            }[];
        })[];
        "source": string;
        "page": number;
    })[] | ({
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    })[] | ({
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
        "source"?: undefined;
        "page"?: undefined;
        "type"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature"?: undefined;
        "source"?: undefined;
        "page"?: undefined;
        "type"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "caption": string;
            "colLabels": string[];
            "colStyles": string[];
            "rows": string[][];
        })[];
        "source": string;
        "page": number;
        "gainSubclassFeature"?: undefined;
        "type"?: undefined;
    } | {
        "type": string;
        "name": string;
        "entries": string[];
        "gainSubclassFeature"?: undefined;
        "source"?: undefined;
        "page"?: undefined;
    })[] | {
        "type": string;
        "name": string;
        "entries": (string | {
            "type": string;
            "items": string[];
        })[];
    }[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "page": number;
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    })[];
    "page": number;
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "source": string;
        "page": number;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "page": number;
        "source": string;
    })[];
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "multiclassing"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "classTableGroups": {
        "colLabels": string[];
        "rows": {
            "type": string;
            "toRoll": {
                "number": number;
                "faces": number;
            }[];
        }[][];
    }[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "dex": number;
            "int"?: undefined;
            "str"?: undefined;
            "cha"?: undefined;
            "wis"?: undefined;
            "or"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "skills": {
                "choose": number;
                "from": string[];
            };
            "tools": string[];
            "weapons"?: undefined;
        };
    };
    "classFeatures": (({
        "name": string;
        "entries": string[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
    })[] | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    }[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassTableGroups": ({
            "subclasses": {
                "name": string;
                "source": string;
            }[];
            "colLabels": string[];
            "rows": number[][];
            "title"?: undefined;
        } | {
            "title": string;
            "subclasses": {
                "name": string;
                "source": string;
            }[];
            "colLabels": string[];
            "rows": number[][];
        })[];
        "spellcastingAbility": string;
        "casterProgression": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": (string | {
                            "type": string;
                            "name": string;
                            "attributes": string[];
                        })[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "subclassTableGroups"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "subclassTableGroups"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "name": string;
                "type": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page": number;
        "subclassTableGroups"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "page": number;
        "source": string;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "page": number;
        "source": string;
    })[];
    "page": number;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
} | {
    "name": string;
    "source": string;
    "classFeatures": ({
        "type": string;
        "name": string;
        "entries": string[];
    } | {
        "name": string;
        "entries": string[];
        "type"?: undefined;
    })[][];
    "fluff": {
        "entries": string[];
        "source": string;
        "page": number;
    }[];
    "page": number;
    "hd"?: undefined;
    "proficiency"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "classTableGroups"?: undefined;
    "startingProficiencies"?: undefined;
    "startingEquipment"?: undefined;
    "subclassTitle"?: undefined;
    "subclasses"?: undefined;
    "multiclassing"?: undefined;
} | {
    "name": string;
    "source": string;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "classFeatures": ({
        "type": string;
        "name": string;
        "entries": string[];
    } | {
        "name": string;
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
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
            "caption"?: undefined;
            "colLabels"?: undefined;
            "colStyles"?: undefined;
            "rows"?: undefined;
        })[];
        "type"?: undefined;
    })[][];
    "fluff": {
        "entries": string[];
        "source": string;
        "page": number;
    }[];
    "page": number;
    "hd"?: undefined;
    "proficiency"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "startingProficiencies"?: undefined;
    "startingEquipment"?: undefined;
    "subclassTitle"?: undefined;
    "subclasses"?: undefined;
    "multiclassing"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "startingProficiencies": {
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "armor"?: undefined;
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "cha": number;
            "int"?: undefined;
            "str"?: undefined;
            "wis"?: undefined;
            "or"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained"?: undefined;
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "gainSubclassFeature"?: undefined;
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
        "gainSubclassFeature"?: undefined;
    })[] | ({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": {
                "name": string;
                "entries": string[];
                "type": string;
            }[];
        })[];
        "source": string;
        "page": number;
    })[] | ({
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": {
                "name": string;
                "entries": string[];
                "type": string;
            }[];
        })[];
        "source": string;
        "page": number;
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                    "footnotes": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
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
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
                "caption"?: undefined;
                "colLabels"?: undefined;
                "colStyles"?: undefined;
                "rows"?: undefined;
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            }[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "page": number;
        "source": string;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "page": number;
        "source": string;
    })[];
    "page": number;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "classTableGroups": {
        "colLabels": string[];
        "rows": (string | number)[][];
    }[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "cha": number;
            "int"?: undefined;
            "str"?: undefined;
            "wis"?: undefined;
            "or"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained": {
            "armor": string[];
            "weapons": string[];
            "tools"?: undefined;
            "skills"?: undefined;
        };
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        })[];
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    })[] | {
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": string[];
        })[];
    }[] | {
        "name": string;
        "entries": (string | {
            "type": string;
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
                "source"?: undefined;
                "subclass"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "subclass": {
                    "name": string;
                    "source": string;
                };
            })[];
        })[];
    }[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
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
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
                "caption"?: undefined;
                "colLabels"?: undefined;
                "colStyles"?: undefined;
                "rows"?: undefined;
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": ({
                "type": string;
                "name": string;
                "entries": string[];
            } | {
                "type": string;
                "entries": {
                    "type": string;
                    "name": string;
                    "entries": string[];
                }[];
                "name"?: undefined;
            } | {
                "type": string;
                "entries": string[];
                "name"?: undefined;
            })[];
        }[])[];
        "source": string;
        "shortName": string;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "page": number;
        "source": string;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "page": number;
        "source": string;
    })[];
    "page": number;
    "casterProgression"?: undefined;
} | {
    "name": string;
    "source": string;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "startingProficiencies": {
        "weapons": string[];
        "skills": {
            "choose": number;
            "from": string[];
        };
        "armor"?: undefined;
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "multiclassing": {
        "requirements": {
            "int": number;
            "str"?: undefined;
            "cha"?: undefined;
            "wis"?: undefined;
            "or"?: undefined;
            "dex"?: undefined;
        };
        "proficienciesGained"?: undefined;
    };
    "classFeatures": (({
        "name": string;
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "attributes": string[];
            })[];
        } | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "entries": {
                    "type": string;
                    "name": string;
                    "entries": string[];
                }[];
            })[];
        })[];
        "source"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
    })[] | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    }[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            } | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                    }[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                    "caption"?: undefined;
                    "colLabels"?: undefined;
                    "colStyles"?: undefined;
                    "rows"?: undefined;
                } | {
                    "type": string;
                    "caption": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                    "items"?: undefined;
                } | {
                    "type": string;
                    "colLabels": string[];
                    "colStyles": string[];
                    "rows": string[][];
                    "items"?: undefined;
                    "caption"?: undefined;
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page"?: undefined;
    } | {
        "name": string;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": (string | {
                    "type": string;
                    "name": string;
                    "entries": (string | {
                        "type": string;
                        "style": string;
                        "items": {
                            "type": string;
                            "name": string;
                            "entry": string;
                        }[];
                    })[];
                })[];
            }[];
        }[])[];
        "source": string;
        "shortName": string;
        "page": number;
    })[];
    "fluff": ({
        "entries": (string | {
            "type": string;
            "name": string;
            "entries": (string | {
                "type": string;
                "name": string;
                "entries": string[];
            })[];
        })[];
        "page": number;
        "source": string;
    } | {
        "entries": (string | {
            "type": string;
            "entries": string[];
            "by": string;
            "name"?: undefined;
        } | {
            "type": string;
            "name": string;
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
            "by"?: undefined;
        })[];
        "page": number;
        "source": string;
    })[];
    "page": number;
})[];
export default _default;

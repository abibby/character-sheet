declare const _default: ({
    "name": string;
    "source": string;
    "page": number;
    "isReprinted": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative"?: undefined;
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
    })[] | ({
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
        "shortName": string;
        "source": string;
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
    }[];
    "multiclassing"?: undefined;
    "fluff"?: undefined;
    "srd"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "isReprinted": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
    })[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
    })[];
    "fluff": {
        "name": string;
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
    "srd"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
                "entries": string[];
            })[];
        } | {
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
        "entries": string[];
        "gainSubclassFeature": boolean;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature"?: undefined;
    })[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
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
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
            } | {
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
    })[];
    "fluff": {
        "name": string;
        "type": string;
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
        })[];
        "source": string;
        "page": number;
    }[];
    "isReprinted"?: undefined;
    "srd"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
    "classTableGroups": {
        "colLabels": string[];
        "rows": (string | {
            "type": string;
            "value": number;
        })[][];
    }[];
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
    }[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "spellcastingAbility"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
                } | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                        "source": string;
                        "page": number;
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
                } | {
                    "type": string;
                    "entries": {
                        "type": string;
                        "name": string;
                        "entries": string[];
                        "source": string;
                        "page": number;
                    }[];
                })[];
            }[];
        }[])[];
        "srd"?: undefined;
        "spellcastingAbility"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
        "spellcastingAbility"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "spellcastingAbility"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
                    "style": string;
                    "items": {
                        "type": string;
                        "name": string;
                        "entry": string;
                    }[];
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
        "srd"?: undefined;
        "spellcastingAbility"?: undefined;
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "source": string;
        "page": number;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
                "choose": {
                    "from": string[];
                    "count": number;
                };
            }[];
            "tools": string[];
            "weapons"?: undefined;
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
    })[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
                "entries": string[];
            }[];
        }[])[];
        "srd"?: undefined;
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "source": string;
        "page": number;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
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
    })[] | ({
        "name": string;
        "entries": string[];
        "type"?: undefined;
        "source"?: undefined;
        "page"?: undefined;
        "gainSubclassFeature"?: undefined;
    } | {
        "type": string;
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
        "type"?: undefined;
        "source"?: undefined;
        "page"?: undefined;
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        }[])[];
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
        "isReprinted": boolean;
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
                    "items": string[];
                })[];
            }[];
        }[])[];
        "srd"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "source": string;
        "page": number;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": (string | {
            "proficiency": string;
            "full": string;
        })[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
            "armor": (string | {
                "proficiency": string;
                "full": string;
            })[];
            "tools"?: undefined;
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
        "entries": string[];
        "source": string;
        "page": number;
    })[] | ({
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
        "entries": string[];
        "gainSubclassFeature": boolean;
        "source"?: undefined;
        "page"?: undefined;
    })[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
                "name": string;
                "type": string;
                "entries": string[];
            }[];
        }[])[];
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
                    "style": string;
                    "items": {
                        "type": string;
                        "name": string;
                        "entry": string;
                    }[];
                })[];
            })[];
        }[] | {
            "entries": {
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
            }[];
        }[])[];
        "srd"?: undefined;
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "source": string;
        "page": number;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
        "entries": string[];
        "source": string;
        "page": number;
    })[] | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
    }[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "isReprinted"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
                "source"?: undefined;
                "page"?: undefined;
            } | {
                "name": string;
                "type": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "spellcastingAbility": string;
        "casterProgression": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "source": string;
        "page": number;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "classTableGroups"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "startingProficiencies": {
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
    })[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "spellcastingAbility"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
        "spellcastingAbility"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "spellcastingAbility"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "spellcastingAbility"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
                "entries": string[];
            }[];
        }[])[];
        "srd"?: undefined;
        "spellcastingAbility"?: undefined;
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "source": string;
        "page": number;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "classTableGroups": {
        "colLabels": string[];
        "rows": number[][];
    }[];
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
    })[] | ({
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
        "shortName": string;
        "source": string;
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
    }[];
    "isReprinted"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "multiclassing"?: undefined;
    "fluff"?: undefined;
    "srd"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
    "classTableGroups": {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    }[];
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
    })[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
                "entries": string[];
            }[];
        }[])[];
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "page": number;
        "source": string;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
                "choose": {
                    "from": string[];
                    "count": number;
                };
            }[];
            "weapons": string[];
            "tools"?: undefined;
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
    })[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "srd"?: undefined;
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "source": string;
        "page": number;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
    };
    "classTableGroups": {
        "colLabels": string[];
        "rows": number[][];
    }[];
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
    })[] | ({
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
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "source": string;
        "page": number;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "multiclassing"?: undefined;
    "srd"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
        "tools"?: undefined;
    };
    "startingEquipment": {
        "additionalFromBackground": boolean;
        "default": string[];
        "goldAlternative": string;
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
    })[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "source": string;
        "page": number;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
    "multiclassing"?: undefined;
    "srd"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "tools": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
                "choose": {
                    "from": string[];
                    "count": number;
                };
            }[];
            "tools": string[];
            "weapons"?: undefined;
        };
    };
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
    }[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "spellcastingAbility": string;
        "casterProgression": string;
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
        "isReprinted"?: undefined;
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "isReprinted"?: undefined;
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "isReprinted"?: undefined;
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
        "spellcastingAbility"?: undefined;
        "casterProgression"?: undefined;
        "subclassTableGroups"?: undefined;
        "isReprinted"?: undefined;
        "srd"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "page": number;
        "source": string;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "classFeatures": (({
        "type": string;
        "name": string;
        "entries": string[];
    } | {
        "name": string;
        "entries": string[];
        "type"?: undefined;
    })[] | ({
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
    })[])[];
    "fluff": {
        "name": string;
        "type": string;
        "entries": string[];
        "source": string;
        "page": number;
    }[];
    "isReprinted"?: undefined;
    "hd"?: undefined;
    "proficiency"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "startingProficiencies"?: undefined;
    "startingEquipment"?: undefined;
    "classTableGroups"?: undefined;
    "subclassTitle"?: undefined;
    "subclasses"?: undefined;
    "multiclassing"?: undefined;
    "srd"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
    "classFeatures": (({
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
    })[] | ({
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
    })[])[];
    "fluff": {
        "name": string;
        "type": string;
        "entries": string[];
        "source": string;
        "page": number;
    }[];
    "isReprinted"?: undefined;
    "hd"?: undefined;
    "proficiency"?: undefined;
    "spellcastingAbility"?: undefined;
    "casterProgression"?: undefined;
    "startingProficiencies"?: undefined;
    "startingEquipment"?: undefined;
    "subclassTitle"?: undefined;
    "subclasses"?: undefined;
    "multiclassing"?: undefined;
    "srd"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
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
    })[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
                    "data": {
                        "tableInclude": boolean;
                    };
                })[];
            })[];
        }[] | {
            "entries": {
                "type": string;
                "name": string;
                "entries": string[];
            }[];
        }[])[];
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        }[])[];
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
                "entries": (string | {
                    "type": string;
                    "items": string[];
                })[];
            }[];
        }[])[];
        "srd"?: undefined;
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "page": number;
        "source": string;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "armor": string[];
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
    "classTableGroups": {
        "colLabels": string[];
        "rows": (string | number)[][];
    }[];
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
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "source": string;
        "page": number;
        "gainSubclassFeature"?: undefined;
    } | {
        "name": string;
        "entries": string[];
        "gainSubclassFeature": boolean;
        "source"?: undefined;
        "page"?: undefined;
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
                "page"?: undefined;
            } | {
                "type": string;
                "name": string;
                "entries": string[];
                "source": string;
                "subclass": {
                    "name": string;
                    "source": string;
                };
                "page"?: undefined;
            } | {
                "name": string;
                "source": string;
                "page": number;
                "entries": string[];
                "type"?: undefined;
                "subclass"?: undefined;
            })[];
        })[];
    }[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
                    "items"?: undefined;
                    "name"?: undefined;
                    "entries"?: undefined;
                } | {
                    "type": string;
                    "items": string[];
                    "caption"?: undefined;
                    "colLabels"?: undefined;
                    "colStyles"?: undefined;
                    "rows"?: undefined;
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
                    "items"?: undefined;
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
        "srd"?: undefined;
        "isReprinted"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "page": number;
        "source": string;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
} | {
    "name": string;
    "source": string;
    "page": number;
    "srd": boolean;
    "hd": {
        "number": number;
        "faces": number;
    };
    "proficiency": string[];
    "spellcastingAbility": string;
    "casterProgression": string;
    "startingProficiencies": {
        "weapons": string[];
        "skills": {
            "choose": {
                "from": string[];
                "count": number;
            };
        }[];
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
    "classTableGroups": ({
        "colLabels": string[];
        "rows": number[][];
        "title"?: undefined;
    } | {
        "title": string;
        "colLabels": string[];
        "rows": number[][];
    })[];
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
    }[] | ({
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
    })[])[];
    "subclassTitle": string;
    "subclasses": ({
        "name": string;
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "isReprinted": boolean;
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
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "srd": boolean;
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
        "isReprinted"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
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
        "isReprinted"?: undefined;
        "srd"?: undefined;
        "page"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
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
        "isReprinted"?: undefined;
        "srd"?: undefined;
    } | {
        "name": string;
        "shortName": string;
        "source": string;
        "page": number;
        "subclassFeatures": ({
            "name": string;
            "entries": (string | {
                "name": string;
                "type": string;
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
                "entries": (string | {
                    "type": string;
                    "style": string;
                    "items": {
                        "type": string;
                        "name": string;
                        "entry": string;
                    }[];
                })[];
            }[];
        }[])[];
        "isReprinted"?: undefined;
        "srd"?: undefined;
    })[];
    "fluff": ({
        "name": string;
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
        "page": number;
        "source": string;
    } | {
        "type": string;
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
        "name"?: undefined;
    })[];
    "isReprinted"?: undefined;
})[];
export default _default;

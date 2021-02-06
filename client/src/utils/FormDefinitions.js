export const FormDef = {
    assistant: {
        formTitle: 'une assistante',
        fields: [
            {
                lastname: {
                    label: 'Nom',
                    type: 'text',
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                firstname: {
                    label: 'Prénom',
                    type: 'text',
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            }
        ],
        success: 'L\'assistante maternelle a bien été enregistrée'
    },
    child: {
        formTitle: 'un enfant',
        fields: [
            {
                lastname: {
                    label: 'Nom',
                    type: 'text',
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                firstname: {
                    label: 'Prénom',
                    type: 'text',
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                birthday: {
                    label: 'Date de naissance',
                    type: 'date',
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                adress: {
                    label: 'Adresse',
                    type: 'group',
                    subFields: [
                        {
                            street_number: {
                                label: 'N°',
                                type: 'text',
                                register: {
                                    required: '* Ce champ est obligatoire'
                                }
                            }
                        },
                        {
                            street: {
                                label: 'Rue',
                                type: 'text',
                                register: {
                                    required: '* Ce champ est obligatoire'
                                }
                            }
                        },
                        {
                            zip_code: {
                                label: 'Code postal',
                                type: 'text',
                                register: {
                                    required: '* Ce champ est obligatoire'
                                }
                            }
                        },
                        {
                            city: {
                                label: 'Ville',
                                type: 'text',
                                register: {
                                    required: '* Ce champ est obligatoire'
                                }
                            }
                        },
                    ]
                }
            },
            {
                contact: {
                    label: 'Contact',
                    type: 'group',
                    subFields: [
                        {
                            contactLastname: {
                                label: 'Nom',
                                type: 'text',
                                register: {
                                    required: '* Ce champ est obligatoire'
                                }
                            }
                        },
                        {
                            contactFirstname: {
                                label: 'Prénom',
                                type: 'text',
                                register: {
                                    required: '* Ce champ est obligatoire'
                                }
                            }
                        },
                        {
                            phone_number: {
                                label: 'Téléphone',
                                type: 'tel',
                                register: {
                                    required: '* Ce champ est obligatoire'
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    contract: {
        formTitle: 'un contrat',
        fields: [
            {
                child: {
                    label: 'Enfant',
                    type: 'select',
                    optionList: 'api',
                    namespace: 'child',
                    choices: ['lastname', 'firstname'],
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                assistant: {
                    label: 'Assistante',
                    type: 'select',
                    optionList: 'api',
                    namespace: 'assistant',
                    choices: ['lastname', 'firstname'],
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                start: {
                    label: 'Début du contrat',
                    type: 'date',
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                end: {
                    label: 'Fin du contrat',
                    type: 'date',
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                type: {
                    label: 'Type de contrat',
                    type: 'select',
                    optionList: 'static',
                    choices: [
                        {
                            label: 'CDI année complète',
                            name: 'cdi_complete'
                        },
                        {
                            label: 'CDI année incomplète',
                            name: 'cdi_incomplete'
                        },
                        {
                            label: 'CDD année complète',
                            name: 'cdd_complete'
                        },
                        {
                            label: 'CDD année incomplète',
                            name: 'cdd_incomplete'
                        },
                    ],
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                holidays_week: {
                    label: 'Semaines de vacances',
                    type: 'number',
                    register: {
                        required: '* Ce champ est obligatoire'
                    },
                    watch: {
                        field: 'type',
                        value: ['cdd_incomplete', 'cdi_incomplete']
                    }
                }
            },
            {
                planning: {
                    label: 'Type de planning',
                    type: 'select',
                    optionList: 'static',
                    choices: [
                        {
                            label: 'Semaine',
                            name: 'weekly'
                        },
                        {
                            label: 'Semaine alternée',
                            name: 'alternate_week'
                        },
                        {
                            label: 'Mois',
                            name: 'monthly'
                        }
                    ],
                    register: {
                        required: '* Ce champ est obligatoire'
                    }
                }
            },
            {
                schedules: {
                    label: 'Horaires',
                    type: 'group',
                    subFields: [
                        {
                            monday1: {
                                label: 'Lundi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            tuesday1: {
                                label: 'Mardi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            wednesday1: {
                                label: 'Mercredi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            thursday1: {
                                label: 'Jeudi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            friday1: {
                                label: 'Vendredi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                    ]
                }
            },
            {
                schedules2: {
                    label: 'Horaires semaine 2',
                    type: 'group',
                    watch: {
                        field: 'planning',
                        value: ['alternate_week', 'monthly']
                    },
                    subFields: [
                        {
                            monday2: {
                                label: 'Lundi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            tuesday2: {
                                label: 'Mardi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            wednesday2: {
                                label: 'Mercredi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            thursday2: {
                                label: 'Jeudi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            friday2: {
                                label: 'Vendredi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                    ]
                }
            },
            {
                schedules3: {
                    label: 'Horaires semaine 3',
                    type: 'group',
                    watch: {
                        field: 'planning',
                        value: ['monthly']
                    },
                    subFields: [
                        {
                            monday3: {
                                label: 'Lundi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            tuesday3: {
                                label: 'Mardi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            wednesday3: {
                                label: 'Mercredi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            thursday3: {
                                label: 'Jeudi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            friday3: {
                                label: 'Vendredi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                    ]
                }
            },
            {
                schedules4: {
                    label: 'Horaires semaine 4',
                    type: 'group',
                    watch: {
                        field: 'planning',
                        value: ['monthly']
                    },
                    subFields: [
                        {
                            monday4: {
                                label: 'Lundi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            tuesday4: {
                                label: 'Mardi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            wednesday4: {
                                label: 'Mercredi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            thursday4: {
                                label: 'Jeudi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            friday4: {
                                label: 'Vendredi',
                                type: 'group',
                                subFields: [
                                    {
                                        start: {
                                            label: 'Début',
                                            type: 'time',
                                            register: {}
                                        }
                                    },
                                    {
                                        end: {
                                            label: 'Fin',
                                            type: 'time',
                                            register: {}
                                        }
                                    }
                                ]
                            }
                        },
                    ]
                }
            }
        ]
    }
}

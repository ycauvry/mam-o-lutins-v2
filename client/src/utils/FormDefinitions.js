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
                        value: ['cdd_incomplete', "cdi_incomplete"]
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
        ]
    }
}

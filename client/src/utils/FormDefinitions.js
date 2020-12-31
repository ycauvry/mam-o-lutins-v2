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
        formTitle: 'un contrat'
    }
}

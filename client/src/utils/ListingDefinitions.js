export const ListingDef = {
    assistant: {
        title: 'assistantes',
        tableHead: {
            lastname: 'Nom',
            firstname: 'Prénom'
        },
        tableBody: {
            lastname: 'lastname',
            firstname: 'firstname'
        },
        editPath: '/gestion-assistantes/'
    },
    contract: {
        title: 'contrats',
        tableHead: {
            lastname: 'Nom',
            assistant: 'Assistante',
            start: 'Début de contrat',
            end: 'Fin de contrat',
            holidays: 'Vacances'
        },
        tableBody: {
            lastname: {
                method: 'concatFields',
                methodData: ['firstname', 'lastname'],
                dataPropertyPath: 'child'
            },
            assistant: {
                method: 'concatFields',
                methodData: ['firstname', 'lastname'],
                dataPropertyPath: 'assistant'
            },
            start: {
                method: 'standardDate',
                methodData: 'start'
            },
            end: {
                method: 'standardDate',
                methodData: 'end'
            },
            holidays: {
                method: 'holidays'
            }
        },
        editPath: '/gestion-contrats/'
    },
    child: {
        title: 'enfants',
        tableHead: {
            child: 'Enfant',
            age: 'Âge',
            contact: 'Contact',
            phone_number: 'Téléphone'
        },
        tableBody: {
            child: {
                method: 'concatFields',
                methodData: ['firstname', 'lastname']
            },
            age: {
                method: 'calcAge',
                methodData: 'birthday'
            },
            contact: {
                method: 'concatFields',
                methodData: ['firstname', 'lastname'],
                dataPropertyPath: 'contact'
            },
            phone_number: {
                method: 'pickField',
                methodData: 'phone_number',
                dataPropertyPath: 'contact'
            }
        },
        editPath: '/gestion-enfants/'
    }
}

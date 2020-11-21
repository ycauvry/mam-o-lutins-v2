export const ListingDef = {
    assistant: {
        title: 'assistantes',
        table_head: {
            lastname: 'Nom',
            firstname: 'Prénom'
        },
        table_body: {
            lastname: 'lastname',
            firstname: 'firstname'
        }
    },
    contract: {
        title: 'contrats',
        table_head: {
            lastname: 'Nom',
            firstname: 'Prénom',
            assistant: 'Assistante',
            start: 'Début de contrat',
            end: 'Fin de contrat',
            holidays: 'Vacances'
        },
        table_body: {
            lastname: 'lastname',
            firstname: 'firstname',
            assistant: {
                concatFields: ['firstname', 'lastname']
            },
            start: 'start',
            end: 'end',
            holidays: 'holidays'
        }
    },
    child: {
        title: 'enfants',
        table_head: {
            lastname: 'Nom',
            firstname: 'Prénom',
            age: 'Âge',
            contact: 'Contact',
            phone_number: 'Téléphone'
        },
        table_body: {
            lastname: 'lastname',
            firstname: 'firstname',
            age: {
                calcAge: ['birthday']
            },
            contact: {
                concatFields: ['firstname', 'lastname']
            },
            phone_number: {
                pickFields: ['phone_number']
            }
        }
    }
}
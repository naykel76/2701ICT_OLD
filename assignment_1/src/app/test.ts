/** ---------------------------------------------------------------------------
 * Challenges
 * ----------------------------------------------------------------------------
 * - how to create dynamic field names? will the be necessary or just used DB id?
 * - checklists will need to allow for an unknown number of checkboxes returning true or false (for each)
 * - radio should allow for display comments if ... for example, if 'no' enter details
 * - how to present data in reports
*/

// form field types
let types = ['textarea', 'checklist', 'select', 'photo', 'radio'];

// example form data set
let form = {
    formName: 'MyForm',
    formFields: {
        field1: {
            label: 'Was there a problem with the thingy?',
            type: 'radio',
            options: {
                option1: 'Yes',
                option2: 'No'
            }
        },
        field2: {
            label: 'Machine Check List',
            type: 'checklist',
            checklist: {
                check1: 'Did you do this?',
                check2: 'Did you do that?',
                check3: 'Was this working?'
            }
        },
        field3: {
            label: 'Select the ',
            type: 'select',
            options: {
                option1: 'Option 1',
                option2: 'Option 2'
            }
        },
        field4: {
            label: 'Comments',
            type: 'textarea',
        },
        field5: {
            label: 'Take photo of the issue',
            type: 'photo',
        },
    }
}

// example form response
let MyForm = {
    field1: 'Yes',
    field2: {
        check1: true,
        check2: true,
        check3: false,
    },
    field3: 2,
    field4: 'These are some comments',
    field5: 'images/photo.jpg'
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { Conditional } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form';
  testForm: FormGroup;
  showBuilder = true;
  @ViewChild('json') jsonElement?: ElementRef;
  formData;

  public form: Object = {components: []};
   options = {
    builder: {
      layout: false,
      premium: false,
      advanced : false,
      data: false,
      basic : false,
      
      customBasic: {
        title: 'Avesdo Form',
        default: true,
        weight: 0,
        components: {
          firstName: {
            title: 'First Name',
            key: 'firstName',
            icon: 'terminal',
            schema: {
              label: 'First Name',
              type: 'textfield',
              key: 'firstName',
              input: true
            }
          },
          lastName: {
            title: 'Last Name',
            key: 'lastName',
            icon: 'terminal',
            schema: {
              label: 'Last Name',
              type: 'textfield',
              key: 'lastName',
              input: true
            }
          },
          email: {
            title: 'Email',
            key: 'email',
            icon: 'at',
            schema: {
              label: 'Email',
              type: 'email',
              key: 'email',
              input: true
            }
          },
          phoneNumber: {
            title: 'Mobile Phone',
            key: 'mobilePhone',
            icon: 'phone-square',
            schema: {
              label: 'Mobile Phone',
              type: 'phoneNumber',
              key: 'mobilePhone',
              input: true
            }
          },
          button: {
            title: 'Button',
            key: '',
            icon: 'phone-square',
            schema: {
              label: 'Mobile Phone',
              type: 'phoneNumber',
              key: 'mobilePhone',
              input: true
            }
          }
        }
      },
    },
    editForm: {
      textfield: [
        {
          key: 'api',
          ignore: true
        } ,
        {
          key: 'logic',
          ignore: true
        },
        {
          key: 'layout',
          ignore: true
        },
        {
          key : 'conditional',
          ignore : true
        },
        {
          key: 'data',
          components: [
            {
              key: 'inputFormat',
              ignore: true
            },
            {
              key: 'customDefaultValuePanel',
              ignore: true
            },
            {
              key: 'calculateValuePanel',
              ignore: true
            },
            {
              key: 'allowCalculateOverride',
              ignore: true
            },
            {
              key: 'encrypted',
              ignore: true
            },
            {
              key: 'dbIndex',
              ignore: true
            },
            {
              key: 'multiple',
              ignore: true
            },
            {
              key: 'persistent',
              ignore: true
            },
            {
              key: 'protected',
              ignore: true
            },
            {
              key: 'case',
              ignore: true
            },
              {
              key: 'redrawOn',
              ignore: true
              },
              {
              key: 'clearOnHide',
              ignore: true
              },
              {
              key: 'calculateServer',
              ignore: true
              },
          ]
          },
          {
            key: 'validation',
            components: [
              {
                key: 'unique',
                ignore: true
              },
              {
                key: 'validateOn',
                ignore: true
              },
              {
                key: 'custom-validation-js',
                ignore: true
              },
              {
                key: 'json-validation-json',
                ignore: true
              },
              {
                key: 'validate.minWords',
                ignore: true
              },
              {
                key: 'validate.maxWords',
                ignore: true
              },
              {
                key: 'validate.pattern',
                ignore: true
              }
            ]
            },
          {
            key: 'display',
            components: [
              {
                key: 'labelPosition',
                ignore: true
              },
              {
                key: 'hideLabel',
                ignore: true
              },
              {
                key: 'description',
                ignore: true
              },
              {
                key: 'tabindex',
                ignore: true
              },
              {
                key: 'prefix',
                ignore: true
              },
              {
                key: 'suffix',
                ignore: true
              },
              {
                key: 'widget.type',
                ignore: true
              },
              {
                key: 'widget',
                ignore: true
              },
              {
                key: 'tooltip',
                ignore: true
              },
              {
                key : 'disabled',
                ignore : true
              },
              {
                key : 'modalEdit',
                ignore : true
              },
              {
                key : 'spellcheck',
                ignore : true
              },
              {
                key: 'errorLabel',
                ignore: true
              },
              {
                key: 'persistent',
                ignore: true
              },
              {
                key: 'allowMultipleMasks',
                ignore: true
              },
              {
                key: 'inputMask',
                ignore: true
              },
              {
                key: 'customClass',
                ignore: true
              },
              {
                key: 'showWordCount',
                ignore: true
              },
              {
                key: 'showCharCount',
                ignore: true
              },
              {
                key: 'multiple',
                ignore: true
              },
              {
                key: 'clearOnHide',
                ignore: true
              },
              {
                key: 'protected',
                ignore: true
              },
              {
                key: 'hidden',
                ignore: true
              },
              {
                key: 'mask',
                ignore: true
              },
              {
                key: 'autofocus',
                ignore: true
              },
              {
                key: 'tableView',
                ignore: true
              },
              {
                key: 'alwaysEnabled',
                ignore: true
              }
            ]
            },

      ],
      phoneNumber: [
        {
          key: 'api',
          ignore: true
        },
      {
          key: 'logic',
          ignore: true
        },
      {
          key: 'display',
          components: [
         {
           key: 'labelPosition',
           ignore: true
         },
         {
           key: 'hideLabel',
           ignore: true
         },
         {
           key: 'description',
           ignore: true
         },
         {
           key: 'tooltip',
           ignore: true
         },
         {
           key: 'errorLabel',
           ignore: true
         },
         {
           key: 'customClass',
           ignore: true
         },
         {
           key: 'tabindex',
           ignore: true
         },
         {
           key: 'persistent',
           ignore: true
         },
         {
           key: 'multiple',
           ignore: true
         },
         {
           key: 'clearOnHide',
           ignore: true
         },
         {
           key: 'protected',
           ignore: true
         },
         {
           key: 'hidden',
           ignore: true
         },
         {
           key: 'mask',
           ignore: true
         },
         {
           key: 'autofocus',
           ignore: true
         },
         {
           key: 'tableView',
           ignore: true
         },
         {
           key: 'alwaysEnabled',
           ignore: true
         }
       ]
       },
       {
       key: 'data',
       components: [
         {
           key: 'refreshOn',
           ignore: true
         },
         {
           key: 'clearOnRefresh',
           ignore: true
         },
         {
           key: 'customDefaultValuePanel',
           ignore: true
         },
         {
           key: 'calculateValuePanel',
           ignore: true
         },
         {
           key: 'allowCalculateOverride',
           ignore: true
         },
         {
           key: 'encrypted',
           ignore: true
         },
         {
           key: 'dbIndex',
           ignore: true
         }
       ]
       },
       {
       key: 'validation',
       components: [
         {
           key: 'unique',
           ignore: true
         },
         {
           key: 'validateOn',
           ignore: true
         },
         {
           key: 'custom-validation-js',
           ignore: true
         },
         {
           key: 'json-validation-json',
           ignore: true
         }
       ]
       },
       {
       key: 'conditional',
       components: [
         {
           key: 'customConditionalPanel',
           ignore: true
         }
       ]
       }
       ],
       button: [
        {
          key: 'api',
          ignore: true
        },
      {
          key: 'logic',
          ignore: true
        },
      {
          key: 'display',
          components: [
         {
           key: 'labelPosition',
           ignore: true
         },
         {
           key: 'hideLabel',
           ignore: true
         },
         {
           key: 'description',
           ignore: true
         },
         {
           key: 'tooltip',
           ignore: true
         },
         {
           key: 'errorLabel',
           ignore: true
         },
         {
           key: 'customClass',
           ignore: true
         },
         {
           key: 'tabindex',
           ignore: true
         },
         {
           key: 'persistent',
           ignore: true
         },
         {
           key: 'multiple',
           ignore: true
         },
         {
           key: 'clearOnHide',
           ignore: true
         },
         {
           key: 'protected',
           ignore: true
         },
         {
           key: 'hidden',
           ignore: true
         },
         {
           key: 'mask',
           ignore: true
         },
         {
           key: 'autofocus',
           ignore: true
         },
         {
           key: 'tableView',
           ignore: true
         },
         {
           key: 'alwaysEnabled',
           ignore: true
         }
       ]
       },
       {
       key: 'data',
       components: [
         {
           key: 'refreshOn',
           ignore: true
         },
         {
           key: 'clearOnRefresh',
           ignore: true
         },
         {
           key: 'customDefaultValuePanel',
           ignore: true
         },
         {
           key: 'calculateValuePanel',
           ignore: true
         },
         {
           key: 'allowCalculateOverride',
           ignore: true
         },
         {
           key: 'encrypted',
           ignore: true
         },
         {
           key: 'dbIndex',
           ignore: true
         }
       ]
       },
       {
       key: 'validation',
       components: [
         {
           key: 'unique',
           ignore: true
         },
         {
           key: 'validateOn',
           ignore: true
         },
         {
           key: 'custom-validation-js',
           ignore: true
         },
         {
           key: 'json-validation-json',
           ignore: true
         }
       ]
       },
       {
       key: 'conditional',
       components: [
         {
           key: 'customConditionalPanel',
           ignore: true
         }
       ]
       }

       ],
    }
  };

  onChange(event) {
    this.formData = event.form;
    console.log(event.form);
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }
  constructor(private http: HttpClient) { }
  renderForm() {
  this.showBuilder = false;
  }

  submitData(submission: any) {
      console.log(submission.data);
      return this.http.post<any>('http://localhost:5000/form/12345/submission', submission);
  }
}

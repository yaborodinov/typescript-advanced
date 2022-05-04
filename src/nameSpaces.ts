// позволяют декомпозировать, делать модульный код, объединять элементы в группы


type FormType = 'inline' | 'block';
type FormState = 'active' | 'disabled';

interface FormInfo {
    type: FormType
    state: FormState
}

 class MyForm {
     private type: FormType = 'inline'
     private state: FormState = 'active'

     constructor(public email: string) {

     }

     getInfo() {
         return {
             type: this.type,
             state: this.state
         }
     }
 }

 const form = new MyForm('df@gmail.com')
 console.log(form);
 
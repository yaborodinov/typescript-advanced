// позволяют декомпозировать, делать модульный код, объединять элементы в группы


/// <reference path="form-namespase.ts" />

namespace Form {
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'
   
        constructor(public email: string) {
   
        }
   
        getInfo(): IFormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
   
    export const form = new MyForm('df@gmail.com')

}

console.log(Form.form);

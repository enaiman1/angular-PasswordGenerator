import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0
  includeLowerCaseLetters = false;
  includeUpperCaseLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";


  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
   
  }

  onChangeUseLowerCaseLetters(){
    // this will change the letters property is selected, the opposite of its current state
    this.includeLowerCaseLetters = !this.includeLowerCaseLetters
  }
  onChangeUseUpperCaseLetters(){
    // this will change the letters property is selected, the opposite of its current state
    this.includeUpperCaseLetters = !this.includeUpperCaseLetters
  }

  onChangeUseNumbers(){
    // this will change the numbers property is selected, opposite of its current state
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    // this will change the symbols property is selected, opposite of its current state
    this.includeSymbols = !this.includeSymbols
  }

 onButtonClick(){
   const numbers = "1234567890"
   const lowerCase = "abcdefghijklmnopqrstuvwxyz"
   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   const symbols = "!@#$%^&*()"

   if (this.length < 8 ) {
    alert('Password length must be at least 8 characters');
    return;
} else if (this.length > 128) {
    alert('Password length must be less then 129 characters')
}

   let validChars = "";
   if (this.includeLowerCaseLetters) {
     validChars += lowerCase;
   }
   if (this.includeUpperCaseLetters) {
    validChars += upperCase;
  }
   if(this.includeNumbers){
     validChars += numbers;
   }
   if(this.includeSymbols) {
     validChars += symbols;
   }
let generatedPassword = "";

for(let i = 0; i <this.length; i++) {
  const index = Math.floor(Math.random() * validChars.length);
  generatedPassword += validChars[index];
}
this.password = generatedPassword;

 }
 
 copyPassword(){
  const passwordToCopy = document.getElementById("password") as HTMLInputElement;

// grabs the content from the text area
passwordToCopy.select();

 // this method executes the selected part of the text area
 document.execCommand('copy');

alert(`Your password ${this.password} was copied to your clipboard`)
  console.log(this.password);
  console.log(document.execCommand('copy'))
}

  

 }
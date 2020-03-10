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
let generatedPAssword = "";

for(let i = 0; i <this.length; i++) {
  const index = Math.floor(Math.random() * validChars.length);
  generatedPAssword += validChars[index];
}
this.password = generatedPAssword;

 }

}

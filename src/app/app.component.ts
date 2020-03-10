import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    // this will change the letters property is selected, the opposite of its current state
    this.includeLetters = !this.includeLetters
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
   console.log(`
   About to genrate a password with the following:
   Includes letters: ${this.includeLetters}
   Includes numbers: ${this.includeNumbers}
   Includes symbols: ${this.includeSymbols}
   `);

   
   this.password = "My Password!!!"
 }

}

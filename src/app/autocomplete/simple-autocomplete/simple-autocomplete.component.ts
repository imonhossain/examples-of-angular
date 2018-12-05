import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple-autocomplete',
  templateUrl: './simple-autocomplete.component.html',
  styleUrls: ['./simple-autocomplete.component.css']
})
export class SimpleAutocompleteComponent implements OnInit {

  stateForm: FormGroup;
  wordLenght:number= 0;

  showDropDown = false;
  states = ['Alabama', 'Alaska',  'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
  , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
  , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
   'West Virginia', 'Wisconsin', 'Wyoming'];

  constructor( private fb: FormBuilder) {
    this.initForm()
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }


 ngOnInit() {

 }
 onKeyUp(word){
  this.wordLenght = word.length;
 }

 selectValue(value) {
   this.stateForm.patchValue({"search": value});
   this.showDropDown = false;
 }
  closeDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  openDropDown() {
    this.showDropDown = false;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

}

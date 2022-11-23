import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-page';

  exform : FormGroup;
  Data: Array<any> = [
    
    { name: 'Big Bazar', value: 'big bazar' },
    { name: 'DMart', value: 'dmart' },
    { name: 'Reliance', value: 'reliance' },
    { name: 'Mega Store', value: 'mega store' }
  
  ];
  constructor(private fb:FormBuilder){
    this.exform = this.fb.group({
     
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      cost: new FormControl('',[Validators.required]),
      online: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      checkArray:this.fb.array([],[Validators.required])

    })
  }

  ngOninit(){
  }

  onSubmit(){
    console.log(this.exform.value);
    alert("Product Data Stored!");
    this.exform.reset();
  }

  get id(){
    return this.exform.get('id');
  }

  get name(){
    return this.exform.get('name');
  }
  get cost(){
    return this.exform.get('cost');
  }
  get online(){
    return this.exform.get('online');
  }
  get category(){
    return this.exform.get('category');
  }
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.exform.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 1;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  
   
  }


}



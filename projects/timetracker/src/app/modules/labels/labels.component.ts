import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'labels',
  standalone: true,
  imports: [
    CommonModule,
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './labels.component.html',
  styleUrl: './labels.component.sass'
})
export class LabelsComponent {
  labelsForm: FormGroup
  labelArray: FormArray

  constructor(private _fb: FormBuilder) {
    this.labelsForm = this._fb.group({
      labels: this._fb.array([])
    })

    this.labelArray = <FormArray>this.labelsForm.get('labels')
  }

  getLabelArrayLength(): string {
    return this.labelArray.controls.length.toString()
  }
  addLabel() {
    const newToken =  this._fb.group({
      label_id: this.generateGUID(),
      label_name: ''
    })
    this.labelArray.push(newToken)
  }
  removeLabel(label_id: string) {
    this.labelArray.removeAt(this.labelArray.controls.findIndex((control: any) => control.get('label_id').value === label_id))
  }

  generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: any) => {
      var rnd = Math.random() * 16 | 0, v = c === 'x' ? rnd : (rnd & 0x3 | 0x8)
      return v.toString(16)
    });
  }
}

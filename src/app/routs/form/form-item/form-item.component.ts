import { Component, OnInit, Input } from '@angular/core';
import { IQuestion } from 'src/app/redux/form/reducer';
import { SubscriptionLike } from 'rxjs';
import { Validators, FormControl } from '@angular/forms';
import { RDX_FORM_PUSH } from 'src/app/redux/form/actions';
import { getFormIsGrab } from  'src/app/redux/form/selectors';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {
  @Input('question') question: IQuestion | undefined;
  formControl: FormControl;
  value: string;
  isGrabSub: SubscriptionLike;
  constructor(
    private store: Store
  ) {
    this.formControl = new FormControl('', [
      Validators.required
    ])
    this.value = '';
    this.isGrabSub = this.store.select(getFormIsGrab).subscribe(res => {
      if (res) {
        this.store.dispatch({
          type: RDX_FORM_PUSH,
          payload: {
            question: this.question!.question,
            answer: this.value
          }
        })
      }
    })
  }

  ngOnInit(): void {
  }

}

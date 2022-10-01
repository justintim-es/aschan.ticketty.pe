import { Component, OnInit } from '@angular/core';
import { curtainOpenTop, curtainOpenBottom } from '../../animations';
import { SubscriptionLike, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { IQuestion } from 'src/app/redux/form/reducer';
import { getFormIsCurtainOpen, getFormQuestions, getFormIsFetch, getFormIsFetchSuccess, getFormIsFetchFormSuccess, getFormIsFetchForm } from 'src/app/redux/form/selectors';
import { RDX_FORM_IS_CURTAIN_OPEN_TRUE_TRIGGER, RDX_FORM_FETCH, RDX_FORM_COLLECT } from 'src/app/redux/form/actions';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    curtainOpenTop,
    curtainOpenBottom
  ]
})
export class FormComponent implements OnInit {
  activatedRoute: SubscriptionLike;
  isCurtainOpen: Observable<boolean>;
  questions: Observable<IQuestion[]>;
  recognition: string;
  event_id: string;
  emailFormControl: FormControl;
  email: string;
  isFetchForm: Observable<boolean>;
  isFetchFormSuccess: SubscriptionLike;
  resale: string  | undefined | null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.recognition = '';
    this.email = '';
    this.event_id = '';
    this.emailFormControl = new FormControl('', [
      Validators.required
    ])
    this.activatedRoute = this.route.paramMap.subscribe(res => {
      this.recognition = res.get('recognition')!;
      this.event_id = res.get('id')!;
      this.resale = res.get('resale');
      this.store.dispatch({
        type: RDX_FORM_FETCH,
        event_id: this.event_id
      })
    });
    this.isCurtainOpen = this.store.select(getFormIsCurtainOpen);;
    this.questions = this.store.select(getFormQuestions);
    this.isFetchForm = this.store.select(getFormIsFetchForm);
    this.isFetchFormSuccess = this.store.select(getFormIsFetchFormSuccess).subscribe(res => {
      if (res) {
        this.router.navigate([
          (this.resale ?
            '/resale-checkout/' + this.event_id + '/' + this.recognition + '/' + this.resale :
            '/checkout/' + this.event_id + '/' + this.recognition)
          ])
      }
    })
   }

  ngOnInit(): void {
    this.store.dispatch({
      type: RDX_FORM_IS_CURTAIN_OPEN_TRUE_TRIGGER
    });
  }
  submit() {
    this.store.dispatch({
      type: RDX_FORM_COLLECT,
      recognition: this.recognition,
      email: this.email
    });
  }

}

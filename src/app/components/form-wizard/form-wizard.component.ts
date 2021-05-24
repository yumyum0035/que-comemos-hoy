import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../models/step.model';
import { Observable } from 'rxjs';
import { StepsService } from '../../services/step/step.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {

  currentStep: Observable<StepModel>;

  constructor(
    private stepsService: StepsService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Get Meal Plan';
  }

  onSubmit(): void {
    this.router.navigate(['/complete']);
  }

}

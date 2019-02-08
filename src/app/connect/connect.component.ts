import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../app/config.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConnectComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private UtilitityService: ConfigService) { }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    // this.submitted = true;
    // if (this.registerForm.invalid) {
    //   return;
    // } else {
    //   this.sendMail();
    // }
    this.UtilitityService.postData('transmissions/', {
      "options": {
        "sandbox": true
      },
      "content": {
        "from": "sandbox@sparkpostbox.com",
        "subject": "Thundercats are GO!!!",
        "text": "Sword of Omens, give me sight BEYOND sight"
      },
      "recipients": [{ "address": "naveendb92@gmail.com" }]
    }).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  onClear() {
    this.submitted = false;
    this.registerForm.reset();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }


}

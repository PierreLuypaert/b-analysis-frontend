import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent implements OnInit {
  matchForm: FormGroup;


  constructor(private fb : FormBuilder, private matchService : MatchService) {
    this.matchForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      redScore: ['', Validators.required],
      blueScore: ['', Validators.required]
    });
   }

  ngOnInit(): void {    
  }

  submitForm() {
    if (this.matchForm.valid) {
      // Handle form submission
      this.matchService.createMatch(this.matchForm.value).subscribe(
        response => {
          console.log('Match created successfully', response);
          // Handle any success actions here
        },
        error => {
          console.error('Error creating match', error);
          // Handle error actions here
        }
      );
      // You can send the form data to a server, perform actions, etc.
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public listTicketsAllowed!: boolean;

  formulaire!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
  }

  ngOnInit(): void {
    this.listTicketsAllowed = false;
    this.formulaire = this.fb.group({
      login: ['', [Validators.minLength(5), formulaireValidator.validatelogin]],
      mdp: ['', [Validators.minLength(5), formulaireValidator.validatemdp]],
    })    
    console.log("oninit");
  }

  onSubmit(f: FormGroup): void {
    console.log("Valide");
    this.router.navigate(['list_tickets']);
  }

  validerForm(): void {
    this.listTicketsAllowed = true;
  }
}

class formulaireValidator {
  static validatelogin(data: FormGroup) {
    if (data.value === 'admin') {
      return null; // Renvoie null quand TOUT VA BIEN
    } else {
      return {Login: "Erreur de login"};
    }
  }
  static validatemdp(data: FormGroup) {
    if (data.value === 'admin') {
      return null; // Renvoie null quand TOUT VA BIEN
    } else {
      return {Mdp: "Erreur de mdp"};
    }
  }
}
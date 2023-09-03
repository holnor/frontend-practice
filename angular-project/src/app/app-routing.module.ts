import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {LoginComponent} from "./components/authentication/login/login.component";
import {SignupComponent} from "./components/authentication/signup/signup.component";
import {CreateRecipeComponent} from "./components/create-recipe/create-recipe.component";

const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'createRecipe', component: CreateRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

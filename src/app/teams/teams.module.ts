import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeamListPageComponent} from '@team-handling/teams/containers/team-list-page/team-list-page.component';
import {TeamDetailPageComponent} from '@team-handling/teams/containers/team-detail-page/team-detail-page.component';
import {TeamAddPageComponent} from '@team-handling/teams/containers/team-add-page/team-add-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    TeamListPageComponent,
    TeamDetailPageComponent,
    TeamAddPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TeamsModule {

}

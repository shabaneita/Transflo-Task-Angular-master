import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'drivers', pathMatch: 'full' },
  { path: 'drivers', component: DriverListComponent },
  { path: 'drivers/:id', component: AddDriverComponent },
  { path: 'add', component: AddDriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

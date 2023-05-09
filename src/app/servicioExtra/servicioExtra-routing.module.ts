import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicioExtraListComponent } from './servicioExtra-list/servicioExtra-list.component';

const routes: Routes = [{
    path: 'serviciosExtra',
    children: [
        {
            path: 'list',
            component: ServicioExtraListComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicioExtraRoutingModule { }

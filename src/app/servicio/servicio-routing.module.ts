import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';
import { ServicioCreateComponent } from './servicio-create/servicio-create.component';


const routes: Routes = [{
    path: 'servicios',
    children: [
        {
            path: 'list',
            component: ServicioListComponent
        },
        {
            path: ':id',
            component: ServicioDetailComponent
        },
        {
            path: 'create',
            component: ServicioCreateComponent
        }


    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicioRoutingModule { }

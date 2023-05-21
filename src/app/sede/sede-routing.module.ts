import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeListComponent } from './sede-list/sede-list.component';
import { SedeDetailComponent } from './sede-detail/sede-detail.component';
import { SedeCreateComponent } from './sede-create/sede-create.component';


const routes: Routes = [{
    path: 'sedes',
    children: [
        {
            path: 'list',
            component: SedeListComponent
        },
        {
            path: 'create',
            component: SedeCreateComponent
        },
        {
            path: ':id',
            component: SedeDetailComponent
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SedeRoutingModule { }

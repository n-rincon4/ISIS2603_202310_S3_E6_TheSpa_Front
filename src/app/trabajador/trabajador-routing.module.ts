import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabajadorComponent } from './trabajador.component';


const routes: Routes = [{
    path: 'trabajadores',
    children: [
        {
            path: 'list',
            component: TrabajadorComponent
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrabajadorRoutingModule { }

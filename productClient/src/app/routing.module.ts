import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FetchComponent } from './components/fetch/fetch.component';

const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'update',
        component: UpdateComponent
    },
    {
        path: 'delete',
        component: DeleteComponent
    },
    {
        path: 'fetch',
        component: FetchComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule {}

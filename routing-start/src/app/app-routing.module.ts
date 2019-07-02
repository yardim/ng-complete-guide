import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';
import { DeactivateGuardService } from './deactivate-guard.service';
import { ServerResolverService } from './servers/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    canActivateChild: [AuthGuardService],
    component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  {
    path: 'servers',
    canActivate: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolverService } },
      { path: ':id/:mode', component: EditServerComponent, canDeactivate: [DeactivateGuardService] },
    ]
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: {
      message: 'Page not found!'
    }
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

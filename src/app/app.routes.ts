import { inject } from "@angular/core";
import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { routes as usersRoutes } from "./users/users.routes";
import { NotFoundComponent } from "./not-found/not-found.component";

const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random() > 0.5;
    return shouldGetAccess
        ? true
        : new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
    { path: '', component: NoTaskComponent },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: usersRoutes,
        canMatch: [dummyCanMatch],
        data: {
            message: 'Welcome to your tasks!'
        },
        resolve: {
            userName: resolveUserName
        }
    },
    { path: '**', component: NotFoundComponent },
];
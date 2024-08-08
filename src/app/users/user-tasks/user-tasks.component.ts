import { Component, computed, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'app-user-tasks',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './user-tasks.component.html',
    styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
    // private activatedRoute = inject(ActivatedRoute);
    // userName = '';
    // destroyRef = inject(DestroyRef);

    // userId = input.required<string>();

    userName = input.required<string>();
    message = input.required<string>();
    // private usersService = inject(UsersService);

    // userName = computed(
    //     () => this.usersService.users.find(user => user.id === this.userId())?.name || ''
    // );

    ngOnInit() {
        console.log(this.message);

        // const subsctipion = this.activatedRoute.paramMap.subscribe(paramMap => {
        //     this.userName = this.usersService.users.find(user => user.id === paramMap.get('userId'))?.name || '';
        // });
        // this.destroyRef.onDestroy(() => {
        //      subsctipion.unsubscribe();
        // });
    }
}

export const resolveUserName: ResolveFn<string> = (
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    _routerStateSnapshot: RouterStateSnapshot
) => {
    const usersService = inject(UsersService);
    const userName = usersService.users.find(user =>
        user.id === activatedRouteSnapshot.paramMap.get('userId')
    )?.name || '';

    return userName;
}

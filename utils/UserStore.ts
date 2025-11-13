import { User } from '../src/interfaces/user';

export class UserStore {
    private users: User[];

    constructor() {
        this.users = [];
    }

    list(): User[] {
        console.log('GET /users');
        return this.users;
    }

    findByName(name: string): User | undefined {
        console.log(`GET /users?name=${name}`);
        return this.users.find(user => user.fullName === name);
    }

    create(user: User): void {
        console.log('POST /users');
        this.users.push(user);
    }

    update(id: number, userData: Partial<User>): void {
        console.log(`PATCH /users/${id}`);
       
    }

    remove(id: number): void {
        console.log(`DELETE /users/${id}`);
    }
}

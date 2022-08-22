import { UserRegisterService } from './userRegister.service';
import { UserRegisterDto } from './userRegister.dto';
export declare class UserRegisterController {
    private readonly userRegisterService;
    constructor(userRegisterService: UserRegisterService);
    getInput2(param: string): string;
    createUser(userRegisterDto: UserRegisterDto): String;
    uploadFile(userResume: any): string;
    getAllErrorStatusCode(): object;
}

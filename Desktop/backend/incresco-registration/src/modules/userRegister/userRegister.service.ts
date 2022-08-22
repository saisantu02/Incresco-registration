import {Injectable} from '@nestjs/common';

@Injectable()
export class UserRegisterService {

 

  getInput(param):string {

    return `Role: ${param}`;
  }

  getInput2(param):string {

    return `You have entered the role: ${param.role}`;
    // Make an API call to the serverless application
  }
 
  createUser(): String {
      return "Registered Successfully.";
  }
  createUser2(): String {
    return "Your details have been submitted successfully.";
}

}

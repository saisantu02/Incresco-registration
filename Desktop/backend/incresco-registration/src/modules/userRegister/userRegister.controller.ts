import { Controller, Get, Post, Body, Param, Version, HttpStatus, HttpCode, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { UserRegisterService } from './userRegister.service';
import { UserRegisterDto } from './userRegister.dto';
import { FileInterceptor } from '@nestjs/platform-express';



@Controller()
export class UserRegisterController {
  constructor(private readonly userRegisterService: UserRegisterService) { }





  //
  // GET for getting input and passing it back
  //


  //@Version('1')
  // @Get('/jobprofile')
  // getInput(@Query() query :{role: string}): string {
  //  return this.userRegisterService.getInput(query.role);
  // }

  //@Version('2')
  @Get('/jobprofile/:role')
  //@Redirect('https://youtube.com')
  getInput2(@Param() param: string): string {
    return this.userRegisterService.getInput2(param);
  }

  //
  // POST for register
  //

  //@Version('1')
  @Post('register')
  createUser(@Body() userRegisterDto: UserRegisterDto): String {
    console.log(userRegisterDto);
    return this.userRegisterService.createUser();
  }

  // @Version('2')
  // @Post('register')
  // createUser2(@Body() userRegisterDto: UserRegisterDto): String{
  //   console.log(userRegisterDto);
  //   return this.userRegisterService.createUser2();
  //   }

  //
  //POST resume upload
  //

  @Post('uploadresume')
  @UseInterceptors(
    FileInterceptor('resume', { dest: "./uploads", }
    ))
  uploadFile(@UploadedFile() userResume) {
    console.log('Resume', userResume);
    return `File Name: ${userResume.filename}`;
  }

  //
  // GET for help regarding Http status codes
  //

  @Get('help')
  getAllErrorStatusCode():object {

    return [
      {
        'OK': HttpStatus.OK
      },
      {
        'Created': HttpStatus.CREATED
      },
      {
        'Bad Request': HttpStatus.BAD_REQUEST
      },
      {
        'Unauthorized': HttpStatus.UNAUTHORIZED
      },
      {
        'Payment Required': HttpStatus.PAYMENT_REQUIRED
      },
      {
        'Forbidden': HttpStatus.FORBIDDEN
      },
      {
        'Not Found': HttpStatus.NOT_FOUND
      },
      {
        'Internal Server Error': HttpStatus.INTERNAL_SERVER_ERROR
      },
    ]
  }

}









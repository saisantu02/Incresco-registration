import { IsNotEmpty ,
          Min,
          Max,
          IsAlpha,
          IsNumber,
          IsAlphanumeric,
          IsEmail,
          Matches,
          IsDate
        } from "class-validator";

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserRegisterDto {
    
    @ApiProperty({description:"First name of the user"})
    @IsNotEmpty()
    @IsAlpha()
    private firstName: string;

    @ApiPropertyOptional({description:"Middle name of the user"})
    @IsAlpha()
    private middleName: string;

    @ApiProperty({description:"Last name of the user"})
    @IsNotEmpty()
    private lastName: string;

    @ApiProperty({description:"Email id of the user"})
    @IsNotEmpty()
    @IsEmail()
    private emailID: string;
    
    @ApiProperty({description:"Contact number of the user"})
    @IsNotEmpty()
    @IsNumber()
    @Min(1000000000)
    @Max(9999999999)
    private contactNumber: number;

    @ApiProperty({description:"Date of birth of the user"})
    @IsNotEmpty()
    //@IsDate()
    //@Type(() => Date)
    //@Matches(^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$)
    private dateOfBirth: Date;

    @ApiProperty({description:"Gender of the user"})
    @IsNotEmpty()
    @IsAlpha()
    private gender: string;

    @ApiProperty({description:"Education: Tenth percentage of the user"})
    @IsNotEmpty()
    @Max(100)
    @Min(1)
    private tenthPercentage: number;

    @ApiProperty({description:"Education: Twelfth percentage of the user"})
    @IsNotEmpty()
    @Max(100)
    @Min(1)
    private twelfthPercentage: number;

    @ApiProperty({description:"Education: Education type of the user"})
    @IsNotEmpty()
    private educationType: string;

    @ApiProperty({description:"Education: Degree of the user"})
    @IsNotEmpty()
    private degree: string;

    @ApiProperty({description:"Education: College of the user"})
    @IsNotEmpty()
    private college: string;

    @ApiProperty({description:"Education: Roll number of the user"})
    @IsNotEmpty()
    @IsAlphanumeric()
    private registerNumber: string;

    @ApiProperty({description:"Education: Branch of the user"})
    @IsNotEmpty()
    private branch: string;

    @ApiProperty({description:"Education: If the user has any backlogs or not"})
    @IsNotEmpty()
    @IsAlpha()
    private backlogs: string;




  }
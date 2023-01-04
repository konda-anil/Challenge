import { z } from 'zod';
import { AADHAR_REGEX, PAN_REGEX, DATE_FORMAT_REGEX } from '../../utils';

export enum EmployeeType {
  FullTime = 'Full-Time',
  PartTime =  'Part-Time',
}

export const EmployeeName = z.string({ 
  required_error: 'User Name is required',
  invalid_type_error: 'User Name is invalid',
})
.trim()
.min(1, {
  message: 'User Name is required',
});

export const EmployeeID = z.number({
  required_error: 'ID is required',
  invalid_type_error: 'ID is invalid',
});

export const EmployeeEmail = z.string({
  required_error: 'Email ID is required',
  invalid_type_error: 'Email ID is invalid',
})
.trim()
.email({ message: 'Invalid Email ID' });

export const EmployeeAadhar = z.string({
  required_error: 'Aadhar Number is required',
  invalid_type_error: 'Aadhar Number is invalid',
})
.trim()
.regex(AADHAR_REGEX, 'Aadhar Number is invalid');

export const EmployeePAN = z.string({
  required_error: 'PAN Number is required',
  invalid_type_error: 'PAN Number is invalid',
})
.trim()
.regex(PAN_REGEX, 'PAN Number is invalid');

export const EmployeeEnumType = z.nativeEnum(EmployeeType, {
  errorMap: (issue) => {
    switch (issue.code) {
      case 'invalid_type':
        return { message: `Employee type must be ${EmployeeType.FullTime} or ${EmployeeType.PartTime}` };
      case 'invalid_enum_value':
        return { message: `Employee type must be ${EmployeeType.FullTime} or ${EmployeeType.PartTime}` };
      default:
        return { message: 'Employee Type is required' };
    }
  },
});

export const EmployeeDOJ = z.string({
  required_error: 'Joining Date is required',
  invalid_type_error: 'Invalid date format, expected DD-MM-YYYY',
})
.trim()
.regex(DATE_FORMAT_REGEX, 'Invalid date format, expected DD-MM-YYYY');

export const EmployeeSchema = z.object({
  name: EmployeeName,
  id: EmployeeID,
  emailId: EmployeeEmail,
  aadharNumber: EmployeeAadhar,
  panNumber: EmployeePAN,
  employeeType: EmployeeEnumType,
  joiningDate: EmployeeDOJ,
});

export type Employee = z.infer<typeof EmployeeSchema>;
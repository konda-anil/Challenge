import react, { useEffect, useReducer } from 'react';
import {
  Employee,
  EmployeeAadhar,
  EmployeeDOJ,
  EmployeeEmail,
  EmployeeEnumType,
  EmployeeName,
  EmployeePAN,
  EmployeeSchema,
  EmployeeType,
} from '../features';
import { EmployeeFormActionType, EmployeeFormAction, EmployeeEditFrom } from '../components';
import { fromZodError } from 'zod-validation-error';
import { string, ZodIssue } from 'zod';




const reducer = (state: EmployeeEditFrom, action: EmployeeFormAction): EmployeeEditFrom => {
  switch (action.type) {
    case EmployeeFormActionType.PopulateDate:
      return {
        ...action.payload as EmployeeEditFrom
      };
    case EmployeeFormActionType.NameChange:
      const parsedName =  EmployeeName.safeParse(action.payload as string)
      return {
        ...state,
        name: {
          value: action.payload as string,
          error: parsedName.success ? '' : fromZodError(parsedName.error).details[0].message
        }
      };
    case EmployeeFormActionType.EmailChange:
      const parsedEmail =  EmployeeEmail.safeParse(action.payload as string)
      return {
        ...state,
        emailId: {
          value: action.payload as string,
          error: parsedEmail.success ? '' : fromZodError(parsedEmail.error).details[0].message
        }
      };
    case EmployeeFormActionType.AadharChange:
      const parsedAadhar =  EmployeeAadhar.safeParse(action.payload as string)
      return {
        ...state,
        aadharNumber: {
          value: action.payload as string,
          error: parsedAadhar.success ? '' : fromZodError(parsedAadhar.error).details[0].message
        }
      };
    case EmployeeFormActionType.PANChange:
      const parsedPAN =  EmployeePAN.safeParse(action.payload as string)
      return {
        ...state,
        panNumber: {
          value: action.payload as string,
          error: parsedPAN.success ? '' : fromZodError(parsedPAN.error).details[0].message
        }
      };
    case EmployeeFormActionType.EmployeeTypeChange:
      const parsedEmployeeType =  EmployeeEnumType.safeParse(action.payload as string)
      return {
        ...state,
        employeeType: {
          value: action.payload as string,
          error: parsedEmployeeType.success ? '' : fromZodError(parsedEmployeeType.error).details[0].message
        }
      };
    case EmployeeFormActionType.DateOfJoiningChange:
      const parsedJD =  EmployeeDOJ.safeParse(action.payload as string)
      return {
        ...state,
        joiningDate: {
          value: action.payload as string,
          error: parsedJD.success ? '' : fromZodError(parsedJD.error).details[0].message
        }
      };
    default:
      throw new Error(`Invalid action: ${action.type}`);
  }
}

const getFormData = (data: Employee): EmployeeEditFrom => {
  const initialFormValue: EmployeeEditFrom = {
    id: {
      value: data.id
    },
    aadharNumber: {
      value: data.aadharNumber,
    },
    emailId: {
      value: data.emailId,
    },
    employeeType: {
      value: data.employeeType,
    },
    joiningDate: {
      value: data.joiningDate,
    },
    name: {
      value: data.name,
    },
    panNumber: {
      value: data.panNumber,
    }
  }
  return initialFormValue;
}

export const useEmployeeForm = (data: Employee) => {

  const [formData, dispatch] = useReducer<typeof reducer>(reducer, getFormData(data));

  useEffect(() => {
    dispatch({
      type: EmployeeFormActionType.PopulateDate,
      payload: getFormData(data)
    });
  }, [data]); 


  const formValue: Employee = {
    id: formData.id.value as number,
    name: formData.name.value as string,
    emailId: formData.emailId.value as string,
    aadharNumber: formData.aadharNumber.value  as string,
    panNumber: formData.panNumber.value  as string,
    employeeType: formData.employeeType.value as EmployeeType,
    joiningDate : formData.joiningDate.value  as string,
  }

  const isValid = EmployeeSchema.safeParse(formValue).success;

  return [
    formData,
    formValue,
    isValid,
    dispatch,
  ] as [EmployeeEditFrom, Employee, boolean, typeof dispatch]
}
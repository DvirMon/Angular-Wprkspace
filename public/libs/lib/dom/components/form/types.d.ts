export interface FormServerError {
    control: string;
    message: string;
}
export declare enum FormErrorType {
    Required = "required",
    Pattern = "pattern",
    EmailPattern = "email",
    Server = "serverError"
}

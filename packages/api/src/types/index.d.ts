declare module 'legit' {
  const validateEmailAddress: (
    emailAddress: string
  ) => Promise<{ isValid: boolean; mxArray: [{exchange: string, priority: number}] }>;

  export default validateEmailAddress;
}
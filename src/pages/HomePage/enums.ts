export interface Input {
  title?: string;
  input: any;
  placeholder?: string | null;
  errors: any;
  name: string;
}

export interface FormObj {
  number: Input;
  test: Input;
}

type Frequency = "montly" | "weekly" | "daily";
export interface ExpenseType {
  id: number;
  title: string;
  amount: number;
  frequency: Frequency;
}

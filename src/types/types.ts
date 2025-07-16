// wallet types
export interface Income {
  amount: number;
  category: string;
  date: string;
}

export interface AddIncomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddIncome: (income: Income) => void;
}

export interface Expense {
  amount: number;
  category: string;
  date: string;
}

export interface AddExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddExpense: (expense: Expense) => void;
}
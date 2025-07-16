import { useState } from "react";
import { AddExpenseModal } from "./ui/AddExpenseModal";
import { AddIncomeModal } from "./ui/AddIncomeModal";
import { Income, Expense } from "../types/types";

const Wallet: React.FC = () => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isAddIncomeModalOpen, setAddIncomeModalOpen] = useState(false);
  const [isAddExpenseModalOpen, setAddExpenseModalOpen] = useState(false);
  const [currency] = useState("PLN");

  const totalIncome = incomes.reduce((t, i) => t + i.amount, 0);
  const totalExpenses = expenses.reduce((t, e) => t + e.amount, 0);
  const totalBalance = totalIncome - totalExpenses;

  return (
    <section className="w-full min-h-screen bg-gray-50 px-4 py-4 sm:px-40">
      {/* Greeting */}
      <header className="text-center mt-2 mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Hello,<span className="text-purple-500 ml-1">user!</span>
        </h2>
      </header>
      {/* Dashboard summary */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4">
        <div className="flex-1 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow">
          <h2 className="text-base">Total income:</h2>
          <p className="font-bold text-gray-500 text-xl">
            {totalIncome} {currency}
          </p>
        </div>
        <div className="flex-1 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow">
          <h2 className="text-base">Total expenses:</h2>
          <p className="font-bold text-gray-500 text-xl">
            {totalExpenses} {currency}
          </p>
        </div>
        <div className="flex-1 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow">
          <h2 className="text-base">Total balance:</h2>
          <p className="font-bold text-gray-500 text-xl">
            {totalBalance} {currency}
          </p>
        </div>
      </div>
      {/* Category icons */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        <div className="flex flex-col items-center bg-purple-100 border border-purple-200 rounded-xl p-2 w-16">
          <img src="/public/icons/food.svg" className="w-7 h-7" />
          <span className="text-xs font-medium text-gray-600">55%</span>
        </div>
        <div className="flex flex-col items-center bg-green-100 border border-green-200 rounded-xl p-2 w-16">
          <img src="/public/icons/health.svg" className="w-7 h-7" />
          <span className="text-xs font-medium text-gray-600">13%</span>
        </div>
        <div className="flex flex-col items-center bg-blue-100 border border-blue-200 rounded-xl p-2 w-16">
          <img src="/public/icons/home.svg" className="w-7 h-7" />
          <span className="text-xs font-medium text-gray-600">5%</span>
        </div>
        <div className="flex flex-col items-center bg-yellow-100 border border-yellow-200 rounded-xl p-2 w-16">
          <img src="/public/icons/pets.svg" className="w-7 h-7" />
          <span className="text-xs font-medium text-gray-600">10%</span>
        </div>
        <div className="flex flex-col items-center bg-slate-100 border border-slate-200 rounded-xl p-2 w-16">
          <img src="/public/icons/others.svg" className="w-7 h-7" />
          <span className="text-xs font-medium text-gray-600">12%</span>
        </div>
      </div>
      {/* Stats - incomes & expenses */}
      <div className="flex flex-col gap-4">
        <div className="bg-white p-4 border border-slate-200 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold">Incomes</h2>
            <button
              className="bg-purple-400 hover:bg-purple-500 text-white px-3 py-1 rounded text-sm"
              onClick={() => setAddIncomeModalOpen(true)}
            >
              Add income
            </button>
          </div>
          <ul className="space-y-2">
            {incomes.length === 0 && (
              <li className="text-gray-400 text-sm">No incomes yet.</li>
            )}
            {incomes.map((income, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-center text-sm font-semibold text-gray-600 bg-slate-100 p-2 rounded"
              >
                <span className="mr-2">
                  💸{" "}
                  <span className="font-medium">
                    {income.amount} {currency}
                  </span>
                </span>
                <span className="mr-2">| {income.category}</span>
                <span>| {income.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 border border-slate-200 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold">Expenses</h2>
            <button
              className="bg-purple-400 hover:bg-purple-500 text-white px-3 py-1 rounded text-sm"
              onClick={() => setAddExpenseModalOpen(true)}
            >
              Add expense
            </button>
          </div>
          <ul className="space-y-2">
            {expenses.length === 0 && (
              <li className="text-gray-400 text-sm">No expenses yet.</li>
            )}
            {expenses.map((expense, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-center text-sm font-semibold text-gray-600 bg-slate-100 p-2 rounded"
              >
                <span className="mr-2">
                  🧾{" "}
                  <span className="font-medium">
                    {expense.amount} {currency}
                  </span>
                </span>
                <span className="mr-2">| {expense.category}</span>
                <span>| {expense.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Modals */}
      <AddIncomeModal
        isOpen={isAddIncomeModalOpen}
        onClose={() => setAddIncomeModalOpen(false)}
        onAddIncome={(income: Income) => setIncomes((prev) => [...prev, income])}
      />
      <AddExpenseModal
        isOpen={isAddExpenseModalOpen}
        onClose={() => setAddExpenseModalOpen(false)}
        onAddExpense={(expense: Expense) => setExpenses((prev) => [...prev, expense])}
      />
    </section>
  );
};

export default Wallet;

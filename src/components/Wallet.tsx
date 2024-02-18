import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface Income {
  amount: number;
  category: string;
  date: string;
}

interface AddIncomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddIncome: (income: Income) => void;
}

interface Expense {
  amount: number;
  category: string;
  date: string;
}

interface AddExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddExpense: (expense: Expense) => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({
  isOpen,
  onClose,
  onAddExpense,
}) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleAddExpense = () => {
    if (!amount || !category || !date) {
      alert("Please fill in all fields");
      return;
    }

    const expense: Expense = {
      amount: parseFloat(amount),
      category,
      date,
    };

    onAddExpense(expense);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Add Expense Modal"
    >
      <div
        className="modal-close cursor-pointer z-50 absolute top-0 right-0 mt-2 mr-2"
        onClick={onClose}
      >
        <img src="/public/icons/close.png" alt="Close" width={20} />
      </div>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="text-lg font-semibold mb-2">Add Expense</h3>
        </div>
        <div className="modal-body">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field mb-4 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field mb-4 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field mb-4 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="modal-footer">
          <button
            className="btn-primary bg-green-300 rounded-md px-1 py-0.5"
            onClick={handleAddExpense}
          >
            Add
          </button>
          <button
            className="btn-secondary bg-slate-300 ml-2 rounded-md px-1 py-0.5"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

const AddIncomeModal: React.FC<AddIncomeModalProps> = ({
  isOpen,
  onClose,
  onAddIncome,
}) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleAddIncome = () => {
    if (!amount || !category || !date) {
      alert("Please fill in all fields");
      return;
    }

    // Convert amount to number
    const income: Income = {
      amount: parseFloat(amount),
      category,
      date,
    };

    onAddIncome(income);
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Add Income Modal"
    >
      <div
        className="modal-close cursor-pointer z-50 absolute top-0 right-0 mt-2 mr-2"
        onClick={onClose}
      >
        <img src="/public/icons/close.png" width={20} alt="Close" />
      </div>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="text-lg font-semibold mb-2">Add Income</h3>
        </div>
        <div className="modal-body">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field mb-4 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field mb-4 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field mb-4 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="modal-footer">
          <button
            className="btn-primary bg-green-300 rounded-md px-1 py-0.5"
            onClick={handleAddIncome}
          >
            Add
          </button>
          <button
            className="btn-secondary bg-slate-300 ml-2 rounded-md px-1 py-0.5"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

const Wallet: React.FC = () => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [isAddIncomeModalOpen, setAddIncomeModalOpen] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isAddExpenseModalOpen, setAddExpenseModalOpen] = useState(false);

  const handleAddIncome = (income: Income) => {
    setIncomes([...incomes, income]);
  };

  const totalIncome = incomes.reduce(
    (total, income) => total + income.amount,
    0,
  );

  const handleAddExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  return (
    <section className="grid grid-rows-6 grid-cols-11 w-screen max-h-screen min-w-fit">
      {/* Greeting  */}
      <h1 className="flex justify-center items-center row-start-1 row-end-2 col-start-2 col-end-4 text-center text-2xl font-semibold">
        <h2>
          Hello, <strong className="text-purple-500 ml-1"> user!</strong>
        </h2>
      </h1>

      {/* Dashboard  */}
      <div className=" row-start-2 row-end-2 col-start-2 col-end-5 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <h2>Total income:{totalIncome}</h2>
      </div>
      <div className=" row-start-2 row-end-2 col-start-5 col-end-8 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <h2>Total expenses:{totalExpenses}</h2>
      </div>
      <div className=" row-start-2 row-end-2 col-start-8 col-end-11 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <h2>Total balance:</h2>
      </div>
      <div className="row-start-3 row-end-4 col-start-2 col-end-4 bg-purple-100 p-3 m-4 border-2 border-purple-300 rounded-xl">
        <h2 className="text-purple-600">wallet:</h2>
      </div>
      <div className="row-start-3 row-end-4 col-start-4 col-end-6 bg-green-100 p-3 m-4 border-2 border-green-300 rounded-xl">
        <h2 className="text-green-600">savings:</h2>
      </div>

      {/* Icons  */}
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-6 col-end-7 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/food.svg" />
      </div>
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-7 col-end-8 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/health.svg" />
      </div>
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-8 col-end-9 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/home.svg" />
      </div>
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-9 col-end-10 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/pets.svg" />
      </div>
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-10 col-end-11 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/others.svg" />
      </div>

      {/* Stats  */}
      <div className="row-start-4 row-end-6 col-start-2 col-end-6 bg-slate-50  p-5 m-4 border-2 border-slate-300 rounded-xl">
        <button
          className="before:ease relative p-1 m-2 text-white text-sm overflow-hidden border border-purple-400 bg-purple-400 transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 rounded-md"
          onClick={() => setAddIncomeModalOpen(true)}
        >
          Add income
        </button>
        <h2>Incomes:</h2>
        <p>{totalIncome}</p>
      </div>
      <AddIncomeModal
        isOpen={isAddIncomeModalOpen}
        onClose={() => setAddIncomeModalOpen(false)}
        onAddIncome={handleAddIncome}
      />
      <div className="row-start-4 row-end-6 col-start-6 col-end-11 bg-slate-50  p-5 m-4 border-2 border-slate-300 rounded-xl">
        <button
          className="before:ease relative p-1 m-2 text-white text-sm overflow-hidden border border-purple-400 bg-purple-400 transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 rounded-md"
          onClick={() => setAddExpenseModalOpen(true)}
        >
          Add expenses
        </button>
        <h2>Expenses:</h2>
        <p>{totalExpenses}</p>
      </div>
      <AddExpenseModal
        isOpen={isAddExpenseModalOpen}
        onClose={() => setAddExpenseModalOpen(false)}
        onAddExpense={handleAddExpense}
      />
    </section>
  );
};
export default Wallet;

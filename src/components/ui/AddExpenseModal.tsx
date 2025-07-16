import { useState } from "react";
import Modal from "react-modal";
import { AddExpenseModalProps } from "../../types/types";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    inset: "10% 5%",
    padding: "0",
    borderRadius: "1rem",
    maxWidth: "400px",
    margin: "auto",
  },
};

export const AddExpenseModal: React.FC<AddExpenseModalProps> = ({
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
    onAddExpense({ amount: parseFloat(amount), category, date });
    setAmount("");
    setCategory("");
    setDate(""); // Clear fields
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="relative p-4">
        <button
          className="absolute top-3 right-3 text-gray-400"
          onClick={onClose}
        >
          <img src="/public/icons/close.png" alt="Close" width={20} />
        </button>
        <h3 className="text-xl font-bold mb-4 text-center">Add Expense</h3>
        <div className="flex flex-col gap-3">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field p-2 border border-gray-300 rounded-md"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button
            className="bg-green-400 px-4 py-1 rounded-md text-white"
            onClick={handleAddExpense}
          >
            Add
          </button>
          <button
            className="bg-slate-300 px-4 py-1 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

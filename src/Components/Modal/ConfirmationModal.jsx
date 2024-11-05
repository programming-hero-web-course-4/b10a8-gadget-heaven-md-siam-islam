import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationModal = ({ onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Confirm Purchase</h2>
                <p>Are you sure you want to complete the purchase?</p>
                <div className="flex justify-end gap-4 mt-6">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                        Close
                    </button>
                    <button 
                        onClick={onConfirm} 
                        className="px-4 py-2 rounded bg-[#9538E2] text-white hover:bg-[#7f33b8]">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;

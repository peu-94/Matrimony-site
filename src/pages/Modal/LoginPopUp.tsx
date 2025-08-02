import React from "react";
import { X } from "lucide-react";

interface LoginPopUpProps {
  visible: boolean;
  onClose: () => void;
}
const LoginPopUp = ({ visible, onClose }: LoginPopUpProps) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          <X />
        </button>

        <h2 className="text-center text-lg font-medium mb-4">
          Let's set up your account, while we find Matches for you!
        </h2>

        <form className="space-y-4">
          <select className="w-full border px-3 py-2 rounded" required>
            <option value="">Profile for</option>
            <option value="myself">Myself</option>
            <option value="myself">Son</option>
            <option value="myself">Daughter</option>
            <option value="sibling">Sibling</option>
            <option value="friend">Friend</option>
          </select>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border px-3 py-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border px-3 py-2 rounded"
              required
            />
          </div>

          <select className="w-full border px-3 py-2 rounded" required>
            <option value="">Religion</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="Jain">Jain</option>
            <option value="Sikh">Sikh</option>
            <option value="Parsi">Parsi</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Spiritual">Spiritual</option>
            <option value="other">other</option>
          </select>

          <select className="w-full border px-3 py-2 rounded" required>
            <option value="">Community</option>
            <option value="Bengali">Bengali</option>
            <option value="Hindi">Punjabi</option>
            <option value="Hindi">Odia</option>
            <option value="Hindi">Kannada</option>
            <option value="Hindi">Tamil</option>
            <option value="Hindi">Telegu</option>
            <option value="Hindi">Malayali</option>
            <option value="Hindi">Assamese</option>
            <option value="Hindi">Rajasthani</option>
          </select>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 rounded font-medium hover:bg-cyan-600"
          >
            Next
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already a Member?{" "}
          <a href="#" className="text-cyan-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPopUp;

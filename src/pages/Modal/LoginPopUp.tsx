import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface LoginPopUpProps {
  visible: boolean;
  onClose: () => void;
}

const LoginPopUp = ({ visible, onClose }: LoginPopUpProps) => {
  if (!visible) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/50">
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-2xl
                      text-gray-900 text-base font-normal"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          <X />
        </button>

        <h2 className="text-center text-lg font-medium mb-4">
          Let's set up your account, while we find Matches for you!
        </h2>

        <form className="space-y-4">
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 text-base font-normal"
            required
          >
            <option value="">Profile for</option>
            <option value="myself">Myself</option>
            <option value="son">Son</option>
            <option value="daughter">Daughter</option>
            <option value="sibling">Sibling</option>
            <option value="friend">Friend</option>
          </select>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border border-gray-300 rounded px-3 py-2 text-base font-normal
                         placeholder:font-normal placeholder:text-gray-400"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border border-gray-300 rounded px-3 py-2 text-base font-normal
                         placeholder:font-normal placeholder:text-gray-400"
              required
            />
          </div>

          <select
            className="w-full border border-gray-300 rounded px-3 py-2 text-base font-normal"
            required
          >
            <option value="">Religion</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="jain">Jain</option>
            <option value="sikh">Sikh</option>
            <option value="parsi">Parsi</option>
            <option value="buddhist">Buddhist</option>
            <option value="spiritual">Spiritual</option>
            <option value="other">Other</option>
          </select>

          <select
            className="w-full border border-gray-300 rounded px-3 py-2 text-base font-normal"
            required
          >
            <option value="">Community</option>
            <option value="Bengali">Bengali</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Odia">Odia</option>
            <option value="Kannada">Kannada</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
            <option value="Malayali">Malayali</option>
            <option value="Assamese">Assamese</option>
            <option value="Rajasthani">Rajasthani</option>
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
    </div>,
    document.body
  );
};

export default LoginPopUp;

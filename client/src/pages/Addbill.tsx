import React, { useState } from 'react';

const Addbill = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [image, setImage] = useState<string|null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ phone, amount, image });
    // You can send this data to your backend
  };

  return (
    <div className="flex sm:justify-center sm:items-center sm:min-h-screen p-2 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 border border-gray-200 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Add Bill</h2>

        <label className="block mb-2 text-sm font-medium">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
          placeholder="Enter phone number"
          required
        />

        <label className="block mb-2 text-sm font-medium">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
          placeholder="Enter amount"
          required
        />

        <label className="block mb-2 text-sm font-medium">Capture Image</label>
        <input
          type="file"
          
          onChange={handleImageChange}
          className="mb-4 "
          required
        />

        {image && (
          <div className="mb-4">
            <img src={image} alt="Captured" className="w-full rounded-md" />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addbill;

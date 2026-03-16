import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Đăng nhập với:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100 font-serif">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Cột trái: Hình ảnh & Welcome */}
        <div className="md:w-1/2 bg-amber-900 text-white p-12 flex flex-col justify-center items-center text-center space-y-6">
          <h2 className="text-4xl font-bold italic">Mọt Sách Tavern</h2>
          <p className="text-stone-300">"Mỗi cuốn sách là một chuyến phiêu lưu mới. Hãy tiếp tục hành trình của bạn."</p>
          <div className="w-24 h-1 bg-amber-500"></div>
        </div>

        {/* Cột phải: Form đăng nhập */}
        <div className="md:w-1/2 p-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Chào mừng trở lại!</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Email hoặc Tên đăng nhập</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border-b-2 border-stone-200 focus:border-amber-700 outline-none transition"
                placeholder="reader@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Mật khẩu</label>
              <input
                type="password"
                className="w-full mt-1 p-3 border-b-2 border-stone-200 focus:border-amber-700 outline-none transition"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-500">
                <input type="checkbox" className="mr-2 accent-amber-700" /> Nhớ mật khẩu
              </label>
              <a href="#" className="text-amber-800 hover:underline">Quên mật khẩu?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-800 text-white py-3 rounded-md font-semibold hover:bg-amber-900 transform active:scale-95 transition"
            >
              Mở Trang Sách
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Chưa có tài khoản? <a href="#" className="text-amber-800 font-bold hover:underline">Đăng ký ngay</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from "react";

const SettingsPage = () => {
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("Roboto");
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState("Tiếng Việt");

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`max-w-lg mx-auto shadow-lg rounded-lg p-6 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Cài đặt</h1>

        {/* Theme Section */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Giao diện</label>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setTheme("light")}
              className={`py-2 px-4 rounded-l-lg w-1/2 text-center ${
                theme === "light"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Sáng
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`py-2 px-4 rounded-r-lg w-1/2 text-center ${
                theme === "dark"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Tối
            </button>
          </div>
        </div>

        {/* Font Section */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Font chữ</label>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 ${
              theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
          >
            <option value="Roboto">Roboto</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </div>

        {/* Font Size Section */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Size chữ</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 ${
              theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
          >
            <option value={16}>16</option>
            <option value={18}>18</option>
            <option value={20}>20</option>
          </select>
        </div>

        {/* Language Section */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Ngôn ngữ</label>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setLanguage("Tiếng Việt")}
              className={`py-2 px-4 rounded-l-lg w-1/3 text-center ${
                language === "Tiếng Việt"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Tiếng Việt
            </button>
            <button
              onClick={() => setLanguage("English")}
              className={`py-2 px-4 w-1/3 text-center ${
                language === "English"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("日本語")}
              className={`py-2 px-4 rounded-r-lg w-1/3 text-center ${
                language === "日本語"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              日本語
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div
          className="mt-6 text-center py-6 rounded-lg shadow-lg"
          style={{
            fontFamily: font,
            fontSize: `${fontSize}px`,
            backgroundColor: "#f8b7d4",
            color: "#333",
          }}
        >
          Aa
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

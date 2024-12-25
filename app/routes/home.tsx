import { useState } from "react";
import CodeAntAILogo from "../assets/codeant.svg";
import SearchLogo from "../assets/search.svg";
import SizeLogo from "../assets/size.svg";

export default function Home() {
  const users = ["UtkarshDhairyaPanwar", "pavanmanishd"]; // List of users
  const [selectedUser, setSelectedUser] = useState(users[0]); // Default to the first user
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleUserChange = (user: string) => {
    setSelectedUser(user);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const sidebarButtons = [
    { id: "repositories", label: "Repositories", icon: "📁", pos: "top" },
    { id: "ai-review", label: "AI Code Review", icon: "🤖", pos: "top" },
    { id: "cloud-security", label: "Cloud Security", icon: "☁️", pos: "top" },
    { id: "how-to-use", label: "How to Use", icon: "📖", pos: "top" },
    { id: "settings", label: "Settings", icon: "⚙️", pos: "top" },
    { id: "support", label: "Support", icon: "📞", pos: "bottom" },
    { id: "logout", label: "Logout", icon: "🚪", pos: "bottom" },
  ];

  const repositories = [
    {
      id: 1,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 2,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 1,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 2,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 1,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 2,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 1,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 2,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 1,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 2,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 1,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },
    {
      id: 2,
      reponame: "CodeAnt AI",
      type: "Private",
      language: "React",
      size: "7320 KB",
      updated_at: "2024-07-16T07:29:57Z",
    },

  ];

  const [selectedButton, setSelectedButton] = useState("repositories"); // Default selected button

  return (
    <div className="bg-white h-screen w-screen flex flex-row text-black">
      {/* Sidebar */}
      <div className="w-1/6 flex flex-col justify-between">
        {/* Logo and User Dropdown */}
        <div className="flex flex-col">
          {/* Logo Section */}
          <div className="flex flex-row items-center gap-2 p-4">
            <img src={CodeAntAILogo} alt="CodeAnt AI Logo" className="w-8" />
            <p className="font-semibold text-lg">CodeAnt AI</p>
          </div>
          {/* User Dropdown */}
          <div className="relative p-4">
            <button
              onClick={toggleDropdown}
              className="inline-flex w-full justify-between items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none border border-gray-300"
            >
              {selectedUser}
              <svg
                className={`w-5 h-5 text-black transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black/5 z-10">
                <ul className="py-1 text-sm text-gray-700">
                  {users.map((user) => (
                    <li key={user}>
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => handleUserChange(user)}
                      >
                        {user}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col p-4">
            {sidebarButtons.map((button) =>
              button.pos === "top" ? (
                <button
                  key={button.id}
                  onClick={() => setSelectedButton(button.id)}
                  className={`flex flex-row items-center gap-4 p-2 w-full rounded-md ${
                    selectedButton === button.id
                      ? "bg-[#1570EF] text-white"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  <span className="text-lg">{button.icon}</span>
                  <span className="font-medium">{button.label}</span>
                </button>
              ) : null
            )}
          </div>
        </div>
        <div className="flex flex-col p-4">
          {sidebarButtons.map((button) =>
            button.pos === "bottom" ? (
              <button
                key={button.id}
                onClick={() => setSelectedButton(button.id)}
                className={`flex flex-row items-center gap-4 p-2 w-full rounded-md ${
                  selectedButton === button.id
                    ? "bg-[#1570EF] text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                <span className="text-lg">{button.icon}</span>
                <span className="font-medium">{button.label}</span>
              </button>
            ) : null
          )}
        </div>
      </div>
      <div className="w-5/6 bg-[#FAFAFA] p-4">
        <div className="bg-white border border-[#E9EAEB] shadow-[0px_1px_2px_rgba(10,13,18,0.05)] rounded-[12px]  h-[100%] flex flex-col">
          <div className="border border-b-[1px] flex flex-col">
            <div className="flex flex-row justify-between items-center p-4">
              <div className="flex flex-col">
                <p>Repositories</p>
                <p>33 total repositories</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <button className="flex items-center justify-center rounded-lg mr-2 border-[#D5D7DA] border gap-2 p-2">
                  <div>🔄</div>
                  <p className="">Refresh All</p>
                </button>
                <button className="flex items-center justify-center rounded-lg bg-[#1570EF] text-white gap-2 p-2">
                  <div>+</div>
                  <p className="">Add Repository</p>
                </button>
              </div>
            </div>
            <div className="flex flex-row p-4">
              <div className="relative">
                <input
                  type="text"
                  className="pl-10 py-2 pr-24 border border-gray-300 bg-white rounded-md w-full"
                  placeholder="Search Repositories"
                />
                <img
                  src={SearchLogo}
                  alt="Search Logo"
                  className="absolute left-2 top-2.5 w-5"
                />
              </div>
            </div>
          </div>
          <div
            className="repos overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            {/* Repositories List */}
            {repositories.map((repo) => (
              <div
                key={repo.id}
                className="flex flex-col p-4 border border-b-[1px] gap-2 hover:bg-[#F7F8F9]"
              >
                <div className="flex flex-row items-center gap-4 justify-start">
                  <p>{repo.reponame}</p>
                  <div className="border border-[#B2DDFF] rounded-full px-2 text-[#175CD3] bg-[#EFF8FF]">
                  {repo.type}</div>
                </div>
                <div className="flex flex-row items-center gap-7 justify-start">
                  <div className="flex flex-row items-center gap-2">
                    <p>{repo.language}</p>
                    <div className="bg-[#1570EF] rounded-full p-1"></div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <img src={SizeLogo} alt="Size Logo" className="w-4" />
                    <p>{repo.size}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <p>{calc_days(repo.updated_at)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function calc_days(updated_at: string): string {
  const date1 = new Date(updated_at);
  const date2 = new Date();

  // Check if the date1 is valid
  if (isNaN(date1.getTime())) {
    return "Invalid date";
  }

  var diffTime = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (diffDays < 0 ) ? "Updated today": `Updated ${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
}

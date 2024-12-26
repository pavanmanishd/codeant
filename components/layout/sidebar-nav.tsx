"use client";

import {
  Select,
  SelectValue,
  SelectLabel,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from "@radix-ui/react-select";
import {
  Code2,
  Cloud,
  Settings,
  LogOut,
  HomeIcon,
  Phone,
  ChevronDown,
  BookText,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const mainMenuItems = [
  { icon: HomeIcon, label: "Repositories", href: "#" },
  { icon: Code2, label: "AI Code Review", href: "#" },
  { icon: Cloud, label: "Cloud Security", href: "#" },
  { icon: BookText, label: "How to Use", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

const bottomMenuItems = [
  { icon: Phone, label: "Support", href: "#" },
  { icon: LogOut, label: "Logout", href: "/" },
];

export function SidebarNav() {
  const [selectedItem, setSelectedItem] = useState<string>("Repositories");
  const [selectedDropdownOption, setSelectedDropdownOption] =
    useState<string>("UtkarshDhairyaPanwar");

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-1">
        <div className="mb-3">
          <Select
            value={selectedDropdownOption}
            onValueChange={(value) => setSelectedDropdownOption(value)}
          >
            <SelectTrigger className="w-[100%] flex items-center justify-between px-4 py-2 rounded-md text-gray-800 hover:bg-gray-50 border">
              <SelectValue placeholder="UtkarshDhairyaPan">
                {selectedDropdownOption}
              </SelectValue>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent className="bg-white border rounded-md shadow-lg">
              <SelectGroup>
                <SelectItem
                  value="UtkarshDhairyaPanwar"
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  UtkarshDhairyaPanwar
                </SelectItem>
                <SelectItem
                  value="PavanManish"
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  PavanManish
                </SelectItem>
                <SelectItem
                  value="CodeAntRepos"
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  CodeAntRepos
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {[...mainMenuItems, ...bottomMenuItems].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setSelectedItem(item.label)}
            className={`flex items-center space-x-2 w-[100%] px-4 py-2 rounded-md ${
              selectedItem === item.label
                ? "bg-blue-500 text-white"
                : "text-gray-700 font-semibold hover:bg-gray-50"
            } md:hidden`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}

        <div className="hidden md:block">
          {mainMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setSelectedItem(item.label)}
              className={`flex items-center space-x-2 w-[100%] px-4 py-2 rounded-md ${
                selectedItem === item.label
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 font-semibold hover:bg-gray-50"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-1 mb-14 hidden md:block">
        {bottomMenuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setSelectedItem(item.label)}
            className={`flex items-center space-x-2 w-[100%] px-4 py-2 rounded-md ${
              selectedItem === item.label
                ? "bg-blue-500 text-white"
                : "text-gray-700 font-semibold hover:bg-gray-50"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

interface FiltersProps {
  onApplyFilters?: (filters: {
    department: string;
    contentType: string;
    profession: string;
  }) => void;
}

export default function Filters({ onApplyFilters }: FiltersProps) {
  const [department, setDepartment] = useState("all");
  const [contentType, setContentType] = useState("all");
  const [profession, setProfession] = useState("all");

  const handleApply = () => {
    if (onApplyFilters) {
      onApplyFilters({
        department,
        contentType,
        profession,
      });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <h3 className="font-bold text-lg mb-4">Filters</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Department
          </label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All departments</option>
            <option value="gov-uk">GOV.UK Design System</option>
            <option value="hmrc">HMRC</option>
            <option value="moj">Ministry of Justice</option>
            <option value="nhs">NHS</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="content-type"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Type of content
          </label>
          <select
            id="content-type"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All types</option>
            <option value="component">Component</option>
            <option value="pattern">Pattern</option>
            <option value="style">Style</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="profession"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Profession
          </label>
          <select
            id="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All professions</option>
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
            <option value="content">Content designer</option>
            <option value="researcher">User researcher</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleApply}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium transition-colors"
      >
        Apply filters
      </button>
    </div>
  );
}

import { useState } from "react";

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const users = [
    {
      id: 1,
      name: "Priya Sharma",
      phone: "+91 98765 43210",
      location: "Bhubaneswar, Odisha",
      language: "Odia",
      queries: 23,
      lastActive: "2 hours ago",
      status: "active",
      joinDate: "2024-01-15",
      emergencyQueries: 2,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      phone: "+91 87654 32109",
      location: "Patna, Bihar",
      language: "Hindi",
      queries: 15,
      lastActive: "1 day ago",
      status: "active",
      joinDate: "2024-02-20",
      emergencyQueries: 0,
    },
    {
      id: 3,
      name: "Anjali Devi",
      phone: "+91 76543 21098",
      location: "Cuttack, Odisha",
      language: "Odia",
      queries: 31,
      lastActive: "30 minutes ago",
      status: "active",
      joinDate: "2023-12-10",
      emergencyQueries: 1,
    },
    {
      id: 4,
      name: "Suresh Patel",
      phone: "+91 65432 10987",
      location: "Ahmedabad, Gujarat",
      language: "Gujarati",
      queries: 8,
      lastActive: "3 days ago",
      status: "inactive",
      joinDate: "2024-03-05",
      emergencyQueries: 0,
    },
    {
      id: 5,
      name: "Meera Singh",
      phone: "+91 54321 09876",
      location: "Puri, Odisha",
      language: "Odia",
      queries: 19,
      lastActive: "5 hours ago",
      status: "active",
      joinDate: "2024-01-28",
      emergencyQueries: 3,
    },
    {
      id: 6,
      name: "Arjun Reddy",
      phone: "+91 43210 98765",
      location: "Hyderabad, Telangana",
      language: "Telugu",
      queries: 27,
      lastActive: "1 hour ago",
      status: "active",
      joinDate: "2023-11-15",
      emergencyQueries: 1,
    },
    {
      id: 7,
      name: "Kavita Joshi",
      phone: "+91 32109 87654",
      location: "Pune, Maharashtra",
      language: "Marathi",
      queries: 12,
      lastActive: "2 days ago",
      status: "active",
      joinDate: "2024-02-14",
      emergencyQueries: 0,
    },
    {
      id: 8,
      name: "Ramesh Nair",
      phone: "+91 21098 76543",
      location: "Kochi, Kerala",
      language: "Malayalam",
      queries: 35,
      lastActive: "4 hours ago",
      status: "active",
      joinDate: "2023-10-22",
      emergencyQueries: 2,
    },
    {
      id: 9,
      name: "Deepika Roy",
      phone: "+91 10987 65432",
      location: "Kolkata, West Bengal",
      language: "Bengali",
      queries: 22,
      lastActive: "6 hours ago",
      status: "active",
      joinDate: "2024-01-03",
      emergencyQueries: 1,
    },
    {
      id: 10,
      name: "Vikram Singh",
      phone: "+91 09876 54321",
      location: "Jaipur, Rajasthan",
      language: "Hindi",
      queries: 16,
      lastActive: "1 week ago",
      status: "inactive",
      joinDate: "2024-02-28",
      emergencyQueries: 0,
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);
    const matchesFilter =
      selectedFilter === "all" || user.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const totalStats = {
    total: users.length,
    active: users.filter((u) => u.status === "active").length,
    inactive: users.filter((u) => u.status === "inactive").length,
    totalQueries: users.reduce((sum, u) => sum + u.queries, 0),
    emergencyQueries: users.reduce((sum, u) => sum + u.emergencyQueries, 0),
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getStatusColor = (status) => {
    return status === "active"
      ? "text-green-600 dark:text-green-400"
      : "text-red-600 dark:text-red-400";
  };

  const getStatusBgColor = (status) => {
    return status === "active"
      ? "bg-green-100 dark:bg-green-900/20"
      : "bg-red-100 dark:bg-red-900/20";
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            User Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and monitor registered HealthSakhi users
          </p>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
          + Add New User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Users
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalStats.total}
              </p>
            </div>
            <div className="text-2xl">👥</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Active Users
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {totalStats.active}
              </p>
            </div>
            <div className="text-2xl">✅</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Inactive Users
              </p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {totalStats.inactive}
              </p>
            </div>
            <div className="text-2xl">⏸️</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Queries
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalStats.totalQueries}
              </p>
            </div>
            <div className="text-2xl">💬</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Emergency Queries
              </p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {totalStats.emergencyQueries}
              </p>
            </div>
            <div className="text-2xl">🚨</div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search users by name, location, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Users</option>
              <option value="active">Active Users</option>
              <option value="inactive">Inactive Users</option>
            </select>
          </div>
        </div>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            {/* User Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {getInitials(user.name)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.phone}
                  </p>
                </div>
              </div>
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBgColor(
                  user.status
                )} ${getStatusColor(user.status)}`}
              >
                {user.status}
              </div>
            </div>

            {/* User Details */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Location:
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.location}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Language:
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.language}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Total Queries:
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.queries}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Emergency Queries:
                </span>
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                  {user.emergencyQueries}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Last Active:
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.lastActive}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Join Date:
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.joinDate}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                View Details
              </button>
              <button className="flex-1 px-3 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No users found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default UsersPage;

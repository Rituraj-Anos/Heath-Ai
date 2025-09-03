import { motion } from "motion/react";
import StatsCards from "../components/HealthSakhi/StatsCards";
import ChartsSection from "../components/HealthSakhi/ChartsSection";
import QuickActions from "../components/HealthSakhi/QuickActions";
import RecentActivity from "../components/HealthSakhi/RecentActivity";

export default function Dashboard({ onPageChange }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-6 lg:p-8 space-y-8"
    >
      {/* Stats Cards */}
      <StatsCards />

      {/* Charts Section */}
      <ChartsSection />

      {/* Quick Actions */}
      <QuickActions onPageChange={onPageChange} />

      {/* Recent Activity */}
      <RecentActivity />
    </motion.div>
  );
}
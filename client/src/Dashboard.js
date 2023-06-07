import React from "react";
const Dashboard = () => {
  return (
    <div className="bg-white h-screen">
      <h1 className="text-3xl text-center py-8">Welcome to the Dashboard!</h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Statistics 1</h2>
            {/* Add your content for statistics 1 */}
          </div>
          <div className="bg-gray-200 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Statistics 2</h2>
            {/* Add your content for statistics 2 */}
          </div>
          <div className="bg-gray-200 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Statistics 3</h2>
            {/* Add your content for statistics 3 */}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          {/* Add your content for recent activity */}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

import React, { useState } from 'react';

export const Cocurricular = () => {
  const [showForm, setShowForm] = useState(false);
  const [activities, setActivities] = useState([{ activityName: '', activityType: '', date: '', certificate: '' }]);

  const handleInputChange = (index, field, value) => {
    const newActivities = [...activities];
    newActivities[index][field] = value;
    setActivities(newActivities);
  };

  const handleSaveActivity = () => {
    // Save logic for activities
    console.log('Activities Saved:', activities);
  };

  return (
    <div className="mt-4 w-full max-w-md bg-slate-500 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Extracurricular Activities</h2>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-2 w-full p-2 bg-blue-500 rounded-md text-white"
      >
        {showForm ? 'Cancel' : 'Add Activity'}
      </button>

      {showForm && (
        <div className="mt-4">
          {activities.map((activity, index) => (
            <div key={index} className="mb-4 space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Activity Name"
                  value={activity.activityName}
                  onChange={(e) => handleInputChange(index, 'activityName', e.target.value)}
                  className="w-full p-3 bg-gray-200 rounded-md"
                />
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Activity Type"
                  value={activity.activityType}
                  onChange={(e) => handleInputChange(index, 'activityType', e.target.value)}
                  className="w-full p-3 bg-gray-200 rounded-md"
                />
              </div>

              

              <div className="flex items-center space-x-4">
                <input
                  type="date"
                  value={activity.date}
                  onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                  className="w-full p-3 bg-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-2">
  <label className="text-gray-700">Upload a valid certificate (JPEG only):</label>
  <div className="flex items-center space-x-4">
    <input
      type="file"
      accept="image/jpeg"
      onChange={(e) => handleInputChange(index, 'certificate', e.target.files[0])}
      className="w-full p-3 bg-gray-200 rounded-md"
    />
  </div>
</div>

              <div className="flex items-center space-x-4">
                <input
                  type="Number"
                  placeholder="Hours"
                  value={activity.activityType}
                  onChange={(e) => handleInputChange(index, 'activityType', e.target.value)}
                  className="w-full p-3 bg-gray-200 rounded-md"
                />
              </div>
              
              
            </div>
          ))}

          <button
            onClick={handleSaveActivity}
            className="mt-4 w-full p-3 bg-blue-500 rounded-md text-white"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Cocurricular;

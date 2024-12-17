import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const parmas = useParams();
  const studentId = parmas.studentId;
  console.log(parmas.studentId);
  console.log("hello",studentId)

  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState('');
  const [updateScore, setUpdateScore] = useState({ year: '', semester: '', score: '' });
  const [updateMessage, setUpdateMessage] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/dashboard/${studentId}`);
        setDashboardData(response.data);
      } catch (err) {
        setError('Failed to load dashboard data');
      }
    };

    fetchDashboardData();
  }, [studentId]);

  const handleUpdateScoreChange = (e) => {
    const { name, value } = e.target;
    setUpdateScore((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateScoreSubmit = async (e) => {
    e.preventDefault();
    try {
      const { year, semester, score } = updateScore;
      await axios.post(`http://localhost:8080/api/dashboard/upload`, {
        student_id: studentId,
        year,
        semester,
        score
      });
      setUpdateMessage('Score updated successfully!');
      setUpdateScore({ year: '', semester: '', score: '' }); // Reset form
    } catch (err) {
      setUpdateMessage('Failed to update score');
    }
  };

  if (error) return <p className="error-message">{error}</p>;
  if (!dashboardData) return <p className="loading-message">Loading...</p>;

  const { admission_documents, academic_records } = dashboardData;

  return (
    <div className="dashboard-container">
      <h2>Student Dashboard</h2>
      <div className="admission-documents">
        <h3>Admission Documents</h3>
        <div>
          <strong>Admission Card:</strong>
          {admission_documents.admission_card ? (
            <div>
              <p>File Name: {admission_documents.admission_card.original_name}</p>
              <p>Uploaded At: {new Date(admission_documents.admission_card.uploaded_at).toLocaleString()}</p>
              <p>Verified: {admission_documents.admission_card.verified ? 'Yes' : 'No'}</p>
            </div>
          ) : (
            <p>No admission card uploaded.</p>
          )}
        </div>
      </div>
      <div className="academic-records">
        <h3>Academic Records</h3>
        {Object.keys(academic_records).length > 0 ? (
          Object.keys(academic_records).map((year) => (
            <div key={year}>
              <h4>{year.replace('_', ' ')}</h4>
              {Object.keys(academic_records[year]).map((semester) => (
                <div key={semester}>
                  <p>
                    <strong>{semester.replace('_', ' ')} Score:</strong> {academic_records[year][semester].result.score || 'N/A'}
                  </p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No academic records available.</p>
        )}
      </div>

      {/* Form for updating scores */}
      <div className="update-score-form">
        <h3>Update Score</h3>
        <form onSubmit={handleUpdateScoreSubmit}>
          <label>
            Year:
            <input type="text" name="year" value={updateScore.year} onChange={handleUpdateScoreChange} required />
          </label>
          <label>
            Semester:
            <input type="text" name="semester" value={updateScore.semester} onChange={handleUpdateScoreChange} required />
          </label>
          <label>
            Score:
            <input type="number" name="score" value={updateScore.score} onChange={handleUpdateScoreChange} required />
          </label>
          <button type="submit">Update Score</button>
        </form>
        {updateMessage && <p>{updateMessage}</p>}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';

export const Academic = () => {
  const [showAcademic, setShowAcademic] = useState(false);
  const [show10th, setShow10th] = useState(false);
  const [show12th, setShow12th] = useState(false);
  const [showCet, setShowCet] = useState(false);

  const handleSave10th = () => {
    console.log('10th Marks Saved');
  };

  const handleSave12th = () => {
    console.log('12th Marks Saved');
  };

  return (
    <div className="mt-4 w-full max-w-md bg-slate-500 text-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAcademic(!showAcademic)}>
        <h4 className="text-xl font-semibold">Academic</h4>
        <span className="transition-transform transform">{showAcademic ? '▲' : '▼'}</span>
      </div>
      {showAcademic && (
        <div className="mt-2">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setShow10th(!show10th)}>
            <h4 className="text-xl font-semibold">10th Marks</h4>
            <span className="transition-transform transform">{show10th ? '▲' : '▼'}</span>
          </div>
          {show10th && (
            <div className="mt-2 flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Enter 10th Marks" 
                className="w-full p-2 bg-gray-200 rounded-md"
              />
              <button 
                onClick={handleSave10th}
                className="p-2 bg-blue-500 rounded-md text-white"
              ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
              {/* save svg */}
<path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
<path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>

              </button>
            </div>
          )}

          <div className="flex items-center space-x-2 cursor-pointer mt-4" onClick={() => setShow12th(!show12th)}>
            <h4 className="text-xl font-semibold">12th Marks</h4>
            <span className="transition-transform transform">{show12th ? '▲' : '▼'}</span>
          </div>
          {show12th && (
            <div className="mt-2 flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Enter 12th Marks" 
                className="w-full p-2 bg-gray-200 rounded-md"
              />
              <button 
                onClick={handleSave12th}
                className="p-2 bg-blue-500 rounded-md text-white"
              ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
              {/* save svg */}
<path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
<path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
              </button>
            </div>
          )}
          <div className="flex items-center space-x-2 cursor-pointer mt-4" onClick={() => setShowCet(!showCet)}>
            <h4 className="text-xl font-semibold">Mht-Cet/Jee percentile</h4>
            <span className="transition-transform transform">{showCet ? '▲' : '▼'}</span>
          </div>
          {showCet && (
            <div className="mt-2 flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Enter Percentile" 
                className="w-full p-2 bg-gray-200 rounded-md"
              />
              <button 
                onClick={handleSave12th}
                className="p-2 bg-blue-500 rounded-md text-white"
              ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
              {/* save svg */}
<path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
<path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
              </button>
            </div>
          )}

          
        </div>
      )}
    </div>
  );
};

export default Academic;

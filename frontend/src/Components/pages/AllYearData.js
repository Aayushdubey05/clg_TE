import React, { useState } from 'react';

export const AllYearData = () => {
  const [showAcademic, setShowAcademic] = useState(false);
  const [showISE1, setShowISE1] = useState(false);
  const [showISE2, setShowISE2] = useState(false);
  const [showYear1, setShowYear1] = useState(false);
  const [showButton, setButton] = useState(false);
  const [showPointer, setShowPointer] = useState(false);
  const [ise1Todos, setISE1Todos] = useState([{ subject: '', marks: '' }]);
  const [ise2Todos, setISE2Todos] = useState([{ subject: '', marks: '' }]);
  const [pointerTodos, setPointerTodos] = useState([{ pointer: '' }]);

  const handleAddTodo = (section) => {
    if (section === 'ISE1'&& ise1Todos.length < 5) {
      setISE1Todos([...ise1Todos, { subject: '', marks: '' }]);
    } else if (section === 'ISE2'&& ise2Todos.length < 5) {
      setISE2Todos([...ise2Todos, { subject: '', marks: '' }]);
    } else if (section === 'Pointer') {
      setPointerTodos([...pointerTodos, { pointer: '' }]);
    }
  };

  const handleSave = (section) => {
    if (section === 'ISE1') {
      setISE1Todos([...ise1Todos]);
    } else if (section === 'ISE2') {
      setISE2Todos([...ise2Todos]);
    } else if (section === 'Pointer') {
      setPointerTodos([...pointerTodos]);
    }
  };

  const handleDeleteTodo = (section, index) => {
    if (section === 'ISE1'&&index>0) {
     const newTodos = ise1Todos.filter((_, i) => i !== index);
      setISE1Todos(newTodos);
    } else if (section === 'ISE2') {
      const newTodos = ise2Todos.filter((_, i) => i !== index);
      setISE2Todos(newTodos);
    } else if (section === 'Pointer') {
      const newTodos = pointerTodos.filter((_, i) => i !== index);
      setPointerTodos(newTodos);
    }
  };

  return (
    <div className="mt-4 w-full max-w-md bg-slate-500 text-white p-4 rounded-lg shadow-lg">
      {/* Academic Section */}
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAcademic(!showAcademic)}>
        <h4 className="text-xl font-semibold">Academic</h4>
        <span className="transition-transform transform">{showAcademic ? '▲' : '▼'}</span>
      </div>

      {showAcademic &&  <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowYear1(!showYear1)}>
        <h4 className="text-xl font-semibold">1st Year</h4>
        <span className="transition-transform transform">{showYear1 ? '▲' : '▼'}</span>
      </div>}
      {showYear1 && (
  <div className="mt-2">
    {/* ISE 1 Section */}
    <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowISE1(!showISE1)}>
      <h4 className="text-xl font-semibold">ISE 1</h4>
      <span className="transition-transform transform">{showISE1 ? '▲' : '▼'}</span>
    </div>
    {showISE1 && (
      <div className="mt-2">
        {ise1Todos.map((todo, index) => (
          <div key={index} className="flex items-center mb-2 space-x-2 text-black">
            <input
              type="text"
              placeholder="Subject"
              value={todo.subject}
              onChange={(e) => {
                const newTodos = [...ise1Todos];
                newTodos[index].subject = e.target.value;
                setISE1Todos(newTodos);
              }}
              className="w-1/2 p-2 bg-gray-200 rounded-md text-black"
            />
            <input
              type="number"
              placeholder="Marks"
              value={todo.marks}
              onChange={(e) => {
                const newTodos = [...ise1Todos];
                newTodos[index].marks = e.target.value;
                setISE1Todos(newTodos);
              }}
              className="w-1/2 p-2 bg-gray-200 rounded-md text-black"
            />
           
           <button 
                         
               onClick={() => handleDeleteTodo('ISE1', index)}
              className="p-2 bg-red-500 rounded-md text-white"
             >
             
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
 <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
 </svg>
             </button>
              
            
           
          </div>
        ))}
        <button
          onClick={() => handleAddTodo('ISE1')}
          className="mt-2 w-10 p-2 bg-green-500 rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
            {/* add more */}
<path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
</svg>
        </button>
        <button
          onClick={() => handleSave('ISE1')}
          className="mt-2 w-10 ml-1 p-2 bg-blue-500 rounded-md text-white font-semibold"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
           {/* save */}
<path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
<path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
        </button>
      </div>
    )}

    {/* ISE 2 Section */}
    <div className="flex items-center justify-between cursor-pointer mt-4" onClick={() => setShowISE2(!showISE2)}>
      <h4 className="text-xl font-semibold">ISE 2</h4>
      <span className="transition-transform transform">{showISE2 ? '▲' : '▼'}</span>
    </div>
    {showISE2 && (
      <div className="mt-2">
        {ise2Todos.map((todo, index) => (
          <div key={index} className="flex items-center mb-2 space-x-2 text-black">
            <input
              type="text"
              placeholder="Subject"
              value={todo.subject}
              onChange={(e) => {
                const newTodos = [...ise2Todos];
                newTodos[index].subject = e.target.value;
                setISE2Todos(newTodos);
              }}
              className="w-1/2 p-2 bg-gray-200 rounded-md"
            />
            <input
              type="number"
              placeholder="Marks"
              value={todo.marks}
              onChange={(e) => {
                const newTodos = [...ise2Todos];
                newTodos[index].marks = e.target.value;
                setISE2Todos(newTodos);
              }}
              className="w-1/2 p-2 bg-gray-200 rounded-md"
            />
            <button
              onClick={() => handleDeleteTodo('ISE2', index)}
              className="p-2 bg-red-500 rounded-md text-white"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
             {/* delete */}
<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>
            </button>
          </div>
        ))}
        <button
          onClick={() => handleAddTodo('ISE2')}
          className="mt-2 w-10 ml-1  p-2 bg-green-500 rounded-md"
        >
          {/* add more */}
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
<path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
</svg>
        </button>
        <button
          onClick={() => handleSave('ISE2')}
          className="mt-2 w-10 ml-1  p-2 bg-blue-500 rounded-md text-white font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
           {/* save svg */}
<path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
<path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
        </button>
      </div>
    )}

    {/* Pointer Section */}
    <div className="flex items-center justify-between cursor-pointer mt-4" onClick={() => setShowPointer(!showPointer)}>
      <h4 className="text-xl font-semibold">Pointer</h4>
      <span className="transition-transform transform">{showPointer ? '▲' : '▼'}</span>
    </div>
    {showPointer && (
      <div className="mt-2">
        {pointerTodos.map((todo, index) => (
          <div key={index} className="flex items-center mb-2 space-x-2 text-black">
            <input
              type="number"
              placeholder="Pointer (1-10)"
              value={todo.pointer}
              onChange={(e) => {
                const newTodos = [...pointerTodos];
                newTodos[index].pointer = e.target.value;
                setPointerTodos(newTodos);
              }}
              className="w-full p-2 bg-gray-200 rounded-md"
              min="1"
              max="10"
            />
           <button
          onClick={() => handleSave('Pointer')}
          className="mt-2\ w-10 ml-1 p-2 bg-blue-500 rounded-md text-white font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
          {/* save svg */}
<path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
<path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
       </button>
          </div>
        ))}
     
      </div>
    )}
  </div>
)}
     
    </div>
  );
}

export default AllYearData;

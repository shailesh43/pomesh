// src/components/Tasks.tsx
'use client';
import React, { useState, useEffect } from 'react';

// Define the Todo type
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Tasks: React.FC = () => {
  // State for todos
  const [todos, setTodos] = useState<Todo[]>([]);
  // State for the new todo input
  const [newTodo, setNewTodo] = useState('');
  // State for editing
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (e) {
        console.error('Failed to parse todos from localStorage', e);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Generate a unique ID for new todos
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  // Add a new todo
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const newTodoItem: Todo = {
      id: generateId(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };

  // Start editing a todo
  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
    setEditText('');
  };

  // Save edited todo
  const saveEdit = (id: string) => {
    if (editText.trim() === '') return;
    
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: editText } : todo
    ));
    
    setEditingId(null);
    setEditText('');
  };

  // Toggle todo completion status
  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-[#1c1917] rounded-lg shadow mt-10">
      <h1 className=" text-white text-2xl font-bold mb-4 text-center">Add Tasks to your timer</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="flex mb-12">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-grow px-4 py-2 border-[1px] rounded-full text-gray-800 outline-none"
        />
        <button 
          type="submit" 
          className="flex items-center justify-center px-4 ml-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <span className="text-xl">+</span>
        </button>
      </form>
      
      {/* Todo List */}
      <ul className="space-y-2">
        {todos.length === 0 ? (
          <li className="text-center text-gray-500">No todos yet. Add one above!</li>
        ) : (
          todos.map(todo => (
            <li 
              key={todo.id} 
              className={`flex items-center p-3 rounded-full ${todo.completed ? 'bg-gray-[#1c1917]' : 'bg-[#1c1917]'}`}
            >
              {editingId === todo.id ? (
                // Edit mode
                <div className="flex w-full items-center">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-grow px-2 py-1 rounded mr-2 bg-[#1c1917]"
                    autoFocus
                  />
                  <button 
                    onClick={() => saveEdit(todo.id)}
                    className="p-1 text-green-600 hover:text-green-800"
                  >
                    <span className="text-lg">💾</span>
                  </button>
                  <button 
                    onClick={cancelEditing}
                    className="p-1 text-red-600 hover:text-red-800 ml-1"
                  >
                    <span className="text-lg">✕</span>
                  </button>
                </div>
              ) : (
                // View mode
                <>
                  <button 
                    onClick={() => toggleComplete(todo.id)}
                    className={`p-1 mr-2 rounded-full border ${todo.completed ? 'px-3.5 bg-green-600 text-white border-green-500' : 'border-gray-300'}`}
                  >
                    {todo.completed && <span className="text-xs">✓</span>}
                  </button>
                  <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                    {todo.text}
                  </span>
                  <button 
                    onClick={() => startEditing(todo)}
                    className="p-1 text-blue-600 hover:text-blue-800 ml-1"
                  >
                    <span className="text-lg">✎</span>
                  </button>
                  <button 
                    onClick={() => deleteTodo(todo.id)}
                    className="p-1 text-red-600 hover:text-red-800 ml-1"
                  >
                    <span className="text-lg">🗑️</span>
                  </button>
                </>
              )}
            </li>
          ))
        )}
      </ul>
      
      {/* Summary */}
      {todos.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <p>{todos.filter(t => t.completed).length} of {todos.length} completed</p>
        </div>
      )}
    </div>
  );
};

export default Tasks;
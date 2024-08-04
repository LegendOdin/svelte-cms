<script>
  import { navigate } from 'svelte-routing';
  import { writable } from 'svelte/store';

  let username = '';
  let password = '';
  export let name = "Login";
  function login() {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('auth', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  }
</script>

<div class="flex justify-center items-center min-h-screen bg-gray-900">
  <h1>Login</h1>
  <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-3xl mb-8 text-center text-white">Login</h2>
    <form on:submit|preventDefault={login}>
      <div class="mb-6">
        <label for="username" class="block mb-2 text-gray-400">Username</label>
        <input id="username" type="text" class="w-full p-3 border rounded bg-gray-700 text-white border-gray-600 focus:outline-none focus:border-blue-500" bind:value={username} required />
      </div>
      <div class="mb-8">
        <label for="password" class="block mb-2 text-gray-400">Password</label>
        <input id="password" type="password" class="w-full p-3 border rounded bg-gray-700 text-white border-gray-600 focus:outline-none focus:border-blue-500" bind:value={password} required />
      </div>
      <button type="submit" class="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Login</button>
    </form>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, sans-serif;
    background-color: #1a202c;
  }

  .flex {
    display: flex;
  }

  .justify-center {
    justify-content: center;
  }

  .items-center {
    align-items: center;
  }

  .min-h-screen {
    min-height: 100vh;
  }

  .bg-gray-900 {
    background-color: #1a202c;
  }

  .bg-gray-800 {
    background-color: #2d3748;
  }

  .p-8 {
    padding: 2rem;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  }

  .w-full {
    width: 100%;
  }

  .max-w-md {
    max-width: 28rem;
  }

  .text-3xl {
    font-size: 1.875rem;
  }

  .mb-8 {
    margin-bottom: 2rem;
  }

  .text-center {
    text-align: center;
  }

  .text-white {
    color: #ffffff;
  }

  .text-gray-400 {
    color: #cbd5e0;
  }

  .block {
    display: block;
  }

  .mb-6 {
    margin-bottom: 1.5rem;
  }

  .border {
    border-width: 1px;
  }

  .border-gray-600 {
    border-color: #718096;
  }

  .bg-gray-700 {
    background-color: #4a5568;
  }

  .p-3 {
    padding: 0.75rem;
  }

  .rounded {
    border-radius: 0.25rem;
  }

  .focus\:outline-none:focus {
    outline: none;
  }

  .focus\:border-blue-500:focus {
    border-color: #4299e1;
  }

  .hover\:bg-blue-600:hover {
    background-color: #2b6cb0;
  }
</style>

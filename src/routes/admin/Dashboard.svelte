<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
  
    onMount(() => {
      if (!localStorage.getItem('auth')) {
        navigate('/login');
      }
    });
  </script>
  
  <div class="p-6">
    <h1 class="text-3xl mb-6 text-white">Admin Dashboard</h1>
    <p class="text-gray-400">Welcome to the admin dashboard. Use the navigation on the left to manage your CMS.</p>
  </div>
  
  <style>
    .text-3xl {
      font-size: 1.875rem;
    }
  
    .mb-6 {
      margin-bottom: 1.5rem;
    }
  
    .text-white {
      color: #ffffff;
    }
  
    .text-gray-400 {
      color: #cbd5e0;
    }
  
    .p-6 {
      padding: 1.5rem;
    }
  </style>
  
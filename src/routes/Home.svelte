<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    export let name = "Home";
    let pages = [];
  
    onMount(async () => {
      const response = await axios.get('http://localhost:5000/pages');
      pages = response.data;
    });
  </script>
  
  <div class="text-white">
    <h1>Home</h1>
    <ul>
      {#each pages as page}
        <li class="p-4 bg-gray-800 rounded mb-4">
          <h3 class="text-2xl">{page.title}</h3>
          <p>{page.content}</p>
        </li>
      {/each}
    </ul>
  </div>
  
  <style>
    .text-white {
      color: #ffffff;
    }
  
    .text-3xl {
      font-size: 1.875rem;
    }
  
    .mb-6 {
      margin-bottom: 1.5rem;
    }
  
    .bg-gray-800 {
      background-color: #2d3748;
    }
  
    .p-4 {
      padding: 1rem;
    }
  
    .rounded {
      border-radius: 0.25rem;
    }
  
    .mb-4 {
      margin-bottom: 1rem;
    }
  
    .text-2xl {
      font-size: 1.5rem;
    }
  </style>
  
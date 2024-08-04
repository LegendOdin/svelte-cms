<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
  
    let pages = [];
  
    onMount(async () => {
      const response = await axios.get('http://localhost:5000/pages');
      pages = response.data;
    });
  
    function createPage() {
      navigate('/admin/pages/create');
    }
  
    function editPage(id) {
      navigate(`/admin/pages/edit/${id}`);
    }
  
    async function deletePage(id) {
      await axios.delete(`http://localhost:5000/pages/${id}`);
      pages = pages.filter(page => page._id !== id);
    }
  </script>
  
  <div class="p-6">
    <h1 class="text-3xl mb-6 text-white">Pages</h1>
    <button class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-6" on:click={createPage}>Create New Page</button>
    <ul class="text-gray-400">
      {#each pages as page}
        <li class="mb-4">
          <span>{page.title}</span>
          <button class="ml-4 text-blue-500" on:click={() => editPage(page._id)}>Edit</button>
          <button class="ml-2 text-red-500" on:click={() => deletePage(page._id)}>Delete</button>
        </li>
      {/each}
    </ul>
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
  
    .bg-blue-500 {
      background-color: #4299e1;
    }
  
    .hover\:bg-blue-600:hover {
      background-color: #2b6cb0;
    }
  
    .rounded {
      border-radius: 0.25rem;
    }
  
    .p-2 {
      padding: 0.5rem;
    }
  
    .ml-4 {
      margin-left: 1rem;
    }
  
    .ml-2 {
      margin-left: 0.5rem;
    }
  
    .text-blue-500 {
      color: #4299e1;
    }
  
    .text-red-500 {
      color: #f56565;
    }
  </style>
  
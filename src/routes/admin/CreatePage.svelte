<script>
    import axios from 'axios';
    import { navigate } from 'svelte-routing';
  
    let title = '';
    let content = '';
  
    async function createPage() {
      await axios.post('http://localhost:5000/pages', {
        title,
        content,
      });
      alert('Page created!');
      navigate('/admin/pages');
    }
  </script>
  
  <div class="text-white">
    <h2 class="text-3xl mb-6">Create Page</h2>
    <div class="mb-4">
      <label class="block mb-2">Title</label>
      <input type="text" class="p-2 rounded bg-gray-700 text-white w-full" bind:value={title} />
    </div>
    <div class="mb-4">
      <label class="block mb-2">Content</label>
      <textarea class="p-2 rounded bg-gray-700 text-white w-full" bind:value={content}></textarea>
    </div>
    <button class="p-2 bg-blue-500 rounded" on:click={createPage}>Create</button>
  </div>
  
  <style>
    .bg-gray-700 {
      background-color: #4a5568;
    }
  
    .bg-blue-500 {
      background-color: #4299e1;
    }
  
    .rounded {
      border-radius: 0.25rem;
    }
  
    .p-2 {
      padding: 0.5rem;
    }
  
    .mb-4 {
      margin-bottom: 1rem;
    }
  
    .text-white {
      color: #ffffff;
    }
  
    .text-3xl {
      font-size: 1.875rem;
    }
  
    .mb-6 {
      margin-bottom: 1.5rem;
    }
  
    .w-full {
      width: 100%;
    }
  </style>
  
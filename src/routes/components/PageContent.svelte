<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    
    export let page;
  
    let content = '';
  
    onMount(async () => {
      const response = await axios.get(`http://localhost:5000/pages/${page._id}`);
      content = response.data.content;
    });
  </script>
  
  <div class="text-white">
    <h2 class="text-3xl mb-6">{page.title}</h2>
    <p>{content}</p>
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
  </style>
  
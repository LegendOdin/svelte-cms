<script>
  import { Router, Route, Link, navigate } from 'svelte-routing';
  import Home from './Home.svelte';
  import AdminLayout from './admin/AdminLayout.svelte';
  import Login from './Login.svelte';
  import PageContent from './components/PageContent.svelte';
  import axios from 'axios';
  import { onMount } from 'svelte';

  let currentPath = '';
  let pages = [];
  
  onMount(async () => {
    const response = await axios.get('http://localhost:5000/pages');
    pages = response.data;
  });
  //
  //      <li><Link to="/admin/dashboard" class="{currentPath.startsWith('/admin') ? 'active' : ''} hover:underline block">Admin</Link></li>
  //      <li><Link to="/login" class="{currentPath === '/login' ? 'active' : ''} hover:underline block">Login</Link></li>

  $: currentPath = window.location.pathname;
</script>

<div class="flex min-h-screen bg-gray-900">
  <nav class="nav bg-gray-800 text-white p-4 w-64 fixed h-screen">
    <h1 class="text-xl mb-6">Site Nav</h1>
    <ul class="flex flex-col space-y-2">
      <li><Link to="/" class="{currentPath === '/' ? 'active' : ''} hover:underline block">Home</Link></li>
      {#each pages as page}
        <li><Link to={"/page/" + page._id} class="{currentPath === '/page/' + page._id ? 'active' : ''} hover:underline block">{page.title}</Link></li>
      {/each}
    </ul>
  </nav>
  <main class="flex-grow p-6 text-white ml-64">
    <Router>
      <Route path="/" component={Home} />
      <Route path="admin/*" component={AdminLayout} />
      <Route path="login" component={Login} />
      {#each pages as page}
        <Route path={"/page/" + page._id} component={PageContent} />
      {/each}
    </Router>
  </main>
  <footer class="footer bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2024 Designed by LegendOdin</p>
  </footer>
</div>

<style>
  .nav {
    position: fixed;
    height: 100vh; /* Full height */
    width: 16rem; /* Width of the navbar */
    top: 0; /* Stick to the top */
    left: 0; /* Stick to the left */
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 16rem; /* Offset by the width of the navbar */
    width: calc(100% - 16rem); /* Reduce width by the width of the navbar */
  }

  .flex {
    display: flex;
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

  .text-white {
    color: #ffffff;
  }

  .p-4 {
    padding: 1rem;
  }

  .p-6 {
    padding: 1.5rem;
  }

  .text-xl {
    font-size: 1.25rem;
  }

  .mb-6 {
    margin-bottom: 1.5rem;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .space-y-2 > * + * {
    margin-top: 0.5rem; /* Vertical spacing between nav items */
  }

  .hover\:underline:hover {
    text-decoration: underline;
  }

  .active {
    background-color: #4a5568;
  }

  .ml-64 {
    margin-left: 16rem; /* Match the width of the navbar */
  }
</style>

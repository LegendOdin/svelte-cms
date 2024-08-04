<script>
  import { Router, Route } from 'svelte-routing';
  import Layout from './routes/Layout.svelte';
  import Login from './routes/Login.svelte';
  import AdminLayout from './routes/admin/AdminLayout.svelte';
</script>

<Router>
  <Route path="/" component={Layout} />
  <Route path="/login" component={Login} />
  <Route path="/admin/*" component={AdminLayout} />
</Router>

<script>
    import { Router, Route, Link, navigate } from 'svelte-routing';
    import { onMount } from 'svelte';
    import Dashboard from './Dashboard.svelte';
    import Pages from './Pages.svelte';
    import Users from './Users.svelte';
    import GeneralSettings from './GeneralSettings.svelte';
    import ThemeSettings from './ThemeSettings.svelte';
    import CreateUser from './CreateUser.svelte';
    import EditUser from './EditUser.svelte';
    import DeleteUser from './DeleteUser.svelte';
    import CreatePage from './CreatePage.svelte';
    import EditPage from './EditPage.svelte';
    import DeletePage from './DeletePage.svelte';

    let currentPath = '';

    function logout() {
        localStorage.removeItem('auth');
        navigate('/login');
    }

    onMount(() => {
        if (!localStorage.getItem('auth')) {
            navigate('/login');
        }
        currentPath = window.location.pathname;
    });

    $: currentPath = window.location.pathname;

    let submenuVisible = false;
    let dashboardSubMenuVisible = false;
    let settingsSubMenuVisible = false;
    let usersSubMenuVisible = false;
    let pagesSubMenuVisible = false;
    function toggleSubmenu() {
        submenuVisible = !submenuVisible;
    }

    function toggleDashboardSubMenu() {
        dashboardSubMenuVisible = !dashboardSubMenuVisible;
    }

    function toggleSettingsSubMenu() {
        settingsSubMenuVisible = !settingsSubMenuVisible;
    }

    function toggleUsersSubMenu() {
        usersSubMenuVisible = !usersSubMenuVisible;
    }

    function togglePagesSubMenu() {
        pagesSubMenuVisible = !pagesSubMenuVisible;
    }
</script>

<div class="flex min-h-screen bg-gray-900">
    <aside class="w-64 bg-gray-800 text-white min-h-screen p-4 fixed left-0 top-0 flex flex-col justify-between">
        <nav>
            <ul>
                <li class="mb-4 relative">
                    <button class="block p-2 rounded w-full" on:click={toggleDashboardSubMenu}>Dashboard</button>
                    {#if dashboardSubMenuVisible}
                        <ul class="pl-4 mt-2">
                            <li class="mb-2">
                                <Link to="/admin/dashboard" class="block p-2 rounded {currentPath === '/admin/dashboard' ? 'active' : ''}">Dashboard</Link>
                            </li>
                        </ul>
                    {/if}
                </li>
                <li class="mb-4 relative">
                    <button class="block p-2 rounded w-full" on:click={togglePagesSubMenu}>Pages</button>
                    {#if pagesSubMenuVisible}
                        <ul class="pl-4 mt-2">
                            <li class="mb-2">
                                <Link to='/admin/pages' class="block p-2 rounded {currentPath === '/admin/pages' ? 'active' : ''}">View Pages</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/admin/pages/create" class="block p-2 rounded {currentPath === '/admin/pages/create' ? 'active' : ''}">Create Page</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/admin/pages/edit" class="block p-2 rounded {currentPath === '/admin/pages/edit' ? 'active' : ''}">Edit Page</Link>
                            </li>
                            <li>
                                <Link to="/admin/pages/delete" class="block p-2 rounded {currentPath === '/admin/pages/delete' ? 'active' : ''}">Delete Page</Link>
                            </li>
                        </ul>
                    {/if}
                </li>
                <li class="mb-4 relative">
                    <button class="block p-2 rounded w-full" on:click={toggleSettingsSubMenu}>Settings</button>
                    {#if settingsSubMenuVisible}
                        <ul class="pl-4 mt-2">
                            <li class="mb-2">
                                <Link to="/admin/settings/general" class="block p-2 rounded {currentPath === '/admin/settings/general' ? 'active' : ''}">General Settings</Link>
                            </li>
                            <li>
                                <Link to="/admin/settings/theme" class="block p-2 rounded {currentPath === '/admin/settings/theme' ? 'active' : ''}">Theme Settings</Link>
                            </li>
                        </ul>
                    {/if}
                </li>
                <li class="mb-4 relative">
                    <button class="block p-2 rounded w-full" on:click={toggleUsersSubMenu}>Users</button>
                    {#if usersSubMenuVisible}
                        <ul class="pl-4 mt-2">
                            <li class="mb-2">
                                <Link to="/admin/users/create" class="block p-2 rounded {currentPath === '/admin/users/create' ? 'active' : ''}">Create User</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/admin/users/edit" class="block p-2 rounded {currentPath === '/admin/users/edit' ? 'active' : ''}">Edit User</Link>
                            </li>
                            <li>
                                <Link to="/admin/users/delete" class="block p-2 rounded {currentPath === '/admin/users/delete' ? 'active' : ''}">Delete User</Link>
                            </li>
                        </ul>
                    {/if}
                </li>
            </ul>
        </nav>
        <div>
            <button class="block p-2 w-full text-left hover:bg-gray-700 rounded" on:click={logout}>Logout</button>
        </div>
    </aside>
    <div class="flex-grow ml-64 p-6">
        <Router>
            <Route path="dashboard" component={Dashboard} />
            <Route path="pages" component={Pages} />
            <Route path="users" component={Users} />
            <Route path="settings/general" component={GeneralSettings} />
            <Route path="settings/theme" component={ThemeSettings} />
            <Route path="users/create" component={CreateUser} />
            <Route path="users/edit" component={EditUser} />
            <Route path="users/delete" component={DeleteUser} />
            <Route path="pages/create" component={CreatePage} />
            <Route path="pages/edit" component={EditPage} />
            <Route path="pages/delete" component={DeletePage} />
        </Router>
        <footer class="footer bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2024 Designed by LegendOdin</p>
        </footer>
    </div>
</div>

<style>
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

    .hover\:bg-gray-700:hover {
        background-color: #4a5568;
    }

    .rounded {
        border-radius: 0.25rem;
    }

    .block {
        display: block;
    }

    .w-full {
        width: 100%;
    }

    .text-left {
        text-align: left;
    }

    .p-2 {
        padding: 0.5rem;
    }

    .mb-4 {
        margin-bottom: 1rem;
    }

    .flex-grow {
        flex-grow: 1;
    }

    .ml-64 {
        margin-left: 16rem; /* Match the width of the navbar */
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 16rem; /* Offset by the width of the navbar */
        width: calc(100% - 16rem); /* Reduce width by the width of the navbar */
    }

    .active {
        background-color: #4a5568;
    }

    .relative {
        position: relative;
    }

    ul.pl-4 {
        padding-left: 1rem;
    }

    ul.mt-2 {
        margin-top: 0.5rem;
    }
</style>

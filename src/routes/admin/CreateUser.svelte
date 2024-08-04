<script>
    import axios from 'axios';
    let username = '';
    let email = '';
    let role = 'user';

    async function createUser() {
        await axios.post('http://localhost:5000/users', { username, email, role });
        alert('User created!');
        username = '';
        email = '';
        role = 'user';
    }
</script>

<div class="text-white">
    <h2 class="text-3xl mb-6">Create User</h2>
    <div class="mb-4">
        <label class="block mb-2">Username</label>
        <input type="text" class="p-2 rounded bg-gray-700 text-white w-full" bind:value={username} />
    </div>
    <div class="mb-4">
        <label class="block mb-2">Email</label>
        <input type="email" class="p-2 rounded bg-gray-700 text-white w-full" bind:value={email} />
    </div>
    <div class="mb-4">
        <label class="block mb-2">Role</label>
        <select class="p-2 rounded bg-gray-700 text-white w-full" bind:value={role}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
    </div>
    <button class="p-2 bg-blue-500 rounded" on:click={createUser}>Create</button>
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

    .w-full {
        width: 100%;
    }
</style>

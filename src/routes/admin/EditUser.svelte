<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';

    interface User {
        _id: string;
        username: string;
        email: string;
        role: string;
    }

    let users: User[] = [];
    let selectedUser: User | null = null;
    let newUsername = '';
    let newEmail = '';
    let newRole = 'user';

    onMount(async () => {
        const response = await axios.get('http://localhost:5000/users');
        users = response.data;
    });

    async function updateUser() {
        if (selectedUser) {
            await axios.put(`http://localhost:5000/users/${selectedUser._id}`, {
                username: newUsername,
                email: newEmail,
                role: newRole,
            });
            alert('User updated!');
            selectedUser = null;
            newUsername = '';
            newEmail = '';
            newRole = 'user';
        }
    }

    function handleUserChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedUser = JSON.parse(target.value);
    }
</script>

<div class="text-white">
    <h2 class="text-3xl mb-6">Edit User</h2>
    <div class="mb-4">
        <label class="block mb-2">Select User</label>
        <select class="p-2 rounded bg-gray-700 text-white w-full" on:change={handleUserChange}>
            <option>Select a user</option>
            {#each users as user}
                <option value="{JSON.stringify(user)}">{user.username}</option>
            {/each}
        </select>
    </div>
    {#if selectedUser}
        <div class="mb-4">
            <label class="block mb-2">Username</label>
            <input type="text" class="p-2 rounded bg-gray-700 text-white w-full" bind:value={newUsername} placeholder={selectedUser.username} />
        </div>
        <div class="mb-4">
            <label class="block mb-2">Email</label>
            <input type="email" class="p-2 rounded bg-gray-700 text-white w-full" bind:value={newEmail} placeholder={selectedUser.email} />
        </div>
        <div class="mb-4">
            <label class="block mb-2">Role</label>
            <select class="p-2 rounded bg-gray-700 text-white w-full" bind:value={newRole}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
        </div>
        <button class="p-2 bg-blue-500 rounded" on:click={updateUser}>Update</button>
    {/if}
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

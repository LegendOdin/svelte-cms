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

    onMount(async () => {
        const response = await axios.get('http://localhost:5000/users');
        users = response.data;
    });

    async function deleteUser() {
        if (selectedUser) {
            await axios.delete(`http://localhost:5000/users/${selectedUser._id}`);
            alert('User deleted!');
            users = users.filter(user => user._id !== selectedUser?._id);
            selectedUser = null;
        }
    }

    function handleUserChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedUser = JSON.parse(target.value);
    }
</script>

<div class="text-white">
    <h2 class="text-3xl mb-6">Delete User</h2>
    <div class="mb-4">
        <label class="block mb-2">Select User</label>
        <select class="p-2 rounded bg-gray-700 text-white w-full" on:change={handleUserChange}>
            <option>Select a user</option>
            {#each users as user}
                <option value={JSON.stringify(user)}>{user.username}</option>
            {/each}
        </select>
    </div>
    {#if selectedUser}
        <button class="p-2 bg-red-500 rounded" on:click={deleteUser}>Delete</button>
    {/if}
</div>

<style>
    .bg-gray-700 {
        background-color: #4a5568;
    }

    .bg-red-500 {
        background-color: #f56565;
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

<script>
    import axios from 'axios';
    import { onMount } from 'svelte';

    let siteTitle = '';
    let siteDescription = '';
    let settingsId = null;

    onMount(async () => {
        const response = await axios.get('http://localhost:5000/settings');
        if (response.data) {
            ({ siteTitle, siteDescription, _id: settingsId } = response.data);
        }
    });

    async function saveSettings() {
        if (settingsId) {
            await axios.put(`http://localhost:5000/settings`, {
                siteTitle,
                siteDescription,
            });
        } else {
            const response = await axios.post('http://localhost:5000/settings', {
                siteTitle,
                siteDescription,
            });
            settingsId = response.data._id;
        }
        alert('Settings saved!');
    }
</script>

<div class="text-white">
    <h2 class="text-3xl mb-6">General Settings</h2>
    <div class="mb-4">
        <label class="block mb-2">Site Title</label>
        <input type="text" class="p-2 rounded bg-gray-700 text-white w-full" bind:value={siteTitle} />
    </div>
    <div class="mb-4">
        <label class="block mb-2">Site Description</label>
        <input type="text" class="p-2 rounded bg-gray-700 text-white w-full" bind:value={siteDescription} />
    </div>
    <button class="p-2 bg-blue-500 rounded" on:click={saveSettings}>Save</button>
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

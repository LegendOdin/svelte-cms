<script>
    import axios from 'axios';
    import { onMount } from 'svelte';

    let themeColor = '';
    let settingsId = null;

    onMount(async () => {
        const response = await axios.get('http://localhost:5000/settings');
        if (response.data) {
            ({ themeColor, _id: settingsId } = response.data);
        }
    });

    async function saveTheme() {
        if (settingsId) {
            await axios.put(`http://localhost:5000/settings`, { themeColor });
        } else {
            const response = await axios.post('http://localhost:5000/settings', { themeColor });
            settingsId = response.data._id;
        }
        document.documentElement.style.setProperty('--theme-color', themeColor);
        alert('Theme saved!');
    }
</script>

<div class="text-white">
    <h2 class="text-3xl mb-6">Theme Settings</h2>
    <div class="mb-4">
        <label class="block mb-2">Theme Color</label>
        <input type="color" class="p-2 rounded bg-gray-700 text-white w-full" bind:value={themeColor} />
    </div>
    <button class="p-2 bg-blue-500 rounded" on:click={saveTheme}>Save</button>
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

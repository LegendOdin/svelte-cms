<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';

    interface Page {
        _id: string;
        title: string;
    }

    let pages: Page[] = [];
    let selectedPage: Page | null = null;

    onMount(async () => {
        const response = await axios.get('http://localhost:5000/pages');
        pages = response.data;
    });

    async function deletePage() {
        if (selectedPage) {
            await axios.delete(`http://localhost:5000/pages/${selectedPage._id}`);
            alert('Page deleted!');
            pages = pages.filter(page => page._id !== selectedPage._id);
            selectedPage = null;
        }
    }

    function handlePageChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedPage = JSON.parse(target.value);
    }
</script>

<div class="text-white">
    <h2 class="text-3xl mb-6">Delete Page</h2>
    <div class="mb-4">
        <label class="block mb-2">Select Page</label>
        <select class="p-2 rounded bg-gray-700 text-white w-full" on:change={handlePageChange}>
            <option>Select a page</option>
            {#each pages as page}
                <option value={JSON.stringify(page)}>{page.title}</option>
            {/each}
        </select>
    </div>
    {#if selectedPage}
        <button class="p-2 bg-red-500 rounded" on:click={deletePage}>Delete</button>
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

<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';

    interface Page {
        _id: string;
        title: string;
        content: string;
    }

    let pages: Page[] = [];
    let selectedPage: Page | null = null;
    let newTitle = '';
    let newContent = '';

    onMount(async () => {
        const response = await axios.get('http://localhost:5000/pages');
        pages = response.data;
    });

    async function updatePage() {
        if (selectedPage) {
            await axios.put(`http://localhost:5000/pages/${selectedPage._id}`, {
                title: newTitle,
                content: newContent,
            });
            alert('Page updated!');
            selectedPage = null;
            newTitle = '';
            newContent = '';
        }
    }

    function handlePageChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedPage = JSON.parse(target.value);
    }
</script>

<div class="text-white">
    <h2 class="text-3xl mb-6">Edit Page</h2>
    <div class="mb-4">
        <label class="block mb-2">Select Page</label>
        <select class="p-2 rounded bg-gray-700 text-white w-full" on:change="{handlePageChange}">
            <option>Select a page</option>
            {#each pages as page}
                <option value="{JSON.stringify(page)}">{page.title}</option>
            {/each}
        </select>
    </div>
    {#if selectedPage}
        <div class="mb-4">
            <label class="block mb-2">Title</label>
            <input type="text" class="p-2 rounded bg-gray-700 text-white w-full" bind:value={newTitle} placeholder={selectedPage.title} />
        </div>
        <div class="mb-4">
            <label class="block mb-2">Content</label>
            <textarea class="p-2 rounded bg-gray-700 text-white w-full" bind:value={newContent} placeholder={selectedPage.content}></textarea>
        </div>
        <button class="p-2 bg-blue-500 rounded" on:click={updatePage}>Update</button>
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

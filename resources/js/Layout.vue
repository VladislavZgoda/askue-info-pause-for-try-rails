<script setup lang="ts">
import Menubar from 'primevue/menubar';
import 'primeicons/primeicons.css'
import { ref } from "vue";
import { router } from '@inertiajs/vue3';

const items = ref([
    {
        label: 'Дисплеи CIU8',
        icon: 'pi pi-calculator',
        command: () => {
            router.visit('/');
        }
    },
    {
        label: 'Sim-карты',
        icon: 'pi pi-bars',
        items: [
            {
                label: 'Техучеты',
                icon: 'pi pi-bolt'
            },
            {
                label: 'УСПД Матрицы',
                icon: 'pi pi-server'
            },
            {
                label: 'Юридические ТУ',
                icon: 'pi pi-building-columns'
            },
        ]
    },
    {
        label: 'Разбивка ПУ по УСПД',
        icon: 'pi pi-map',
    },
]);
</script>

<template>
    <div class="card">
        <Menubar :model="items" />
    </div>
</template>

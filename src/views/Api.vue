<template>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b">STASIUN KERETA</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">Code</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">City</th>
                     <th class="px-4 py-2">Cityname</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in getApi" :key="user.code">
                    <td class="border px-4 py-2 ">{{ user.code }}</td>
                    <td class="border px-4 py-2 ">{{ user.name }}</td>
                    <td class="border px-4 py-2 ">{{ user.city }}</td>
                      <td class="border px-4 py-2 ">{{ user.cityname }}</td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('api', ['getApi']),
    },
    methods: {
        ...mapActions('api', ['fetchApi']),
    },
    created() {
        this.fetchApi();
    },
}
</script>
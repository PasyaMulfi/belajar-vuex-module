<template>
    <div>
        <div class="form-group">
            <label for="">Jenis Bantuan</label>
            <select @change="$emit('SelectedBantuan', $event.target.value)" 
            class="block appearance-none w-full py-1 mpx-2 mb-1 text-base 
            leading-normal bg-white text-gray-800 border border-gray-200 rounded">
            <option value="">Pilih Bantuan</option>
            <option v-for="row in listBantuan" :key="row.name" :value="row.name">
                {{ row.name }}
            </option>
            </select>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        listBantuan() {
        return this.$store.state.client.listBantuan
       }
        }
    }
</script>
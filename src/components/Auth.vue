<script setup lang="ts">
import { retrieveRawInitData } from '@telegram-apps/sdk'
import { onMounted } from 'vue'
import axios from 'axios'
import { apiUrl } from 'env';

onMounted(() => {
    const initDataRaw = retrieveRawInitData()
    axios.post(`https://${apiUrl}/auth`, null, {
        headers: {
            Authorization: `tma ${initDataRaw}`
        }
    }).then((response) => {
        alert(response.data)
    })

    // fetch('https://picovpn.ru/api/auth', {
    //     method: 'POST',
    //     headers: {
    //         Authorization: `tma ${ initDataRaw }`
    //     },
    // });
})

</script>

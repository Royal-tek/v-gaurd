    <template>
    <section class="political_party_display">
        <div class="party_display_container">
        <AddonHeaders/>
        <section class="political_agent_display">
            <!-- Table Starts Here  -->
            <div class="table-responsive-md table_wrapper">
            <table class="table">
                <thead class="table__head">
                <tr>
                    <th>Name</th>
                    <th>LGA</th>
                    <th>Ward</th>
                    <th>Polling Unit</th>
                    <th>LGA Admin</th>
                </tr>
                </thead>
                <tbody class="table__body">
                <tr>
                    <th scope="row" class="row__title">Andrew Peters</th>
                    <td>Aboh Mbaise</td>
                    <td>Enyiogugu</td>
                    <td>Eziala Hall</td>
                    <td>John Williams Eza</td>
                </tr>
                <tr>
                    <th scope="row" class="row__title">Andrew Peters</th>
                    <td>Aboh Mbaise</td>
                    <td>Enyiogugu</td>
                    <td>Eziala Hall</td>
                    <td>John Williams Eza</td>
                </tr>
                </tbody>
            </table>
            </div>
            <!-- Table Ends Here -->
        </section>
        </div>
    </section>
    </template>

    <script>
    import AddonHeaders from './AddonHeaders.vue';
    export default {
    name: "AgentDisplayAddon",
    components : {
        AddonHeaders
    }
    };
    </script>
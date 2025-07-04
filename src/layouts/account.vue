<template>
    <appBar>
    </appBar>
    <v-main>
        <v-container>
            <v-row>
                <v-card class="mx-auto" max-width="344">
                    <v-card-text>
                        <div>Word of the Day</div>

                        <p class="text-h4 font-weight-black">be•nev•o•lent</p>

                        <p>adjective</p>

                        <div class="text-medium-emphasis">
                            well meaning and kindly.<br>
                            "a benevolent smile"
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="deep-purple-accent-4" text="Learn More" variant="text"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
            <v-row>
                <v-col>
                    <v-card append-icon="mdi-open-in-new" class="mx-auto" href="https://github.com/vuetifyjs/vuetify/"
                        max-width="344" prepend-icon="mdi-github" rel="noopener"
                        subtitle="Check out the official repository" target="_blank" title="Vuetify on GitHub">
                    </v-card>
                </v-col>
                <v-col>
                    <v-card append-icon="mdi-open-in-new" class="mx-auto" href="https://github.com/vuetifyjs/vuetify/"
                        max-width="344" prepend-icon="mdi-github" rel="noopener"
                        subtitle="Check out the official repository" target="_blank" title="Vuetify on GitHub">
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<!-- <script lang="ts">
</script> -->

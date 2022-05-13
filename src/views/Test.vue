<template lang="pug">
div
    a {{data}}
</template>
<script>

export default {

	name: "Home",
	data: () => ({
        config: {
            user: 'romain.murier', // env var: PGUSER
            database: 'romain.murier', // env var: PGDATABASE
            password: 'dofus1810', // env var: PGPASSWORD
            host: 'localhost', // Server hosting the postgres database
            port: 5432, // env var: PGPORT
        },
		drawer: true,
        data: {1:2},
	}),
}
</script>
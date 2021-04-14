<template>
  <main>
    <div class="main">
      <div class="list-wrapper">
        <div v-if="data.usersStatus === 'error'">Error...</div>
        <div v-else-if="data.usersStatus === 'success' && !data.users.length">Empty...</div>
        <UsersList v-else-if="data.usersStatus === 'success'" :users="data.users"></UsersList>
        <div v-else>Loading...</div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { reactive, defineComponent, onMounted } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import UsersList from "../components/usersList.vue";

interface User {
  name: string;
  login: string;
  location: string;
  email: string;
  compnay: string;
  avatarUrl: string;
}

interface ResultNode {
  node: User;
}

interface Data {
  usersStatus: string;
  users: User[]
}

export default defineComponent({
  name: 'Home',

  components: {
    UsersList
  },
  
  setup() {
    const data: Data = reactive({
      usersStatus: "loading",
      users: []
    });

    async function getUsers() {
      var config: AxiosRequestConfig = {
        method: 'post',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_API_KEY}`
        },
        data : '{"query":"{\\n  search(query: \\"location:Malta language:JavaScript\\", type: USER, first: 50) {\\n    edges {\\n      node {\\n        ... on User {\\n          login\\n          name\\n          location\\n          email\\n          company\\n          avatarUrl\\n        }\\n      }\\n    }\\n  }\\n}\\n"}'
      };
      try {
        const results: AxiosResponse = await axios(config);
        return results?.data?.data?.search?.edges;
      } catch (e) {
        data.usersStatus = "error";
        return [];
      }
    }

    onMounted(async () => {
      const results: ResultNode[] = await getUsers();
      results.forEach(u => data.users.push(u.node));
      if (data.usersStatus !== "error") {
        data.usersStatus = "success";
      }
    });

    return { data };
  }
})
</script>

<style lang="scss" scoped>
.main {
  padding: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: start;
  .list-wrapper {
    min-width: 20rem;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: .5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-width: 1px;
    border-bottom-width: 2px;
    border-color: rgba(229,231,235,1);
  }
}
</style>
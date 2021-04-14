<template>
  <div>
    <p class="title">Users ({{ users.length }})</p>
    <div v-for="user in users" :key="user.login" class="user-wrapper">
      <div class="user">
        <div class="user-image-wrapper">
          <img class="user-image" :src="user.avatarUrl" :alt="user.name">
        </div>
        <div class="user-details">
          <a class="user-name" :href="`https://github.com/${user.login}`" target="_blank">
            {{ user.name }}
          </a>
          <div class="user-login">
            @{{ user.login }}
          </div>
          <div class="user-info">
            <p v-if="user.email" class="description pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="description-icon pr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>{{ user.email || "N/A" }}
            </p>
            <p v-if="user.location" class="description">
              <svg xmlns="http://www.w3.org/2000/svg" class="description-icon pr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{{ user.location || "N/A" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface User {
  name: string;
  login: string;
  location: string;
  email: string;
  compnay: string;
  avatarUrl: string;
}

export default defineComponent({
  name: "UsersList",
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 1rem;
  margin: 0;
}

.user-wrapper {
  white-space: nowrap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(229,231,235,1);
  .user {
    display: flex;
    align-items: center;
    .user-image-wrapper {
      width: 2.5rem;
      height: 2.5rem;
      flex-shrink: 0;
      .user-image {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100%;
      }
    }
    .user-details {
      margin-left: 1rem;
      .user-name {
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.25rem;
        color: rgba(17,24,39,1);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      .user-login {
        font-weight: 400;
        font-size: 0.8rem;
        color: rgba(55,65,81,1); // rgba(107,114,128,1);
      }
      .user-info {
        display: flex;
        justify-content: start;
        align-items: center;
        padding-top: 0.325rem;
        .description {
          display: flex;
          align-items: center;
          justify-content: start;
          margin: 0;
          font-weight: 400;
          font-size: 0.8rem;
          color: rgba(107,114,128,1);
          .description-icon {
            color: rgba(55,65,81,1);
            height: 0.8rem;
            width: 0.8rem;
          }
        }
      }
    }
  }
}

.pr-1 {
  padding-right: 0.1rem;
}

.pr-2 {
  padding-right: 0.725rem;
}
</style>
<script>
export default {
  async asyncData({ $http }) {
    const eventsData = await $http.$get('/api/events')

    return {
      eventList: eventsData || []
    }
  },
  data: () => ({
    pastEventPage: 0
  }),
  computed: {
    filteredPastEventList() {
      return this.pastEventList.slice(
        this.pastEventPage,
        this.pastEventPage + 5
      )
    },
    pastEventList() {
      return this.eventList
        .filter((event) => new Date() > new Date(event.recording.date.start))
        .sort((a, b) => {
          const dateA = new Date(a.recording.date.start)
          const dateB = new Date(b.recording.date.start)

          // Sort by most recent date
          return dateB - dateA
        })
    },
    upcomingEventList() {
      return this.eventList
        .filter((event) => new Date() <= new Date(event.recording.date.start))
        .sort((a, b) => {
          const dateA = new Date(a.recording.date.start)
          const dateB = new Date(b.recording.date.start)

          // Sort by closest date to today
          return dateA - dateB
        })
    }
  }
}
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <h1>Schedule</h1>
      <p>
        Here's what's coming up on soon! You can add the schedule to your
        calendar and/or subscribe on Twitch!
      </p>
      <div class="schedule-cta">
        <a
          class="btn"
          href="https://calendar.google.com/calendar/u/0?cid=Y19ydWlzbHQzcnVsZjh0MGQ1aXU1OGpibGs3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
          target="_blank"
        >
          Add to Calendar
        </a>

        <a class="btn" href="https://www.twitch.tv/bencodezen">
          Subscribe on Twitch
        </a>
      </div>
      <h2>Upcoming</h2>
      <ul>
        <li
          v-for="event in upcomingEventList"
          :key="event"
          class="schedule-item"
        >
          <h3 class="title">{{ event.title }}</h3>
          <p class="date">{{ new Date(event.recording.date.start) }}</p>
        </li>
      </ul>
      <h2>Past</h2>
      <ul>
        <li
          v-for="event in filteredPastEventList"
          :key="event"
          class="schedule-item"
        >
          <h3 class="title">{{ event.title }}</h3>
          <p class="date">{{ new Date(event.recording.date.start) }}</p>
        </li>
      </ul>
      <div v-if="pastEventList.length > 5">
        <button v-show="pastEventPage > 0" @click="pastEventPage -= 5">
          Newer Events
        </button>
        <button
          v-show="pastEventPage + 5 < pastEventList.length"
          @click="pastEventPage += 5"
        >
          Older Events
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.schedule-item {
  .date {
    margin-bottom: 5px;
  }

  .title {
    margin-bottom: 10px;
  }
}

.schedule-cta {
  display: flex;
  justify-content: center;

  .btn {
    margin-right: 2rem;
    border: 2px solid #22aaff;
    text-decoration: none;
    padding: 1rem;
    border-radius: 8px;
    color: #22aaff;
    font-weight: 600;
    white-space: nowrap;
  }

  .btn:last-child {
    margin-right: 0;
  }
}
</style>

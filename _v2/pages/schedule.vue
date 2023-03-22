<script>
import isAfter from 'date-fns/isAfter'
import isSameDay from 'date-fns/isSameDay'

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
        .filter((event) => {
          const today = new Date()
          const eventDate = new Date(event.recording.date.start)

          return isAfter(today, eventDate) && !isSameDay(today, eventDate)
        })
        .sort((a, b) => {
          const dateA = new Date(a.recording.date.start)
          const dateB = new Date(b.recording.date.start)

          // Sort by most recent date
          return dateB - dateA
        })
    },
    upcomingEventList() {
      return this.eventList
        .filter((event) => {
          const today = new Date()
          const eventDate = new Date(event.recording.date.start)

          return isSameDay(eventDate, today) || isAfter(eventDate, today)
        })
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
      <h2 class="schedule-heading">Upcoming</h2>
      <ul class="schedule-list">
        <li
          v-for="event in upcomingEventList"
          :key="event.id"
          class="schedule-list-item"
        >
          <h3 class="title">{{ event.title }}</h3>
          <p class="date">{{ new Date(event.recording.date.start) }}</p>
          <a :href="event.recording.url">{{ event.recording.url }}</a>
        </li>
      </ul>
      <h2 class="schedule-heading">Past</h2>
      <ul class="schedule-list">
        <li
          v-for="event in filteredPastEventList"
          :key="event.id"
          class="schedule-list-item"
        >
          <h3 class="title">{{ event.title }}</h3>
          <p class="date">{{ new Date(event.recording.date.start) }}</p>
          <p v-if="event.publishing.url" style="margin-bottom: 0;">
            📼 Recording: <a :href="event.publishing.url">YouTube Video</a>
          </p>
        </li>
      </ul>
      <div v-if="pastEventList.length > 5" class="pagination-row">
        <div>
          <button
            v-show="pastEventPage > 0"
            class="btn"
            @click="pastEventPage -= 5"
          >
            Newer Events
          </button>
        </div>
        <button
          v-show="pastEventPage + 5 < pastEventList.length"
          class="btn"
          @click="pastEventPage += 5"
        >
          Older Events
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.btn {
  border: 2px solid #22aaff;
  background-color: transparent;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  color: #22aaff;
  font-weight: 600;
  white-space: nowrap;
}

.pagination-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.post-content .schedule-heading {
  padding-bottom: 15px;
  margin-bottom: 30px;
  border-bottom: 2px solid #aaa;
}

.post-content .schedule-list {
  padding: 0;
  margin: 0;
}

.post-content .schedule-list-item {
  padding: 30px;
  margin-bottom: 30px;
  border: 2px solid white;
  border-radius: 8px;
  list-style: none;

  .date {
    margin-bottom: 5px;
  }

  .title {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
}

.schedule-cta {
  display: flex;
  justify-content: center;

  .btn {
    margin-right: 2rem;
    text-decoration: none;
  }

  .btn:last-child {
    margin-right: 0;
  }
}
</style>

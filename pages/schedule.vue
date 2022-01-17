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
        .filter((event) => new Date() > new Date(event.fields['Starts On']))
        .sort((a, b) => {
          const dateA = new Date(a.fields['Starts On'])
          const dateB = new Date(b.fields['Starts On'])

          // Sort by most recent date
          return dateB - dateA
        })
    },
    upcomingEventList() {
      return this.eventList
        .filter((event) => new Date() <= new Date(event.fields['Starts On']))
        .sort((a, b) => {
          const dateA = new Date(a.fields['Starts On'])
          const dateB = new Date(b.fields['Starts On'])

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
        <li class="schedule-item">
          <h3 class="title">Build with Ben (#25)</h3>
          <p class="date">
            Tuesday, Jan 18th, 2022 from 12:00PM to 1:30PM EST
          </p>
          <p class="location">
            <a href="https://www.twitch.tv/bencodezen"
              >https://www.twitch.tv/bencodezen</a
            >
          </p>
        </li>
        <li class="schedule-item">
          <h3 class="title">
            Productivity Power Hour (#3): Let's Talk About Raycast!
          </h3>
          <p class="date">Thursday, Jan 20th, 2022 from 2:00PM to 3:00PM EST</p>
          <p class="location">
            <a href="https://www.twitch.tv/bencodezen"
              >https://www.twitch.tv/bencodezen</a
            >
          </p>
        </li>
        <li class="schedule-item">
          <h3 class="title">Build with Ben (#26)</h3>
          <p class="date">
            Tuesday, Jan 25th, 2022 from 12:00PM to 1:30PM EST
          </p>
          <p class="location">
            <a href="https://www.twitch.tv/bencodezen"
              >https://www.twitch.tv/bencodezen</a
            >
          </p>
        </li>
        <li class="schedule-item">
          <h3 class="title">Productivity Power Hour (#4)</h3>
          <p class="date">Thursday, Jan 27th, 2022 from 2:00PM to 3:00PM EST</p>
          <p class="location">
            <a href="https://www.twitch.tv/bencodezen"
              >https://www.twitch.tv/bencodezen</a
            >
          </p>
        </li>
        <li
          v-for="event in upcomingEventList"
          :key="event"
          class="schedule-item"
        >
          <h3 class="title">{{ event.fields['Name'] }}</h3>
          <p class="date">{{ new Date(event.fields['Starts On']) }}</p>
        </li>
      </ul>
      <h2>Past</h2>
      <ul>
        <li class="schedule-item">
          <h3 class="title">
            Productivity Power Hour (#2): Let's Talk About with RemNote
          </h3>
          <p class="date">Thursday, Jan 13th, 2022 from 2:00PM to 3:00PM EST</p>
          <p class="location">
            <a href="https://www.twitch.tv/bencodezen"
              >https://www.twitch.tv/bencodezen</a
            >
          </p>
        </li>
        <li class="schedule-item">
          <h3 class="title">
            Build with Ben (#24): Trello Clone with Nuxt 3 (Beta) (Part 2)
          </h3>
          <p class="date">
            Tuesday, Jan 11th, 2022 from 12:00PM to 1:30PM EST
          </p>
          <p class="location">
            <a href="https://www.twitch.tv/bencodezen"
              >https://www.twitch.tv/bencodezen</a
            >
          </p>
        </li>
        <li class="schedule-item">
          <h3 class="title">
            Productivity Power Hour (#1): My Workflow for Making Notes in
            Obsidian
          </h3>
          <p class="date">Thursday, Jan 6th, 2022 from 2:00PM to 3:00PM EST</p>
          <p class="location">
            <a href="https://www.twitch.tv/bencodezen"
              >https://www.twitch.tv/bencodezen</a
            >
          </p>
        </li>
        <li class="schedule-item">
          <h3 class="title">Build with Ben (#23)</h3>
          <p class="date">
            Tuesday, Jan 4th, 2022 from 12:00PM to 1:00PM EST
          </p>
          <p class="location">
            <a href="https://www.twitch.tv/bencodezen"
              >https://www.twitch.tv/bencodezen</a
            >
          </p>
        </li>
        <li
          v-for="event in filteredPastEventList"
          class="schedule-item"
          :key="event"
        >
          <h3 class="title">{{ event.fields['Name'] }}</h3>
          <p class="date">{{ new Date(event.fields['Starts On']) }}</p>
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

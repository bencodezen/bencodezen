<script>
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

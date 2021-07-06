<script>
export default {}
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
      <div class="schedule-item">
        <h3 class="title">Build with Ben (#7)</h3>
        <p class="date">Tuesday, July 6th, 2021 at 12:00PM EST</p>
      </div>
      <div class="schedule-item">
        <h3 class="title">Obsidian Office Hours (#7)</h3>
        <p class="date">Thursday, July 8th, 2021 at 2:00PM EST</p>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.schedule-item {
  .title {
    margin-bottom: 0;
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

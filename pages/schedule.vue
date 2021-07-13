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
        <h3 class="title">Build with Ben (#8)</h3>
        <p class="date">Tuesday, July 13th, 2021 at 12:00PM EST</p>
      </div>
      <div class="schedule-item">
        <h3 class="title">Obsidian Office Hours (#8)</h3>
        <p class="date">Thursday, July 15th, 2021 at 2:00PM EST</p>
      </div>
      <div class="schedule-item">
        <h3 class="title">Build with Ben (#9)</h3>
        <p class="date">Tuesday, July 20th, 2021 at 12:00PM EST</p>
      </div>
      <div class="schedule-item">
        <h3 class="title">Obsidian Office Hours (#9)</h3>
        <p class="date">Thursday, July 22th, 2021 at 2:00PM EST</p>
      </div>
      <div class="schedule-item">
        <h3 class="title">Build with Ben (#10)</h3>
        <p class="date">Tuesday, July 27th, 2021 at 12:00PM EST</p>
      </div>
      <div class="schedule-item">
        <h3 class="title">Obsidian Office Hours (#10)</h3>
        <p class="date">Thursday, July 29th, 2021 at 2:00PM EST</p>
      </div>
      <h2>Past</h2>
      <div class="schedule-item">
        <h3 class="title">Build with Ben (#7)</h3>
        <p class="date">Tuesday, July 6th, 2021 at 12:00PM EST</p>
      </div>
      <div class="schedule-item">
        <h3 class="title">ThePractical Dev Twitch Stream</h3>
        <p class="date">Wednesday, July 7th, 2021 at 1:00PM EST</p>
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

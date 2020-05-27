<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    datetime: {
      // Format ISO-8601
      // TODO: Custom validator
      type: String,
      required: true
    },
    option: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div :class="$style.wrapper">
    <div>
      <p :class="$style.optionLabel">Option #{{ option }}</p>
      <time :datetime="datetime">
        <span :class="$style.date">{{ date }}</span>
        <span :class="$style.time">{{ time }}</span>
      </time>
      <p :class="$style.metaText">Location: Remote</p>
      <p :class="$style.metaText">Price: $100 USD</p>
    </div>
    <!-- <a :class="$style.button" href="#">Register</a> -->
  </div>
</template>

<style module>
.optionLabel {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  font-family: Poppins;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #555;
}

.button {
  border-radius: 4px;
  background: #d4dce0;
  padding: 12px 14px;
  text-transform: capitalize;
  color: white;
}

.date {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.75rem;
  /* identical to box height, or 100% */
  letter-spacing: 0.0838709px;
  color: #232323;
  display: block;
  margin-bottom: 0.25rem;
}

.metaText {
  font-weight: bold;
  color: #4d585e;
  margin: 0;
  font-size: 1rem;
}

.time {
  font-family: Poppins;
  font-weight: 400;
  margin-bottom: 0.25rem;
}

.wrapper {
  padding: 22px 24px;
  border: 2px solid #d4dce0;

  .time {
    font-family: Poppins;
  }
}
</style>

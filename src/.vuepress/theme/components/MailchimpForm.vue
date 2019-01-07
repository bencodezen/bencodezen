<script>
export default {
  data() {
    return {
      isSpam: false
    };
  }
};
</script>

<template>
  <form
    action="https://bencodezen.us7.list-manage.com/subscribe/post?u=36daed6ec8657bb097a383e39&amp;id=308f37629f"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    class="validate"
    target="_blank"
  >
    <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
        <label class="email-label" for="mce-EMAIL">Email Address</label>
        <input class="email-input" type="email" value name="EMAIL" id="mce-EMAIL" required>
      </div>
      <div class="mc-field-group input-group">
        <strong>GDPR Consent</strong>
        <ul>
          <li>
            <input
              type="checkbox"
              value="1"
              name="group[23521][1]"
              id="mce-group[23521]-23521-0"
              required
            >
            <label
              for="mce-group[23521]-23521-0"
            >I would like to subscribe to emails from BenCodeZen</label>
          </li>
        </ul>
      </div>
      <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </div>
      <!-- Honeypot Spam Technique -->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input
          @click="isSpam = true"
          type="text"
          name="b_36daed6ec8657bb097a383e39_308f37629f"
          tabindex="-1"
          value
        >
      </div>
      <input
        type="submit"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        class="button"
        :disabled="isSpam"
      >
    </div>
  </form>
</template>

<style scoped>
input[type="checkbox"] {
  -webkit-appearance: checkbox;
}

input[type="radio"] {
  -webkit-appearance: radio;
}

input:focus {
  border-color: #333;
}

.email-label {
  display: block;
}

.email-input {
  width: 100%;
}
</style>

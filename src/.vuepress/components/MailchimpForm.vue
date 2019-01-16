<script>
export default {
  data () {
    return {
      isSpam: false
    }
  }
}
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
        <input 
          class="email-input" 
          type="email" 
          value 
          name="EMAIL" 
          id="mce-EMAIL" 
          placeholder="username@domain.com"
          required>
      </div>
      <div class="input-group input-group--gdpr">
        <strong class="email-label">GDPR Consent</strong>
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
        class="submit-button"
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

.input-group {
  margin-bottom: 1.5rem;
}

.email-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.email-input {
  width: 100%;
  margin-bottom: 1.2rem;
  padding: 0.5rem 0.7rem 0.7rem;
  font-size: 1.2rem;
  font-family: 'PT Serif', serif;
  border: 1px solid rgb(186, 186, 186);
}

.submit-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #2af;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #059fff;
  font-family: 'PT Serif', serif;
}

.input-group--gdpr {
  font-size: 1rem;
}
</style>

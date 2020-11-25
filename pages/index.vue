<template>
  <div>
    <div id="landing">
      <div id="infobox" index>
        <h1 multiline class="mobile-hidden">
          <span component d="0">The</span>
          <span component d="1">internet</span>
          <span component d="2">is</span>
          <span component d="3">full</span>
        </h1>
        <h1 multiline class="mobile-hidden">
          <span component d="4">of</span>
          <span component d="5">free</span>
          <span component d="6">games</span>
        </h1>
        <h1 class="mobile-visible">The&nbsp;internet is&nbsp;full&nbsp;of free&nbsp;games.</h1>
        <h2 multiline sub class="mobile-hidden">
          <span component d="0">And</span>
          <span component d="1">with</span>
          <span component d="2">this</span>
          <span component d="3" v-text="audience.platform"></span>
          <span component d="4">bot</span>
        </h2>
        <h2 multiline sub class="mobile-hidden">
          <span component d="5">you'll</span>
          <span component d="6">never</span>
          <span component d="7">miss</span>
          <span component d="8">any</span>
          <span component d="9">of</span>
          <span component d="10">them!</span>
        </h2>
        <h2 class="mobile-visible">And&nbsp;with&nbsp;this {{ audience.platform }} bot&nbsp;you'll&nbsp;never miss&nbsp;any&nbsp;of&nbsp;them!</h2>

        <div id="buttons">
          <a
            id="invite-button"
            btn
            class="button1"
            :href="audience.cta.url"
            rel="noreferrer"
            d="0"
            v-text="audience.cta.text"
            content="yes. do it."
            v-tippy="{ delay: [2000, 0] }"
          />
          <nuxt-link
            id="about-button"
            btn min
            class="button2"
            to="/guide"
            d="1"
            content="wrong button mate.<br>click the left one."
            v-tippy="{ delay: [2000, 0] }"
          >
            Guide
          </nuxt-link>

          <svg id="decoarrow1" class="deco arrow" draggable="false" viewBox="0 0 610 550" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <g>
              <clipPath id="_clip1">
                <path d="M583.76,111.39l7.15,15.57l0.01,0.15l-6.03,16.04l-15.54,7.16l-0.08,0.01l-2.87,0.06l-2.83,0.07l-2.81,0.08l-2.81,0.09l-2.8,0.11l-2.79,0.12l-2.78,0.13l-2.78,0.14l-2.77,0.16l-2.76,0.16l-2.75,0.18l-2.75,0.19l-2.73,0.2l-2.73,0.21l-2.73,0.23l-2.71,0.24l-2.71,0.25l-2.7,0.26l-2.69,0.27l-2.69,0.29l-2.68,0.29l-2.67,0.31l-2.66,0.32l-2.66,0.33l-2.65,0.35l-2.64,0.35l-2.63,0.37l-2.63,0.38l-2.62,0.39l-2.61,0.4l-2.61,0.41l-2.6,0.43l-2.59,0.43l-2.59,0.45l-2.57,0.46l-2.57,0.47l-2.57,0.48l-2.55,0.5l-2.55,0.51l-2.55,0.51l-2.53,0.53l-2.53,0.54l-2.53,0.55l-2.51,0.57l-2.51,0.57l-2.5,0.59l-2.5,0.6l-2.49,0.61l-2.48,0.62l-2.48,0.63l-2.47,0.64l-2.46,0.66l-2.46,0.66l-2.45,0.68l-2.44,0.69l-2.44,0.7l-2.43,0.71l-2.43,0.73l-2.41,0.73l-2.42,0.74l-2.4,0.76l-2.4,0.77l-2.39,0.78l-2.39,0.79l-2.38,0.8l-2.38,0.82l-2.37,0.82l-2.36,0.84l-2.35,0.84l-2.35,0.86l-2.35,0.87l-2.34,0.88l-2.33,0.89l-2.33,0.91l-2.32,0.91l-2.31,0.93l-2.31,0.93l-2.3,0.95l-2.3,0.96l-2.29,0.97l-2.29,0.98l-2.28,0.99l-2.27,1.01l-2.27,1.01l-2.26,1.03l-2.26,1.03l-2.25,1.05l-2.25,1.06l-2.24,1.07l-2.24,1.08l-2.23,1.09l-2.22,1.11l-2.22,1.11l-2.21,1.13l-2.21,1.13l-2.2,1.15l-2.2,1.16l-2.19,1.17l-2.19,1.18l-2.18,1.19l-2.18,1.21l-2.17,1.21l-2.16,1.22l-2.16,1.24l-2.16,1.25l-2.15,1.26l-2.15,1.26l-2.14,1.28l-2.13,1.29l-2.13,1.31l-2.13,1.31l-2.12,1.32l-2.11,1.34l-2.11,1.34l-2.1,1.36l-2.1,1.37l-2.1,1.38l-2.09,1.39l-2.09,1.4l-2.08,1.41l-2.07,1.42l-2.07,1.43l-2.07,1.45l-2.06,1.45l-2.06,1.47l-2.05,1.47l-2.05,1.49l-2.04,1.5l-2.04,1.51l-2.03,1.52l-2.03,1.53l-2.02,1.54l-2.02,1.56l-2.02,1.56l-2.01,1.57l-2,1.59l-2,1.6l-2,1.6l-1.99,1.62l-1.99,1.63l-1.98,1.64l-1.98,1.65l-1.97,1.66l-1.97,1.67l-1.97,1.68l-1.96,1.7l-1.96,1.7l-1.95,1.71l-1.95,1.73l-1.94,1.74l-1.94,1.74l-1.94,1.76l-1.93,1.77l-1.92,1.78l-1.93,1.79l-1.92,1.8l-1.91,1.81l-1.91,1.82l-1.91,1.83l-1.9,1.85l-1.89,1.85l-1.9,1.86l-1.89,1.88l-1.88,1.88l-1.88,1.9l-1.88,1.91l-1.87,1.91l-1.87,1.93l-1.87,1.94l-1.86,1.95l-1.86,1.96l-1.85,1.97l-1.85,1.98l-1.84,1.99l-1.85,2l-1.83,2.02l-1.84,2.02l-1.83,2.03l-1.82,2.04l-1.82,2.06l-1.82,2.06l-1.82,2.08l-1.81,2.08l-1.81,2.1l-1.8,2.11l-1.8,2.11l-1.79,2.13l-1.8,2.14l-1.78,2.14l-1.79,2.16l-1.78,2.17l-1.78,2.18l-1.77,2.19l-1.77,2.2l-1.77,2.21l-1.76,2.22l-1.76,2.23l-1.76,2.24l-1.75,2.25l-1.75,2.26l-1.74,2.27l-1.74,2.28l-1.74,2.29l-1.74,2.31l-1.73,2.31l-1.73,2.32l-1.72,2.33l-1.72,2.35l-1.72,2.35l-1.71,2.36l-1.71,2.37l-1.71,2.39l-1.71,2.39l-1.7,2.4l-1.69,2.42l-1.7,2.42l-1.69,2.43l-1.69,2.45l-1.68,2.45l-1.68,2.46l-1.68,2.47l-1.68,2.49l-1.67,2.49l-1.67,2.5l-1.66,2.52l-1.66,2.52l-1.66,2.53l-1.66,2.55l-1.65,2.55l-1.65,2.56l-1.65,2.57l-1.64,2.59l-1.64,2.59l-1.64,2.6l-1.64,2.61l-1.63,2.62l-1.63,2.63l-1.62,2.64l-1.63,2.65l-1.62,2.66l-1.61,2.67l-1.62,2.68l-1.61,2.69l-1.61,2.7l-1.6,2.71l-1.61,2.72l-1.6,2.73l-1.6,2.74l-1.59,2.74l-1.59,2.76l-1.59,2.77l-1.59,2.77l-1.58,2.79l-1.58,2.79l-1.58,2.81l-1.58,2.82l-0.04,0.07l-7.23,5.73l-9.09,-0.87l-0.13,-0.07l-5.7,-7.13l0.84,-9.19l0.03,-0.06l1.51,-2.9l1.52,-2.89l1.53,-2.89l1.53,-2.88l1.53,-2.87l1.53,-2.86l1.54,-2.85l1.54,-2.84l1.54,-2.83l1.55,-2.83l1.55,-2.81l1.56,-2.81l1.55,-2.8l1.57,-2.79l1.56,-2.77l1.57,-2.77l1.57,-2.77l1.58,-2.75l1.58,-2.74l1.58,-2.73l1.59,-2.73l1.59,-2.71l1.6,-2.71l1.59,-2.69l1.61,-2.69l1.6,-2.68l1.61,-2.67l1.62,-2.66l1.61,-2.65l1.63,-2.64l1.62,-2.63l1.63,-2.62l1.64,-2.62l1.63,-2.6l1.65,-2.59l1.64,-2.59l1.65,-2.57l1.66,-2.57l1.65,-2.56l1.67,-2.55l1.66,-2.53l1.67,-2.53l1.68,-2.52l1.68,-2.51l1.68,-2.5l1.69,-2.49l1.69,-2.48l1.7,-2.48l1.7,-2.46l1.7,-2.45l1.71,-2.45l1.72,-2.43l1.71,-2.42l1.73,-2.42l1.72,-2.4l1.74,-2.4l1.73,-2.39l1.74,-2.37l1.75,-2.37l1.75,-2.36l1.75,-2.34l1.76,-2.34l1.77,-2.33l1.77,-2.32l1.77,-2.31l1.78,-2.3l1.78,-2.28l1.79,-2.28l1.79,-2.27l1.8,-2.26l1.8,-2.25l1.81,-2.24l1.81,-2.24l1.82,-2.22l1.82,-2.21l1.83,-2.2l1.83,-2.19l1.84,-2.18l1.84,-2.17l1.85,-2.16l1.85,-2.15l1.86,-2.15l1.86,-2.13l1.87,-2.12l1.87,-2.11l1.88,-2.1l1.88,-2.09l1.89,-2.09l1.9,-2.07l1.9,-2.06l1.9,-2.05l1.91,-2.04l1.92,-2.03l1.92,-2.02l1.92,-2.01l1.93,-2l1.94,-1.99l1.94,-1.98l1.95,-1.97l1.96,-1.96l1.96,-1.95l1.96,-1.94l1.97,-1.93l1.98,-1.92l1.98,-1.91l1.99,-1.9l1.99,-1.89l2,-1.87l2,-1.87l2.01,-1.86l2.02,-1.84l2.02,-1.84l2.03,-1.82l2.03,-1.82l2.04,-1.8l2.05,-1.8l2.05,-1.78l2.05,-1.77l2.07,-1.77l2.07,-1.75l2.07,-1.74l2.08,-1.73l2.09,-1.72l2.09,-1.71l2.1,-1.7l2.11,-1.68l2.11,-1.68l2.12,-1.67l2.12,-1.65l2.13,-1.65l2.13,-1.63l2.15,-1.63l2.15,-1.61l2.15,-1.6l2.16,-1.59l2.17,-1.58l2.17,-1.57l2.18,-1.56l2.19,-1.54l2.19,-1.54l2.2,-1.53l2.2,-1.51l2.22,-1.5l2.21,-1.5l2.23,-1.48l2.23,-1.47l2.24,-1.46l2.24,-1.45l2.25,-1.43l2.26,-1.43l2.26,-1.41l2.27,-1.41l2.28,-1.39l2.28,-1.38l2.29,-1.37l2.3,-1.36l2.3,-1.34l2.31,-1.34l2.32,-1.32l2.32,-1.32l2.33,-1.3l2.34,-1.29l2.34,-1.28l2.35,-1.27l2.36,-1.25l2.36,-1.25l2.37,-1.23l2.38,-1.22l2.38,-1.21l2.39,-1.2l2.4,-1.19l2.41,-1.18l2.41,-1.16l2.41,-1.15l2.43,-1.14l2.43,-1.13l2.44,-1.12l2.45,-1.11l2.45,-1.09l2.46,-1.08l2.47,-1.07l2.47,-1.06l2.48,-1.05l2.49,-1.04l2.49,-1.02l2.5,-1.01l2.51,-1l2.52,-0.99l2.52,-0.98l2.53,-0.96l2.54,-0.96l2.54,-0.94l2.56,-0.92l2.55,-0.92l2.57,-0.91l2.57,-0.89l2.58,-0.88l2.59,-0.87l2.59,-0.86l2.6,-0.84l2.61,-0.83l2.62,-0.83l2.62,-0.8l2.63,-0.8l2.64,-0.79l2.64,-0.77l2.66,-0.76l2.66,-0.75l2.66,-0.73l2.68,-0.73l2.68,-0.71l2.69,-0.7l2.69,-0.68l2.7,-0.68l2.72,-0.66l2.71,-0.65l2.73,-0.64l2.73,-0.63l2.74,-0.61l2.75,-0.6l2.75,-0.59l2.77,-0.58l2.76,-0.56l2.78,-0.55l2.79,-0.54l2.79,-0.53l2.8,-0.51l2.81,-0.5l2.81,-0.49l2.82,-0.48l2.83,-0.47l2.84,-0.45l2.84,-0.44l2.85,-0.43l2.86,-0.41l2.87,-0.4l2.88,-0.39l2.88,-0.38l2.89,-0.37l2.9,-0.35l2.9,-0.34l2.92,-0.33l2.92,-0.31l2.92,-0.3l2.94,-0.29l2.94,-0.28l2.96,-0.26l2.96,-0.26l2.96,-0.24l2.98,-0.22l2.98,-0.22l2.99,-0.2l3,-0.19l3,-0.17l3.02,-0.17l2.97,-0.14l0.08,-0.01l16.01,6.05Z"/>
              </clipPath>
              <g clip-path="url(#_clip1)">
                <path id="decoarrow1el1" d="M16.704,535.87c0,0 187.468,-420.612 558.785,-407.435" style="fill:none;stroke:#fff;stroke-width:100px;stroke-dasharray:1000,1000,0,0;stroke-dashoffset:-1000;"/>
              </g>
              <path id="decoarrow1el2" d="M451.06,22.5l135.28,96.96l-76.5,160.42" style="fill:none;stroke:#fff;stroke-width:45px;stroke-dasharray:450,450,0,0;stroke-dashoffset:-350;"/>
            </g>
          </svg>
          <svg id="decoarrow2" class="deco arrow" draggable="false"  viewBox="0 0 45 56" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <g>
              <clipPath id="_clip2">
                <path d="M15.093,7.973l0.005,0.005l0.246,0.296l0.248,0.3l0.245,0.299l0.243,0.299l0.241,0.298l0.238,0.299l0.236,0.299l0.233,0.298l0.231,0.299l0.228,0.298l0.226,0.299l0.224,0.299l0.221,0.298l0.219,0.299l0.216,0.299l0.213,0.299l0.211,0.3l0.207,0.298l0.104,0.151l0.103,0.15l0.202,0.3l0.101,0.151l0.1,0.15l0.099,0.15l0.098,0.151l0.098,0.15l0.097,0.151l0.192,0.302l0.095,0.15l0.094,0.152l0.094,0.151l0.092,0.151l0.093,0.151l0.182,0.304l0.09,0.151l0.089,0.152l0.176,0.304l0.087,0.153l0.087,0.152l0.17,0.306l0.084,0.152l0.084,0.153l0.082,0.154l0.082,0.153l0.081,0.154l0.081,0.153l0.158,0.308l0.078,0.154l0.078,0.155l0.076,0.154l0.076,0.155l0.075,0.155l0.074,0.155l0.073,0.156l0.073,0.155l0.072,0.156l0.071,0.156l0.07,0.156l0.069,0.156l0.069,0.157l0.068,0.157l0.067,0.157l0.066,0.157l0.065,0.157l0.128,0.316l0.063,0.158l0.062,0.158l0.061,0.159l0.12,0.318l0.116,0.318l0.057,0.16l0.056,0.16l0.055,0.16l0.054,0.161l0.054,0.16l0.104,0.322l0.051,0.162l0.05,0.162l0.049,0.162l0.048,0.162l0.047,0.162l0.047,0.163l0.045,0.163l0.045,0.164l0.043,0.163l0.043,0.164l0.042,0.164l0.041,0.164l0.04,0.165l0.039,0.165l0.038,0.165l0.074,0.332l0.035,0.166l0.034,0.166l0.034,0.167l0.033,0.167l0.062,0.334l0.03,0.168l0.028,0.168l0.028,0.169l0.027,0.169l0.026,0.169l0.025,0.169l0.024,0.169l0.023,0.17l0.022,0.171l0.021,0.17l0.02,0.171l0.019,0.171l0.019,0.172l0.017,0.171l0.016,0.173l0.015,0.172l0.015,0.173l0.013,0.173l0.012,0.173l0.022,0.348l0.009,0.174l0.016,0.35l0.006,0.175l0.005,0.176l0.008,0.352l0.002,0.177l0.001,0.177l0,0.355l-0.002,0.178l-0.003,0.179l-0.004,0.178l-0.005,0.179l-0.005,0.18l-0.007,0.18l-0.008,0.18l-0.009,0.18l-0.01,0.181l-0.011,0.182l-0.012,0.181l-0.013,0.182l-0.014,0.183l-0.016,0.182l-0.016,0.183l-0.017,0.184l-0.018,0.184l-0.02,0.184l-0.02,0.185l-0.021,0.185l-0.023,0.185l-0.023,0.186l-0.025,0.186l-0.025,0.187l-0.027,0.187l-0.028,0.187l-0.028,0.188l-0.03,0.188l-0.031,0.189l-0.032,0.189l-0.033,0.189l-0.034,0.19l-0.035,0.19l-0.036,0.191l-0.037,0.191l-0.039,0.192l-0.039,0.192l-0.041,0.192l-0.041,0.193l-0.043,0.194l-0.043,0.193l-0.045,0.195l-0.046,0.194l-0.047,0.195l-0.048,0.196l-0.049,0.196l-0.05,0.197l-0.051,0.197l-0.053,0.197l-0.053,0.198l-0.055,0.198l-0.055,0.199l-0.057,0.2l-0.058,0.2l-0.058,0.2l-0.06,0.201l-0.061,0.201l-0.063,0.202l-0.063,0.202l-0.064,0.203l-0.066,0.204l-0.066,0.203l-0.068,0.205l-0.069,0.205l-0.07,0.205l-0.071,0.206l-0.072,0.207l-0.073,0.207l-0.075,0.207l-0.075,0.208l-0.077,0.209l-0.078,0.209l-0.079,0.21l-0.08,0.21l-0.081,0.211l-0.082,0.212l-0.083,0.212l-0.085,0.212l-0.086,0.214l-0.087,0.213l-0.087,0.215l-0.09,0.215l-0.09,0.215l-0.091,0.216l-0.093,0.217l-0.094,0.217l-0.094,0.218l-0.096,0.219l-0.098,0.219l-0.098,0.219l-0.099,0.221l-0.101,0.221l-0.102,0.221l-0.103,0.223l-0.104,0.222l-0.105,0.224l-0.106,0.222l-0.003,0.007l-0.682,0.624l-0.91,-0.018l-0.013,-0.006l-0.618,-0.667l0.012,-0.924l0.097,-0.23l0.092,-0.221l0.091,-0.22l0.09,-0.22l0.089,-0.218l0.087,-0.218l0.087,-0.217l0.085,-0.216l0.084,-0.215l0.083,-0.215l0.082,-0.214l0.081,-0.213l0.079,-0.212l0.079,-0.211l0.077,-0.211l0.076,-0.21l0.076,-0.209l0.074,-0.209l0.072,-0.208l0.072,-0.207l0.071,-0.206l0.069,-0.206l0.069,-0.204l0.067,-0.205l0.066,-0.203l0.065,-0.203l0.064,-0.201l0.063,-0.202l0.062,-0.2l0.061,-0.2l0.059,-0.199l0.059,-0.198l0.057,-0.198l0.057,-0.197l0.055,-0.196l0.054,-0.195l0.054,-0.195l0.052,-0.194l0.051,-0.194l0.05,-0.193l0.049,-0.192l0.048,-0.191l0.047,-0.191l0.045,-0.19l0.045,-0.189l0.044,-0.189l0.042,-0.188l0.042,-0.187l0.041,-0.187l0.039,-0.186l0.039,-0.186l0.037,-0.184l0.037,-0.185l0.035,-0.183l0.035,-0.183l0.033,-0.182l0.032,-0.182l0.032,-0.181l0.03,-0.18l0.03,-0.18l0.028,-0.179l0.027,-0.178l0.027,-0.178l0.025,-0.177l0.025,-0.177l0.023,-0.176l0.022,-0.175l0.022,-0.175l0.02,-0.174l0.02,-0.174l0.018,-0.173l0.018,-0.173l0.017,-0.171l0.015,-0.172l0.015,-0.171l0.014,-0.17l0.013,-0.169l0.012,-0.17l0.01,-0.168l0.01,-0.168l0.009,-0.167l0.009,-0.167l0.007,-0.167l0.006,-0.166l0.005,-0.165l0.005,-0.165l0.003,-0.164l0.003,-0.164l0.001,-0.163l0.001,-0.162l0,-0.163l-0.001,-0.161l-0.002,-0.162l-0.003,-0.16l-0.004,-0.16l-0.005,-0.16l-0.005,-0.159l-0.007,-0.159l-0.007,-0.159l-0.008,-0.157l-0.009,-0.158l-0.01,-0.157l-0.011,-0.156l-0.012,-0.156l-0.013,-0.156l-0.013,-0.155l-0.015,-0.155l-0.015,-0.154l-0.016,-0.154l-0.017,-0.153l-0.018,-0.153l-0.018,-0.153l-0.02,-0.152l-0.02,-0.152l-0.021,-0.151l-0.022,-0.151l-0.023,-0.151l-0.024,-0.15l-0.025,-0.15l-0.025,-0.15l-0.026,-0.149l-0.027,-0.149l-0.028,-0.148l-0.029,-0.148l-0.029,-0.148l-0.031,-0.147l-0.031,-0.147l-0.032,-0.147l-0.033,-0.147l-0.033,-0.146l-0.035,-0.145l-0.035,-0.146l-0.036,-0.145l-0.037,-0.145l-0.038,-0.144l-0.038,-0.145l-0.039,-0.144l-0.041,-0.143l-0.04,-0.144l-0.042,-0.143l-0.043,-0.143l-0.043,-0.142l-0.044,-0.143l-0.045,-0.142l-0.046,-0.142l-0.046,-0.141l-0.047,-0.141l-0.048,-0.142l-0.049,-0.14l-0.05,-0.141l-0.05,-0.141l-0.051,-0.14l-0.052,-0.14l-0.053,-0.139l-0.053,-0.14l-0.055,-0.139l-0.055,-0.14l-0.056,-0.139l-0.056,-0.138l-0.058,-0.139l-0.058,-0.138l-0.059,-0.139l-0.059,-0.138l-0.061,-0.138l-0.061,-0.137l-0.062,-0.138l-0.063,-0.137l-0.063,-0.138l-0.065,-0.137l-0.065,-0.137l-0.066,-0.137l-0.066,-0.136l-0.067,-0.137l-0.069,-0.136l-0.068,-0.137l-0.07,-0.136l-0.07,-0.136l-0.071,-0.136l-0.072,-0.136l-0.073,-0.136l-0.073,-0.135l-0.074,-0.136l-0.075,-0.136l-0.076,-0.135l-0.076,-0.135l-0.077,-0.135l-0.078,-0.136l-0.079,-0.135l-0.079,-0.135l-0.08,-0.135l-0.081,-0.134l-0.081,-0.135l-0.082,-0.135l-0.083,-0.135l-0.084,-0.134l-0.085,-0.135l-0.085,-0.134l-0.086,-0.135l-0.086,-0.134l-0.088,-0.135l-0.088,-0.134l-0.089,-0.134l-0.089,-0.135l-0.09,-0.134l-0.091,-0.134l-0.092,-0.135l-0.093,-0.134l-0.093,-0.134l-0.094,-0.134l-0.094,-0.135l-0.095,-0.134l-0.096,-0.134l-0.097,-0.134l-0.097,-0.135l-0.099,-0.134l-0.098,-0.134l-0.1,-0.134l-0.1,-0.135l-0.101,-0.134l-0.101,-0.133l-0.206,-0.27l-0.208,-0.269l-0.211,-0.269l-0.213,-0.269l-0.217,-0.27l-0.219,-0.27l-0.221,-0.27l-0.225,-0.27l-0.227,-0.27l-0.23,-0.271l-0.232,-0.271l-0.235,-0.272l-0.238,-0.272l-0.24,-0.272l-0.243,-0.273l-0.245,-0.274l-0.248,-0.273l-0.254,-0.278l-0.005,-0.006l-0.537,-1.622l0.759,-1.535l0.011,-0.01l1.625,-0.543l1.534,0.753Z"/>
              </clipPath>
              <g clip-path="url(#_clip2)">
                <path id="decoarrow2el1" d="M19.217,53.073c0,0 15.587,-25.073 -8.053,-45.036" style="fill:none;stroke:#fff;stroke-width:10px;stroke-dasharray:100,100,0,0;stroke-dashoffset:-100;"/>
              </g>
              <path id="decoarrow2el2" d="M7.225,23.971l4.807,-15.934l17.654,2.059" style="fill:none;stroke:#fff;stroke-width:4.5px;stroke-dasharray:45,45,0,0;stroke-dashoffset:-45;"/>
            </g>
          </svg>
        </div>
      </div>
      <img id="discord-example" :src="audience.graphics.landingExample" alt="Example Image">  
    </div>

    <img id="gamelist" draggable="false" src="@/assets/img/landing-gamelist.svg" alt="" aria-hidden="true">
    <div id="wave1">
      <img draggable="false" src="@/assets/img/landing-wave-1.svg" alt="" aria-hidden="true">
    </div>

    <div id="details1" class="details">
      <h4 left>
        <span component>Here's how it works:</span>
      </h4>
      <!-- <svg class="h5deco" width="100%" height="100%" viewBox="0 0 119 45" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
        <path d="M1.875,37.346l26.58,-26.58l31.843,31.843l40.734,-40.734l15.306,15.306" style="fill:none;stroke:#933c6d;stroke-width:3.75px;"/>
      </svg> -->
      <div class="howtopanels">
        <div class="panel">
          <div class="icon bullhorn">
            <BullhornIcon />
          </div>
          <span component class="title">NEVER MISS A SINGLE FREEBIE</span>
          <span component class="desc">Provide the bot with a channel to use and it will send a message there each time a new game gets free. Yes, it really only takes one command to set it up!</span>
          <cmd command="@FreeStuff set channel #free-games" />
        </div>
        <div class="panel">
          <div class="icon list">
            <ListIcon />
          </div>
          <span component class="title">LIST ALL CURRENT FREE GAMES</span>
          <span component class="desc">Getting paranoid that you missed a discount? The bot also has a very convenient and easy to use way of listing all current freebies. Try it out for yourself:</span>
          <cmd command="@FreeStuff free" />
        </div>
        <img src="@/assets/img/dotgrid-5x5-gray.svg" alt="" draggable="false">
      </div>
    </div>

    <div id="details2" class="details">
      <div class="inner">
        <h4 left>
          <span component>Customize as you like:</span>
        </h4>
        <div class="featurepanels">
          <div class="panel">
            <img src="@/assets/img/landing-customize-themes.svg" alt="Customize Themes" draggable="false">
            <span component class="title">CHOOSE A NICE THEME</span>
            <span component class="desc">Select one of 10 themes to match the look and feel of your server! Images or not, minimalistic or with extra info - we got it all!</span>
            <nuxt-link to="/themes">Discover Themes</nuxt-link>
          </div>
          <div class="panel">
            <img src="@/assets/img/landing-customize-filter.svg" alt="Customize Filter" draggable="false">
            <span component class="title">FILTER THE CONTENT</span>
            <span component class="desc">Don't want cheap games in your server? Only like certain stores? Tell the bot what you like and what you don't and it'll take care!</span>
            <nuxt-link to="/themes">Learn More</nuxt-link>
          </div>
          <div class="panel">
            <img src="@/assets/img/landing-customize-pings.svg" alt="Customize Pings" draggable="false">
            <span component class="title">GET NOTIFIED</span>
            <span component class="desc">Would you like to get pinged on new free games? Just provide the bot with a role to ping and you'll never be too late!</span>
            <nuxt-link to="/themes">Read How</nuxt-link>
          </div>
          <div class="panel">
            <img src="@/assets/img/landing-customize-language.svg" alt="Customize Language" draggable="false">
            <span component class="title">LOCALISATION</span>
            <span component class="desc">English is not your primary language? No worries, we got a good amount of translations for you to choose from!</span>
            <nuxt-link to="/themes">View Translations</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div id="details3" class="details">
      <img class="left" src="@/assets/img/deco-stalactites-left.svg" alt="Deco Stalactites" draggable="false" aria-hidden="true">
      <img class="right" src="@/assets/img/deco-stalactites-right.svg" alt="Deco Stalactites" draggable="false" aria-hidden="true">
      <div class="inner">
        <h4 center id="faq">
          <span component>Questions?</span>
        </h4>
        <div class="faqs">
          <div
            v-for="(data,i) of faqs"
            :key="i"
            class="faq index--faq-element"
            :focused="i == activeFaq"
            @keydown.enter.prevent="i == activeFaq ? activeFaq = -1 : activeFaq = i"
            tabindex="1"
          >
            <div class="compact" @click="i == activeFaq ? activeFaq = -1 : activeFaq = i">
              <span v-text="data.title" class="title" />
            </div>
            <div class="details">
              <span v-html="data.answer" class="answer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import cmd from '~/components/ChatCommand.vue'
const BullhornIcon =  require('~/assets/icons/bullhorn.svg?inline')
const ListIcon =  require('~/assets/icons/list.svg?inline')

const audiences = {
  discord: {
    platform: 'Discord',
    cta: {
      text: 'Get Started',
      url: 'https://freestuffbot.xyz/invite'
    },
    graphics: {
      landingExample: '/assets/img/discord-example.webp'
    }
  },
  telegram: {
    platform: 'Telegram',
    cta: {
      text: 'Get Started',
      url: 'https://freestuffbot.xyz/invite/telegram'
    },
    graphics: {
      landingExample: '/assets/img/telegram-example.webp'
    }
  }
} as {[key: string]: any}

const faqs = [
  {
    title: 'Why does the bot not respond to my messages?',
    answer: `This just screams like a permission issue! By default you should have given the bot all of the permissions it need when you added it to the server. Since the bot doesn't respond though, the channel you're trying to use it in may have overwritten those permissions. In simpler words: <b>try using the bot in a different channel</b>; if a normal user can type there, the bot should be able to do so too. If that doesn't solve it, you only got one option now: Go full out Discord-Admin-Mode. <b>Doublecheck every permission setting you can find</b>, both for the bot's roles and the channel. If you were not the one to set up the permissions in your server, maybe even consider asking them for help. Crazy idea, I know.`
  },
  {
    title: 'Why do the bots messages look different than on that other Discord server?',
    answer: `The bot has a large variety of customisation options available that change the appearance of the bot's messages. Make sure to check out the available <a href="/themes">Themes</a> and other <a href="/guide">Options</a>!`
  },
  {
    title: "The bot didn't announce a game that's currently free!",
    answer: `This can have a multitude of reasons. Let's run them through real quick:<br>&bull; We don't know about it yet. Go <a href="/discord" target="_blank">join our Discord Server</a> to let us know!<br>&bull; The game is always free, not 100% off. In that case we will not announce it.<br>&bull; The game got filtered out and didn't reach your server. If you've seen it announced on a different server but your's got left behind, please take a look at our <a href="/guide">filter options</a> and adjust them to your likings!`
  },
  {
    title: "Why is language xyz not supported?",
    answer: `That's because we haven't found a translator for that language yet! If you would like to translate it into your language, <a href="/o/translating" target="_blank">hit us up</a> and get your name on the team page :)`
  },
  {
    title: "I have a question that's not answered above, where can I ask?",
    answer: `We have a Discord server for exactly that! (and much more) <a href="/discord" target="_blank">Click here to join!</a>`
  }
]

export default Vue.extend({
	components: {
    cmd,
    BullhornIcon,
    ListIcon
	},
  data () {
    return {
      audience: audiences.discord,
      faqs,
      activeFaq: -1
    }
  },
  mounted () {
    const url = new URL(window.location.href)
    if (url.searchParams.has('audience')) {
      const target = url.searchParams.get('audience') || ''
      if (audiences[target])
        this.audience = audiences[target]
    }
  },
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

@media (max-width: 1200px) {
  .mobile-hidden { display: none; }
}

@media (min-width: 1201px) {
  .mobile-visible { display: none; }
}

#landing {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  min-height: calc(20vh + 650px);

  #infobox {
    position: absolute;
    top: 30vh;
    left: 0;
    z-index: 20;

    h2 {
      margin: 0 0 50pt 0;
	    &:first-of-type { margin-bottom: 0; }
    }
    img { transform: scale(1.1) translate3d(-80%, 10%, -10px) rotateX(calc(var(--scroll) * .004deg)); }

    @media (max-width: 500px) {
      top: 20vh;
      h2 { margin: 0 0 30pt 0; }
    }

    #buttons {
      position: relative;

      @media (max-width: 400px) {
        a {
          margin-left: 16pt;
          margin-right: 16pt;
        }
      }

      #decoarrow1 {
        position: absolute;
        width: 80px;
        left: -110px;
        top: 12px;

        @media (max-width: 1200px) { display: none; }
      }

      #decoarrow2 {
        position: absolute;
        width: 60px;
        left: 130px;
        top: 75px;

        @media (max-width: 1200px) { left: 40vw; }
        @media (max-width: 400px) { display: none; }
      }
    }
  }

  #discord-example {
    position: absolute;
    right: 0;
    padding: 10pt;
    background-color: $bg-bright;
    top: 50%;
    transform: translate3d(0, -50%, -2px) scale(1.2);
    border-radius: $component-border-radius;
    box-shadow: 0 0 50px $backpage
              , -2px 3px 20px #00000055;
    opacity: 0;
    animation: 1.5s discord-example-in cubic-bezier(0.33, 1, 0.68, 1) 2.5s;
    animation-fill-mode: forwards;

    @media (max-width: 1200px) {
      top: 65% !important;
      right: unset !important;
      left: 50% !important;
      transform: translate(-50%, 20%) !important;
    }

    @media (max-width: 500px) { top: 60% !important; width: 90%; }
    @media (max-width: 380px) { top: 65% !important; }
    @media (max-width: 300px) { top: 70% !important; }
  }
}

#gamelist {
  --anim: 0;
  position: absolute;
  right: -19vw;
  top: 53vh;
  width: 50vw;
  transform: translateZ(-5px) scale(1.5);
  opacity: calc((1 - var(--scrollPos) * .8) * var(--anim, 0));
  animation: 1s gamelist-in cubic-bezier(0.33, 1, 0.68, 1) 2.5s;
  animation-fill-mode: forwards;

  @media (max-width: 1000px) {
    display: none;
  }
}

#wave1 {
  position: absolute;
  left: -5vw;
  top: 100vh;
  width: 110vw;
  transform: translateZ(-1px) scale(1.02);
  max-height: 140vh;
  overflow: hidden;

  img { width: 100%; }

  @media (max-height: 1000px) { max-height: 200vh !important; }
  @media (max-height: 800px) { max-height: 250vh !important; }
  @media (max-height: 600px) { max-height: 300vh !important; }
  @media (max-height: 500px) { max-height: 350vh !important; }
  @media (max-height: 300px) { max-height: 500vh !important; }
}

.details {
  position: relative;

  h4 {
    position: relative;
    z-index: 12;
    margin-bottom: 30pt;
  }
}

#details1 {
  z-index: 11;
  width: 100%;
  margin-top: 15vh;
  margin-bottom: 25vh;

  @media (max-width: 1200px) { margin-top: 40vh !important; }
  @media (max-width: 450px) { margin-top: 30vh !important; }
}

#details2 {
  z-index: 13;
  width: 100vw;
  left: 50%;
  padding-bottom: 20vh;
  background-color: $bg-dark;
  transform: translateX(-50%);

  .inner {
    width: 90%;
    max-width: $content-width;
    margin: auto;
  }
}

#details3 {
  position: relative;
  z-index: 11;
  width: 100vw;
  left: 50%;
  padding-top: 15vh;
  padding-bottom: 10vh;
  transform: translateX(-50%);
  background-color: $backpage;
  @media (max-width: 700px) { padding-bottom: 0; }

  img {
    position: absolute;
    top: 0;
    height: 140pt;
    user-select: none;

    &.left { left: 10pt; }
    &.right {
      right: 10pt;
      @media (max-width: 800px) { display: none; }
    }
  }

  .inner {
    width: 90%;
    max-width: $content-width / 3 * 2;
    margin: auto;
  }
}

.h5deco {
  position: relative;
  height: 66pt;
  transform: translate3d(-33%, -80%, 1px);
  z-index: 10;

  path {
    stroke-dasharray: 1000;
    stroke-dashoffset: calc(1050 - (var(--scrollPos) * 200));
    transition: stroke-dashoffset .3s cubic-bezier(0.34, 2.36, 0.44, 1);
  }
}

.howtopanels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1vw;
  row-gap: 5vw;
  position: relative;

  @media (max-width: 1000px) { grid-template-columns: 1fr; }

  .panel {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: "icon title" "icon desc" "icon cmd";
    column-gap: 20px;
    background-color: $bg-bright;
    border-radius: $component-border-radius;
    box-shadow: 0 0 5px $bg-dark;
    padding: $component-margin*2;
    z-index: 2;

    @media (max-width: 570px) { grid-template-areas: "icon title" "icon desc" "cmd cmd"; }
    @media (max-width: 380px) { grid-template-areas: "title icon" "desc desc" "cmd cmd"; }

    .icon {
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 9999px;
      grid-area: icon;
      
      &.bullhorn {
        background-color: #c4a33960;
        svg {
          color: #ebe37a;
          transform: rotate(-10deg);
        }
      }
      
      &.list {
        background-color: #39a4c460;
        svg {
          color: #7adaeb;
          transform: rotate(-3deg);
        }
      }

      svg { width: 40px; }
    }

    span {
      display: block;
      text-align: left;

      &.title {
        font-family: $font-header;
        font-size: 15pt;
        color: $color-header;
        grid-area: title;
      }

      &.desc {
        font-family: $font-regular;
        font-size: 11pt;
        color: $color-sub;
        flex-grow: 1;
        margin: $component-margin 0;
        grid-area: desc;
      }
    }

    .chat-command-wrapper { grid-area: cmd; }
  }

  & > img {
    position: absolute;
    left: -25%;
    bottom: -53%;
    width: 220px;
    height: 220px;
    transform: translateZ(-2px) scale(1.2);
    z-index: -1;
    opacity: .2;
  }
}

.featurepanels {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1vw;
  row-gap: 1vw;
  position: relative;

  @media (max-width: 970px) {
    grid-template-columns: 1fr 1fr;
    img { max-width: 150pt; margin: auto; }
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    row-gap: 5vw;
    img { max-width: 150pt; margin: auto; }
  }

  .panel {
    display: flex;
    flex-direction: column;
    background-color: $bg-bright;
    border-radius: $component-border-radius;
    box-shadow: 0 0 5px $bg-dark;
    z-index: 2;

    span {
      display: block;
      text-align: center;

      &.title {
        margin: $component-margin;
        font-family: $font-header;
        font-size: 15pt;
        color: $color-header;
      }

      &.desc {
        margin: 0 $component-margin*2 0 $component-margin*2;
        font-family: $font-regular;
        font-size: 11pt;
        color: $color-sub;
        flex-grow: 1;
      }
    }

    a {
      display: block;
      background-color: $primary-gold-trans;
      margin: $component-margin*2;
      border-radius: 999pt;
      text-align: center;
      padding: $component-margin 0;
      color: #000000ee;
      font-family: $font-major;
      font-size: 11pt;
      box-shadow: 0 0px 0px #00000000;
      transition: background-color .3s ease
                , box-shadow .3s ease;

      &:hover {
        background-color: $primary-gold;
        box-shadow: 0 2px 7px #00000033;
      }
    }
  }
}

.faqs {
  .faq {
    --closed-height: 40pt;
    @media (max-width: 440px) { --closed-height: 60pt; }

    width: 100%;
    max-height: var(--closed-height);
    overflow: hidden;
    background-color: $bg-bright;
    border-radius: $component-border-radius;
    margin-bottom: $component-margin;
    outline: none;
    transition: max-height .2s cubic-bezier(0, 1, 0, 1);

    &:focus-visible { background-color: $bg-brighter; }
    &[focused] {
      max-height: 100vh;
      transition: max-height .5s ease-in;
    }

    .compact {
      height: var(--closed-height);
      display: flex;
      justify-content: left;
      align-items: center;
      padding: 0 15pt;
      cursor: pointer;

      span {
        margin: 0;
        font-size: 12pt;
        font-family: $font-major;
        color: $color-major;
      }
    }

    .details {
      padding: 0 15pt 15pt 15pt;
      
      span {
        margin: 0;
        font-size: 12pt;
        font-family: $font-regular;
        color: $color-sub;
        line-height: 15pt;
      }
    }
  }
}

//

.button1 {
  opacity: 0;
  margin: 0 16pt 0 0;
  animation: button1-in 1s cubic-bezier(0.22, 1, 0.36, 1) 3s;
  animation-fill-mode: forwards;
}

.button2 {
  opacity: 0;
  animation: button2-in 1s ease 3.2s;
  animation-fill-mode: forwards;
}

#decoarrow1el1 {
  animation: .7s decoarrow1el1-in cubic-bezier(0.33, 1, 0.68, 1) 4.5s;
  animation-fill-mode: forwards;
}

#decoarrow1el2 {
  animation: 1.2s decoarrow1el2-in cubic-bezier(0.33, 1, 0.68, 1) 5s;
  animation-fill-mode: forwards;
}

#decoarrow2el1 {
  animation: .7s decoarrow2el1-in cubic-bezier(0.33, 1, 0.68, 1) 6.5s;
  animation-fill-mode: forwards;
}

#decoarrow2el2 {
  animation: 1.2s decoarrow2el2-in cubic-bezier(0.33, 1, 0.68, 1) 7s;
  animation-fill-mode: forwards;
}

@keyframes button1-in {
  0% { top: 15pt; opacity: 0; }
  100% { top: 0pt; opacity: 1; }
}
@keyframes button2-in {
  0% { top: 3pt; opacity: 0; }
  100% { top: 0pt; opacity: .8; }
}
@keyframes decoarrow1el1-in {
  0% { stroke-dashoffset: -1000; }
  100% { stroke-dashoffset: -1700; }
}
@keyframes decoarrow1el2-in {
  0% { stroke-dashoffset: -350; }
  100% { stroke-dashoffset: -800; }
}
@keyframes decoarrow2el1-in {
  0% { stroke-dashoffset: -100; }
  100% { stroke-dashoffset: -150; }
}
@keyframes decoarrow2el2-in {
  0% { stroke-dashoffset: -45; }
  100% { stroke-dashoffset: -80; }
}
@keyframes discord-example-in {
  0% { top: 60%; opacity: 0; transform: translate3d(0, -50%, -2px) scale(1.2) rotateX(-.1deg); }
  50% { opacity: 1; transform: translate3d(0, -50%, -2px) scale(1.2) rotateX(-.03deg); }
  100% { top: 50%; opacity: 1; transform: translate3d(0, -50%, -2px) scale(1.2) rotateX(0); }
}
@keyframes gamelist-in {
  0% { top: 56vh; right: -19vw; --anim: 0 }
  10% { --anim: .1 }
  20% { --anim: .2 }
  30% { --anim: .3 }
  40% { --anim: .4 }
  50% { --anim: .5 }
  60% { --anim: .6 }
  70% { --anim: .7 }
  80% { --anim: .8 }
  90% { --anim: .9 }
  100% { top: 33vh; right: -14vw; --anim: 1 }
}
</style>
<style lang="scss">
@import '~/assets/style/variables.scss';

.index--faq-element {
  .details a {
    color: #da5e7d;
    border-bottom: 3px solid #da5e7d33;

    &:hover { border-bottom: 3px solid #da5e7d; }
  }

  .details b {
    color: $color-major;
    font-family: $font-major;
  }
}
</style>

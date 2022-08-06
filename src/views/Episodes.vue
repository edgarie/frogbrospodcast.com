<template>
  <div class="episodes flex justify-center">
    <div class="episodes__list" id="podcasts-player-container">
      <iframe
        id="anchor-podcast-iframe"
        src="https://anchor.fm/frogbrospodcast/embed"
        style="width: 100%;"
        frameborder="0"
        scrolling="no"
        name="iframe"
      ></iframe>
      <div id="podcast-list-container" class="episode__feed">
        <div
          v-for="(entry, index) in feed"
          :key="index"
          class="episode__feed--item"
        >
          <a
            class="podcast-list-link episode__image"
            :href="entry | updateUrl"
            target="iframe"
          >
            <img :src="entry.itunes.image" />
            <button
              class="circle white play__button"
              aria-label=""
              style="height: 31px; min-height: 31px; width: 31px; min-width: 31px; border-radius: 16px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1 0 11 12"
                width="13"
                height="13"
              >
                <rect width="12" height="12" fill="none"></rect>
                <path
                  d="M1 .81v10.38a.76.76 0 0 0 .75.75.67.67 0 0 0 .39-.12l8.42-5.18a.75.75 0 0 0 0-1.28L2.14.18a.75.75 0 0 0-1 .24.79.79 0 0 0-.14.39z"
                  fill="#282F36"
                ></path>
              </svg>
            </button>
          </a>
          <a
            class="podcast-list-link"
            :href="entry | updateUrl"
            target="iframe"
          >
            <div class="episode__heading" style="overflow: hidden;">
              <div>
                <div>
                  {{ entry.title }}
                </div>
              </div>
            </div>
          </a>
          <div class="episode__description ">
            <div class="expander expander--dark" style="overflow: hidden;">
              <div>
                <div v-html="entry.contentSnippet"></div>
              </div>
            </div>
          </div>
          <div class="episode__duration">
            {{ entry.itunes.duration | timeFromSeconds }}
          </div>
          <div class="episode__created">
            {{ entry.isoDate | dateFromISO }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Parser from "rss-parser";
export default {
  name: "Episodes",
  data() {
    return {
      feed: ""
    };
  },
  filters: {
    timeFromSeconds(seconds) {
      const date = new Date(null);
      date.setSeconds(seconds);
      return date.toISOString().substr(11, 8);
    },
    dateFromISO(isoDate) {
      return (
        isoDate.substr(5, 2) +
        "/" +
        isoDate.substr(8, 2) +
        "/" +
        isoDate.substr(0, 4)
      );
    },
    updateUrl(data) {
      const originalURL = data.link;
      const siteUrl = "https://anchor.fm/frogbrospodcast";
      const urlModPosition = siteUrl.length;
      const pathToAdd = "/embed";
      const revisedUrl = [
        originalURL.slice(0, urlModPosition),
        pathToAdd,
        originalURL.slice(urlModPosition)
      ].join("");
      return revisedUrl;
    }
  },
  methods: {
    async setup() {
      const rssUrl = "https://anchor.fm/s/56d29e74/podcast/rss";
      let parser = new Parser();
      let results = await parser.parseURL(rssUrl);
      this.feed = results.items;
    }
  },
  mounted() {
    this.setup();
  }
};
</script>
<style lang="scss" scoped>
.episodes {
  height: 70vh;
  width: 100vw;
  &__list {
    max-height: 700px;
    max-width: 70vw;
    width: 70vw;
    @media (max-width: 767.98px) {
      max-width: 90vw;
      width: 90vw;
    }
  }
}

#podcasts-player-container .wpb_wrapper {
  line-height: 0;
}

#podcasts-player-container {
  zoom: 1; /* Fix for mobiles */
  @media (min-width: 769px) {
    zoom: 0.69;
  }
}

.episode {
  &__feed {
    position: relative;
    overflow-y: auto;
    background-color: #54595e;
    max-height: 450px;
    padding: 11px;
    margin-bottom: 70px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: none;
    color: #fff;
    @media (min-width: 769px) {
      max-height: 500px;
    }
    &--item {
      min-height: 106px;
      color: #292f36;
      background: #fff;
      border-radius: 4px;
      padding: 14px 12px;
      overflow: hidden;
      position: relative;
      a {
        color: inherit;
        text-decoration: none;
        text-align: left;
      }
      p {
        color: rgba(41, 47, 54, 0.7);
        font-size: 13px;
        line-height: 14px;
        @media (min-width: 769px) {
          font-size: 16px;
          line-height: 18px;
          color: #7f8287;
          font-size: 16px;
          line-height: 18px;
          color: #7f8287;
        }
      }
      @media (max-width: 768px) {
        margin-bottom: 10px;
      }
      @media (min-width: 769px) {
        padding: 25px 22px;
      }
    }
  }
  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    float: left;
    margin: 0 6px 10px 0;
    position: relative;
    width: 47px;
    height: 47px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      vertical-align: middle;
    }
    @media (min-width: 769px) {
      width: 56px;
      height: 56px;
      margin-right: 22px;
      margin-bottom: 0;
    }
  }
  &__heading {
    font-weight: 700;
    font-size: 15px;
    color: #292f36;
  }
  &__description {
    color: rgba(41, 47, 54, 0.7);
    font-size: 13px;
    line-height: 14px;
    clear: left;
    padding-right: 2px;
    text-align: left;
    @media (min-width: 769px) {
      font-weight: 700;
      font-size: 18px;
      color: #292f36;
      margin-bottom: 4px;
      width: 365px;
      font-size: 16px;
      line-height: 18px;
      color: #7f8287;
      clear: none;
      width: 465px;
      margin-left: 78px;
      font-size: 16px;
      line-height: 18px;
      color: #7f8287;
    }
  }
  &__duration {
    float: right;
    margin-top: 8px;
    font-size: 11px;
    line-height: 13px;
    color: #c9cbcd;
    @media (min-width: 769px) {
      margin: 0;
      float: none;
      position: absolute;
      font-size: 13px;
      line-height: 15px;
      bottom: 12px;
      right: 22px;
      margin: 0;
      float: none;
      position: absolute;
      font-size: 13px;
      line-height: 15px;
    }
  }
  &__created {
    float: left;
    margin-top: 8px;
    font-size: 11px;
    line-height: 13px;
    color: #c9cbcd;
    @media (min-width: 769px) {
      margin: 0;
      float: none;
      position: absolute;
      font-size: 13px;
      line-height: 15px;
      top: 25px;
      right: 22px;
      margin: 0;
      float: none;
      position: absolute;
      font-size: 13px;
      line-height: 15px;
    }
  }
  &__feed {
    margin-bottom: 73px;
    display: block;
    @media (min-width: 769px) {
      padding: 35px;
    }
  }
}

.circle {
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.white {
  background: #fff;
}

.play__button {
  cursor: pointer;
  text-align: center;
  padding: 0;
  z-index: 0;
  svg {
    overflow: visible;
  }
}

@media (min-width: 769px) {
  .episode__feed > div {
    margin-bottom: 23px;
  }
}
</style>

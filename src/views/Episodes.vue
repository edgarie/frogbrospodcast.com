<template>
  <div class="episodes flex justify-center">
    <div class="episodes__list" id="podcasts-player-container">
      <iframe
        id="anchor-podcast-iframe"
        src="https://anchor.fm/frogbrospodcast/embed"
        style="width: 100%;height:200px"
        frameborder="0"
        scrolling="no"
        name="iframe"
      ></iframe>
      <div id="podcast-list-container" class="styles__episodeFeed___3mOKz">
        <div
          v-for="(entry, index) in feed"
          :key="index"
          class="styles__episodeFeedItem___1U6E2"
        >
          <a
            class="podcast-list-link styles__episodeImage___tMifW"
            :href="entry | updateUrl"
            target="iframe"
          >
            <img :src="entry.itunes.image" />
            <button
              class="styles__circle___1g-9u styles__white___372tQ styles__playButton___1Ivi4 styles__playButton___1uaGA"
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
            <div
              class="styles__episodeHeading___29q7v"
              style="overflow: hidden;"
            >
              <div>
                <div>
                  {{ entry.title }}
                </div>
              </div>
            </div>
          </a>
          <div class="styles__episodeDescription___C3oZg ">
            <div
              class="styles__expander___1NNVb styles__expander--dark___3Qxhe"
              style="overflow: hidden;"
            >
              <div>
                <div v-html="entry.contentSnippet"></div>
              </div>
            </div>
          </div>
          <div class="styles__episodeDuration___2I0Qb">
            {{ entry.itunes.duration | timeFromSeconds }}
          </div>
          <div class="styles__episodeCreated___1zP5p">
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
    // make filter to get time from seconds
    timeFromSeconds(seconds) {
      const date = new Date(null);
      date.setSeconds(seconds);
      return date.toISOString().substr(11, 8);
    },
    // filter to get date from ISO string mm/dd/yyyy
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
    overflow-y: scroll;
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
  zoom: 0.69; /* Fix for mobiles */
}

.styles__episodeFeed___3mOKz {
  position: relative;
  overflow-y: auto;
  background-color: #54595e;
  max-height: 417px;
  padding: 11px;
  margin-bottom: 70px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: none;
  color: #fff;
}

.styles__episodeFeedItem___1U6E2 {
  min-height: 106px;
  color: #292f36;
  background: #fff;
  border-radius: 4px;
  padding: 14px 12px;
  overflow: hidden;
  position: relative;
}

.styles__episodeFeedItem___1U6E2 a {
  color: inherit;
  text-decoration: none;
  text-align: left;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeImage___tMifW {
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
}

.styles__circle___1g-9u {
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.styles__white___372tQ {
  background: #fff;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeImage___tMifW img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  vertical-align: middle;
}

.styles__playButton___1Ivi4 {
  cursor: pointer;
  text-align: center;
  padding: 0;
}

.styles__playButton___1uaGA {
  z-index: 0;
}

.styles__playButton___1Ivi4 svg {
  overflow: visible;
}

.styles__episodeFeedItem___1U6E2 a {
  color: inherit;
  text-decoration: none;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeHeading___29q7v {
  font-weight: 700;
  font-size: 15px;
  color: #292f36;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeDescription___C3oZg,
.styles__episodeFeedItem___1U6E2 p {
  color: rgba(41, 47, 54, 0.7);
  font-size: 13px;
  line-height: 14px;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeDescription___C3oZg {
  clear: left;
  padding-right: 2px;
  text-align: left;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeDescription___C3oZg,
.styles__episodeFeedItem___1U6E2 p {
  color: rgba(41, 47, 54, 0.7);
  font-size: 13px;
  line-height: 14px;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeCreated___1zP5p,
.styles__episodeFeedItem___1U6E2 .styles__episodeDuration___2I0Qb {
  margin-top: 8px;
  font-size: 11px;
  line-height: 13px;
  color: #c9cbcd;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeDuration___2I0Qb {
  float: right;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeCreated___1zP5p,
.styles__episodeFeedItem___1U6E2 .styles__episodeDuration___2I0Qb {
  margin-top: 8px;
  font-size: 11px;
  line-height: 13px;
  color: #c9cbcd;
}

.styles__episodeFeedItem___1U6E2 .styles__episodeCreated___1zP5p {
  float: left;
}

.styles__episodeFeed___3mOKz {
  margin-bottom: 73px;
}

.styles__episodeFeed___3mOKz {
  display: block;
}

@media (max-width: 768px) {
  .styles__episodeFeedItem___1U6E2 {
    margin-bottom: 10px;
  }
}

@media (min-width: 769px) {
  .styles__episodeFeed___3mOKz {
    padding: 35px;
  }

  .styles__episodeFeedItem___1U6E2 {
    padding: 25px 22px;
  }
  .styles__episodeFeed___3mOKz > div {
    margin-bottom: 23px;
  }
  .styles__episodeFeedItem___1U6E2 .styles__episodeImage___tMifW {
    width: 56px;
    height: 56px;
    margin-right: 22px;
    margin-bottom: 0;
  }
  .styles__episodeFeedItem___1U6E2 .styles__episodeHeading___29q7v {
    font-weight: 700;
    font-size: 18px;
    color: #292f36;
    margin-bottom: 4px;
    width: 365px;
  }
  .styles__episodeFeedItem___1U6E2 .styles__episodeDescription___C3oZg,
  .styles__episodeFeedItem___1U6E2 p {
    font-size: 16px;
    line-height: 18px;
    color: #7f8287;
  }
  .styles__episodeFeedItem___1U6E2 .styles__episodeDescription___C3oZg {
    clear: none;
    width: 465px;
    margin-left: 78px;
  }
  .styles__episodeFeedItem___1U6E2 .styles__episodeDescription___C3oZg,
  .styles__episodeFeedItem___1U6E2 p {
    font-size: 16px;
    line-height: 18px;
    color: #7f8287;
  }
  .styles__episodeFeedItem___1U6E2 .styles__episodeCreated___1zP5p,
  .styles__episodeFeedItem___1U6E2 .styles__episodeDuration___2I0Qb {
    margin: 0;
    float: none;
    position: absolute;
    font-size: 13px;
    line-height: 15px;
  }
  .styles__episodeFeedItem___1U6E2 .styles__episodeDuration___2I0Qb {
    bottom: 12px;
    right: 22px;
  }
  .styles__episodeFeedItem___1U6E2 .styles__episodeCreated___1zP5p {
    top: 25px;
    right: 22px;
  }
  .styles__episodeFeedItem___1U6E2 .styles__episodeCreated___1zP5p,
  .styles__episodeFeedItem___1U6E2 .styles__episodeDuration___2I0Qb {
    margin: 0;
    float: none;
    position: absolute;
    font-size: 13px;
    line-height: 15px;
  }
}
</style>

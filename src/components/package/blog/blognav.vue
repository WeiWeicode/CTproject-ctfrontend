<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>
  
  <script>
import { NotionRenderer, getPageBlocks } from "vue-notion";

export default {
  components: { NotionRenderer },
  
  data() {
    return {
      blockMap: null,

      // 接收網址參數
      notionurl: this.$route.params.id,
    };
  },

  async created() {
    // get Notion blocks from the API via a Notion pageId
    this.blockMap = await getPageBlocks(this.notionurl);
  },
};
</script>
  
  <style>
@import "vue-notion/src/styles.css"; /* optional Notion-like styles */
</style>
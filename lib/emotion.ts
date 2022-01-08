import createCache from "@emotion/cache";
import type { EmotionCritical } from "@emotion/server/types/create-instance";
import createEmotionServer from "@emotion/server/types/create-instance";

const emotionCache = createCache({
  key: "css",

  /**
   * Set to `true` if you want to use MUI
   */
  prepend: false,
});

const emotionServer = createEmotionServer(emotionCache);

export const extractCritical = (html: string): EmotionCritical =>
  emotionServer.extractCritical(html);

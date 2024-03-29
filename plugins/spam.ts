export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.filterSpam = (msg: string): boolean => {
    const spamPatterns = [
      /guaranteed job/i,
      /earn money/i,
      /won a lottery/i,
      /free gift/i,
      /Free investment/i,
      /Free membership/i,
      /Free money/i,
    ];

    return spamPatterns.some((pattern) => pattern.test(msg));
  };
});

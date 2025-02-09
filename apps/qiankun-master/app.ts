import { useEffect, useState } from "react";
import { defineApp } from "@umijs/max";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


export default defineApp({
  // init state
  getInitialState: async () => {
    await delay(500);
    return {
      name: 'Big Fish',
      size: 'big',
      color: 'blue',
      mood: 'happy',
      food: 'fish',
      location: 'sea',
    };
  },

  // qiankun
  qiankun: {
    master: {
      routes: [
        {
          path: '/nav',
          microApp: 'slave',
          mode: 'match',
        },
        {
          path: '/count',
          microApp: 'slave',
          mode: 'match',
        },
        {
          path: '/prefix',
          microApp: 'slave',
        },
        {
          path: '/*',
          microApp: 'slave',
        },
      ],
    },
  },
});

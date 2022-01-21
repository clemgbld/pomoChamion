import { Howl } from "howler";

export const play = (src) => {
  const sound = new Howl({
    src: [`${src}`],
    html5: true,
  });

  sound.play();
};

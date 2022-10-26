const constraints = {
  // video: {
  //   width: {
  //     min: 1280,
  //     ideal: 1920,
  //     max: 2560,
  //   },
  //   height: {
  //     min: 720,
  //     ideal: 1080,
  //     max: 1440,
  //   },
  // },
};

const main = async () => {
  const pre = document.querySelector("pre");
  const devices = await navigator.mediaDevices.enumerateDevices();
  pre.innerHTML = JSON.stringify(devices, null, 4);
};

main();

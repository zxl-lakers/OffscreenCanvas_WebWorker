let animationWorker = null;
self.onmessage = function(e) {
    // console.log(e.data);
    switch (e.data.msg) {
    case 'start':
        if (!animationWorker) {
        importScripts(e.data.origin + 'OffscreenCanvas_files/animation.js');
        animationWorker = new Animation(e.data.canvas.getContext('2d'));
        }
        animationWorker.start();
        break;
    case 'stop':
        animationWorker.stop();
        break;
    }
};
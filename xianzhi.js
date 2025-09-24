document.addEventListener("contextmenu", e => e.preventDefault());  
document.addEventListener("keydown", e => {  
    if (e.keyCode === 123) {
      e.preventDefault();  
    }  
  });
  function isFullScreen() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    );
  }
  document.addEventListener("keydown", e => {  
    if (e.keyCode === 123 ||               // F12  
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C  
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I  
        (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U  
      e.preventDefault();  
    }  
  });  
  let lastWidth = window.innerWidth;
  let lastHeight = window.innerHeight;
  
  window.addEventListener("resize", () => {
    const widthDiff = Math.abs(window.innerWidth - lastWidth);
    const heightDiff = Math.abs(window.innerHeight - lastHeight);
  
    // 如果窗口尺寸变化但不是全屏切换，可能是控制台打开
    if ((widthDiff > 50 || heightDiff > 50) && !isFullScreen()) {
      //跳转到空白页面
      window.location.href = "about:blank";
      alert("检测到异常窗口变化，请关闭开发者工具");
    }
    lastWidth = window.innerWidth;
    lastHeight = window.innerHeight;
  });
  
  
  

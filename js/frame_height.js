function adjust_iframe_height(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight ||
                            iframeWin.document.body.scrollHeight;
        }
    }
};

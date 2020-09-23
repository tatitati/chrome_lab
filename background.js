chrome.runtime.onInstalled.addListener(function(){
    console.log("just installed, hellow world")
})

chrome.bookmarks.onCreated.addListener(function(){
    console.log('Bookmarks created')
})
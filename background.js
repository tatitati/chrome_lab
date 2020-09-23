chrome.runtime.onInstalled.addListener(function(){
    console.log("just installed, hellow world")    
})

chrome.bookmarks.onCreated.addListener(function(){
    console.log('Bookmarks created')

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0])
        console.log(tabs[0].url)
        
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: `document.body.style.backgroundColor = 'red'`}
        )
    })
})


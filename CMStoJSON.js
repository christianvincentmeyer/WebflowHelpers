<script>
    (function () {
        var CMSitems = document.getElementsByClassName("CMSItem");
    
        // Create an array to hold all JSON objects
        let jsonItems = [];
    
        for (let i = 0; i < CMSitems.length; i++) {
            const CMSItem = CMSitems[i];
    
            // Select first-level children with data-key attribute
            const childrenWithDataKey = CMSItem.querySelectorAll(':scope > [data-key]');
    
            // Create an object for the current item
            let jsonItem = {};
    
            // Populate the object using the `data-key` attribute and innerHTML
            for (let j = 0; j < childrenWithDataKey.length; j++) {
                const child = childrenWithDataKey[j];
                const key = child.getAttribute('data-key');
                const value = child.innerHTML;
                jsonItem[key] = value;
            }
    
            // Add the current item to the array
            jsonItems.push(jsonItem);
        }
    
        // Convert to formatted JSON string
        const json = JSON.stringify(jsonItems, null, 2);
    
        document.getElementById("slides").innerText = json;
    })();
</script>

<div class="CMSItem">
    <div class="projectString" data-key="projectString">{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}</div>
    <div class="client" data-key="client">{{wf {&quot;path&quot;:&quot;projectclient&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}</div>
    <div class="thumb" data-key="thumb">{{wf {&quot;path&quot;:&quot;projectthumb&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}</div>
    <div class="photo" data-key="photo">{{wf {&quot;path&quot;:&quot;projectphoto&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}</div>
    <div class="title" data-key="title">{{wf {&quot;path&quot;:&quot;projecttitle&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}</div>
    <div class="details" data-key="details">{{wf {&quot;path&quot;:&quot;projectdetails&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}</div>
</div>